import React, { useState, useEffect } from 'react';
import { PageLayout, LinkButton } from './Layout';
import { ReleaseData, AppRelease } from './types';

interface AppDetailPageProps {
    isDarkMode: boolean;
    setDarkMode: () => void;
    appName: 'topik' | 'speaking';
}

export default function AppDetailPage({ isDarkMode, setDarkMode, appName }: AppDetailPageProps) {
    const [appData, setAppData] = useState<AppRelease | null>(null);

    useEffect(() => {
        const fetchReleases = async () => {
            try {
                const res = await fetch('./data/releases.json');
                if (res.ok) {
                    const data: ReleaseData = await res.json();
                    setAppData(data.apps[appName]);
                }
            } catch (error) {
                console.error("Failed to fetch release data:", error);
            }
        };
        fetchReleases();
    }, [appName]);

    if (!appData) {
        return (
            <PageLayout isDarkMode={isDarkMode} setDarkMode={setDarkMode}>
                <div className="text-center py-24">Loading app details...</div>
            </PageLayout>
        );
    }
    
    return (
        <PageLayout isDarkMode={isDarkMode} setDarkMode={setDarkMode}>
            <div className="bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">{appData.displayName}</h1>
                        <p className="mt-4 text-xl text-slate-600 dark:text-slate-400">
                            {appName === 'topik' 
                                ? "TOPIK 모의고사 콘텐츠 제작 및 관리를 위한 올인원 애플리케이션입니다."
                                : "AI 기반 발음 평가 및 스피킹 훈련 콘텐츠 관리를 위한 전용 애플리케이션입니다."
                            }
                        </p>
                        <div className="mt-10">
                            <LinkButton href={`/download?app=${appName}`} variant="primary">
                                다운로드 페이지로 이동
                            </LinkButton>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}