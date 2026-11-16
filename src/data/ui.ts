import type { Locale } from "@/i18n/locale-context";

export const uiText: Record<
  Locale,
  {
    nav: {
      research: string;
      awards: string;
      experience: string;
      skills: string;
      projects: string;
    };
    sections: {
      research: { eyebrow: string; title: string };
      projects: { eyebrow: string; title: string };
      experience: { eyebrow: string; title: string };
      skills: { eyebrow: string; title: string };
      awards: { eyebrow: string; title: string };
    };
    research: {
      currentFocus: string;
      showDetails: string;
      hideDetails: string;
    };
    experience: {
      educationLabel: string;
      workLabel: string;
      teachingLabel: string;
      internationalLabel: string;
    };
    links: { code: string; demo: string; video: string };
    hero: { viewCv: string };
    footer: string;
    localeToggle: string;
  }
> = {
  en: {
    nav: {
      research: "Research",
      awards: "Awards",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
    },
    sections: {
      research: { eyebrow: "Focus", title: "Research" },
      projects: { eyebrow: "Projects", title: "Projects" },
      experience: { eyebrow: "Background", title: "Education & Experience" },
      skills: { eyebrow: "Toolbox", title: "Skills" },
      awards: { eyebrow: "Recognition", title: "Awards" },
    },
    research: {
      currentFocus: "Current Focus",
      showDetails: "Show details",
      hideDetails: "Hide details",
    },
    experience: {
      educationLabel: "Education",
      workLabel: "Work & Academic Service",
      teachingLabel: "Teaching Experience",
      internationalLabel: "International Experience",
    },
    links: { code: "Code", demo: "Demo", video: "Watch Video" },
    hero: { viewCv: "View CV (Korean, PDF)" },
    footer: "Built with Next.js & Tailwind CSS.",
    localeToggle: "한국어",
  },
  ko: {
    nav: {
      research: "연구",
      awards: "수상",
      experience: "경력",
      skills: "기술",
      projects: "프로젝트",
    },
    sections: {
      research: { eyebrow: "집중 분야", title: "연구" },
      projects: { eyebrow: "프로젝트", title: "프로젝트" },
      experience: { eyebrow: "배경", title: "학력 및 경력" },
      skills: { eyebrow: "도구", title: "기술 스택" },
      awards: { eyebrow: "수상", title: "수상 내역" },
    },
    research: {
      currentFocus: "현재 연구",
      showDetails: "상세 보기",
      hideDetails: "상세 접기",
    },
    experience: {
      educationLabel: "학력",
      workLabel: "경력 및 학술 활동",
      teachingLabel: "교육 경력",
      internationalLabel: "국제 경험",
    },
    links: { code: "코드", demo: "데모", video: "영상 보기" },
    hero: { viewCv: "이력서 보기 (PDF)" },
    footer: "Next.js와 Tailwind CSS로 제작되었습니다.",
    localeToggle: "English",
  },
};
