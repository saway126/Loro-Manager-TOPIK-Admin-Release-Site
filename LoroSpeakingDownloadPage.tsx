import React from 'react';
import { content } from './constants';
import { Language } from './types';
import { PageLayout, LinkButton } from './Layout';
import { ArrowDownTrayIcon, ClipboardIcon } from './components/Icons';

interface DownloadPageProps {
    isDarkMode: boolean;
    setDarkMode: () => void;
}

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
    const [copied, setCopied] = React.useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };
    return (
        <button onClick={handleCopy} className="p-1.5 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <ClipboardIcon copied={copied} className="w-5 h-5 text-slate-500" />
        </button>
    );
}

export default function LoroSpeakingDownloadPage({ isDarkMode, setDarkMode }: DownloadPageProps) {
    const c = content[Language.KO].downloadPages.loroSpeaking;

    return (
        <PageLayout isDarkMode={isDarkMode} setDarkMode={setDarkMode}>
            <div className="bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center">
                            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">{c.title}</h1>
                            <p className="mt-4 text-xl text-slate-600 dark:text-slate-400">{c.description}</p>
                            <div className="mt-8">
                                <LinkButton href="#" variant="primary">
                                    <ArrowDownTrayIcon className="w-5 h-5 -ml-1" />
                                    {c.cta}
                                </LinkButton>
                            </div>
                        </div>

                        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            <div id="installation">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-4 mb-6">{c.installation.title}</h2>
                                <ol className="list-decimal list-inside space-y-4 text-slate-600 dark:text-slate-300">
                                    {c.installation.steps.map((step, i) => <li key={i}>{step}</li>)}
                                </ol>
                            </div>

                            <div id="version">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-4 mb-6">{c.version.title}</h2>
                                <ul className="space-y-4">
                                    {c.version.history.map((v, i) => (
                                        <li key={i}>
                                            <p className="font-semibold text-slate-800 dark:text-slate-200">{v.version} <span className="text-sm text-slate-500 font-normal">({v.date})</span></p>
                                            <ul className="list-disc list-inside mt-1 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                                {v.notes.map((note, j) => <li key={j}>{note}</li>)}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div id="checksum" className="md:col-span-2">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-4 mb-6">{c.checksum.title}</h2>
                                <div className="flex items-center gap-4 bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
                                    <code className="text-sm text-slate-700 dark:text-slate-300 break-all flex-grow">{c.checksum.value}</code>
                                    <CopyButton text={c.checksum.value} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}