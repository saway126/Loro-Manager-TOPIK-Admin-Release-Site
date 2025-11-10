
'use client';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { LogoIcon, SunIcon, MoonIcon } from '../../components/Icons';

export const Header = () => {
    const { theme, setTheme } = useTheme();

    return (
        <header className="sticky top-0 z-40 w-full backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center gap-3">
                        <LogoIcon />
                        <span className="text-xl font-bold text-slate-800 dark:text-white">LORO</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                            <Link href="/download" className="hover:text-primary-DEFAULT transition-colors">다운로드</Link>
                            <Link href="/faq" className="hover:text-primary-DEFAULT transition-colors">FAQ</Link>
                            <Link href="/support" className="hover:text-primary-DEFAULT transition-colors">문의하기</Link>
                        </nav>
                        <div className="hidden md:block w-px h-6 bg-slate-200 dark:bg-slate-700"></div>
                        <button 
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800" 
                            aria-label="Toggle dark mode"
                        >
                            {theme === 'dark' ? <SunIcon className="w-6 h-6 text-slate-300" /> : <MoonIcon className="w-6 h-6 text-slate-600" />}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};