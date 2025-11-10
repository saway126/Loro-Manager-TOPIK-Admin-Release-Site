import React from 'react';
import { content } from './constants';
import { Language } from './types';
import { PageLayout } from './Layout';

interface ContactPageProps {
    isDarkMode: boolean;
    setDarkMode: () => void;
}

const SUPPORT_EMAIL = "support@loro.example";

export default function ContactPage({ isDarkMode, setDarkMode }: ContactPageProps) {
    const c = content[Language.KO].contactPage;
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const title = formData.get('title') as string;
        const message = formData.get('message') as string;

        const mailtoBody = `
        Name: ${name}
        Email: ${email}
        --------------------
        ${message}
        `;
        
        window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(mailtoBody)}`;
    };

    return (
        <PageLayout isDarkMode={isDarkMode} setDarkMode={setDarkMode}>
            <div className="bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">{c.title}</h1>
                        <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">{c.subtitle}</p>
                    </div>

                    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-soft-lg border border-slate-200 dark:border-slate-700 p-8">
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">{c.form.name.label}</label>
                                        <input type="text" name="name" id="name" required placeholder={c.form.name.placeholder} className="mt-1 block w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-DEFAULT focus:border-primary-DEFAULT sm:text-sm text-slate-800 dark:text-slate-200" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">{c.form.email.label}</label>
                                        <input type="email" name="email" id="email" required placeholder={c.form.email.placeholder} className="mt-1 block w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-DEFAULT focus:border-primary-DEFAULT sm:text-sm text-slate-800 dark:text-slate-200" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="title" className="block text-sm font-medium text-slate-700 dark:text-slate-300">{c.form.title.label}</label>
                                    <input type="text" name="title" id="title" required placeholder={c.form.title.placeholder} className="mt-1 block w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-DEFAULT focus:border-primary-DEFAULT sm:text-sm text-slate-800 dark:text-slate-200" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">{c.form.message.label}</label>
                                    <textarea name="message" id="message" rows={5} required placeholder={c.form.message.placeholder} className="mt-1 block w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-DEFAULT focus:border-primary-DEFAULT sm:text-sm text-slate-800 dark:text-slate-200"></textarea>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="consent" name="consent" type="checkbox" required className="focus:ring-primary-DEFAULT h-4 w-4 text-primary-DEFAULT border-slate-300 rounded" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="consent" className="text-slate-600 dark:text-slate-300">{c.form.consent}</label>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 text-base shadow-soft-lg bg-primary-DEFAULT text-white hover:bg-primary-dark focus:ring-primary-light">
                                        {c.form.submit}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
