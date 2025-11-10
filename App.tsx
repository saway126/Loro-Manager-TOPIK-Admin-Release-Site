import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import FaqPage from './FaqPage';
import ContactPage from './ContactPage';
import LoroTopikDownloadPage from './LoroTopikDownloadPage';
import LoroSpeakingDownloadPage from './LoroSpeakingDownloadPage';
import MobileDownloadPage from './MobileDownloadPage';
import SupportHubPage from './SupportHubPage';
import PolicyPage from './PolicyPage';
import ChangelogPage from './ChangelogPage';

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
    
    const props = { isDarkMode, setDarkMode: toggleDarkMode };

    if (path.startsWith('/dashboard')) {
        return <Dashboard {...props} />;
    }
    
    if (path === '/download') {
        return <MobileDownloadPage {...props} />;
    }

    if (path === '/support') {
        return <SupportHubPage {...props} />;
    }

    if (path === '/support/faq') {
        return <FaqPage {...props} />;
    }
    
    if (path === '/support/contact') {
        return <ContactPage {...props} />;
    }
    
    if (path === '/support/policy') {
        return <PolicyPage {...props} />;
    }

    if (path === '/changelog') {
        return <ChangelogPage {...props} />;
    }
    
    if (path === '/download/loro-topik') {
        return <LoroTopikDownloadPage {...props} />;
    }
    
    if (path === '/download/loro-speaking') {
        return <LoroSpeakingDownloadPage {...props} />;
    }

    return <LandingPage {...props} />;
}