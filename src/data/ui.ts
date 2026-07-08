import type { Locale } from "@/i18n/locale-context";

export const uiText: Record<
  Locale,
  {
    nav: {
      research: string;
      publications: string;
      projects: string;
      experience: string;
      skills: string;
      awards: string;
      contact: string;
    };
    sections: {
      research: { eyebrow: string; title: string };
      publications: { eyebrow: string; title: string };
      projects: { eyebrow: string; title: string };
      experience: { eyebrow: string; title: string };
      skills: { eyebrow: string; title: string };
      awards: { eyebrow: string; title: string };
      contact: { eyebrow: string; title: string };
    };
    research: {
      currentFocus: string;
      showDetails: string;
      hideDetails: string;
      imagePlaceholder: string;
    };
    publications: { showDetails: string; hideDetails: string };
    experience: { educationLabel: string; teachingLabel: string; internationalLabel: string };
    links: { paper: string; code: string; demo: string; video: string };
    contact: { intro: string; emailMe: string; downloadCv: string };
    footer: string;
    localeToggle: string;
  }
> = {
  en: {
    nav: {
      research: "Research",
      publications: "Publications",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      awards: "Awards",
      contact: "Contact",
    },
    sections: {
      research: { eyebrow: "Focus", title: "Research" },
      publications: { eyebrow: "Publications", title: "Papers" },
      projects: { eyebrow: "Projects", title: "Selected Work" },
      experience: { eyebrow: "Background", title: "Education & Experience" },
      skills: { eyebrow: "Toolbox", title: "Skills" },
      awards: { eyebrow: "Recognition", title: "Awards" },
      contact: { eyebrow: "Get in Touch", title: "Contact" },
    },
    research: {
      currentFocus: "Current Focus",
      showDetails: "Show details",
      hideDetails: "Hide details",
      imagePlaceholder: "Image coming soon",
    },
    publications: { showDetails: "Show details", hideDetails: "Hide details" },
    experience: {
      educationLabel: "Education",
      teachingLabel: "Teaching Experience",
      internationalLabel: "International Experience",
    },
    links: { paper: "Paper", code: "Code", demo: "Demo", video: "Watch Video" },
    contact: {
      intro:
        "Open to research collaborations, internships, and full-time opportunities in AI/ML.",
      emailMe: "Email me",
      downloadCv: "Download CV",
    },
    footer: "Built with Next.js & Tailwind CSS.",
    localeToggle: "한국어",
  },
  ko: {
    nav: {
      research: "연구",
      publications: "논문",
      projects: "프로젝트",
      experience: "경력",
      skills: "기술",
      awards: "수상",
      contact: "연락처",
    },
    sections: {
      research: { eyebrow: "집중 분야", title: "연구" },
      publications: { eyebrow: "논문", title: "논문" },
      projects: { eyebrow: "프로젝트", title: "주요 프로젝트" },
      experience: { eyebrow: "배경", title: "학력 및 경력" },
      skills: { eyebrow: "도구", title: "기술 스택" },
      awards: { eyebrow: "수상", title: "수상 내역" },
      contact: { eyebrow: "연락하기", title: "연락처" },
    },
    research: {
      currentFocus: "현재 연구",
      showDetails: "상세 보기",
      hideDetails: "상세 접기",
      imagePlaceholder: "이미지 추가 예정",
    },
    publications: { showDetails: "상세 보기", hideDetails: "상세 접기" },
    experience: {
      educationLabel: "학력",
      teachingLabel: "교육 경력",
      internationalLabel: "국제 경험",
    },
    links: { paper: "논문", code: "코드", demo: "데모", video: "영상 보기" },
    contact: {
      intro: "AI/ML 분야의 연구 협업, 인턴십, 정규직 기회에 열려 있습니다.",
      emailMe: "이메일 보내기",
      downloadCv: "이력서 다운로드",
    },
    footer: "Next.js와 Tailwind CSS로 제작되었습니다.",
    localeToggle: "English",
  },
};
