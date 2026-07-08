import type { Locale } from "@/i18n/locale-context";

export type Profile = {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  resumeUrl: string;
  photoUrl: string;
  links: {
    github: string;
    linkedin: string;
    googleScholar: string;
  };
};

export type ResearchArea = {
  title: string;
  period: string;
  description: string;
  tags: string[];
  featured?: boolean;
};

export type Publication = {
  title: string;
  label?: string;
  authors: string;
  venue: string;
  year: number;
  tags: string[];
  links: { paper?: string; code?: string };
  featured?: boolean;
  details?: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  award?: string;
  links: { demo?: string; code?: string; video?: string };
};

export type EducationItem = {
  degree: string;
  org: string;
  period: string;
  gpa?: string;
};

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  description: string;
};

export type AwardItem = {
  title: string;
  org: string;
  period: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type ContentShape = {
  profile: Profile;
  researchAreas: ResearchArea[];
  publications: Publication[];
  projects: ProjectItem[];
  education: EducationItem[];
  teaching: ExperienceItem[];
  international: ExperienceItem[];
  awards: AwardItem[];
  skills: SkillGroup[];
};

const videoUrl = "https://youtu.be/OlViYYn-kFo";

export const content: Record<Locale, ContentShape> = {
  en: {
    profile: {
      name: "Sojeong Shin",
      title: "AI Researcher",
      tagline: "Large Language Models · Embeddings · Computer Vision",
      bio: "M.S. Computer Science student at Stony Brook University, researching embedding reliability and calibration for language models. Previously built and deployed computer-vision systems for real-world measurement and human motion understanding, with work recognized by multiple awards.",
      location: "Stony Brook, NY, USA",
      email: "sojeong.shin27@gmail.com",
      resumeUrl: "/resume.pdf",
      photoUrl: "/profile.png",
      links: {
        github: "https://github.com/yourhandle",
        linkedin: "https://linkedin.com/in/yourhandle",
        googleScholar: "https://scholar.google.com/citations?user=xxxx",
      },
    },
    researchAreas: [
      {
        title: "Embedding Reliability & Calibration for Language Models",
        period: "2025 – Present",
        description:
          "M.S. thesis research on DICE (Definition-Induced Calibration of Embeddings), an annotation-free contrastive fine-tuning method that repairs encoder embedding geometry using WordNet dictionary definitions — no human-labeled data or large-scale retraining required. The method nearly doubles baseline performance on sentence-level (STS: 32.8 → 62.6 Spearman) and word-level semantics (similarity & relatedness: 26.5 → 61.8), and holds across model scale, pretraining-data volume, and pretraining objective. Grounded in LLM reliability: encoder representation quality directly governs RAG retrieval, making low-cost embedding repair a practical lever for reducing hallucination in production. Currently under submission.",
        tags: ["LLM", "Embeddings", "Contrastive Learning", "RAG"],
        featured: true,
      },
      {
        title: "Computer Vision & Human Motion Understanding",
        period: "2023 – 2025",
        description:
          "Built and deployed vision systems for real-world measurement and motion analysis, including a monocular camera-based 3D measurement system (deployed in South Korean subway stations), a sensor-free VR workout system, and a real-time mobile posture-correction system.",
        tags: ["Computer Vision", "Pose Estimation", "Deployed Systems"],
      },
      {
        title: "Applied Machine Learning & Signal Processing",
        period: "2022 – 2023",
        description:
          "Worked on time-series forecasting for solar energy production and CNN-based audio classification, focusing on signal decomposition and noise-robust feature engineering.",
        tags: ["Time Series", "Signal Processing", "CNN"],
      },
    ],
    publications: [
      {
        title: "DICE: Definition-Induced Calibration of Embeddings for Language Models",
        label: "M.S. Thesis",
        authors: "Sojeong Shin",
        venue: "Under submission",
        year: 2026,
        tags: ["LLM", "Embeddings", "Contrastive Learning", "RAG"],
        links: {},
        featured: true,
        details: [
          "Developed an annotation-free contrastive fine-tuning method that repairs encoder embedding geometry using WordNet dictionary definitions — no human-labeled data or large-scale retraining required.",
          "Improved sentence-level semantics (STS: 32.8 → 62.6 Spearman) and word-level semantics (similarity & relatedness: 26.5 → 61.8), roughly doubling the baseline on each.",
          "Traced the improvement to a lightweight Bridge Layer (query-space projection) through targeted ablations, and showed the method is architecture-general — holding across parameter scale (xsmall–base), pretraining-data volume (10%/100%), and pretraining objective.",
          "Built a reproducible, backbone-independent evaluation pipeline across 7 task families and 4 language models, integrating standard public benchmarks (SemEval WSD scorer, WSD Hard Benchmark, STS, WiC, analogy, word similarity/relatedness).",
          "Diagnosed MFS bias and embedding-space anisotropy as root causes of degraded representations, using anti-MFS hard sets to verify genuine disambiguation over frequency shortcuts (MFS baseline 0.0 vs. DICE 55.3 macro-F1).",
          "Grounded the work in LLM reliability: encoder representation quality directly governs RAG retrieval, making low-cost embedding repair a practical lever for reducing hallucination in production.",
          "Tech stack: Python, PyTorch, HuggingFace Transformers, WordNet, large-scale datasets.",
        ],
      },
    ],
    projects: [
      {
        title: "Monocular Camera-based 3D Measurement System",
        description:
          "A geometric algorithm that estimates vertical distances using a single RGB camera, removing the need for depth sensors or multi-view setups. Combined OpenCV checkerboard intrinsic calibration and PnP-based extrinsic calibration with DeepLabV3+ semantic segmentation to extract person masks, then back-projected key pixels into 3D world coordinates via ray–plane intersection. Deployed in South Korean subway stations for public exercise services.",
        tags: ["Computer Vision", "PyTorch", "OpenCV", "DeepLabV3+", "Deployed Product"],
        award: "Provost's Award, SUNY Research Challenge 2025",
        links: {},
      },
      {
        title: "Satellite-based Urban Heat Island Analysis Dashboard",
        description:
          "An end-to-end satellite imagery pipeline studying urban heat island effects in Seoul, using Google Earth Engine and Google Cloud Storage for large-scale geospatial processing. Delivered as an interactive web dashboard to support data-driven mitigation and infrastructure planning.",
        tags: ["Google Earth Engine", "GCS", "Geospatial", "Dashboard"],
        links: {},
      },
      {
        title: "AI Personal Training Service in VR Space",
        description:
          "A single-camera VR workout system using KalidoKit and MediaPipe that enables sensor-free exercise experiences, with accurate posture estimation via Euler rotation, quaternion math, and linear regression.",
        tags: ["MediaPipe", "KalidoKit", "VR", "Pose Estimation"],
        award: "2nd Place, INU Graduation Project Competition 2024",
        links: { video: videoUrl },
      },
      {
        title: "God Road — Parking-Sharing Platform (AWS Glocal Hackathon)",
        description:
          "Led a cross-university team as team leader to build a parking-sharing platform addressing local urban parking challenges, using LLM prompt engineering, at the AWS Glocal Hackathon with students from five universities.",
        tags: ["LLM", "Prompt Engineering", "Hackathon", "Team Leadership"],
        links: {},
      },
      {
        title: "Real-time Posture Correction on Mobile Device",
        description:
          "A real-time posture correction system using a smartphone camera to address forward head posture and lumbar disc health, extracting 3D pose via MediaPipe and detecting abnormal posture with a One-Class SVM.",
        tags: ["MediaPipe", "One-Class SVM", "Mobile", "Healthcare AI"],
        award: "1st Place, INU AI Competition 2023",
        links: {},
      },
      {
        title: "Solar Energy Production Forecasting",
        description:
          "Analyzed large-scale solar energy datasets from Calgary, applying LOESS smoothing and FFT-based decomposition to separate trend, seasonality, and frequency components, then forecast production using ACF, PACF, and Holt–Winters methods.",
        tags: ["Time Series", "FFT", "Holt-Winters"],
        links: {},
      },
      {
        title: "Audio Classification & Noise Reduction Model",
        description:
          "Diagnosed ambient noise as the bottleneck limiting voice classification accuracy to 50%, then engineered a preprocessing pipeline with Gaussian filtering and spectrogram transformations to extract noise-robust CNN features — reaching 98.8% final accuracy and 1st place in the course project.",
        tags: ["CNN", "Audio", "Signal Processing"],
        award: "1st Place, Course Project",
        links: {},
      },
    ],
    education: [
      {
        degree: "M.S. in Computer Science",
        org: "Stony Brook University (SUNY)",
        period: "Expected June 2026",
        gpa: "GPA 3.92/4.0",
      },
      {
        degree: "B.S. in Computer Science and Engineering",
        org: "Incheon National University, South Korea",
        period: "August 2024",
        gpa: "GPA 3.62/4.5",
      },
    ],
    teaching: [
      {
        role: "Robotics & Machine Learning Boot Camp TA",
        org: "Incheon Academy of Science and Arts (IASA)",
        period: "July 2025",
        description:
          "Led lab sessions for introductory machine learning (transfer learning, CNNs) and robotics (reinforcement learning) courses.",
      },
      {
        role: "English Conversation Instructor",
        org: "ICME",
        period: "Sep 2023 – Apr 2024",
        description:
          "Taught science in English to diverse groups of students through structured lessons.",
      },
      {
        role: "Programming Language Instructor",
        org: "C-Cube Coding Institution",
        period: "Jan – Aug 2022",
        description: "Taught Python, C, and Scratch to diverse groups of students.",
      },
    ],
    international: [
      {
        role: "Exchange Student",
        org: "California State University",
        period: "Fall 2022",
        description: "Completed an international exchange semester.",
      },
      {
        role: "ESL Volunteer Educator",
        org: "GRA Korea (Singapore & Malaysia)",
        period: "January 2016",
        description: "Volunteered in English-as-a-second-language education.",
      },
    ],
    awards: [
      {
        title: "Provost's Award, Research Challenge",
        org: "Stony Brook University",
        period: "November 2025",
      },
      {
        title: "2nd Place, Graduation Project Competition",
        org: "Incheon National University, Dept. of Computer Science",
        period: "May 2024",
      },
      {
        title: "1st Place, AI Competition",
        org: "Incheon National University",
        period: "November 2023",
      },
    ],
    skills: [
      { category: "Programming Languages", items: ["Python", "MATLAB", "C", "C++", "HTML"] },
      {
        category: "ML Frameworks",
        items: ["PyTorch", "HuggingFace Transformers", "TensorFlow", "Scikit-learn", "Keras"],
      },
      {
        category: "Vision Tools",
        items: ["Event Camera", "RGB Camera", "MediaPipe", "MetaVision", "Google Earth Engine"],
      },
      {
        category: "Other Tools",
        items: ["GitHub", "Slack", "Notion", "Discord", "Google Cloud Storage"],
      },
    ],
  },
  ko: {
    profile: {
      name: "Sojeong Shin",
      title: "AI 연구자",
      tagline: "대규모 언어 모델 · 임베딩 · 컴퓨터 비전",
      bio: "Stony Brook University에서 컴퓨터공학 석사 과정을 밟고 있으며, 언어 모델의 임베딩 신뢰성과 보정(calibration)을 연구하고 있습니다. 이전에는 실세계 측정과 인간 동작 이해를 위한 컴퓨터 비전 시스템을 개발해 실제로 배포한 경험이 있으며, 다수의 수상 경력이 있습니다.",
      location: "미국 뉴욕주 스토니브룩",
      email: "sojeong.shin27@gmail.com",
      resumeUrl: "/resume.pdf",
      photoUrl: "/profile.png",
      links: {
        github: "https://github.com/yourhandle",
        linkedin: "https://linkedin.com/in/yourhandle",
        googleScholar: "https://scholar.google.com/citations?user=xxxx",
      },
    },
    researchAreas: [
      {
        title: "언어 모델을 위한 임베딩 신뢰성 및 보정 연구",
        period: "2024 – 현재",
        description:
          "석사 학위논문 연구인 DICE(Definition-Induced Calibration of Embeddings)는 WordNet 사전 정의를 활용해 인코더 임베딩의 기하학적 구조를 복원하는 무라벨(annotation-free) 대조학습 파인튜닝 기법입니다. 사람이 라벨링한 데이터나 대규모 재학습 없이도 문장 수준 의미(STS: 32.8 → 62.6 Spearman)와 단어 수준 의미(유사도·연관성: 26.5 → 61.8) 성능을 기준선 대비 거의 두 배로 향상시켰으며, 모델 규모·사전학습 데이터량·사전학습 목적함수에 관계없이 일관되게 적용됩니다. 인코더 표현 품질이 RAG 검색 품질을 직접 좌우한다는 점에서, 이 연구는 프로덕션 환경의 할루시네이션을 줄이는 저비용 임베딩 개선 방법으로서 LLM 신뢰성과 직결됩니다. 현재 투고 중입니다.",
        tags: ["LLM", "임베딩", "대조학습", "RAG"],
        featured: true,
      },
      {
        title: "컴퓨터 비전 및 인체 동작 이해",
        period: "2023 – 2025",
        description:
          "단일 RGB 카메라 기반 3D 측정 시스템(한국 지하철역에 실제 배포), 별도 센서 없이 동작하는 VR 운동 시스템, 스마트폰 기반 실시간 자세 교정 시스템 등 실세계 측정 및 동작 분석을 위한 비전 시스템을 개발하고 배포했습니다.",
        tags: ["컴퓨터 비전", "자세 추정", "배포된 시스템"],
      },
      {
        title: "응용 머신러닝 및 신호 처리",
        period: "2022 – 2023",
        description:
          "태양광 에너지 생산량 시계열 예측과 CNN 기반 오디오 분류 연구를 수행했으며, 신호 분해와 잡음에 강건한 특징 추출에 집중했습니다.",
        tags: ["시계열", "신호 처리", "CNN"],
      },
    ],
    publications: [
      {
        title: "DICE: Definition-Induced Calibration of Embeddings for Language Models",
        label: "석사 학위논문",
        authors: "Sojeong Shin",
        venue: "투고 중",
        year: 2026,
        tags: ["LLM", "임베딩", "대조학습", "RAG"],
        links: {},
        featured: true,
        details: [
          "사람이 라벨링한 데이터나 대규모 재학습 없이, WordNet 사전 정의를 활용해 인코더 임베딩의 기하학적 구조를 복원하는 무라벨(annotation-free) 대조학습 파인튜닝 기법을 개발했습니다.",
          "문장 수준 의미(STS: 32.8 → 62.6 Spearman)와 단어 수준 의미(유사도·연관성: 26.5 → 61.8)를 각각 기준선 대비 약 두 배로 향상시켰습니다.",
          "타겟 어블레이션을 통해 성능 향상의 원인이 경량 Bridge Layer(쿼리 공간 프로젝션)임을 규명했으며, 모델 규모(xsmall–base)·사전학습 데이터량(10%/100%)·사전학습 목적함수와 무관하게 일관되게 적용되는 아키텍처 범용적 방법임을 보였습니다.",
          "SemEval WSD 스코어러, WSD Hard Benchmark, STS, WiC, 유추, 단어 유사도/연관성 등 표준 공개 벤치마크를 통합해 7개 태스크 유형과 4개 언어 모델에 걸쳐 재현 가능한 백본 독립적 평가 파이프라인을 구축했습니다.",
          "MFS 편향과 임베딩 공간의 비등방성(anisotropy)이 표현 품질 저하의 근본 원인임을 진단했으며, anti-MFS hard set을 활용해 빈도 기반 단축 경로가 아닌 실제 의미 구분 능력을 검증했습니다 (MFS 기준선 0.0 대비 DICE 55.3 macro-F1).",
          "인코더 표현 품질이 RAG 검색 품질을 직접 좌우한다는 점에서, 프로덕션 환경의 할루시네이션을 줄이는 저비용 임베딩 개선 방법으로서 LLM 신뢰성과 직결됩니다.",
          "기술 스택: Python, PyTorch, HuggingFace Transformers, WordNet, 대규모 데이터셋.",
        ],
      },
    ],
    projects: [
      {
        title: "단일 카메라 기반 3D 측정 시스템",
        description:
          "단일 RGB 카메라만으로 수직 거리를 추정하는 기하학적 알고리즘으로, 깊이 센서나 다중 카메라 없이도 동작합니다. OpenCV 체커보드 기반 내부 파라미터 보정과 PnP 기반 외부 파라미터 보정을 결합하고, DeepLabV3+ 시맨틱 분할로 인물 마스크를 추출한 뒤 ray–plane intersection으로 주요 픽셀을 3D 좌표로 역투영했습니다. 한국 지하철역의 공공 운동 서비스에 실제 배포되었습니다.",
        tags: ["컴퓨터 비전", "PyTorch", "OpenCV", "DeepLabV3+", "배포된 제품"],
        award: "Provost's Award, SUNY Research Challenge 2025",
        links: {},
      },
      {
        title: "위성 기반 도시 열섬 분석 대시보드",
        description:
          "서울의 도시 열섬 현상을 분석하는 엔드투엔드 위성 영상 파이프라인으로, Google Earth Engine과 Google Cloud Storage를 활용해 대규모 지리공간 데이터를 처리했습니다. 데이터 기반 완화 전략과 인프라 계획 수립을 지원하는 인터랙티브 웹 대시보드로 제공했습니다.",
        tags: ["Google Earth Engine", "GCS", "지리공간 분석", "대시보드"],
        links: {},
      },
      {
        title: "VR 공간 AI 퍼스널 트레이닝 서비스",
        description:
          "KalidoKit과 MediaPipe를 활용한 단일 카메라 기반 VR 운동 시스템으로, 별도 센서 없이 오일러 회전·쿼터니언 연산·선형 회귀를 통해 정확한 자세 추정을 구현했습니다.",
        tags: ["MediaPipe", "KalidoKit", "VR", "자세 추정"],
        award: "인천대학교 졸업작품 경진대회 2위, 2024",
        links: { video: videoUrl },
      },
      {
        title: "God Road — 주차 공유 플랫폼 (AWS Glocal 해커톤)",
        description:
          "5개 대학 학생들이 참여한 AWS Glocal 해커톤에서 팀장으로서 LLM 프롬프트 엔지니어링을 활용해 도심 주차 문제를 해결하는 주차 공유 플랫폼 개발을 이끌었습니다.",
        tags: ["LLM", "프롬프트 엔지니어링", "해커톤", "팀 리딩"],
        links: {},
      },
      {
        title: "모바일 실시간 자세 교정 시스템",
        description:
          "스마트폰 카메라로 거북목과 허리 디스크 건강 문제를 해결하는 실시간 자세 교정 시스템으로, MediaPipe로 3D 자세를 추출하고 One-Class SVM으로 비정상 자세를 탐지했습니다.",
        tags: ["MediaPipe", "One-Class SVM", "모바일", "헬스케어 AI"],
        award: "인천대학교 AI 경진대회 1위, 2023",
        links: {},
      },
      {
        title: "태양광 에너지 생산량 예측",
        description:
          "캘거리의 대규모 태양광 에너지 데이터셋을 분석해 LOESS 평활화와 FFT 기반 분해로 추세·계절성·주파수 성분을 분리하고, ACF·PACF·Holt–Winters 기법으로 생산량을 예측했습니다.",
        tags: ["시계열", "FFT", "Holt-Winters"],
        links: {},
      },
      {
        title: "오디오 분류 및 잡음 제거 모델",
        description:
          "음성 분류 정확도를 50%로 제한하던 병목이 주변 잡음임을 진단하고, 가우시안 필터링과 스펙트로그램 변환을 활용한 전처리 파이프라인으로 잡음에 강건한 CNN 특징을 추출해 최종 정확도 98.8%를 달성, 수업 프로젝트 1위를 차지했습니다.",
        tags: ["CNN", "오디오", "신호 처리"],
        award: "수업 프로젝트 1위",
        links: {},
      },
    ],
    education: [
      {
        degree: "컴퓨터공학 석사",
        org: "Stony Brook University (SUNY)",
        period: "2026년 6월 졸업",
        gpa: "GPA 3.92/4.0",
      },
      {
        degree: "컴퓨터공학부 학사",
        org: "인천대학교",
        period: "2024년 8월 졸업",
        gpa: "GPA 3.62/4.5",
      },
    ],
    teaching: [
      {
        role: "로보틱스 및 머신러닝 부트캠프 TA",
        org: "인천과학예술영재학교 (IASA)",
        period: "2025년 7월",
        description:
          "전이학습·CNN을 다루는 머신러닝 입문 강의와 강화학습 중심의 로보틱스 강의에서 실습 세션을 진행했습니다.",
      },
      {
        role: "영어 회화 강사",
        org: "ICME",
        period: "2023년 9월 – 2024년 4월",
        description: "다양한 학생들을 대상으로 구조화된 수업을 통해 영어로 과학을 가르쳤습니다.",
      },
      {
        role: "프로그래밍 강사",
        org: "C-Cube 코딩 학원",
        period: "2022년 1월 – 8월",
        description: "다양한 학생들에게 Python, C, Scratch를 가르쳤습니다.",
      },
    ],
    international: [
      {
        role: "교환학생",
        org: "California State University",
        period: "2022년 가을학기",
        description: "미국 교환학생 프로그램을 이수했습니다.",
      },
      {
        role: "ESL 봉사 교육자",
        org: "GRA Korea (싱가포르 & 말레이시아)",
        period: "2016년 1월",
        description: "영어 교육 봉사활동에 참여했습니다.",
      },
    ],
    awards: [
      {
        title: "Provost's Award (총장상), 연구 챌린지",
        org: "Stony Brook University",
        period: "2025년 11월",
      },
      {
        title: "졸업작품 경진대회 2위",
        org: "인천대학교 컴퓨터공학부",
        period: "2024년 5월",
      },
      {
        title: "AI 경진대회 1위",
        org: "인천대학교",
        period: "2023년 11월",
      },
    ],
    skills: [
      { category: "프로그래밍 언어", items: ["Python", "MATLAB", "C", "C++", "HTML"] },
      {
        category: "ML 프레임워크",
        items: ["PyTorch", "HuggingFace Transformers", "TensorFlow", "Scikit-learn", "Keras"],
      },
      {
        category: "비전 도구",
        items: ["이벤트 카메라", "RGB 카메라", "MediaPipe", "MetaVision", "Google Earth Engine"],
      },
      {
        category: "기타 도구",
        items: ["GitHub", "Slack", "Notion", "Discord", "Google Cloud Storage"],
      },
    ],
  },
};
