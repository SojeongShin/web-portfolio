import type { Locale } from "@/i18n/locale-context";

export const uiText: Record<
  Locale,
  {
    nav: {
      awards: string;
      experience: string;
      skills: string;
      projects: string;
    };
    sections: {
      projects: { eyebrow: string; title: string };
      experience: { eyebrow: string; title: string };
      skills: { eyebrow: string; title: string };
      awards: { eyebrow: string; title: string };
    };
    projects: {
      featured: string;
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
      awards: "Awards",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
    },
    sections: {
      projects: { eyebrow: "Work", title: "Projects" },
      experience: { eyebrow: "Background", title: "Education & Experience" },
      skills: { eyebrow: "Toolbox", title: "Skills" },
      awards: { eyebrow: "Recognition", title: "Awards" },
    },
    projects: {
      featured: "Featured",
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
      awards: "수상",
      experience: "경력",
      skills: "기술",
      projects: "프로젝트",
    },
    sections: {
      projects: { eyebrow: "주요 작업", title: "프로젝트" },
      experience: { eyebrow: "배경", title: "학력 및 경력" },
      skills: { eyebrow: "도구", title: "기술 스택" },
      awards: { eyebrow: "수상", title: "수상 내역" },
    },
    projects: {
      featured: "대표 프로젝트",
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
