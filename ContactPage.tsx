import React, { useState } from 'react';
import { content } from './constants';
import { Language } from './types';
import { PageLayout } from './Layout';
import { CheckCircleIcon } from './components/Icons';

interface ContactPageProps {
    isDarkMode: boolean;
    setDarkMode: () => void;
}

export default function ContactPage({ isDarkMode, setDarkMode }: ContactPageProps) {
    const c = content[Language.KO].contactPage;
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        const newErrors = { name: '', email: '', message: '' };
        let isValid = true;
        if (!formData.name) {
            newErrors.name = c.form.name.required;
            isValid = false;
        }
        if (!formData.email) {
            newErrors.email = c.form.email.required;
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = c.form.email.invalid;
            isValid = false;
        }
        if (!formData.message) {
            newErrors.message = c.form.message.required;
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            // Here you would typically send the data to an API
            // For now, we'll just simulate a successful submission
            console.log('Form data submitted:', formData);
            setIsSubmitted(true);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
                        {isSubmitted ? (
                            <div className="text-center py-8">
                                <CheckCircleIcon className="w-16 h-16 text-accent-DEFAULT mx-auto" />
                                <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">{c.success.title}</h2>
                                <p className="mt-2 text-slate-600 dark:text-slate-300">{c.success.message}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">{c.form.name.label}</label>
                                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder={c.form.name.placeholder} className={`mt-1 block w-full bg-white dark:bg-slate-900/50 border rounded-md shadow-sm py-2 px-3 focus:outline-none sm:text-sm text-slate-800 dark:text-slate-200 ${errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-slate-300 dark:border-slate-600 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT'}`} />
                                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">{c.form.email.label}</label>
                                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder={c.form.email.placeholder} className={`mt-1 block w-full bg-white dark:bg-slate-900/50 border rounded-md shadow-sm py-2 px-3 focus:outline-none sm:text-sm text-slate-800 dark:text-slate-200 ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-slate-300 dark:border-slate-600 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT'}`} />
                                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">{c.form.message.label}</label>
                                        <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} placeholder={c.form.message.placeholder} className={`mt-1 block w-full bg-white dark:bg-slate-900/50 border rounded-md shadow-sm py-2 px-3 focus:outline-none sm:text-sm text-slate-800 dark:text-slate-200 ${errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-slate-300 dark:border-slate-600 focus:ring-primary-DEFAULT focus:border-primary-DEFAULT'}`}></textarea>
                                        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 text-base shadow-soft-lg bg-primary-DEFAULT text-white hover:bg-primary-dark focus:ring-primary-light">
                                            {c.form.submit}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
