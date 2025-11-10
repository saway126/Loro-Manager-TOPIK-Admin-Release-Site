import React, { useState } from 'react';
import { LogoIcon, SunIcon, MoonIcon, HomeIcon, DocumentTextIcon, PlusIcon, XMarkIcon, ChevronDownIcon } from './components/Icons';

// Types
type MockTest = {
  id: number;
  title: string;
  questionCount: number;
  createdAt: string;
};

// Mock Data
const initialMockTests: MockTest[] = [
    { id: 1, title: '제 95회 TOPIK II 실전 모의고사', questionCount: 50, createdAt: '2024-05-20' },
    { id: 2, title: '제 96회 TOPIK II 실전 모의고사', questionCount: 50, createdAt: '2024-06-15' },
    { id: 3, title: '읽기 영역 집중 대비 모의고사', questionCount: 25, createdAt: '2024-07-01' },
    { id: 4, title: '듣기 영역 Part 1-5 기출문제', questionCount: 20, createdAt: '2024-07-05' },
];

// Reusable Button component (adapted from original)
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' }> = ({ variant = 'primary', children, ...props }) => {
    const baseClasses = "inline-flex items-center justify-center gap-2 px-4 py-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 text-sm";
    const variantClasses = {
        primary: 'bg-primary-DEFAULT text-white hover:bg-primary-dark focus:ring-primary-light disabled:bg-slate-400 dark:disabled:bg-slate-600 disabled:cursor-not-allowed',
        secondary: 'bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-400',
        ghost: 'bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800',
    };
    const className = `${baseClasses} ${variantClasses[variant]} ${props.className || ''}`;
    return <button {...props} className={className}>{children}</button>;
};

// Components
const Sidebar: React.FC = () => {
    const navItems = [
        { name: 'Dashboard', icon: HomeIcon, href: '#', current: false },
        { name: 'Mock Tests', icon: DocumentTextIcon, href: '#', current: true },
        { name: 'Questions', icon: null, href: '#', current: false },
        { name: 'Grammar', icon: null, href: '#', current: false },
        { name: 'Vocabulary', icon: null, href: '#', current: false },
    ];
    return (
        <aside className="w-64 flex-shrink-0 bg-white dark:bg-slate-800/50 border-r border-slate-200 dark:border-slate-700/50 flex-col hidden md:flex">
            <div className="h-20 flex items-center px-6 border-b border-slate-200 dark:border-slate-700/50">
                <LogoIcon />
                <span className="ml-3 text-xl font-bold text-slate-800 dark:text-white">Loro Manager</span>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-2">
                {navItems.map(item => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${item.current
                                ? 'bg-primary-light/10 text-primary-DEFAULT dark:bg-primary-dark/20'
                                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                            }`}
                    >
                        {item.icon && <item.icon className="w-5 h-5" />}
                        <span>{item.name}</span>
                    </a>
                ))}
            </nav>
        </aside>
    );
};

const Header: React.FC<{ isDarkMode: boolean; setDarkMode: () => void; }> = ({ isDarkMode, setDarkMode }) => (
    <header className="h-20 flex-shrink-0 flex items-center justify-between px-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Mock Tests</h1>
        <div className="flex items-center gap-4">
            <button onClick={setDarkMode} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Toggle dark mode">
                {isDarkMode ? <SunIcon className="w-6 h-6 text-slate-300" /> : <MoonIcon className="w-6 h-6 text-slate-600" />}
            </button>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300">
                    A
                </div>
                <div>
                    <div className="font-semibold text-sm text-slate-800 dark:text-white">Admin User</div>
                    <div className="text-xs text-slate-500">Administrator</div>
                </div>
                <ChevronDownIcon className="w-4 h-4 text-slate-500" />
            </div>
        </div>
    </header>
);

const CreateTestModal: React.FC<{ isOpen: boolean; onClose: () => void; onAddTest: (title: string) => void; }> = ({ isOpen, onClose, onAddTest }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            onAddTest(title.trim());
            setTitle('');
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative bg-white dark:bg-slate-800 rounded-xl shadow-xl w-full max-w-md m-4 p-6">
                <div className="flex items-start justify-between">
                    <h2 id="modal-title" className="text-xl font-bold text-slate-800 dark:text-white">Create New Mock Test</h2>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 -mt-1 -mr-1">
                        <XMarkIcon className="w-6 h-6 text-slate-500" />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="mt-6">
                    <div>
                        <label htmlFor="test-title" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Test Title</label>
                        <input
                            type="text"
                            id="test-title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 block w-full bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-DEFAULT focus:border-primary-DEFAULT sm:text-sm text-slate-800 dark:text-slate-200"
                            placeholder="e.g., 제 97회 TOPIK II 실전 모의고사"
                            autoFocus
                        />
                    </div>
                    <div className="mt-6 flex justify-end gap-3">
                        <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
                        <Button type="submit" variant="primary" disabled={!title.trim()}>Create Test</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const MockTestsList: React.FC = () => {
    const [tests, setTests] = useState<MockTest[]>(initialMockTests);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleAddTest = (title: string) => {
        const newTest: MockTest = {
            id: tests.length + 1,
            title,
            questionCount: 0,
            createdAt: new Date().toISOString().split('T')[0],
        };
        setTests(prev => [newTest, ...prev]);
    };

    return (
        <>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Mock Tests</h1>
                    <p className="mt-1 text-slate-500 dark:text-slate-400">Manage and create new mock tests for TOPIK.</p>
                </div>
                <Button variant="primary" onClick={() => setModalOpen(true)}>
                    <PlusIcon className="w-5 h-5 -ml-1" />
                    Create New Test
                </Button>
            </div>

            <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-soft-lg border border-slate-200 dark:border-slate-700/50 overflow-hidden">
                <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                    <thead className="bg-slate-50 dark:bg-slate-800">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Title</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Questions</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Created At</th>
                            <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-slate-800/50 divide-y divide-slate-200 dark:divide-slate-700">
                        {tests.map(test => (
                            <tr key={test.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-white">{test.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">{test.questionCount}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">{test.createdAt}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <a href="#" className="text-primary-DEFAULT hover:text-primary-dark dark:hover:text-primary-light">Edit</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <CreateTestModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onAddTest={handleAddTest} />
        </>
    );
}

interface DashboardProps {
    isDarkMode: boolean;
    setDarkMode: () => void;
}

export default function Dashboard({ isDarkMode, setDarkMode }: DashboardProps) {
    return (
        <div className="flex h-screen bg-slate-100 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-200">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                    <div className="container mx-auto px-6 md:px-8 py-8">
                        <MockTestsList />
                    </div>
                </main>
            </div>
        </div>
    );
}
