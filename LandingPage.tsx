import React, { useState, useEffect } from 'react';
import { ExternalLinkIcon } from './components/Icons';
import { content } from './constants';
import { Language, ReleaseData } from './types';
import { PageLayout, LinkButton } from './Layout';

interface LandingPageProps {
    isDarkMode: boolean;
    setDarkMode: () => void;
}

const Hero: React.FC = () => {
    const c = content[Language.KO].hero;
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 hero-bg"></div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    <span>{c.title.line1}</span>
                    <br />
                    <span className="text-primary-DEFAULT">{c.title.line2}</span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
                    {c.subtitle}
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <LinkButton href="/dashboard" variant="primary">
                        {c.ctaPrimary}
                        <ExternalLinkIcon className="w-5 h-5" />
                    </LinkButton>
                    <LinkButton href="/download?tab=mobile" variant="secondary">{c.ctaSecondary}</LinkButton>
                </div>
            </div>
        </section>
    );
};

const Features: React.FC = () => {
    const c = content[Language.KO].features;
    return (
        <section id="features" className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{c.title}</h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{c.subtitle}</p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {c.items.map((item, index) => (
                        <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-soft-lg border border-slate-200 dark:border-slate-700">
                            <div className="text-3xl">{item.icon}</div>
                            <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                            <p className="mt-2 text-base text-slate-600 dark:text-slate-300">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const DownloadSection: React.FC = () => {
    const c = content[Language.KO].download;
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

    return (
        <section id="download" className="py-20 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{c.title}</h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{c.subtitle}</p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {c.apps.map((app) => {
                        const appKey = app.name.toLowerCase().includes('topik') ? 'topik' : 'speaking';
                        const mobileUrls = releaseData?.apps[appKey]?.mobile;
                        
                        return (
                            <div key={app.name} className="bg-white dark:bg-slate-800/50 rounded-xl p-8 shadow-soft-lg border border-slate-200 dark:border-slate-700/50 flex flex-col">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{app.name}</h3>
                                <p className="mt-2 text-slate-600 dark:text-slate-300 flex-grow">{app.description}</p>
                                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                    {mobileUrls?.android && (
                                        <LinkButton href={mobileUrls.android.storeUrl} variant="secondary" className="w-full text-sm !px-4 !py-2" target="_blank" rel="noopener noreferrer">
                                            Google Play
                                        </LinkButton>
                                    )}
                                    {mobileUrls?.ios && (
                                        <LinkButton href={mobileUrls.ios.storeUrl} variant="secondary" className="w-full text-sm !px-4 !py-2" target="_blank" rel="noopener noreferrer">
                                            App Store
                                        </LinkButton>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default function LandingPage({ isDarkMode, setDarkMode }: LandingPageProps) {
    return (
        <PageLayout isDarkMode={isDarkMode} setDarkMode={setDarkMode}>
            <Hero />
            <Features />
            <DownloadSection />
        </PageLayout>
    );
}