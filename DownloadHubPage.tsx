import React, { useState, useEffect } from 'react';
import { PageLayout, LinkButton } from './Layout';
import { ReleaseData } from './types';

interface DownloadHubPageProps {
    isDarkMode: boolean;
    setDarkMode: () => void;
}

type AppKey = 'topik' | 'speaking';
type TabKey = 'desktop' | 'mobile';
type OsKey = 'windows' | 'macos' | 'linux';

const TabButton: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${active ? 'bg-primary-DEFAULT text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
    >
        {children}
    </button>
);

export default function DownloadHubPage({ isDarkMode, setDarkMode }: DownloadHubPageProps) {
    const [releaseData, setReleaseData] = useState<ReleaseData | null>(null);
    const [appKey, setAppKey] = useState<AppKey>('topik');
    const [activeTab, setActiveTab] = useState<TabKey>('desktop');
    const [activeOs, setActiveOs] = useState<OsKey>('windows');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const app = params.get('app') as AppKey | null;
        const tab = params.get('tab') as TabKey | null;
        const os = params.get('os') as OsKey | null;
        if (app && (app === 'topik' || app === 'speaking')) setAppKey(app);
        if (tab && (tab === 'desktop' || tab === 'mobile')) setActiveTab(tab);
        if (os && (os === 'windows' || os === 'macos' || os === 'linux')) setActiveOs(os);
        
        const fetchReleases = async () => {
            try {
                const res = await fetch('./data/releases.json');
                if (res.ok) {
                    const data: ReleaseData = await res.json();
                    setReleaseData(data);
                }
            } catch (error) {
                console.error("Failed to fetch release data:", error);
            }
        };
        fetchReleases();
    }, []);

    const currentApp = releaseData?.apps[appKey];
    const desktopRelease = currentApp?.desktop[activeOs];

    return (
        <PageLayout isDarkMode={isDarkMode} setDarkMode={setDarkMode}>
            <div className="bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">앱 다운로드</h1>
                        <p className="mt-4 text-xl text-slate-600 dark:text-slate-400">
                            {currentApp ? currentApp.displayName : 'Loro 애플리케이션'}을 다운로드하세요.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto mt-12">
                        {/* App Selector */}
                        <div className="flex justify-center gap-4 mb-8">
                            <TabButton active={appKey === 'topik'} onClick={() => setAppKey('topik')}>Loro TOPIK</TabButton>
                            <TabButton active={appKey === 'speaking'} onClick={() => setAppKey('speaking')}>Loro Speaking</TabButton>
                        </div>
                        
                        {/* Platform Tabs */}
                        <div className="flex justify-center gap-4 mb-8 p-2 bg-slate-100 dark:bg-slate-800 rounded-full">
                            <TabButton active={activeTab === 'desktop'} onClick={() => setActiveTab('desktop')}>데스크톱</TabButton>
                            <TabButton active={activeTab === 'mobile'} onClick={() => setActiveTab('mobile')}>모바일</TabButton>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-xl border border-slate-200 dark:border-slate-700/50 min-h-[200px]">
                            {activeTab === 'desktop' && (
                                <div>
                                    <div className="flex justify-center gap-2 mb-6">
                                        <TabButton active={activeOs === 'windows'} onClick={() => setActiveOs('windows')}>Windows</TabButton>
                                        <TabButton active={activeOs === 'macos'} onClick={() => setActiveOs('macos')}>macOS</TabButton>
                                        <TabButton active={activeOs === 'linux'} onClick={() => setActiveOs('linux')}>Linux</TabButton>
                                    </div>
                                    <div className="text-center">
                                        {desktopRelease ? (
                                            <>
                                                <p className="font-semibold text-slate-800 dark:text-slate-200">버전: {desktopRelease.version}</p>
                                                {desktopRelease.notes && <p className="text-sm text-slate-500 mt-1">릴리즈 노트: {desktopRelease.notes}</p>}
                                                <LinkButton href={desktopRelease.url} variant="primary" className="mt-6">
                                                    {activeOs.charAt(0).toUpperCase() + activeOs.slice(1)} 버전 다운로드
                                                </LinkButton>
                                            </>
                                        ) : (
                                            <p className="text-slate-500">선택한 OS의 다운로드 정보를 찾을 수 없습니다.</p>
                                        )}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'mobile' && (
                                <div className="text-center">
                                     <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">스토어에서 다운로드</h2>
                                     <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                                        {currentApp?.mobile.android && (
                                            <LinkButton href={currentApp.mobile.android.storeUrl} variant="secondary" target="_blank">Google Play</LinkButton>
                                        )}
                                        {currentApp?.mobile.ios && (
                                            <LinkButton href={currentApp.mobile.ios.storeUrl} variant="secondary" target="_blank">App Store</LinkButton>
                                        )}
                                     </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}