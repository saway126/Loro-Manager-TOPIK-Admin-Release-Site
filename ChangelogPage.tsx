import React, { useState, useEffect } from 'react';
import { content } from './constants';
import { Language, VersionData } from './types';
import { PageLayout } from './Layout';

interface ChangelogPageProps {
    isDarkMode: boolean;
    setDarkMode: () => void;
}

export default function ChangelogPage({ isDarkMode, setDarkMode }: ChangelogPageProps) {
    const c = content[Language.KO].changelogPage;
    const v = content[Language.KO].mobileDownloadPage.versionInfo;
    const [versionData, setVersionData] = useState<VersionData | null>(null);

     useEffect(() => {
        const fetchVersion = async () => {
            try {
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

    return (
        <PageLayout isDarkMode={isDarkMode} setDarkMode={setDarkMode}>
            <div className="bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
                     <div className="text-center mb-12">
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">{c.title}</h1>
                        <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">{c.subtitle}</p>
                    </div>
                    
                    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-soft-lg border border-slate-200 dark:border-slate-700 p-8">
                        {!versionData ? (
                            <p>{v.loading}</p>
                        ) : (
                            <div>
                                <div className="border-b border-slate-200 dark:border-slate-700 pb-4 mb-4">
                                    <h2 className="text-2xl font-bold text-primary-DEFAULT">v{versionData.version}</h2>
                                    <p className="text-sm text-slate-500 mt-1">{v.publishedAt}: {new Date(versionData.publishedAt).toLocaleDateString()}</p>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">Android</h3>
                                        <ul className="mt-2 list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                                            {versionData.platforms.android.releaseNotes.map((note, i) => <li key={`android-${i}`}>{note}</li>)}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">iOS</h3>
                                        <ul className="mt-2 list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                                            {versionData.platforms.ios.releaseNotes.map((note, i) => <li key={`ios-${i}`}>{note}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}