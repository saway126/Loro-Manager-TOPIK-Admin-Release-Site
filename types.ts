export enum Language {
    KO = 'ko',
    EN = 'en',
}

// For faq.json
export type FaqItem = {
    q: string;
    a: string;
};

export type FaqCategory = {
    id: string;
    name: string;
    items: FaqItem[];
};

export type FaqData = {
    categories: FaqCategory[];
};


// For releases.json
export type DesktopRelease = {
    version: string;
    url: string;
    notes?: string;
};

export type MobileRelease = {
    storeUrl: string;
};

export type AppRelease = {
    displayName: string;
    desktop: {
        windows?: DesktopRelease;
        macos?: DesktopRelease;
        linux?: DesktopRelease;
    };
    mobile: {
        android?: MobileRelease;
        ios?: MobileRelease;
    };
};

export type ReleaseData = {
    apps: {
        topik: AppRelease;
        speaking: AppRelease;
    };
};

// FIX: Add missing VersionData type for version.json
export type VersionData = {
    version: string;
    build: number;
    publishedAt: string;
    platforms: {
        android: {
            releaseNotes: string[];
        };
        ios: {
            releaseNotes: string[];
        };
    };
};
