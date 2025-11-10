
'use client';
// FIX: Import React to use React.FormEvent type
import React, { useState } from 'react';
import { contactFormSchema } from './schema';

export default function SupportPage() {
    const [formState, setFormState] = useState<{ status: 'idle' | 'loading' | 'success' | 'error', message: string }>({ status: 'idle', message: '' });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState({ status: 'loading', message: '' });

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        
        const validation = contactFormSchema.safeParse(data);
        if (!validation.success) {
            setFormState({ status: 'error', message: '입력값을 확인해주세요. ' + validation.error.errors.map(e => e.message).join(', ') });
            return;
        }

        try {
            const response = await fetch('/api/support', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(validation.data),
            });
            const result = await response.json();
            if (response.ok) {
                setFormState({ status: 'success', message: result.message || '문의가 성공적으로 전송되었습니다.' });
                (e.target as HTMLFormElement).reset();
            } else {
                setFormState({ status: 'error', message: result.message || '오류가 발생했습니다. 다시 시도해주세요.' });
            }
        } catch (error) {
            setFormState({ status: 'error', message: '네트워크 오류가 발생했습니다.' });
        }
    };

    return (
        <div className="bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">문의하기</h1>
                    <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">제품 사용, 기술 지원, 기타 문의사항이 있으시면 언제든지 연락주세요.</p>
                </div>

                <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-soft-lg border border-slate-200 dark:border-slate-700 p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Form fields */}
                        <input name="name" required placeholder="이름" className="mt-1 block w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-DEFAULT focus:border-primary-DEFAULT sm:text-sm text-slate-800 dark:text-slate-200" />
                        <input type="email" name="email" required placeholder="이메일" className="mt-1 block w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-DEFAULT focus:border-primary-DEFAULT sm:text-sm text-slate-800 dark:text-slate-200" />
                        <input name="title" required placeholder="제목" className="mt-1 block w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-DEFAULT focus:border-primary-DEFAULT sm:text-sm text-slate-800 dark:text-slate-200" />
                        <textarea name="message" required rows={5} placeholder="문의 내용" className="mt-1 block w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-DEFAULT focus:border-primary-DEFAULT sm:text-sm text-slate-800 dark:text-slate-200"></textarea>
                        
                        <div>
                            <button type="submit" disabled={formState.status === 'loading'} className="w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 text-base shadow-soft-lg bg-primary-DEFAULT text-white hover:bg-primary-dark focus:ring-primary-light disabled:bg-slate-400">
                                {formState.status === 'loading' ? '전송 중...' : '문의하기'}
                            </button>
                        </div>
                        {formState.message && (
                            <p className={`text-sm text-center ${formState.status === 'error' ? 'text-red-500' : 'text-green-500'}`}>
                                {formState.message}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}