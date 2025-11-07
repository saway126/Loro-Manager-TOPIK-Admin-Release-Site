
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
      cta: string;
      releaseNotes: string;
      instructions: {
        title: string;
        steps: string[];
      };
      requirements: {
        title: string;
        browser: string;
        resolution: string;
      };
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
        };
        legal: {
            title: string;
            privacy: string;
            terms: string;
            contact: string;
        };
        copyright: string;
    };
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
        title: "최신 버전 다운로드",
        subtitle: "Loro Manager의 최신 기능을 지금 바로 만나보세요. 내부망 접속을 통해 이용 가능합니다.",
        cta: "최신 버전 다운로드",
        releaseNotes: "릴리즈 노트 보기",
        instructions: {
            title: "설치 및 접속 방법",
            steps: [
                "위 다운로드 버튼을 클릭하여 압축 파일 받기",
                "지정된 폴더에 압축 해제",
                "내부망 VPN 연결 확인",
                "실행 파일(start.exe)을 더블 클릭하여 접속"
            ],
        },
        requirements: {
            title: "권장 사양",
            browser: "권장 브라우저: Chrome 최신 버전",
            resolution: "최소 해상도: 1920x1080",
        },
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
            { q: "데이터 백업은 어떻게 이루어지나요?", a: "모든 데이터는 중앙 데이터베이스에 저장되며, 정기적으로 자동 백업이 이루어집니다. 사용자가 별도로 백업할 필요는 없습니다." },
            { q: "버전 업데이트 정책은 어떻게 되나요?", a: "기능 개선 및 버그 수정을 위해 비정기적으로 업데이트가 배포됩니다. 주요 업데이트 시 사전 공지가 이루어지며, 접속 시 자동으로 최신 버전이 적용됩니다." }
        ]
    },
    footer: {
        description: "TOPIK 콘텐츠 관리를 위한 올인원 솔루션",
        links: {
            title: "바로가기",
            features: "기능",
            download: "다운로드",
        },
        legal: {
            title: "정책",
            privacy: "개인정보처리방침",
            terms: "이용약관",
            contact: "문의하기",
        },
        copyright: "All rights reserved.",
    }
  },
  en: {
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
        title: "Download the Latest Version",
        subtitle: "Experience the newest features of Loro Manager now. Access is available through the internal network.",
        cta: "Download Latest Version",
        releaseNotes: "View Release Notes",
        instructions: {
            title: "Installation and Access Guide",
            steps: [
                "Click the download button above to get the zip file.",
                "Extract the file to the designated folder.",
                "Confirm your internal network VPN connection.",
                "Double-click the executable file (start.exe) to connect."
            ],
        },
        requirements: {
            title: "Recommended Specifications",
            browser: "Recommended Browser: Latest version of Chrome",
            resolution: "Minimum Resolution: 1920x1080",
        },
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
            { q: "How are user permissions managed?", a: "Accessible menus and features are restricted based on user roles (e.g., Admin, Creator, Reviewer). Permission changes must be requested from the system administrator." },
            { q: "Do I need to call the backend API directly?", a: "No. Loro Manager communicates with all backend APIs through an internal proxy, so users only manage data through the UI. You don't need to know the API endpoints." },
            { q: "What should I do if an error occurs during data entry?", a: "Most errors are displayed with clear messages in the UI. If the problem persists, please capture the screen and contact the technical support team with the error message." },
            { q: "How is data backed up?", a: "All data is stored in a central database and is backed up automatically on a regular basis. Users do not need to perform backups separately." },
            { q: "What is the version update policy?", a: "Updates are deployed non-periodically for feature improvements and bug fixes. Advance notice is given for major updates, and the latest version is applied automatically upon access." }
        ]
    },
    footer: {
        description: "The all-in-one solution for TOPIK content management.",
        links: {
            title: "Links",
            features: "Features",
            download: "Download",
        },
        legal: {
            title: "Legal",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            contact: "Contact",
        },
        copyright: "All rights reserved.",
    }
  }
};
   