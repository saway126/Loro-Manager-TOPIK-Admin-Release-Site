import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';

export default function App() {
    const [isDarkMode, setDarkMode] = useState(false);
    const [path, setPath] = useState(window.location.pathname);

    useEffect(() => {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
            setDarkMode(true);
        }

        const onLocationChange = () => {
            setPath(window.location.pathname);
        };
        window.addEventListener('popstate', onLocationChange);
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

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

    if (path.startsWith('/dashboard')) {
        return <Dashboard isDarkMode={isDarkMode} setDarkMode={toggleDarkMode} />;
    }

    return <LandingPage isDarkMode={isDarkMode} setDarkMode={toggleDarkMode} />;
}
