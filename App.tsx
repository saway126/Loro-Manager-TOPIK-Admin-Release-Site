
import React, { useState, useEffect, useCallback } from 'react';
import { content } from './constants';
import { Language } from './types';
import { LogoIcon, ChevronDownIcon, SunIcon, MoonIcon, ExternalLinkIcon, CheckCircleIcon, LockClosedIcon, AccessibilityIcon, LayersIcon, ClipboardIcon, LinkIcon, ArrowDownTrayIcon } from './components/Icons';

// Helper Components
// ===============================================

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-6 md:px-8 max-w-7xl">
      {children}
    </div>
  </section>
);

// Fix: Update ButtonProps to be a discriminated union to correctly type props for `<a>` and `<button>` elements.
type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
} & (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
);

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ variant = 'primary', children, ...props }, ref) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900";
  const variantClasses = {
    primary: 'bg-primary-DEFAULT text-white hover:bg-primary-dark focus:ring-primary-light disabled:bg-slate-400 dark:disabled:bg-slate-600 disabled:cursor-not-allowed',
    secondary: 'bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-400',
    ghost: 'bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
  };

  const className = `${baseClasses} ${variantClasses[variant]} ${props.className || ''}`;
  
  if (props.href) {
    const { className: _, ...rest } = props;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        // Fix: Cast `rest` to the correct anchor attributes type to resolve TypeScript error.
        // This is a common workaround for a TypeScript limitation with spreading discriminated unions.
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        className={className}
        role="button"
      >
        {children}
      </a>
    );
  }

  const { className: _, ...rest } = props;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      className={className}
    >
      {children}
    </button>
  );
});
Button.displayName = 'Button';

// Main App Sections
// ===============================================

const CopyLinkButton: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }, []);

    return (
        <button
            onClick={handleCopy}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Copy page link"
            title={copied ? 'Link Copied!' : 'Copy Link'}
        >
            {copied ? (
                <CheckCircleIcon className="w-6 h-6 text-accent-DEFAULT" />
            ) : (
                <LinkIcon className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            )}
        </button>
    );
};

const Header: React.FC<{ lang: Language; setLang: (lang: Language) => void; isDarkMode: boolean; setDarkMode: (isDark: boolean) => void; }> = ({ lang, setLang, isDarkMode, setDarkMode }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
      <nav className="container mx-auto px-6 md:px-8 max-w-7xl h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <LogoIcon />
          <span className="text-xl font-bold text-slate-800 dark:text-white">Loro Manager</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-primary-DEFAULT dark:hover:text-primary-light transition-colors">기능</a>
          <a href="#download" className="text-slate-600 dark:text-slate-300 hover:text-primary-DEFAULT dark:hover:text-primary-light transition-colors">다운로드</a>
          <a href="#guide" className="text-slate-600 dark:text-slate-300 hover:text-primary-DEFAULT dark:hover:text-primary-light transition-colors">가이드</a>
          <a href="#faq" className="text-slate-600 dark:text-slate-300 hover:text-primary-DEFAULT dark:hover:text-primary-light transition-colors">FAQ</a>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Language)}
              className="appearance-none bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg py-1.5 pl-4 pr-8 text-sm font-medium text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-DEFAULT dark:focus:border-primary-light transition-colors"
              aria-label="Select language"
            >
              <option value="ko">한국어</option>
              <option value="en">English</option>
            </select>
            <ChevronDownIcon className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
          </div>
          <CopyLinkButton />
          <button onClick={() => setDarkMode(!isDarkMode)} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Toggle dark mode">
            {isDarkMode ? <SunIcon className="w-6 h-6 text-slate-300" /> : <MoonIcon className="w-6 h-6 text-slate-600" />}
          </button>
        </div>
      </nav>
    </header>
  );
};

const Hero: React.FC<{ lang: Language }> = ({ lang }) => (
  <Section id="hero" className="pt-24 md:pt-32 text-center hero-bg">
    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 dark:text-white leading-tight tracking-tighter">
      {content[lang].hero.title.line1}
      <br />
      <span className="text-primary-DEFAULT">{content[lang].hero.title.line2}</span>
    </h1>
    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400">
      {content[lang].hero.subtitle}
    </p>
    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
      <Button variant="primary" href="#download" className="w-full sm:w-auto text-lg py-4 px-8">
        {content[lang].hero.ctaPrimary}
      </Button>
      <Button variant="secondary" href="#guide" className="w-full sm:w-auto text-lg py-4 px-8">
        {content[lang].hero.ctaSecondary}
      </Button>
    </div>
  </Section>
);

