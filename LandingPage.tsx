import React from 'react';
import { LogoIcon, SunIcon, MoonIcon, ExternalLinkIcon } from './components/Icons';
import { content } from './constants';
import { Language } from './types';

interface LandingPageProps {
    isDarkMode: boolean;
    setDarkMode: () => void;
}

const Button: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: 'primary' | 'secondary' }> = ({ variant = 'primary', children, ...props }) => {
    const baseClasses = "inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 text-base shadow-soft-lg";
    const variantClasses = {
        primary: 'bg-primary-DEFAULT text-white hover:bg-primary-dark focus:ring-primary-light',
        secondary: 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 focus:ring-slate-400'
    };
    const className = `${baseClasses} ${variantClasses[variant]} ${props.className || ''}`;
    return <a {...props} className={className}>{children}</a>;
};

const Header: React.FC<LandingPageProps> = ({ isDarkMode, setDarkMode }) => {
    const c = content[Language.KO];
    return (
        <header className="sticky top-0 z-40 w-full backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="/" className="flex items-center gap-3">
                        <LogoIcon />
                        <span className="text-xl font-bold text-slate-800 dark:text-white">Loro Manager</span>
                    </a>
                    <div className="flex items-center gap-4">
                        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                            <a href="#features" className="hover:text-primary-DEFAULT transition-colors">{c.footer.links.features}</a>
                            <a href="#download" className="hover:text-primary-DEFAULT transition-colors">{c.footer.links.download}</a>
                        </nav>
                        <div className="hidden md:block w-px h-6 bg-slate-200 dark:bg-slate-700"></div>
                        <button onClick={setDarkMode} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Toggle dark mode">
                            {isDarkMode ? <SunIcon className="w-6 h-6 text-slate-300" /> : <MoonIcon className="w-6 h-6 text-slate-600" />}
                        </button>
                        <Button href="/dashboard" variant="primary" className="hidden sm:inline-flex px-4 py-2 text-sm">{c.hero.ctaPrimary}</Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

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
                    <Button href="/dashboard" variant="primary">
                        {c.ctaPrimary}
                        <ExternalLinkIcon className="w-5 h-5" />
                    </Button>
                    <Button href="#download" variant="secondary">{c.ctaSecondary}</Button>
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

// ... other sections can be built out similarly ...

export default function LandingPage({ isDarkMode, setDarkMode }: LandingPageProps) {
    return (
        <div className="antialiased">
            <Header isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
            <main>
                <Hero />
                <Features />
                {/* Placeholder for other sections */}
                <section id="download" className="py-20 sm:py-24 text-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{content.ko.download.title}</h2>
                        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{content.ko.download.subtitle}</p>
                        <div className="mt-8">
                             <Button href="#" variant="primary">{content.ko.download.cta}</Button>
                        </div>
                    </div>
                </section>
            </main>
             <footer className="bg-slate-100 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                         <div className="flex items-center gap-3">
                            <LogoIcon />
                            <span className="text-lg font-semibold text-slate-800 dark:text-white">Loro Manager</span>
                        </div>
                        <p className="text-sm text-slate-500 text-center md:text-right">
                           © {new Date().getFullYear()} Loro. {content.ko.footer.copyright}
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
