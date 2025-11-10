
export enum Language {
    KO = 'ko',
    EN = 'en',
}

export type FaqCategory = "계정" | "결제" | "앱" | "콘텐츠" | "기타";

export type FaqItem = {
    q: string;
    a: string;
    category: FaqCategory;
};

export interface VersionPlatform {
  minSupportedVersion: string;
  forceUpdate: boolean;
  storeUrl: string;
  releaseNotes: string[];
}

export interface VersionData {
  version: string;
  build: number;
  platforms: {
    android: VersionPlatform;
    ios: VersionPlatform;
  };
  publishedAt: string;
}
