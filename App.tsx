import React, { useState, useEffect, createContext, useCallback } from 'react';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import FaqPage from './FaqPage';
import ContactPage from './ContactPage';
import TopikPage from './TopikPage';
import SpeakingPage from './SpeakingPage';

interface RouterContextType {
    path: string;
    navigate: (href: string) => void;
}

// Create a context to provide routing information to child components
export const RouterContext = createContext<RouterContextType>({
    path: window.location.pathname,
    navigate: () => console.warn('Navigate function called outside of Router context'),
});


export default function App() {
    const [isDarkMode, setDarkMode] = useState(false);
    const [path, setPath] = useState(window.location.pathname);

    // Centralized navigation function that only updates internal state
    const navigate = useCallback((href: string) => {
        setPath(href);
    }, []);

    useEffect(() => {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
            setDarkMode(true);
        }
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
    
    const props = { isDarkMode, setDarkMode: toggleDarkMode };

    let page;
    // Simple routing based on internal path state
    if (path === '/dashboard') {
        page = <Dashboard {...props} />;
    } else if (path === '/topik') {
        page = <TopikPage {...props} />;
    } else if (path === '/speaking') {
        page = <SpeakingPage {...props} />;
    } else if (path === '/support/faq') {
        page = <FaqPage {...props} />;
    } else if (path === '/support/contact') {
        page = <ContactPage {...props} />;
    } else {
        page = <LandingPage {...props} />;
    }

    return (
        <RouterContext.Provider value={{ path, navigate }}>
            {page}
        </RouterContext.Provider>
    );
}