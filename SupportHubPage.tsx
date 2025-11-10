import React from 'react';
import { content } from './constants';
import { Language } from './types';
import { PageLayout, LinkButton } from './Layout';
import { ArrowRightIcon } from './components/Icons';

interface SupportHubPageProps {
    isDarkMode: boolean;
    setDarkMode: () => void;
}

const SupportCard: React.FC<{title: string, description: string, href: string, cta: string}> = ({title, description, href, cta}) => (
    <div className="bg-white dark:bg-slate-800/50 rounded-xl p-8 shadow-soft-lg border border-slate-200 dark:border-slate-700/50 flex flex-col">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-slate-600 dark:text-slate-300 flex-grow">{description}</p>
        <div className="mt-6">
            <LinkButton href={href} variant="secondary" className="w-full sm:w-auto">
                {cta}
                <ArrowRightIcon className="w-4 h-4" />
            </LinkButton>
        </div>
    </div>
);

export default function SupportHubPage({ isDarkMode, setDarkMode }: SupportHubPageProps) {
    const c = content[Language.KO].supportHubPage;

    return (
        <PageLayout isDarkMode={isDarkMode} setDarkMode={setDarkMode}>
            <div className="bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
                     <div className="text-center mb-16">
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">{c.title}</h1>
                        <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">{c.subtitle}</p>
                    </div>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8">
                        <SupportCard 
                            title={c.cards.faq.title}
                            description={c.cards.faq.description}
                            href="/support/faq"
                            cta={c.cards.faq.cta}
                        />
                         <SupportCard 
                            title={c.cards.contact.title}
                            description={c.cards.contact.description}
                            href="/support/contact"
                            cta={c.cards.contact.cta}
                        />
                         <SupportCard 
                            title={c.cards.policy.title}
                            description={c.cards.policy.description}
                            href="/support/policy"
                            cta={c.cards.policy.cta}
                        />
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}