const Features: React.FC<{ lang: Language }> = ({ lang }) => (
    <Section id="features">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">{content[lang].features.title}</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">{content[lang].features.subtitle}</p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-6 gap-8">
        {content[lang].features.items.map((feature, index) => {
          const gridSpans = [
            'md:col-span-4', // 1분 내 모의고사 생성
            'md:col-span-2', // 10배 빠른 자막 등록
            'md:col-span-2', // 일관된 UI/UX
            'md:col-span-4', // 통합 콘텐츠 관리
            'md:col-span-3', // 강력한 필터 & 검색
            'md:col-span-3', // 편리한 ID 복사
          ];
          return (
            <div 
              key={index} 
              className={`bg-white dark:bg-slate-800 p-8 rounded-xl shadow-soft-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100 dark:border-slate-700/50 ${gridSpans[index]}`}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-light/10 dark:bg-primary-dark/20 mb-6">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">{feature.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
);
  

const Screenshots: React.FC<{ lang: Language }> = ({ lang }) => (
    <Section id="screenshots" className="bg-slate-50 dark:bg-slate-900/70">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">{content[lang].screenshots.title}</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">{content[lang].screenshots.subtitle}</p>
      </div>
      <div className="mt-12 max-w-6xl mx-auto">
        <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-soft-lg border border-slate-200 dark:border-slate-700 p-2">
          <div className="h-8 bg-slate-100 dark:bg-slate-800 rounded-t-lg flex items-center px-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600"></div>
              <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600"></div>
              <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600"></div>
            </div>
          </div>
          <div className="w-full aspect-video bg-slate-50 dark:bg-slate-800 rounded-b-lg flex items-center justify-center">
            <p className="text-slate-500 font-medium">
              {content[lang].screenshots.placeholder}
            </p>
          </div>
        </div>
      </div>
    </Section>
);

const Download: React.FC<{ lang: Language }> = ({ lang }) => {
    const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'completed'>('idle');
    const [progress, setProgress] = useState(0);

    const startDownload = useCallback(() => {
        if (downloadState !== 'idle') return;

        setDownloadState('downloading');
        setProgress(0);

        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setDownloadState('completed');
                    setTimeout(() => {
                        setDownloadState('idle');
                        setProgress(0);
                    }, 2000);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);
    }, [downloadState]);

    const getButtonContent = useCallback(() => {
        switch (downloadState) {
            case 'downloading':
                return `Downloading... ${progress}%`;
            case 'completed':
                return (
                    <>
                        <CheckCircleIcon className="w-6 h-6 mr-2" /> Download Complete
                    </>
                );
            case 'idle':
            default:
                return (
                    <>
                        <ArrowDownTrayIcon className="w-6 h-6 mr-2" /> {content[lang].download.cta} v1.0.0
                    </>
                );
        }
    }, [downloadState, progress, lang]);

    return (
        <Section id="download">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">{content[lang].download.title}</h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{content[lang].download.subtitle}</p>
                    <Button
                        onClick={startDownload}
                        disabled={downloadState === 'downloading'}
                        className="mt-8 text-lg relative overflow-hidden w-full sm:w-auto min-w-[320px] text-center"
                    >
                        <div
                            className="absolute top-0 left-0 h-full bg-primary-dark/30 dark:bg-primary-light/20 transition-all duration-150 ease-linear"
                            style={{ width: `${progress}%` }}
                        />
                        <span className="relative z-10 flex items-center justify-center w-full">
                            {getButtonContent()}
                        </span>
                    </Button>
                    <p className="mt-2 text-sm text-slate-500">{content[lang].download.releaseNotes}</p>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-soft-lg">
                    <h3 className="font-bold text-slate-700 dark:text-slate-200">{content[lang].download.instructions.title}</h3>
                    <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-400">
                        {content[lang].download.instructions.steps.map((step, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircleIcon className="w-5 h-5 text-accent-DEFAULT mt-1 flex-shrink-0" />
                                <span>{step}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 border-t border-slate-200 dark:border-slate-700 pt-6">
                        <h3 className="font-bold text-slate-700 dark:text-slate-200">{content[lang].download.requirements.title}</h3>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                            {content[lang].download.requirements.browser}
                            <br />
                            {content[lang].download.requirements.resolution}
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};


const Guide: React.FC<{ lang: Language }> = ({ lang }) => (
  <Section id="guide" className="bg-slate-50 dark:bg-slate-900">
    <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">{content[lang].guide.title}</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">{content[lang].guide.subtitle}</p>
    </div>
    <div className="mt-12 max-w-3xl mx-auto">
        <ol className="relative border-l border-slate-300 dark:border-slate-700 space-y-10 ml-4">
            {content[lang].guide.steps.map((step, index) => (
                <li key={index} className="ml-8">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-primary-light rounded-full -left-4 ring-8 ring-white dark:ring-slate-900 text-white font-bold">
                        {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                    <p className="text-base font-normal text-slate-500 dark:text-slate-400">{step.description}</p>
                </li>
            ))}
        </ol>
        <div className="mt-12 text-center">
            <Button href="#" variant="secondary">
              {content[lang].guide.cta} <ExternalLinkIcon className="w-5 h-5" />
            </Button>
        </div>
    </div>
  </Section>
);

const Technical: React.FC<{ lang: Language }> = ({ lang }) => (
  <Section id="technical">
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">{content[lang].technical.title}</h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">{content[lang].technical.subtitle}</p>
    </div>
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-soft-lg border border-slate-100 dark:border-slate-700/50 transition-all duration-300 hover:-translate-y-1">
            <LockClosedIcon className="w-12 h-12 mx-auto text-primary-DEFAULT" />
            <h3 className="mt-4 text-xl font-bold text-slate-800 dark:text-white">{content[lang].technical.security.title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">{content[lang].technical.security.description}</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-soft-lg border border-slate-100 dark:border-slate-700/50 transition-all duration-300 hover:-translate-y-1">
            <AccessibilityIcon className="w-12 h-12 mx-auto text-primary-DEFAULT" />
            <h3 className="mt-4 text-xl font-bold text-slate-800 dark:text-white">{content[lang].technical.accessibility.title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">{content[lang].technical.accessibility.description}</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-soft-lg border border-slate-100 dark:border-slate-700/50 transition-all duration-300 hover:-translate-y-1">
            <LayersIcon className="w-12 h-12 mx-auto text-primary-DEFAULT" />
            <h3 className="mt-4 text-xl font-bold text-slate-800 dark:text-white">{content[lang].technical.architecture.title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">{content[lang].technical.architecture.description}</p>
        </div>
    </div>
  </Section>
);

interface FaqItemProps {
    q: string;
    a: string;
}
const FaqItem: React.FC<FaqItemProps> = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-slate-200 dark:border-slate-700 py-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left"
                aria-expanded={isOpen}
            >
                <h3 className="text-lg font-medium text-slate-800 dark:text-white">{q}</h3>
                <ChevronDownIcon className={`w-6 h-6 text-slate-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>
            <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <p className="pt-4 text-slate-600 dark:text-slate-400">{a}</p>
                </div>
            </div>
        </div>
    );
};

const Faq: React.FC<{ lang: Language }> = ({ lang }) => (
    <Section id="faq" className="bg-slate-50 dark:bg-slate-900">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">{content[lang].faq.title}</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">{content[lang].faq.subtitle}</p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
            {content[lang].faq.items.map((item, index) => (
                <FaqItem key={index} q={item.q} a={item.a} />
            ))}
        </div>
    </Section>
);

const Footer: React.FC<{ lang: Language }> = ({ lang }) => (
    <footer className="bg-slate-800 dark:bg-slate-950 text-slate-400">
        <div className="container mx-auto px-6 md:px-8 max-w-7xl py-12">
            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <div className="flex items-center gap-3">
                        <LogoIcon />
                        <span className="text-xl font-bold text-white">Loro Manager</span>
                    </div>
                    <p className="mt-4 text-sm">{content[lang].footer.description}</p>
                </div>
                <div>
                    <h3 className="font-semibold text-slate-200">{content[lang].footer.links.title}</h3>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li><a href="#features" className="hover:text-white transition-colors">{content[lang].footer.links.features}</a></li>
                        <li><a href="#download" className="hover:text-white transition-colors">{content[lang].footer.links.download}</a></li>
                        <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-slate-200">{content[lang].footer.legal.title}</h3>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition-colors">{content[lang].footer.legal.privacy}</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">{content[lang].footer.legal.terms}</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">{content[lang].footer.legal.contact}</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Loro Manager. {content[lang].footer.copyright}</p>
            </div>
        </div>
    </footer>
);

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }, [text]);

    return (
        <button onClick={handleCopy} className="ml-2 p-1 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" title="Copy ID">
            <ClipboardIcon copied={copied} className="w-4 h-4 text-slate-500" />
        </button>
    );
};


export default function App() {
  // Fix: Use enum member for initialization for type safety.
  const [lang, setLang] = useState<Language>(Language.KO);
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
        setDarkMode(true);
    }

    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <>
      <Header lang={lang} setLang={setLang} isDarkMode={isDarkMode} setDarkMode={toggleDarkMode} />
      <main>
        <Hero lang={lang} />
        <Features lang={lang} />
        <Screenshots lang={lang} />
        <Download lang={lang} />
        <Guide lang={lang} />
        <Technical lang={lang} />
        <Faq lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
