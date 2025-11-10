import { Language } from './types';

// FIX: Add missing page content definitions to Content type
type Content = {
  [key in Language]: {
    hero: {
      title: { line1: string; line2: string; };
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    features: {
      title: string;
      subtitle: string;
      items: { icon: string; title: string; description: string; }[];
    };
    download: {
      title: string;
      subtitle: string;
      apps: {
        name: string;
        description: string;
      }[];
    };
    footer: {
        description: string;
        links: {
            title: string;
            features: string;
            download: string;
            faq: string;
            contact: string;
            support: string;
        };
        copyright: string;
    };
    contactPage: {
        title: string;
        subtitle: string;
        form: {
            name: { label: string; placeholder: string; };
            email: { label: string; placeholder: string; };
            title: { label: string; placeholder: string; };
            message: { label: string; placeholder: string; };
            consent: string;
            submit: string;
        };
        success: {
            title: string;
            message: string;
        };
    };
    downloadPages: {
      [key: string]: {
        title: string;
        description: string;
        cta: string;
        installation: {
          title: string;
          steps: string[];
        };
        version: {
          title: string;
          history: {
            version: string;
            date: string;
            notes: string[];
          }[];
        };
        checksum: {
          title: string;
          value: string;
        };
      };
    };
    mobileDownloadPage: {
        title: string;
        subtitle: string;
        openApp: string;
        android: string;
        ios: string;
        versionInfo: {
            loading: string;
            title: string;
            version: string;
            publishedAt: string;
        };
    };
    supportHubPage: {
        title: string;
        subtitle: string;
        cards: {
            [key: string]: {
                title: string;
                description: string;
                cta: string;
            };
        };
    };
    policyPage: {
        title: string;
        lastUpdated: string;
        terms: {
            title: string;
            content: string;
        };
        privacy: {
            title: string;
            content: string;
        };
    };
    changelogPage: {
        title: string;
        subtitle: string;
    };
  };
};

export const content: Content = {
  ko: {
    hero: {
      title: { line1: "TOPIK 콘텐츠 관리,", line2: "압도적인 속도를 경험하세요." },
      subtitle: "Loro Manager는 모의고사 제작부터 문제, 문법, 단어, 해설, 에셋 관리까지 모든 것을 하나로 통합한 내부 운영 솔루션입니다.",
      ctaPrimary: "관리 콘솔 바로가기",
      ctaSecondary: "앱 다운로드",
    },
    features: {
        title: "강력하고 직관적인 기능",
        subtitle: "반복적인 작업을 자동화하고, 팀의 생산성을 극대화하는 데 필요한 모든 도구를 제공합니다.",
        items: [
            { icon: "⚡️", title: "1분 내 모의고사 생성", description: "모의고사 생성부터 문제 구성까지 단 1분. 복잡한 과정을 최소화하고 핵심에 집중하세요." },
            { icon: "✍️", title: "10배 빠른 자막 등록", description: "대량 자막 등록 기능으로 해설 영상의 자막 입력 속도를 획기적으로 개선합니다." },
            { icon: "🎨", title: "일관된 UI/UX", description: "공통 컴포넌트와 통일된 디자인으로 신규 팀원도 별도 교육 없이 빠르게 적응할 수 있습니다." },
            { icon: "📦", title: "통합 콘텐츠 관리", description: "질문, 문법, 단어, 해설, 미디어 에셋을 한 곳에서 체계적으로 관리하고 검색하세요." },
            { icon: "🔍", title: "강력한 필터 & 검색", description: "원하는 데이터를 즉시 찾을 수 있는 고급 필터링 및 클라이언트 사이드 검색 기능을 제공합니다." },
            { icon: "📋", title: "편리한 ID 복사", description: "클릭 한 번으로 필요한 ID를 복사하여 다른 시스템과의 연동 작업을 간소화합니다." },
        ]
    },
    download: {
        title: "모바일 애플리케이션",
        subtitle: "언제 어디서든 Loro와 함께 TOPIK 학습을 경험해보세요.",
        apps: [
          {
            name: "Loro TOPIK",
            description: "TOPIK 모의고사 학습과 시험 대비를 위한 올인원 모바일 애플리케이션입니다.",
          },
          {
            name: "Loro Speaking",
            description: "AI 기반 발음 평가 및 스피킹 훈련을 위한 전용 모바일 애플리케이션입니다.",
          }
        ]
    },
    footer: {
        description: "TOPIK 콘텐츠 관리를 위한 올인원 솔루션",
        links: {
            title: "바로가기",
            features: "기능",
            download: "다운로드",
            faq: "FAQ",
            contact: "문의하기",
            support: "고객센터"
        },
        copyright: "All rights reserved.",
    },
    contactPage: {
        title: "문의하기",
        subtitle: "제품 사용, 기술 지원, 기타 문의사항이 있으시면 언제든지 연락주세요. 문의 전 FAQ를 확인하시면 더 빠르게 답변을 얻으실 수 있습니다.",
        form: {
            name: { label: "이름", placeholder: "이름을 입력하세요" },
            email: { label: "이메일", placeholder: "your@email.com" },
            title: { label: "제목", placeholder: "제목을 입력하세요" },
            message: { label: "문의 내용", placeholder: "문의 내용을 자세하게 입력해주세요." },
            consent: "개인정보 수집 및 이용에 동의합니다.",
            submit: "문의 메일 보내기"
        },
        success: {
            title: "문의가 성공적으로 제출되었습니다.",
            message: "빠른 시일 내에 검토 후 입력하신 이메일로 답변드리겠습니다. 감사합니다."
        }
    },
    // FIX: Add missing content for various pages
    downloadPages: {
        loroTopik: {
            title: "Loro TOPIK 데스크톱 앱",
            description: "TOPIK 모의고사 콘텐츠 제작 및 관리를 위한 올인원 데스크톱 애플리케이션입니다.",
            cta: "최신 버전 다운로드",
            installation: {
                title: "설치 안내",
                steps: [
                    "위의 '다운로드' 버튼을 클릭하여 설치 파일을 받으세요.",
                    "다운로드한 파일을 실행하여 설치를 진행하세요.",
                    "설치가 완료되면 바탕화면의 아이콘을 클릭하여 앱을 실행하세요."
                ],
            },
            version: {
                title: "버전 히스토리",
                history: [
                    { version: "v1.0.0", date: "2024-07-15", notes: ["최초 릴리즈"] }
                ],
            },
            checksum: {
                title: "파일 체크섬 (SHA-256)",
                value: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
            }
        },
        loroSpeaking: {
            title: "Loro Speaking 데스크톱 앱",
            description: "AI 기반 발음 평가 및 스피킹 훈련 콘텐츠 관리를 위한 전용 애플리케이션입니다.",
            cta: "최신 버전 다운로드",
            installation: {
                title: "설치 안내",
                steps: [
                    "위의 '다운로드' 버튼을 클릭하여 설치 파일을 받으세요.",
                    "다운로드한 파일을 실행하여 설치를 진행하세요.",
                    "설치가 완료되면 바탕화면의 아이콘을 클릭하여 앱을 실행하세요."
                ],
            },
            version: {
                title: "버전 히스토리",
                history: [
                    { version: "v1.0.0", date: "2024-07-15", notes: ["최초 릴리즈"] }
                ],
            },
            checksum: {
                title: "파일 체크섬 (SHA-256)",
                value: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
            }
        }
    },
    mobileDownloadPage: {
        title: "Loro 모바일 앱",
        subtitle: "언제 어디서든 Loro와 함께 학습하세요. 지금 바로 다운로드하여 최고의 학습 경험을 시작하세요.",
        openApp: "앱으로 열기",
        android: "Android (Google Play)",
        ios: "iOS (App Store)",
        versionInfo: {
            loading: "버전 정보를 불러오는 중입니다...",
            title: "최신 버전 정보",
            version: "버전",
            publishedAt: "배포일"
        }
    },
    supportHubPage: {
        title: "고객 지원 허브",
        subtitle: "Loro 제품 사용에 도움이 필요하신가요? 자주 묻는 질문을 확인하거나 직접 문의하여 문제를 해결할 수 있습니다.",
        cards: {
            faq: {
                title: "자주 묻는 질문 (FAQ)",
                description: "사용자들이 가장 자주 묻는 질문과 답변을 모았습니다. 문의 전에 먼저 확인해 보세요.",
                cta: "FAQ 보러가기"
            },
            contact: {
                title: "문의하기",
                description: "FAQ에서 해결책을 찾지 못하셨나요? 기술 지원팀에 직접 문의하여 도움을 받으세요.",
                cta: "문의하기"
            },
            policy: {
                title: "서비스 약관 및 개인정보 처리방침",
                description: "Loro의 서비스 이용 약관과 개인정보 처리방침에 대해 알아보세요.",
                cta: "정책 보기"
            }
        }
    },
    policyPage: {
        title: "서비스 약관 및 개인정보 처리방침",
        lastUpdated: "최종 업데이트: 2024년 7월 15일",
        terms: {
            title: "서비스 이용 약관",
            content: "이곳에 서비스 이용 약관 내용이 들어갑니다. Loro 서비스를 이용해주셔서 감사합니다."
        },
        privacy: {
            title: "개인정보 처리방침",
            content: "이곳에 개인정보 처리방침 내용이 들어갑니다. 저희는 사용자의 개인정보를 소중히 다룹니다."
        }
    },
    changelogPage: {
        title: "모바일 앱 변경사항",
        subtitle: "Loro 모바일 앱의 최신 업데이트 내역을 확인하세요."
    },
  },
  en: {
    hero: {
      title: { line1: "TOPIK Content Management,", line2: "Experience Overwhelming Speed." },
      subtitle: "Loro Manager is an all-in-one internal operations solution, integrating everything from mock test creation to managing questions, grammar, vocabulary, explanations, and assets.",
      ctaPrimary: "Go to Admin Console",
      ctaSecondary: "Download App",
    },
    features: {
        title: "Powerful and Intuitive Features",
        subtitle: "We provide all the tools you need to automate repetitive tasks and maximize your team's productivity.",
        items: [
            { icon: "⚡️", title: "Create Mock Tests in 1 Minute", description: "From test creation to question composition in just one minute. Minimize complex processes and focus on what matters." },
            { icon: "✍️", title: "10x Faster Subtitle Entry", description: "Dramatically improve the speed of entering subtitles for explanation videos with our bulk registration feature." },
            { icon: "🎨", title: "Consistent UI/UX", description: "New team members can adapt quickly without special training, thanks to common components and a unified design." },
            { icon: "📦", title: "Unified Content Management", description: "Systematically manage and search questions, grammar, vocabulary, explanations, and media assets in one place." },
            { icon: "🔍", title: "Powerful Filter & Search", description: "Provides advanced filtering and client-side search capabilities to find the data you need instantly." },
            { icon: "📋", title: "Convenient ID Copying", description: "Simplify integration with other systems by copying necessary IDs with a single click." },
        ]
    },
    download: {
        title: "Mobile Applications",
        subtitle: "Learn with Loro anytime, anywhere. Experience the best TOPIK learning.",
        apps: [
          {
            name: "Loro TOPIK",
            description: "An all-in-one mobile application for TOPIK mock test learning and exam preparation.",
          },
          {
            name: "Loro Speaking",
            description: "A dedicated mobile application for AI-based pronunciation evaluation and speaking practice.",
          }
        ]
    },
    footer: {
        description: "The all-in-one solution for TOPIK content management.",
        links: {
            title: "Links",
            features: "Features",
            download: "Download",
            faq: "FAQ",
            contact: "Contact",
            support: "Support"
        },
        copyright: "All rights reserved.",
    },
    contactPage: {
        title: "Contact Us",
        subtitle: "Please feel free to contact us for product usage, technical support, or any other inquiries.",
        form: {
            name: { label: "Name", placeholder: "Enter your name" },
            email: { label: "Email", placeholder: "your@email.com" },
            title: { label: "Subject", placeholder: "Enter a subject" },
            message: { label: "Message", placeholder: "Please enter your inquiry in detail." },
            consent: "I agree to the collection and use of personal information.",
            submit: "Send Inquiry Email"
        },
        success: {
            title: "Your inquiry has been submitted successfully.",
            message: "We will review it and reply to the email you provided as soon as possible. Thank you."
        }
    },
    // FIX: Add missing content for various pages
    downloadPages: {
        loroTopik: {
            title: "Loro TOPIK Desktop App",
            description: "An all-in-one desktop application for creating and managing TOPIK mock test content.",
            cta: "Download Latest Version",
            installation: {
                title: "Installation Guide",
                steps: [
                    "Click the 'Download' button above to get the installer.",
                    "Run the downloaded file to proceed with the installation.",
                    "Once installed, click the desktop icon to launch the app."
                ],
            },
            version: {
                title: "Version History",
                history: [
                    { version: "v1.0.0", date: "2024-07-15", notes: ["Initial release"] }
                ],
            },
            checksum: {
                title: "File Checksum (SHA-256)",
                value: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
            }
        },
        loroSpeaking: {
            title: "Loro Speaking Desktop App",
            description: "A dedicated application for managing AI-based pronunciation evaluation and speaking training content.",
            cta: "Download Latest Version",
            installation: {
                title: "Installation Guide",
                steps: [
                    "Click the 'Download' button above to get the installer.",
                    "Run the downloaded file to proceed with the installation.",
                    "Once installed, click the desktop icon to launch the app."
                ],
            },
            version: {
                title: "Version History",
                history: [
                    { version: "v1.0.0", date: "2024-07-15", notes: ["Initial release"] }
                ],
            },
            checksum: {
                title: "File Checksum (SHA-256)",
                value: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
            }
        }
    },
    mobileDownloadPage: {
        title: "Loro Mobile App",
        subtitle: "Learn with Loro anytime, anywhere. Download now and start your best learning experience.",
        openApp: "Open in App",
        android: "Android (Google Play)",
        ios: "iOS (App Store)",
        versionInfo: {
            loading: "Loading version info...",
            title: "Latest Version Information",
            version: "Version",
            publishedAt: "Published At"
        }
    },
    supportHubPage: {
        title: "Support Hub",
        subtitle: "Need help using Loro products? Check out our FAQ or contact us directly to resolve your issues.",
        cards: {
            faq: {
                title: "Frequently Asked Questions (FAQ)",
                description: "Find answers to the most common questions from our users. Check here before contacting us.",
                cta: "View FAQ"
            },
            contact: {
                title: "Contact Us",
                description: "Couldn't find a solution in the FAQ? Contact our technical support team for assistance.",
                cta: "Contact Us"
            },
            policy: {
                title: "Terms of Service & Privacy Policy",
                description: "Learn about Loro's terms of service and our privacy policy.",
                cta: "View Policies"
            }
        }
    },
    policyPage: {
        title: "Terms of Service & Privacy Policy",
        lastUpdated: "Last updated: July 15, 2024",
        terms: {
            title: "Terms of Service",
            content: "Terms of service content goes here. Thank you for using the Loro service."
        },
        privacy: {
            title: "Privacy Policy",
            content: "Privacy policy content goes here. We take your privacy seriously."
        }
    },
    changelogPage: {
        title: "Mobile App Changelog",
        subtitle: "Check out the latest updates for the Loro mobile app."
    },
  }
};