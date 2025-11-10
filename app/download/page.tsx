'use client'
import React, { useState, useEffect } from 'react';
import { StoreBadges } from '../_components/StoreBadges';
// FIX: Import DesktopRelease to use it in the type guard
import type { ReleaseData, AppRelease, DesktopRelease } from '../../types';
import { ArrowDownTrayIcon, WindowsIcon, AppleIcon, LinuxIcon } from '../../components/Icons';

const OsIcon: React.FC<{ os: string }> = ({ os }) => {
    switch (os) {
        case 'windows': return <WindowsIcon className="w-6 h-6 text-blue-500" />;
        case 'macos': return <AppleIcon className="w-6 h-6 text-slate-800 dark:text-white" />;
        case 'linux': return <LinuxIcon className="w-6 h-6" />;
        default: return null;
    }
};

const DesktopReleaseCard: React.FC<{ app: AppRelease }> = ({ app }) => {
    // FIX: Use a type guard in the filter to ensure TypeScript correctly infers the type of `release`.
    const platforms = Object.entries(app.desktop).filter(
        (entry): entry is [string, DesktopRelease] => !!entry[1]
    );
    
    return (
        <div className="bg-white dark:bg-slate-800/50 rounded-xl p-6 sm:p-8 shadow-soft-lg border border-slate-200 dark:border-slate-700/50">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">{app.displayName}</h3>
            <div className="space-y-4">
                {platforms.map(([os, release]) => (
                    <a 
                        key={os}
                        href={release.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                        <div className="flex items-center gap-4">
                            <OsIcon os={os} />
                            <div>
                                <span className="font-semibold text-slate-700 dark:text-slate-200 capitalize">{os}</span>
                                {release.notes && <p className="text-xs text-slate-500 dark:text-slate-400">{release.notes}</p>}
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">v{release.version}</span>
                            <ArrowDownTrayIcon className="w-5 h-5 text-primary-light ml-2 inline-block" />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};


export default function DownloadPage() {
  const [releaseData, setReleaseData] = useState<ReleaseData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReleases = async () => {
        try {
            const res = await fetch('/data/releases.json');
            if (!res.ok) throw new Error('Failed to fetch release data');
            const data: ReleaseData = await res.json();
            setReleaseData(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        }
    };
    fetchReleases();
  }, []);

  const renderContent = () => {
    if (error) {
        return <p className="text-center text-red-500">Error loading release data: {error}</p>;
    }
    if (!releaseData) {
        return <p className="text-center text-slate-500">Loading downloads...</p>;
    }

    const { topik, speaking } = releaseData.apps;

    return (
        <>
            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center sm:text-left">
                모바일 앱
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white dark:bg-slate-800/50 rounded-xl p-6 sm:p-8 shadow-soft-lg border border-slate-200 dark:border-slate-700/50">
                    <h3 className="text-xl font-bold text-center text-slate-800 dark:text-white mb-6">{topik.displayName}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 text-center text-sm min-h-[40px]">
                        언제 어디서든 학습이 가능하도록 최적화된 모바일 환경을 제공합니다.
                    </p>
                    <StoreBadges androidUrl={topik.mobile.android?.storeUrl} iosUrl={topik.mobile.ios?.storeUrl} />
                  </div>
                   <div className="bg-white dark:bg-slate-800/50 rounded-xl p-6 sm:p-8 shadow-soft-lg border border-slate-200 dark:border-slate-700/50">
                    <h3 className="text-xl font-bold text-center text-slate-800 dark:text-white mb-6">{speaking.displayName}</h3>
                     <p className="text-slate-600 dark:text-slate-300 mb-6 text-center text-sm min-h-[40px]">
                        AI 기반 스피킹 훈련으로 TOPIK 말하기 시험을 완벽 대비하세요.
                    </p>
                    <StoreBadges androidUrl={speaking.mobile.android?.storeUrl} iosUrl={speaking.mobile.ios?.storeUrl} />
                  </div>
              </div>
            </section>

            <section className="mt-16">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center sm:text-left">
                데스크톱 앱
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <DesktopReleaseCard app={topik} />
                  <DesktopReleaseCard app={speaking} />
              </div>
            </section>
        </>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          App Download
        </h1>
        <p className="mt-4 text-xl text-slate-600 dark:text-slate-400">
          Loro TOPIK과 Loro Speaking을 지금 바로 만나보세요.
        </p>
      </div>

      <div className="mt-16 max-w-5xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
}