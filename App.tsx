import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import FaqPage from './FaqPage';
import ContactPage from './ContactPage';
import LoroTopikDownloadPage from './LoroTopikDownloadPage';
import LoroSpeakingDownloadPage from './LoroSpeakingDownloadPage';

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
        // Listen for popstate events
        window.addEventListener('popstate', onLocationChange);
        
        // Also handle custom navigation events for SPAs
        const originalPushState = history.pushState;
        history.pushState = function() {
            originalPushState.apply(this, arguments);
            onLocationChange();
        };

        return () => {
            window.removeEventListener('popstate', onLocationChange);
            history.pushState = originalPushState;
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
    
    if (path === '/faq') {
        return <FaqPage isDarkMode={isDarkMode} setDarkMode={toggleDarkMode} />;
    }
    
    if (path === '/support/contact') {
        return <ContactPage isDarkMode={isDarkMode} setDarkMode={toggleDarkMode} />;
    }
    
    if (path === '/download/loro-topik') {
        return <LoroTopikDownloadPage isDarkMode={isDarkMode} setDarkMode={toggleDarkMode} />;
    }
    
    if (path === '/download/loro-speaking') {
        return <LoroSpeakingDownloadPage isDarkMode={isDarkMode} setDarkMode={toggleDarkMode} />;
    }

    return <LandingPage isDarkMode={isDarkMode} setDarkMode={toggleDarkMode} />;
}
