'use client';

import React, { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import { StoreBadges } from './StoreBadges';
import type { ReleaseData, AppRelease } from '../../types';
import { ArrowRightIcon } from '../../components/Icons';

type ProductKey = 'topik' | 'speaking';

function getDesktopPlatforms(app: AppRelease) {
  return Object.entries(app.desktop).filter(([, v]) => !!v) as [string, NonNullable<AppRelease['desktop']['windows']>][];
}

export const ProductPreview: React.FC = () => {
  const [data, setData] = useState<ReleaseData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [active, setActive] = useState<ProductKey>('topik');

  useEffect(() => {
    let mounted = true;
    fetch('/data/releases.json')
      .then((r) => {
        if (!r.ok) throw new Error('Failed to load releases.json');
        return r.json();
      })
      .then((json: ReleaseData) => {
        if (mounted) setData(json);
      })
      .catch((e) => setError(e instanceof Error ? e.message : 'Unknown error'));
    return () => {
      mounted = false;
    };
  }, []);

  const activeApp: AppRelease | null = useMemo(() => {
    if (!data) return null;
    return data.apps[active];
  }, [data, active]);

  const bullets: Record<ProductKey, string[]> = {
    topik: ['실전형 모의고사 제공', '개인화 학습 리포트', 'TOPIK 일정/정보 한눈에'],
    speaking: ['AI 스피킹 피드백', '발음/유창성 점수', '실전 대비 훈련 모드'],
  };

  if (error) {
    return <div className="text-center text-red-500">프리뷰 로드 오류: {error}</div>;
  }

  return (
    <section id="preview" className="mt-16">
      <div className="flex justify-center mb-6 gap-2">
        <button
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
            active === 'topik'
              ? 'bg-primary-DEFAULT text-white'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
          }`}
          onClick={() => setActive('topik')}
          aria-pressed={active === 'topik'}
        >
          Loro TOPIK
        </button>
        <button
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
            active === 'speaking'
              ? 'bg-primary-DEFAULT text-white'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200'
          }`}
          onClick={() => setActive('speaking')}
          aria-pressed={active === 'speaking'}
        >
          Loro Speaking
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-4 lg:p-6">
          <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-700">
            <Image
              src={active === 'topik' ? '/images/topik-preview.svg' : '/images/speaking-preview.svg'}
              alt={active === 'topik' ? 'Loro TOPIK 프리뷰' : 'Loro Speaking 프리뷰'}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority={false}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              {active === 'topik' ? 'Loro TOPIK' : 'Loro Speaking'}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              {active === 'topik'
                ? '모의고사부터 일정 관리까지, TOPIK 준비를 위한 올인원.'
                : 'AI 코칭으로 발음과 유창성을 즉시 개선하세요.'}
            </p>
          </div>

          <ul className="space-y-2 text-slate-700 dark:text-slate-200">
            {bullets[active].map((line, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-accent-DEFAULT" />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          {activeApp ? (
            <div className="space-y-4">
              <div>
                <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                  모바일
                </div>
                <StoreBadges
                  androidUrl={activeApp.mobile.android?.storeUrl}
                  iosUrl={activeApp.mobile.ios?.storeUrl}
                />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                  데스크톱
                </div>
                <div className="flex flex-wrap gap-3">
                  {getDesktopPlatforms(activeApp).length === 0 && (
                    <span className="text-sm text-slate-500">준비 중</span>
                  )}
                  {getDesktopPlatforms(activeApp).map(([os, release]) => (
                    <a
                      key={os}
                      href={release.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm"
                    >
                      <ArrowRightIcon className="w-4 h-4 text-primary-light" />
                      <span className="capitalize">{os}</span>
                      <span className="text-slate-500">v{release.version}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-slate-500">링크 준비 중...</div>
          )}
        </div>
      </div>
    </section>
  );
};


