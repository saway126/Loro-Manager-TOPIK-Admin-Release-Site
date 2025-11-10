import { Language } from './types';

type Content = {
  [key in Language]: {
    header: {
        brandName: string;
    };
    hero: {
      title: { line1: string; line2: string; };
      subtitle: string;
    };
    mainPage: {
        title: string;
        subtitle: string;
        apps: {
            topik: { name: string; description: string; cta: string; };
            speaking: { name: string; description: string; cta: string; };
        };
        buttons: {
            googlePlay: string;
            appStore: string;
        }
    };
    footer: {
        description: string;
        copyright: string;
        nav: {
            topik: string;
            speaking: string;
            faq: string;
            contact: string;
        }
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
    };
    topikPage: {
        title: string;
        subtitle: string;
        features: {
            title: string;
            items: { icon: string; title: string; description: string; }[];
        };
    };
    speakingPage: {
        title: string;
        subtitle: string;
        features: {
            title: string;
            items: { icon: string; title: string; description: string; }[];
        };
    };
  };
};

export const content: Content = {
  ko: {
    header: {
        brandName: "LORO"
    },
    hero: {
      title: { line1: "TOPIK 학습의 모든 것,", line2: "하나의 LORO 안에." },
      subtitle: "모의고사부터 AI 스피킹 훈련까지, LORO는 TOPIK 수험생과 교육자를 위한 가장 완벽한 올인원 솔루션입니다.",
    },
    mainPage: {
        title: "두 가지 강력한 앱",
        subtitle: "학습자와 관리자 모두를 만족시키는 LORO의 전문 애플리케이션을 만나보세요.",
        apps: {
          topik: {
            name: "Loro TOPIK",
            description: "실전 같은 TOPIK 모의고사와 심층 분석, 성적 관리를 통해 목표 점수 달성을 지원하는 올인원 학습 앱입니다.",
            cta: "자세히 보기"
          },
          speaking: {
            name: "Loro Speaking",
            description: "AI 기반의 정확한 발음 평가와 체계적인 스피킹 훈련으로, TOPIK 말하기 시험을 완벽하게 대비할 수 있습니다.",
            cta: "자세히 보기"
          }
        },
        buttons: {
            googlePlay: "Google Play",
            appStore: "App Store"
        }
    },
    footer: {
        description: "TOPIK 학습을 위한 올인원 솔루션",
        copyright: "All rights reserved.",
        nav: {
            topik: "Loro TOPIK",
            speaking: "Loro Speaking",
            faq: "FAQ",
            contact: "문의하기"
        }
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
    },
    topikPage: {
        title: "Loro TOPIK",
        subtitle: "TOPIK 모의고사, 그 이상의 학습 경험. 실전과 가장 가까운 환경에서 당신의 실력을 완성하세요.",
        features: {
            title: "주요 기능",
            items: [
                { icon: "📝", title: "실전 모의고사", description: "최신 출제 경향을 완벽 반영한 모의고사로 실전 감각을 극대화하세요." },
                { icon: "📈", title: "스마트 성적 분석", description: "영역별 강점과 약점을 정확히 진단하고 맞춤형 학습 전략을 제공합니다." },
                { icon: "📚", title: "방대한 문제 은행", description: "유형별, 난이도별로 정리된 문제 은행을 통해 취약점을 집중 공략할 수 있습니다." },
                { icon: "📱", title: "완벽한 모바일 환경", description: "언제 어디서든 학습이 가능하도록 최적화된 모바일 UI/UX를 제공합니다." },
            ]
        }
    },
    speakingPage: {
        title: "Loro Speaking",
        subtitle: "AI와 함께하는 스피킹 훈련, 더 이상 막막해하지 마세요. 자신감 있는 발음과 표현력을 완성합니다.",
        features: {
            title: "주요 기능",
            items: [
                { icon: "🤖", title: "AI 발음 평가", description: "원어민 수준의 AI가 억양, 강세, 유창성을 정밀하게 분석하고 피드백을 제공합니다." },
                { icon: "🗣️", title: "상황별 롤플레잉", description: "TOPIK 말하기 시험에 출제되는 다양한 상황을 시뮬레이션하며 실전처럼 훈련합니다." },
                { icon: "✅", title: "스크립트 녹음 및 비교", description: "내 답변을 녹음하고 AI의 모범 답안과 비교하며 스스로 문제점을 개선할 수 있습니다." },
                { icon: "📊", title: "학습 리포트", description: "주간/월간 학습 성과를 시각적인 리포트로 확인하며 동기를 부여받을 수 있습니다." },
            ]
        }
    }
  },
  en: { // Basic English translation, can be expanded
    header: {
        brandName: "LORO"
    },
    hero: {
      title: { line1: "Everything for TOPIK Learning,", line2: "All in One LORO." },
      subtitle: "From mock tests to AI speaking practice, LORO is the most complete all-in-one solution for TOPIK students and educators.",
    },
    mainPage: {
        title: "Two Powerful Apps",
        subtitle: "Discover LORO's specialized applications that satisfy both learners and administrators.",
        apps: {
          topik: {
            name: "Loro TOPIK",
            description: "An all-in-one learning app that helps you achieve your target score with realistic TOPIK mock tests, in-depth analysis, and grade management.",
            cta: "Learn More"
          },
          speaking: {
            name: "Loro Speaking",
            description: "Perfectly prepare for the TOPIK speaking test with accurate AI-based pronunciation evaluation and systematic speaking training.",
            cta: "Learn More"
          }
        },
        buttons: {
            googlePlay: "Google Play",
            appStore: "App Store"
        }
    },
    footer: {
        description: "The all-in-one solution for TOPIK learning.",
        copyright: "All rights reserved.",
        nav: {
            topik: "Loro TOPIK",
            speaking: "Loro Speaking",
            faq: "FAQ",
            contact: "Contact"
        }
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
            submit: "Send Inquiry"
        },
    },
    topikPage: {
        title: "Loro TOPIK",
        subtitle: "More than just a mock test. Perfect your skills in an environment that's closest to the real exam.",
        features: {
            title: "Key Features",
            items: [
                { icon: "📝", title: "Realistic Mock Tests", description: "Maximize your practical skills with mock tests that perfectly reflect the latest exam trends." },
                { icon: "📈", title: "Smart Grade Analysis", description: "Accurately diagnose your strengths and weaknesses by section and get a personalized study strategy." },
                { icon: "📚", title: "Vast Question Bank", description: "Target your weak points with a question bank organized by type and difficulty." },
                { icon: "📱", title: "Perfect Mobile Experience", description: "Provides an optimized mobile UI/UX for learning anytime, anywhere." },
            ]
        }
    },
    speakingPage: {
        title: "Loro Speaking",
        subtitle: "Speaking practice with AI. Build confidence in your pronunciation and expression.",
        features: {
            title: "Key Features",
            items: [
                { icon: "🤖", title: "AI Pronunciation Evaluation", description: "Native-level AI provides precise feedback on your intonation, stress, and fluency." },
                { icon: "🗣️", title: "Situational Role-playing", description: "Practice for the real test by simulating various situations that appear on the TOPIK speaking exam." },
                { icon: "✅", title: "Record & Compare", description: "Record your answers and compare them with AI's model answers to self-correct." },
                { icon: "📊", title: "Learning Reports", description: "Stay motivated by checking your weekly/monthly progress with visual reports." },
            ]
        }
    }
  }
};
