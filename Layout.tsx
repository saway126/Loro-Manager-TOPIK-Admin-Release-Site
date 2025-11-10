import React from 'react';
import { LogoIcon, SunIcon, MoonIcon } from './components/Icons';
import { content } from './constants';
import { Language } from './types';

interface PageProps {
    isDarkMode: boolean;
    setDarkMode: () => void;
}

const navigate = (href: string) => {
    // Prevent navigation if href is undefined or null
    if (!href) return;
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

const NavLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, children, className }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!href || href.startsWith('http') || href.startsWith('#')) {
            return;
        }
        e.preventDefault();
        navigate(href);
    };

    return <a href={href} onClick={handleClick} className={className}>{children}</a>;
};


export const LinkButton: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: 'primary' | 'secondary' }> = ({ variant = 'primary', children, ...props }) => {
    const baseClasses = "inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 text-base shadow-soft-lg";
    const variantClasses = {
        primary: 'bg-primary-DEFAULT text-white hover:bg-primary-dark focus:ring-primary-light',
        secondary: 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 focus:ring-slate-400'
    };
    const className = `${baseClasses} ${variantClasses[variant]} ${props.className || ''}`;
    
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (props.href?.startsWith('http') || props.href?.startsWith('#')) {
            return;
        }
        e.preventDefault();
        if (props.href) {
           navigate(props.href);
        }
    };
    
    return <a {...props} onClick={handleClick} className={className}>{children}</a>;
};

export const Header: React.FC<PageProps> = ({ isDarkMode, setDarkMode }) => {
    const c = content[Language.KO];
    const [isLanding, setIsLanding] = React.useState(window.location.pathname === '/');

    React.useEffect(() => {
        const checkPath = () => setIsLanding(window.location.pathname === '/');
        window.addEventListener('popstate', checkPath);
        
        const originalPushState = history.pushState;
        history.pushState = function() {
            originalPushState.apply(this, arguments);
            checkPath();
        };

        return () => {
            window.removeEventListener('popstate', checkPath);
            history.pushState = originalPushState;
        }
    }, []);

    return (
        <header className="sticky top-0 z-40 w-full backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <NavLink href="/" className="flex items-center gap-3">
                        <LogoIcon />
                        <span className="text-xl font-bold text-slate-800 dark:text-white">Loro Manager</span>
                    </NavLink>
                    <div className="flex items-center gap-4">
                        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                            <a href={isLanding ? "#features" : "/#features"} className="hover:text-primary-DEFAULT transition-colors">{c.footer.links.features}</a>
                            <NavLink href="/download" className="hover:text-primary-DEFAULT transition-colors">{c.footer.links.download}</NavLink>
                            <NavLink href="/support/faq" className="hover:text-primary-DEFAULT transition-colors">{c.footer.links.faq}</NavLink>
                            <NavLink href="/support/contact" className="hover:text-primary-DEFAULT transition-colors">{c.footer.links.contact}</NavLink>
                        </nav>
                        <div className="hidden md:block w-px h-6 bg-slate-200 dark:bg-slate-700"></div>
                        <button onClick={setDarkMode} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Toggle dark mode">
                            {isDarkMode ? <SunIcon className="w-6 h-6 text-slate-300" /> : <MoonIcon className="w-6 h-6 text-slate-600" />}
                        </button>
                        <LinkButton href="/dashboard" variant="primary" className="hidden sm:inline-flex px-4 py-2 text-sm">{c.hero.ctaPrimary}</LinkButton>
                    </div>
                </div>
            </div>
        </header>
    );
};

export const Footer: React.FC = () => {
    const c = content[Language.KO].footer;
    return (
        <footer className="bg-slate-100 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center gap-3">
                            <LogoIcon />
                            <span className="text-lg font-semibold text-slate-800 dark:text-white">Loro Manager</span>
                        </div>
                        <p className="mt-2 text-sm text-slate-500">{c.description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 md:col-span-2">
                        <div className="md:justify-self-center">
                            <h3 className="font-semibold text-slate-800 dark:text-white">{c.links.title}</h3>
                            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                <li><NavLink href="/#features" className="hover:text-primary-DEFAULT">{c.links.features}</NavLink></li>
                                <li><NavLink href="/download" className="hover:text-primary-DEFAULT">{c.links.download}</NavLink></li>
                                <li><NavLink href="/support" className="hover:text-primary-DEFAULT">{c.links.support}</NavLink></li>
                                <li><NavLink href="/changelog" className="hover:text-primary-DEFAULT">릴리즈 노트</NavLink></li>
                            </ul>
                        </div>
                        <div className="md:justify-self-center">
                            <h3 className="font-semibold text-slate-800 dark:text-white">{c.legal.title}</h3>
                             <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                <li><NavLink href="/support/policy" className="hover:text-primary-DEFAULT">{c.legal.privacy}</NavLink></li>
                                <li><NavLink href="/support/policy" className="hover:text-primary-DEFAULT">{c.legal.terms}</NavLink></li>
                                <li><NavLink href="/support/contact" className="hover:text-primary-DEFAULT">{c.legal.contact}</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 text-center text-sm text-slate-500">
                     © {new Date().getFullYear()} Loro. {content.ko.footer.copyright}
                </div>
            </div>
        </footer>
    );
};


export const PageLayout: React.FC<PageProps & { children: React.ReactNode }> = ({ isDarkMode, setDarkMode, children }) => {
    return (
        <div className="antialiased">
            <Header isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};