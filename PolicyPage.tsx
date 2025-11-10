import React from 'react';
import { content } from './constants';
import { Language } from './types';
import { PageLayout } from './Layout';

interface PolicyPageProps {
    isDarkMode: boolean;
    setDarkMode: () => void;
}

export default function PolicyPage({ isDarkMode, setDarkMode }: PolicyPageProps) {
    const c = content[Language.KO].policyPage;

    return (
        <PageLayout isDarkMode={isDarkMode} setDarkMode={setDarkMode}>
            <div className="bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center border-b border-slate-200 dark:border-slate-700 pb-8 mb-8">
                            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">{c.title}</h1>
                            <p className="mt-4 text-md text-slate-500 dark:text-slate-400">{c.lastUpdated}</p>
                        </div>

                        <div className="space-y-12">
                            <section id="terms">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{c.terms.title}</h2>
                                <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                                    <p>{c.terms.content}</p>
                                </div>
                            </section>
                             <section id="privacy">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{c.privacy.title}</h2>
                                <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                                     <p>{c.privacy.content}</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}