import React, { useState, useEffect } from 'react';
import { content } from './constants';
import { Language, VersionData } from './types';
import { PageLayout, LinkButton } from './Layout';
import { CheckCircleIcon } from './components/Icons';

interface DownloadPageProps {
    isDarkMode: boolean;
    setDarkMode: () => void;
}

const getUA = () => {
  if (typeof navigator === "undefined") return { ios: false, android: false, mobile: false };
  const ua = navigator.userAgent.toLowerCase();
  const isMobile = /iphone|ipad|ipod|android/.test(ua);
  return {
    ios: /iphone|ipad|ipod/.test(ua),
    android: /android/.test(ua),
    mobile: isMobile,
  };
};

const VersionInfo: React.FC = () => {
    const c = content[Language.KO].mobileDownloadPage.versionInfo;
    const [versionData, setVersionData] = useState<VersionData | null>(null);

    useEffect(() => {
        const fetchVersion = async () => {
            try {
                // In a real app, you would fetch from a path like '/meta/version.json'
                // For this environment, we fetch from the root.
                const res = await fetch('./version.json', { cache: "no-store" });
                if (res.ok) {
                    const data = await res.json();
                    setVersionData(data);
                }
            } catch (error) {
                console.error("Failed to fetch version info:", error);
            }
        };
        fetchVersion();
    }, []);

    if (!versionData) return <p className="text-sm text-slate-500">{c.loading}</p>;
    
    return (
        <div className="text-left bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700/50">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{c.title}</h3>
            <p className="text-sm text-slate-500 mt-1">
                {c.version}: <b>{versionData.version}</b> (build {versionData.build})
            </p>
            <p className="text-xs text-slate-400 mt-1">{c.publishedAt}: {new Date(versionData.publishedAt).toLocaleString()}</p>
            
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 space-y-3">
                <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200">Android</h4>
                    <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 mt-1">
                        {versionData.platforms.android.releaseNotes.map((note, i) => <li key={i}>{note}</li>)}
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200">iOS</h4>
                    <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 mt-1">
                        {versionData.platforms.ios.releaseNotes.map((note, i) => <li key={i}>{note}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default function MobileDownloadPage({ isDarkMode, setDarkMode }: DownloadPageProps) {
    const c = content[Language.KO].mobileDownloadPage;
    const [ua, setUa] = useState({ ios: false, android: false, mobile: false });

    useEffect(() => {
        setUa(getUA());
    }, []);

    const primaryPlatform = ua.ios ? "ios" : ua.android ? "android" : "none";

    return (
        <PageLayout isDarkMode={isDarkMode} setDarkMode={setDarkMode}>
            <div className="bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">{c.title}</h1>
                        <p className="mt-4 text-xl text-slate-600 dark:text-slate-400">{c.subtitle}</p>

                        {ua.mobile && (
                             <div className="mt-8">
                                <LinkButton href="#" variant="primary">
                                    {c.openApp} ({ua.ios ? 'iOS' : 'Android'})
                                </LinkButton>
                            </div>
                        )}

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="flex flex-col items-center gap-4">
                                <a href="#" className={`p-3 border-2 rounded-xl transition-colors ${primaryPlatform === 'android' ? 'border-primary-DEFAULT' : 'border-transparent'}`}>
                                    <div className="w-48 h-14 bg-slate-200 dark:bg-slate-700 rounded-md flex items-center justify-center text-sm text-slate-500">Google Play Badge</div>
                                </a>
                                <a href="#" className={`p-3 border-2 rounded-xl transition-colors ${primaryPlatform === 'ios' ? 'border-primary-DEFAULT' : 'border-transparent'}`}>
                                     <div className="w-48 h-14 bg-slate-200 dark:bg-slate-700 rounded-md flex items-center justify-center text-sm text-slate-500">App Store Badge</div>
                                </a>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                    <div className="w-32 h-32 bg-slate-200 dark:bg-slate-700 rounded-lg mx-auto flex items-center justify-center text-xs text-slate-500">Android QR</div>
                                    <p className="mt-2 text-sm font-semibold text-slate-700 dark:text-slate-200">{c.android}</p>
                                </div>
                                <div className="text-center">
                                     <div className="w-32 h-32 bg-slate-200 dark:bg-slate-700 rounded-lg mx-auto flex items-center justify-center text-xs text-slate-500">iOS QR</div>
                                    <p className="mt-2 text-sm font-semibold text-slate-700 dark:text-slate-200">{c.ios}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-20">
                           <VersionInfo />
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}