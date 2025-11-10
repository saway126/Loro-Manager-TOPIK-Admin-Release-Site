import React, { useState, useMemo, useEffect } from 'react';
import { FaqData, FaqCategory } from './types';
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
                <div className="pb-6 text-slate-600 dark:text-slate-300 leading-relaxed prose dark:prose-invert">
                    {a}
                </div>
            </div>
        </div>
    );
};


export default function FaqPage({ isDarkMode, setDarkMode }: FaqPageProps) {
    const [faqData, setFaqData] = useState<FaqData | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const res = await fetch('./data/faq.json');
                if (res.ok) {
                    const data: FaqData = await res.json();
                    setFaqData(data);
                }
            } catch (error) {
                console.error("Failed to fetch FAQ data:", error);
            }
        };
        fetchFaqs();
    }, []);

    const filteredItems = useMemo(() => {
        if (!faqData) return [];
        if (selectedCategory === 'all') {
            return faqData.categories.flatMap(cat => cat.items);
        }
        const category = faqData.categories.find(cat => cat.id === selectedCategory);
        return category ? category.items : [];
    }, [selectedCategory, faqData]);

    if (!faqData) {
        return (
            <PageLayout isDarkMode={isDarkMode} setDarkMode={setDarkMode}>
                <div className="text-center py-24">Loading...</div>
            </PageLayout>
        );
    }

    return (
        <PageLayout isDarkMode={isDarkMode} setDarkMode={setDarkMode}>
            <div className="bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">자주 묻는 질문</h1>
                        <p className="mt-4 text-xl text-slate-600 dark:text-slate-400">Loro 제품군에 대해 궁금한 점을 해결해 보세요.</p>
                    </div>
                    
                    <div className="flex justify-center mb-12 flex-wrap gap-2">
                         <button
                            onClick={() => setSelectedCategory('all')}
                            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${selectedCategory === 'all' ? 'bg-primary-DEFAULT text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
                        >
                            전체
                        </button>
                        {faqData.categories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${selectedCategory === category.id ? 'bg-primary-DEFAULT text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-3xl mx-auto">
                        {filteredItems.map((item, index) => (
                            <FaqItem key={index} q={item.q} a={item.a} />
                        ))}
                         {filteredItems.length === 0 && (
                            <p className="text-center text-slate-500">해당 카테고리에 대한 질문이 없습니다.</p>
                        )}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
