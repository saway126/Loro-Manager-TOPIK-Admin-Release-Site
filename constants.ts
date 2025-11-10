import { Language } from './types';

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
    screenshots: {
      title: string;
      subtitle: string;
      placeholder: string;
    };
    download: {
      title: string;
      subtitle: string;
      apps: {
        name: string;
        description: string;
        cta: string;
        link: string;
      }[];
    };
    guide: {
        title: string;
        subtitle: string;
        steps: { title: string; description: string; }[];
        cta: string;
    };
    technical: {
        title: string;
        subtitle: string;
        security: { title: string; description: string; };
        accessibility: { title: string; description: string; };
        architecture: { title: string; description: string; };
    };
    faq: {
        title: string;
        subtitle: string;
        items: { q: string; a: string; }[];
    };
    footer: {
        description: string;
        links: {
            title: string;
            features: string;
            download: string;
            faq: string;
            contact: string;
        };
        legal: {
            title: string;
            privacy: string;
            terms: string;
            contact: string;
        };
        copyright: string;
    };
    downloadPages: {
      loroTopik: DownloadPageContent;
      loroSpeaking: DownloadPageContent;
    };
    faqPage: {
      title: string;
      subtitle: string;
      items: { q: string; a: string; }[];
    };
    contactPage: {
        title: string;
        subtitle: string;
        form: {
            name: { label: string; placeholder: string; required: string; };
            email: { label: string; placeholder: string; required: string; invalid: string; };
            message: { label: string; placeholder: string; required: string; };
            submit: string;
        };
        success: {
            title: string;
            message: string;
        };
    };
  };
};

type DownloadPageContent = {
  title: string;
  description: string;
  cta: string;
  version: {
    title: string;
    latest: string;
    history: { version: string; date: string; notes: string[] }[];
  };
  checksum: {
    title: string;
    value: string;
  };
  installation: {
    title: string;
    steps: string[];
  };
};

