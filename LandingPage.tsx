import React, { useState, useEffect } from 'react';
import { content } from './constants';
import { Language, ReleaseData } from './types';
import { PageLayout, LinkButton } from './Layout';
import { ArrowRightIcon } from './components/Icons';

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
            </div>
        </section>
    );
};

const AppShowcase: React.FC = () => {
    const c = content[Language.KO].mainPage;
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

    const apps = [
        { key: 'topik', data: c.apps.topik, detailUrl: '/topik' },
        { key: 'speaking', data: c.apps.speaking, detailUrl: '/speaking' }
    ] as const;

    return (
        <section id="apps" className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{c.title}</h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{c.subtitle}</p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {apps.map((app) => {
                        const mobileUrls = releaseData?.apps[app.key]?.mobile;
                        return (
                            <div key={app.key} className="bg-white dark:bg-slate-800/50 rounded-xl p-8 shadow-soft-lg border border-slate-200 dark:border-slate-700/50 flex flex-col text-center">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{app.data.name}</h3>
                                <p className="mt-2 text-slate-600 dark:text-slate-300 flex-grow">{app.data.description}</p>
                                <div className="mt-8 flex flex-col gap-3">
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        {mobileUrls?.android && (
                                            <LinkButton href={mobileUrls.android.storeUrl} variant="secondary" className="w-full" target="_blank" rel="noopener noreferrer">
                                                {c.buttons.googlePlay}
                                            </LinkButton>
                                        )}
                                        {mobileUrls?.ios && (
                                            <LinkButton href={mobileUrls.ios.storeUrl} variant="secondary" className="w-full" target="_blank" rel="noopener noreferrer">
                                                {c.buttons.appStore}
                                            </LinkButton>
                                        )}
                                    </div>
                                    <LinkButton href={app.detailUrl} variant="primary">
                                        {app.data.cta}
                                        <ArrowRightIcon className="w-5 h-5" />
                                    </LinkButton>
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
            <AppShowcase />
        </PageLayout>
    );
}
