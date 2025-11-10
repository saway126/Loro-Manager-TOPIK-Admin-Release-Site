
import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '../components/Icons';

// Reusable Button component for the landing page
const LinkButton: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: 'primary' | 'secondary' }> = ({ variant = 'primary', children, ...props }) => {
    const baseClasses = "inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 text-base shadow-soft-lg";
    const variantClasses = {
        primary: 'bg-primary-DEFAULT text-white hover:bg-primary-dark focus:ring-primary-light',
        secondary: 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 focus:ring-slate-400'
    };
    const className = `${baseClasses} ${variantClasses[variant]} ${props.className || ''}`;
    
    // Use Next.js Link for internal navigation
    if (props.href && !props.href.startsWith('http')) {
        return <Link {...props} className={className}>{children}</Link>;
    }
    
    // Use regular <a> for external links
    return <a {...props} className={className}>{children}</a>;
};


const Hero = () => (
    <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-bg"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                <span>TOPIK 학습의 모든 것,</span>
                <br />
                <span className="text-primary-DEFAULT">하나의 LORO 안에.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
                모의고사부터 AI 스피킹 훈련까지, LORO는 TOPIK 수험생과 교육자를 위한 가장 완벽한 올인원 솔루션입니다.
            </p>
             <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <LinkButton href="/dashboard" variant="primary">
                    관리 툴 바로가기
                    <ArrowRightIcon className="w-5 h-5" />
                </LinkButton>
                <LinkButton href="/download" variant="secondary">
                    모바일 앱 다운로드
                </LinkButton>
            </div>
        </div>
    </section>
);

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Other sections can be migrated here as needed */}
    </>
  );
}