export const content: Content = {
  ko: {
    hero: {
      title: { line1: "TOPIK 콘텐츠 관리,", line2: "압도적인 속도를 경험하세요." },
      subtitle: "Loro Manager는 모의고사 제작부터 문제, 문법, 단어, 해설, 에셋 관리까지 모든 것을 하나로 통합한 내부 운영 솔루션입니다.",
      ctaPrimary: "관리 콘솔 바로가기",
      ctaSecondary: "다운로드 / 문서 보기",
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
    screenshots: {
        title: "한 눈에 보는 Loro Manager",
        subtitle: "직관적인 대시보드와 깔끔하게 정리된 관리 화면을 통해 모든 작업을 효율적으로 처리하세요.",
        placeholder: "제품 스크린샷 또는 GIF 애니메이션 영역",
    },
    download: {
        title: "제품 다운로드",
        subtitle: "업무 효율을 극대화하는 Loro의 솔루션들을 만나보세요.",
        apps: [
          {
            name: "Loro TOPIK (Windows EXE)",
            description: "TOPIK 모의고사 콘텐츠 제작 및 관리를 위한 올인원 데스크톱 애플리케이션입니다.",
            cta: "상세 정보 및 다운로드",
            link: "/download/loro-topik"
          },
          {
            name: "Loro Speaking (Windows EXE)",
            description: "AI 기반 발음 평가 및 스피킹 훈련 콘텐츠 관리를 위한 전용 애플리케이션입니다.",
            cta: "상세 정보 및 다운로드",
            link: "/download/loro-speaking"
          }
        ]
    },
    guide: {
        title: "빠른 시작 가이드",
        subtitle: "5단계만 따라 하면 Loro Manager의 핵심 기능을 바로 사용할 수 있습니다.",
        steps: [
            { title: "콘텐츠 생성", description: "문법, 단어, 질문 등 기본 콘텐츠를 등록합니다." },
            { title: "에셋 업로드", description: "이미지, 비디오, 오디오 파일을 에셋 관리자에 추가합니다." },
            { title: "해설 제작", description: "업로드된 비디오에 대량 자막 등록 기능으로 해설을 입력합니다." },
            { title: "문제 구성", description: "생성된 질문과 콘텐츠를 조합하여 문제 슬롯을 만듭니다." },
            { title: "모의고사 배포", description: "구성된 문제 슬롯들을 모아 하나의 완전한 모의고사를 생성하고 저장합니다." },
        ],
        cta: "전체 가이드 문서 보기"
    },
    technical: {
        title: "신뢰할 수 있는 기술",
        subtitle: "안정성과 확장성을 고려한 최신 기술 스택으로 구축되었습니다.",
        security: {
            title: "보안",
            description: "내부망 접속을 기본으로 하며, 프록시 API를 통해 백엔드와 안전하게 통신합니다. 역할 기반 접근 제어(RBAC)를 통해 권한을 관리합니다."
        },
        accessibility: {
            title: "접근성",
            description: "웹 접근성 표준(WCAG)을 준수하여 키보드 네비게이션, 스크린 리더 호환성, 명확한 포커스 표시 등을 지원합니다."
        },
        architecture: {
            title: "아키텍처",
            description: "Next.js App Router 기반의 서버 컴포넌트를 활용하여 뛰어난 성능을 제공하며, MUI v7로 일관된 UI를 구현합니다."
        }
    },
    faq: {
        title: "자주 묻는 질문",
        subtitle: "Loro Manager에 대해 궁금한 점이 있으신가요?",
        items: [
            { q: "Loro Manager는 어떻게 도입할 수 있나요?", a: "내부 운영팀을 위한 솔루션으로, 별도 설치 과정 없이 지정된 URL을 통해 접속할 수 있습니다. 접근 권한은 팀 리더에게 문의하세요." },
            { q: "사용자 권한은 어떻게 관리되나요?", a: "사용자 역할(관리자, 제작자, 검수자 등)에 따라 접근 가능한 메뉴와 기능이 제한됩니다. 권한 변경은 시스템 관리자에게 요청해야 합니다." },
            { q: "백엔드 API는 직접 호출해야 하나요?", a: "아니요. Loro Manager는 내부 프록시를 통해 모든 백엔드 API와 통신하므로, 사용자는 UI를 통해서만 데이터를 관리하게 됩니다. API 엔드포인트를 직접 알 필요가 없습니다." },
            { q: "데이터 입력 중 오류가 발생하면 어떻게 하나요?", a: "대부분의 오류는 UI에 명확한 메시지로 표시됩니다. 문제가 지속될 경우, 화면을 캡쳐하여 에러 메시지와 함께 기술 지원팀에 문의해주세요." },
        ]
    },
    footer: {
        description: "TOPIK 콘텐츠 관리를 위한 올인원 솔루션",
        links: {
            title: "바로가기",
            features: "기능",
            download: "다운로드",
            faq: "FAQ",
            contact: "문의하기"
        },
        legal: {
            title: "정책",
            privacy: "개인정보처리방침",
            terms: "이용약관",
            contact: "문의하기",
        },
        copyright: "All rights reserved.",
    },
    downloadPages: {
        loroTopik: {
            title: "Loro TOPIK 다운로드",
            description: "TOPIK 모의고사 제작, 문제 관리, 에셋 관리 등 콘텐츠 제작에 필요한 모든 기능을 갖춘 강력한 데스크톱 애플리케이션입니다. Windows 환경에 최적화되어 있습니다.",
            cta: "최신 버전 다운로드 (v1.2.0)",
            version: {
                title: "버전 히스토리",
                latest: "v1.2.0 (2024-07-22)",
                history: [
                    { version: "v1.2.0", date: "2024-07-22", notes: ["성능 개선", "UI 버그 수정"] },
                    { version: "v1.1.5", date: "2024-06-15", notes: ["자막 대량 등록 기능 추가"] },
                    { version: "v1.0.0", date: "2024-05-01", notes: ["초기 릴리즈"] },
                ]
            },
            checksum: {
                title: "SHA-256 Checksum",
                value: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
            },
            installation: {
                title: "설치 방법",
                steps: [
                    "위 '다운로드' 버튼을 클릭하여 설치 파일을 받습니다.",
                    "다운로드한 'LoroTOPIK_setup.exe' 파일을 실행합니다.",
                    "화면의 안내에 따라 설치를 진행합니다.",
                    "설치가 완료되면 바탕화면의 아이콘을 클릭하여 실행합니다."
                ]
            }
        },
        loroSpeaking: {
            title: "Loro Speaking 다운로드",
            description: "AI 기반 발음 평가 및 분석, 스피킹 훈련 콘텐츠 제작 및 관리를 위한 전용 데스크톱 애플리케이션입니다. 효율적인 스피킹 교육 자료 제작을 지원합니다.",
            cta: "최신 버전 다운로드 (v0.9.8)",
            version: {
                title: "버전 히스토리",
                latest: "v0.9.8 (2024-07-20)",
                history: [
                    { version: "v0.9.8", date: "2024-07-20", notes: ["AI 평가 모델 v2 업데이트", "UI 개선"] },
                    { version: "v0.9.0", date: "2024-06-01", notes: ["초기 베타 릴리즈"] },
                ]
            },
            checksum: {
                title: "SHA-256 Checksum",
                value: "f2d81a260dea8b0c889d5858914044558e2a3c8e5e5b6e3d7f1f3a5d8a8b0c8e"
            },
            installation: {
                title: "설치 방법",
                steps: [
                    "위 '다운로드' 버튼을 클릭하여 설치 파일을 받습니다.",
                    "다운로드한 'LoroSpeaking_setup.exe' 파일을 실행합니다.",
                    "화면의 안내에 따라 설치를 진행합니다.",
                    "설치가 완료되면 바탕화면의 아이콘을 클릭하여 실행합니다."
                ]
            }
        }
    },
    faqPage: {
        title: "자주 묻는 질문",
        subtitle: "Loro 제품군에 대해 궁금한 점을 해결해 보세요.",
        items: [
            { q: "Loro Manager와 Loro TOPIK 애플리케이션의 차이점은 무엇인가요?", a: "Loro Manager는 웹 기반의 관리 콘솔로, 여러 관리자가 접속하여 콘텐츠를 종합적으로 관리하는 데 사용됩니다. Loro TOPIK은 Windows 데스크톱 애플리케이션으로, 콘텐츠 제작자가 자신의 PC에 설치하여 오프라인 환경에서도 안정적으로 작업할 수 있도록 지원하는 제작 도구입니다." },
            { q: "Loro Speaking은 어떤 기술을 사용하나요?", a: "자체 개발한 AI 음성 인식 및 발음 평가 모델을 기반으로 합니다. 사용자의 발음을 다각도로 분석하여 정확한 피드백을 제공합니다." },
            { q: "애플리케이션 사용 중 문제가 발생하면 어디로 연락해야 하나요?", a: "본 웹사이트의 '문의하기' 페이지를 통해 문제 상황을 구체적으로 작성하여 보내주시거나, 사내 기술 지원팀으로 직접 연락주시기 바랍니다." },
            { q: "Windows 이외의 운영체제(macOS, Linux)도 지원할 계획이 있나요?", a: "현재는 Windows 환경에 집중하고 있으나, 사용자 수요에 따라 타 운영체제 지원도 긍정적으로 검토하고 있습니다." },
            { q: "업데이트는 어떻게 진행되나요?", a: "애플리케이션 실행 시 새로운 버전이 있는지 자동으로 확인하며, 업데이트가 있을 경우 안내 팝업이 표시됩니다. 안내에 따라 간단하게 업데이트를 진행할 수 있습니다." }
        ]
    },
    contactPage: {
        title: "문의하기",
        subtitle: "제품 사용, 기술 지원, 기타 문의사항이 있으시면 언제든지 연락주세요.",
        form: {
            name: { label: "이름", placeholder: "이름을 입력하세요", required: "이름은 필수 항목입니다." },
            email: { label: "이메일", placeholder: "your@email.com", required: "이메일은 필수 항목입니다.", invalid: "유효한 이메일 주소를 입력하세요." },
            message: { label: "문의 내용", placeholder: "문의 내용을 자세하게 입력해주세요.", required: "문의 내용은 필수 항목입니다." },
            submit: "문의 제출하기"
        },
        success: {
            title: "문의가 성공적으로 제출되었습니다.",
            message: "빠른 시일 내에 검토 후 입력하신 이메일로 답변드리겠습니다. 감사합니다."
        }
    }
  },
  en: {
    // NOTE: English content is omitted for brevity but would be structured similarly.
    hero: {
      title: { line1: "TOPIK Content Management,", line2: "Experience Overwhelming Speed." },
      subtitle: "Loro Manager is an all-in-one internal operations solution, integrating everything from mock test creation to managing questions, grammar, vocabulary, explanations, and assets.",
      ctaPrimary: "Go to Admin Console",
      ctaSecondary: "Download / View Docs",
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
    screenshots: {
        title: "Loro Manager at a Glance",
        subtitle: "Handle all your tasks efficiently with an intuitive dashboard and cleanly organized management screens.",
        placeholder: "Product screenshot or GIF animation area",
    },
    download: {
        title: "Product Downloads",
        subtitle: "Discover Loro's solutions that maximize work efficiency.",
        apps: [
          {
            name: "Loro TOPIK (Windows EXE)",
            description: "An all-in-one desktop application for creating and managing TOPIK mock test content.",
            cta: "Details & Download",
            link: "/download/loro-topik"
          },
          {
            name: "Loro Speaking (Windows EXE)",
            description: "A dedicated application for managing AI-based pronunciation evaluation and speaking training content.",
            cta: "Details & Download",
            link: "/download/loro-speaking"
          }
        ]
    },
    guide: {
        title: "Quick Start Guide",
        subtitle: "Follow these 5 simple steps to start using the core features of Loro Manager right away.",
        steps: [
            { title: "Create Content", description: "Register basic content such as grammar, vocabulary, and questions." },
            { title: "Upload Assets", description: "Add image, video, and audio files to the asset manager." },
            { title: "Produce Explanations", description: "Input explanations for uploaded videos using the bulk subtitle feature." },
            { title: "Compose Questions", description: "Create question slots by combining generated questions and content." },
            { title: "Deploy Mock Tests", description: "Assemble the composed question slots to create and save a complete mock test." },
        ],
        cta: "View Full Guide"
    },
    technical: {
        title: "Reliable Technology",
        subtitle: "Built with a modern tech stack designed for stability and scalability.",
        security: {
            title: "Security",
            description: "Based on internal network access, it communicates securely with the backend via a proxy API. Permissions are managed through Role-Based Access Control (RBAC)."
        },
        accessibility: {
            title: "Accessibility",
            description: "Complies with Web Content Accessibility Guidelines (WCAG), supporting keyboard navigation, screen reader compatibility, and clear focus indicators."
        },
        architecture: {
            title: "Architecture",
            description: "Delivers excellent performance using Server Components based on the Next.js App Router and implements a consistent UI with MUI v7."
        }
    },
    faq: {
        title: "Frequently Asked Questions",
        subtitle: "Have questions about Loro Manager?",
        items: [
            { q: "How can I get started with Loro Manager?", a: "As a solution for internal teams, you can access it via a designated URL without any installation. Please contact your team lead for access credentials." },
        ]
    },
    footer: {
        description: "The all-in-one solution for TOPIK content management.",
        links: {
            title: "Links",
            features: "Features",
            download: "Download",
            faq: "FAQ",
            contact: "Contact"
        },
        legal: {
            title: "Legal",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            contact: "Contact",
        },
        copyright: "All rights reserved.",
    },
    downloadPages: {
        // ... English content for download pages ...
        loroTopik: {
            title: "Loro TOPIK Download",
            description: "A powerful desktop application with all the necessary features for content creation, including mock test creation, question management, and asset management. Optimized for the Windows environment.",
            cta: "Download Latest Version (v1.2.0)",
            version: {
                title: "Version History",
                latest: "v1.2.0 (2024-07-22)",
                history: [
                    { version: "v1.2.0", date: "2024-07-22", notes: ["Performance improvements", "UI bug fixes"] },
                    { version: "v1.1.5", date: "2024-06-15", notes: ["Added bulk subtitle registration feature"] },
                    { version: "v1.0.0", date: "2024-05-01", notes: ["Initial release"] },
                ]
            },
            checksum: {
                title: "SHA-256 Checksum",
                value: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
            },
            installation: {
                title: "Installation Guide",
                steps: [
                    "Click the 'Download' button above to get the installer.",
                    "Run the downloaded 'LoroTOPIK_setup.exe' file.",
                    "Follow the on-screen instructions to proceed with the installation.",
                    "Once complete, click the icon on your desktop to run the application."
                ]
            }
        },
        loroSpeaking: {
            title: "Loro Speaking Download",
            description: "A dedicated desktop application for creating and managing content for AI-based pronunciation evaluation and speaking training. It supports efficient creation of speaking educational materials.",
            cta: "Download Latest Version (v0.9.8)",
            version: {
                title: "Version History",
                latest: "v0.9.8 (2024-07-20)",
                history: [
                    { version: "v0.9.8", date: "2024-07-20", notes: ["AI evaluation model v2 update", "UI improvements"] },
                    { version: "v0.9.0", date: "2024-06-01", notes: ["Initial beta release"] },
                ]
            },
            checksum: {
                title: "SHA-256 Checksum",
                value: "f2d81a260dea8b0c889d5858914044558e2a3c8e5e5b6e3d7f1f3a5d8a8b0c8e"
            },
            installation: {
                title: "Installation Guide",
                steps: [
                    "Click the 'Download' button above to get the installer.",
                    "Run the downloaded 'LoroSpeaking_setup.exe' file.",
                    "Follow the on-screen instructions to proceed with the installation.",
                    "Once complete, click the icon on your desktop to run the application."
                ]
            }
        }
    },
    faqPage: {
        title: "Frequently Asked Questions",
        subtitle: "Get answers to your questions about the Loro product suite.",
        items: [
             { q: "What's the difference between Loro Manager and the Loro TOPIK application?", a: "Loro Manager is a web-based admin console used by multiple administrators to comprehensively manage content. Loro TOPIK is a Windows desktop application that content creators install on their PCs to work stably, even in an offline environment." },
        ]
    },
    contactPage: {
        title: "Contact Us",
        subtitle: "Please feel free to contact us for product usage, technical support, or any other inquiries.",
        form: {
            name: { label: "Name", placeholder: "Enter your name", required: "Name is required." },
            email: { label: "Email", placeholder: "your@email.com", required: "Email is required.", invalid: "Please enter a valid email address." },
            message: { label: "Message", placeholder: "Please enter your inquiry in detail.", required: "Message is required." },
            submit: "Submit Inquiry"
        },
        success: {
            title: "Your inquiry has been submitted successfully.",
            message: "We will review it and reply to the email you provided as soon as possible. Thank you."
        }
    }
  }
};
