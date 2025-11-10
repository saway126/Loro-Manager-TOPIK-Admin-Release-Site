import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import FaqPage from './FaqPage';
import ContactPage from './ContactPage';
import DownloadHubPage from './DownloadHubPage';
import AppDetailPage from './AppDetailPage';
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
        window.addEventListener('popstate', onLocationChange);
        
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
    
    const props = { isDarkMode, setDarkMode: toggleDarkMode };

    if (path.startsWith('/dashboard')) {
        return <Dashboard {...props} />;
    }

    if (path.startsWith('/apps/')) {
        const appName = path.split('/')[2] as 'topik' | 'speaking';
        return <AppDetailPage appName={appName} {...props} />;
    }
    
    if (path === '/download') {
        return <DownloadHubPage {...props} />;
    }

    if (path === '/download/loro-topik') {
        return <LoroTopikDownloadPage {...props} />;
    }

    if (path === '/download/loro-speaking') {
        return <LoroSpeakingDownloadPage {...props} />;
    }

    if (path === '/support/faq') {
        return <FaqPage {...props} />;
    }
    
    if (path === '/support/contact') {
        return <ContactPage {...props} />;
    }

    return <LandingPage {...props} />;
}