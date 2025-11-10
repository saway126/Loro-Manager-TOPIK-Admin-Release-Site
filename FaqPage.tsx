import React, { useState } from 'react';
import { content } from './constants';
import { Language } from './types';
import { PageLayout } from './Layout';
import { ChevronDownIcon } from './components/Icons';

interface FaqPageProps {
    isDarkMode: boolean;
    setDarkMode: () => void;
}

const FaqItem: React.FC<{ q: string; a: string; }> = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-slate-200 dark:border-slate-700">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-6"
                aria-expanded={isOpen}
            >
                <span className="text-lg font-semibold text-slate-800 dark:text-white">{q}</span>
                <ChevronDownIcon className={`w-6 h-6 text-slate-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="pb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                    {a}
                </div>
            </div>
        </div>
    );
};


export default function FaqPage({ isDarkMode, setDarkMode }: FaqPageProps) {
    const c = content[Language.KO].faqPage;
    return (
        <PageLayout isDarkMode={isDarkMode} setDarkMode={setDarkMode}>
            <div className="bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">{c.title}</h1>
                        <p className="mt-4 text-xl text-slate-600 dark:text-slate-400">{c.subtitle}</p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        {c.items.map((item, index) => (
                            <FaqItem key={index} q={item.q} a={item.a} />
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
