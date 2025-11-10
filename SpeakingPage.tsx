import React, { useState, useEffect } from 'react';
import { content } from './constants';
import { Language, ReleaseData } from './types';
import { PageLayout, LinkButton } from './Layout';

interface DetailPageProps {
    isDarkMode: boolean;
    setDarkMode: () => void;
}

export default function SpeakingPage({ isDarkMode, setDarkMode }: DetailPageProps) {
    const c = content[Language.KO].speakingPage;
    const buttons = content[Language.KO].mainPage.buttons;
    const [releaseData, setReleaseData] = useState<ReleaseData | null>(null);

    useEffect(() => {
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

    const mobileUrls = releaseData?.apps.speaking.mobile;

    return (
        <PageLayout isDarkMode={isDarkMode} setDarkMode={setDarkMode}>
            {/* Hero Section */}
            <section className="relative bg-white dark:bg-slate-900">
                 <div className="absolute inset-0 hero-bg opacity-50"></div>
                 <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                        {c.title}
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
                        {c.subtitle}
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        {mobileUrls?.android && (
                            <LinkButton href={mobileUrls.android.storeUrl} variant="primary" target="_blank" rel="noopener noreferrer">
                                {buttons.googlePlay}
                            </LinkButton>
                        )}
                        {mobileUrls?.ios && (
                            <LinkButton href={mobileUrls.ios.storeUrl} variant="secondary" target="_blank" rel="noopener noreferrer">
                                {buttons.appStore}
                            </LinkButton>
                        )}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{c.features.title}</h2>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {c.features.items.map((item, index) => (
                            <div key={index} className="text-center bg-white dark:bg-slate-800 rounded-xl p-6 shadow-soft-lg border border-slate-200 dark:border-slate-700">
                                <div className="text-4xl mx-auto w-fit mb-4">{item.icon}</div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                                <p className="mt-2 text-base text-slate-600 dark:text-slate-300">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
