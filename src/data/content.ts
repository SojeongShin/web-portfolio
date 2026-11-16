import type { Locale } from "@/i18n/locale-context";

export type Profile = {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  resumeUrl: string;
};

export type SlideImage = {
  url: string;
  width: number;
  height: number;
  caption?: string;
};

export type ResearchSlide = {
  title: string;
  body: string;
  images?: SlideImage[];
};

export type ResearchArea = {
  title: string;
  period: string;
  description: string;
  tags: string[];
  featured?: boolean;
  paper?: { label: string; authors: string; venue: string };
  slides?: ResearchSlide[];
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
  projects: ProjectItem[];
  education: EducationItem[];
  work: ExperienceItem[];
  teaching: ExperienceItem[];
  international: ExperienceItem[];
  awards: AwardItem[];
  skills: SkillGroup[];
};

const videoUrl = "https://youtu.be/OlViYYn-kFo";

const sharedSkills = {
  language: ["Python", "JavaScript", "Java", "C", "C++", "HTML", "CSS"],
  llm: [
    "RAG",
    "Claude Opus 5.5",
    "MarkItDown",
    "HuggingFace Transformers",
    "MTEB",
    "WSD Evaluation",
  ],
  mlVision: ["PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "MediaPipe", "DeepLabV3+"],
  dataCloud: ["Google Cloud Storage", "Google Earth Engine", "Folium", "Streamlit"],
  tools: ["Git", "GitHub", "Claude Code", "n8n", "Notion", "Slack", "Microsoft Office"],
};

export const content: Record<Locale, ContentShape> = {
  en: {
    profile: {
      name: "Sojeong Shin",
      title: "AI Researcher",
      tagline: "NLP · LLM Embeddings · Evaluation Design",
      bio: "M.S. in Computer Science from Stony Brook University (2026). I research annotation-free fine-tuning that improves language model embeddings using only dictionary definitions, and I design evaluations that separate where a score gain actually comes from. Previously, I worked on a single-camera height measurement service deployed in South Korean subway stations.",
      resumeUrl: "/CV-SojeongShin.pdf",
    },
    researchAreas: [
      {
        title: "Annotation-free Embedding Fine-tuning for Language Models",
        period: "2025 – Present",
        description:
          "DECAF extends my M.S. thesis, DICE (Definition-Induced Calibration of Embeddings), from encoders to decoder LLMs: an annotation-free fine-tuning method that uses WordNet dictionary definitions. Across 10 backbones (encoders, embedding models, and LLMs) evaluated on 41 MTEB tasks, SemEval WSD, and Hard WSD, it raised the three LLMs' word sense disambiguation by +24.8%p and general embedding (MTEB) performance by +20.7%p on average, while embedding-only models kept over 99% of their MTEB performance.",
        tags: ["LLM", "Embeddings", "WSD", "MTEB", "Evaluation"],
        featured: true,
        paper: {
          label: "DECAF · First Author",
          authors: "Sojeong Shin et al.",
          venue: "Under submission (NAACL)",
        },
        slides: [
          {
            title: "Problem & Background",
            body: "Embeddings are the foundation of the retrieval step that keeps LLMs grounded and reduces hallucination. Yet language model embeddings tend to read a word only in its most frequent sense (MFS bias), and the embedding space is anisotropic. The goal of this research is to repair that representation cheaply, without any new human-labeled data — especially valuable in low-resource domains where such data is scarce.",
            images: [
              {
                url: "/research/sense_conflation.png",
                width: 1360,
                height: 860,
                caption: "A single embedding vector is pulled toward the most frequent sense.",
              },
              {
                url: "/research/semcor-vs-dictionary.png",
                width: 1360,
                height: 744,
                caption: "DICE uses dictionary definitions only — never a sense-annotated corpus.",
              },
            ],
          },
          {
            title: "Methodology (M.S. Thesis: DICE)",
            body: "DICE is an annotation-free contrastive fine-tuning method that repairs encoder embedding geometry using WordNet dictionary definitions. A lightweight Bridge Layer (query-space projection) drives the improvement, and the method was validated across parameter scale (xsmall–base), pretraining-data volume (10%/100%), and pretraining objective, with a reproducible evaluation pipeline spanning 7 task families (SemEval WSD scorer, WSD Hard Benchmark, STS, WiC, analogy, word similarity/relatedness). Tech stack: Python, PyTorch, HuggingFace Transformers, WordNet.",
            images: [{ url: "/research/diagram.svg", width: 3200, height: 1200 }],
          },
          {
            title: "Results (M.S. Thesis: DICE)",
            body: "Sentence-level semantics (STS: 32.8 → 62.6 Spearman) and word-level semantics (similarity & relatedness: 26.5 → 61.8) improved by roughly 2x over the baseline. On a public hard WSD set built to defeat the most-frequent-sense shortcut, DICE reached 55.3 macro-F1 versus a 0.0 MFS baseline — evidence of real sense discrimination rather than a frequency shortcut. For ambiguous words like \"bank\" and \"crane,\" similarity heatmaps and 3D PCA projections show senses collapsed together under the baseline but cleanly separated into distinct clusters after DICE.",
            images: [
              {
                url: "/research/results/3d_bank_deberta_base_heatmap.svg",
                width: 784,
                height: 288,
                caption:
                  "'bank' sense-similarity: the baseline collapses senses, DICE separates them into clear blocks.",
              },
              {
                url: "/research/results/3d_bank_deberta_base_scatter3d.svg",
                width: 648,
                height: 331,
                caption: "'bank' embeddings in 3D PCA: DICE pulls the three senses apart.",
              },
              {
                url: "/research/results/3d_crane_deberta_base_heatmap.svg",
                width: 785,
                height: 304,
                caption: "'crane' sense-similarity shows the same block structure after calibration.",
              },
              {
                url: "/research/results/3d_crane_deberta_base_scatter3d.svg",
                width: 647,
                height: 331,
                caption: "'crane' embeddings in 3D PCA, mirroring the separation seen for 'bank'.",
              },
            ],
          },
          {
            title: "Extension to Decoder LLMs (DECAF)",
            body: "DECAF scales the evaluation to 10 backbones — encoders, embedding-only models, and LLMs including Qwen — on all 41 MTEB tasks plus SemEval WSD and Hard WSD. Across the three LLMs, WSD rose by +24.8%p and MTEB by +20.7%p on average; embedding-only models kept over 99% of their MTEB performance while gaining sense discrimination. Extracting an in-context word embedding from a decoder requires appending a prompt, so I separated the effect of the prompt from that of fine-tuning by contrasting my prompt with PromptEOL: the gain shared by every model came from the fine-tuning method, while the prompt added further gains only where model and prompt fit well (Mistral-7B with PromptEOL). The lesson: when a score goes up, first separate where the gain came from.",
          },
          {
            title: "Experiment Operations with Claude Code Agents",
            body: "Validating close to 50 evaluation tasks across 10 backbones in parallel led to runs referencing the wrong results. I automated experiment operations with Claude Code, and when a single agent planning, running, and judging its own work began to skew its evaluations, I split the work into three roles: a leader that evaluates plans, results, and the other agents' output against the experiment goal; a runner that schedules jobs around GPU and memory limits; and a reviewer that checks each run against pre-written experiment protocols. Each agent got different read/write permissions per Markdown document so their contexts stay separate, no plan runs until I approve it, and results are kept on GitHub as cross-referenced documents so every number can be traced back to its configuration.",
          },
        ],
      },
      {
        title: "Computer Vision & Human Motion Understanding",
        period: "2023 – 2025",
        description:
          "Worked on vision systems for real-world measurement and motion analysis: a single-camera height measurement service deployed in South Korean subway stations, a VR workout coaching web app built on pose estimation, and a real-time mobile posture-correction system.",
        tags: ["Computer Vision", "Pose Estimation", "Deployed Systems"],
      },
      {
        title: "Applied Machine Learning & Signal Processing",
        period: "2024",
        description:
          "Coursework projects on time-series forecasting for solar energy production and CNN-based voice classification under everyday noise, focusing on signal decomposition and noise-robust feature engineering.",
        tags: ["Time Series", "Signal Processing", "CNN"],
      },
    ],
    projects: [
      {
        title: "Internal Policy RAG Chatbot for Employees (LG Electronics AX School)",
        description:
          "Led a team building a RAG chatbot that answers employees' questions from internal policy documents such as the code of conduct, ethics, tax, and anti-bribery policies. Designed the PRD and the prompt specification (input/output format and examples), converted PDFs to Markdown with MarkItDown instead of feeding them in raw to save tokens, and deployed with GitHub Actions.",
        tags: ["RAG", "LLM", "Prompt Design", "MarkItDown", "GitHub Actions", "Team Lead"],
        links: {},
      },
      {
        title: "Single-Camera Height Measurement Service",
        description:
          "As a participating researcher, worked on a monocular 3D measurement system that estimates height from a single RGB camera (DeepLabV3+ segmentation, camera calibration, ray–plane intersection), deployed in South Korean subway stations. In real user footage, hats and tied-up hair were segmented as part of the person and caused errors; without retraining the model, I extracted the top contour, flagged segments that broke the normal curvature as outliers, and interpolated over the remaining points — keeping the error within 4.4 mm.",
        tags: ["Computer Vision", "PyTorch", "OpenCV", "DeepLabV3+", "Deployed Product"],
        award: "Provost's Award, SUNY AI Research Challenge 2025",
        links: {},
      },
      {
        title: "Satellite Imagery Pipeline & Climate Dashboard",
        description:
          "Freelance data engineering at EnergyLife: built a Landsat satellite-imagery processing pipeline on Google Earth Engine and Google Cloud Storage, and delivered the analysis as an interactive Folium web dashboard for climate monitoring.",
        tags: ["Google Earth Engine", "GCS", "Landsat", "Folium", "Dashboard"],
        links: {},
      },
      {
        title: "AI Workout Coaching Web App in VR",
        description:
          "Capstone design project (team of 4): a single-camera VR workout web app that estimates posture with MediaPipe, detects abnormal movement with a One-Class SVM, and renders 3D motion in VR — no extra sensors required.",
        tags: ["MediaPipe", "One-Class SVM", "VR", "Pose Estimation"],
        award: "Excellence Award (2nd overall), INU Graduation Project Exhibition 2024",
        links: { video: videoUrl },
      },
      {
        title: "GOD-gil — Public Parking Guidance Chatbot (ART-AWS Glocal Hackathon)",
        description:
          "Led a 5-person team through a 3-day hackathon to build a chatbot that guides users to public parking, and designed the LLM prompts. When a teammate considered leaving under the time pressure, I shifted their role to the presentation and took over the open development work myself, and the team finished through the final pitch.",
        tags: ["LLM", "Prompt Design", "Chatbot", "Team Lead"],
        award: "Special Leadership Award",
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
          "Data mining course project on Calgary solar energy data: applied LOESS smoothing and FFT-based decomposition to separate trend, seasonality, and frequency components, used ACF to pin down the evidence behind anomalous panels, and reached 85.6% forecast accuracy.",
        tags: ["Time Series", "FFT", "LOESS", "Data Mining"],
        links: {},
      },
      {
        title: "Male/Female Voice Classification under Everyday Noise",
        description:
          "Machine learning course project (team of 2): ambient noise limited voice classification accuracy to 50%. Separated the voice frequency band with Gaussian filtering and converted it to spectrograms for CNN training, reaching 98.8% accuracy on noisy speech.",
        tags: ["CNN", "Audio", "Signal Processing"],
        award: "2nd Place, Course Project",
        links: {},
      },
    ],
    education: [
      {
        degree: "M.S. in Computer Science",
        org: "Stony Brook University (SUNY)",
        period: "Graduated August 2026",
        gpa: "GPA 3.92/4.0",
      },
      {
        degree: "B.S. in Computer Science and Engineering",
        org: "Incheon National University, South Korea",
        period: "Graduated August 2024",
        gpa: "GPA 3.62/4.5",
      },
      {
        degree: "Exchange Student",
        org: "California State University",
        period: "Aug – Dec 2022",
        gpa: "GPA 4.06/4.5",
      },
    ],
    work: [
      {
        role: "Data Engineering (Freelance)",
        org: "EnergyLife",
        period: "Jun 30 – Aug 30, 2025",
        description:
          "Built a Landsat satellite-imagery processing pipeline on Google Earth Engine and Google Cloud Storage, and a Folium dashboard for climate monitoring.",
      },
      {
        role: "Peer Reviewer",
        org: "ACL Rolling Review (ARR) / EMNLP",
        period: "",
        description: "Reviewed papers submitted to ARR / EMNLP.",
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
        role: "ESL Volunteer Educator",
        org: "GRA Korea (Singapore & Malaysia)",
        period: "January 2016",
        description: "Volunteered in English-as-a-second-language education.",
      },
    ],
    awards: [
      {
        title: "Provost's Award, SUNY AI Research Challenge",
        org: "SUNY · Incheon Technopark",
        period: "November 2025",
      },
      {
        title: "Excellence Award (2nd overall), Graduation Project Exhibition",
        org: "Incheon National University, Dept. of Computer Science and Engineering",
        period: "May 2024",
      },
      {
        title: "1st Place, AI Competition",
        org: "Incheon National University",
        period: "November 2023",
      },
      {
        title: "Special Leadership Award",
        org: "ART-AWS Glocal Hackathon",
        period: "",
      },
    ],
    skills: [
      { category: "Programming Languages", items: sharedSkills.language },
      { category: "LLM · NLP", items: sharedSkills.llm },
      { category: "ML · Vision", items: sharedSkills.mlVision },
      { category: "Data · Cloud", items: sharedSkills.dataCloud },
      { category: "Tools", items: sharedSkills.tools },
      { category: "Language Proficiency", items: ["English — OPIc IH (Sep 2026)"] },
    ],
  },
  ko: {
    profile: {
      name: "신소정",
      title: "AI 연구자",
      tagline: "NLP · LLM 임베딩 · 평가 설계",
      bio: "Stony Brook University에서 컴퓨터과학 석사를 마쳤습니다(2026). 사전 정의문만으로 언어모델 임베딩을 개선하는 무라벨(annotation-free) 파인튜닝을 연구하며, 점수가 오르면 그 향상이 어디서 왔는지 나눠 보는 평가를 설계합니다. 이전에는 지하철역에 배포된 단일 카메라 신장측정 서비스에 참여했습니다.",
      resumeUrl: "/CV-SojeongShin.pdf",
    },
    researchAreas: [
      {
        title: "언어모델을 위한 무라벨 임베딩 파인튜닝",
        period: "2025 – 현재",
        description:
          "DECAF는 석사 학위논문 DICE(Definition-Induced Calibration of Embeddings)를 인코더에서 디코더 LLM까지 확장한, 사전(WordNet) 기반 annotation-free 임베딩 파인튜닝 기법입니다. 인코더·임베딩 모델·LLM 등 10개 백본을 MTEB 41개 태스크와 SemEval WSD·Hard WSD로 평가해, LLM 3종의 의미 구분(WSD) 성능을 평균 24.8%p, 일반 임베딩(MTEB) 성능을 평균 20.7%p 높였고, 임베딩 전용 모델은 MTEB 성능을 99% 이상 유지했습니다.",
        tags: ["LLM", "임베딩", "WSD", "MTEB", "평가"],
        featured: true,
        paper: {
          label: "DECAF · 제1저자",
          authors: "Sojeong Shin et al.",
          venue: "NAACL 투고 중",
        },
        slides: [
          {
            title: "문제 및 배경",
            body: "임베딩은 LLM 환각을 줄이는 검색의 토대입니다. 그런데 언어모델 임베딩은 단어를 자주 쓰이는 의미로만 해석하는 편향(MFS 편향)과 임베딩 공간의 비등방성을 갖고 있습니다. 새로운 사람 라벨링 데이터 없이 이 표현을 저비용으로 복원하는 것이 이 연구의 핵심 동기이며, 라벨 데이터가 부족한 저자원 도메인에서 특히 의미가 있습니다.",
            images: [
              {
                url: "/research/sense_conflation.png",
                width: 1360,
                height: 860,
                caption: "단일 임베딩 벡터가 최빈 의미(MFS) 쪽으로 쏠리는 현상.",
              },
              {
                url: "/research/semcor-vs-dictionary.png",
                width: 1360,
                height: 744,
                caption: "DICE는 의미 주석 코퍼스가 아닌 사전 정의만 사용합니다.",
              },
            ],
          },
          {
            title: "방법론 (석사 학위논문 DICE)",
            body: "DICE는 WordNet 사전 정의를 활용해 인코더 임베딩의 기하학적 구조를 복원하는 무라벨(annotation-free) 대조학습 파인튜닝 기법입니다. 경량 Bridge Layer(쿼리 공간 프로젝션)가 성능 향상을 이끌며, 모델 규모(xsmall–base)·사전학습 데이터량(10%/100%)·사전학습 목적함수에 걸쳐 검증했습니다. SemEval WSD 스코어러, WSD Hard Benchmark, STS, WiC, 유추, 단어 유사도/연관성 등 7개 태스크 유형을 통합한 재현 가능한 평가 파이프라인을 구축했습니다. 기술 스택: Python, PyTorch, HuggingFace Transformers, WordNet.",
            images: [{ url: "/research/diagram.svg", width: 3200, height: 1200 }],
          },
          {
            title: "결과 (석사 학위논문 DICE)",
            body: "문장 수준 의미(STS: 32.8 → 62.6 Spearman)와 단어 수준 의미(유사도·연관성: 26.5 → 61.8)를 기준선 대비 약 두 배로 향상시켰습니다. 최빈 의미로 찍는 지름길이 통하지 않도록 만든 공개 hard WSD 평가셋에서는 MFS 기준선 0.0 대비 55.3 macro-F1을 기록해, 빈도 지름길이 아닌 실제 의미 구분 능력임을 확인했습니다. 'bank', 'crane'처럼 여러 의미를 가진 단어는 기준선에서 의미들이 뭉쳐 있지만, DICE 적용 후에는 유사도 히트맵과 3D PCA 투영 모두에서 뚜렷이 분리된 군집으로 나뉩니다.",
            images: [
              {
                url: "/research/results/3d_bank_deberta_base_heatmap.svg",
                width: 784,
                height: 288,
                caption: "'bank'의 의미 유사도 히트맵: 기준선은 의미를 뭉뚱그리지만 DICE는 명확한 블록으로 분리합니다.",
              },
              {
                url: "/research/results/3d_bank_deberta_base_scatter3d.svg",
                width: 648,
                height: 331,
                caption: "'bank' 임베딩의 3D PCA: DICE 적용 후 세 가지 의미가 뚜렷이 갈라집니다.",
              },
              {
                url: "/research/results/3d_crane_deberta_base_heatmap.svg",
                width: 785,
                height: 304,
                caption: "'crane'의 의미 유사도 히트맵에서도 보정 후 동일한 블록 구조가 나타납니다.",
              },
              {
                url: "/research/results/3d_crane_deberta_base_scatter3d.svg",
                width: 647,
                height: 331,
                caption: "'crane' 임베딩의 3D PCA — 'bank'에서 본 것과 같은 분리 양상을 보입니다.",
              },
            ],
          },
          {
            title: "디코더 LLM으로 확장 (DECAF)",
            body: "DECAF는 Qwen을 포함한 LLM, 인코더, 임베딩 전용 모델 등 10개 백본으로 평가를 넓혀 MTEB 41개 태스크 전체와 SemEval WSD·Hard WSD로 검증했습니다. LLM 3종에서 의미 구분(WSD) 성능을 평균 24.8%p, 일반 임베딩(MTEB) 성능을 평균 20.7%p 높였고, 임베딩 전용 모델은 MTEB 성능을 99% 이상 유지하며 의미 구분 능력을 더했습니다. 디코더에서 문장 속 단어 임베딩을 뽑으려면 프롬프트를 붙여야 해서, 제가 쓰던 프롬프트와 PromptEOL을 대조해 프롬프트의 영향과 파인튜닝의 효과를 나눠 봤습니다. 모든 모델에 공통된 향상은 파인튜닝 기법에서 왔고, 프롬프트는 Mistral-7B와 PromptEOL처럼 모델과 프롬프트가 잘 맞을 때 성능을 더했습니다. 점수가 오르면 원인부터 나눠 봐야 한다는 것을 배웠습니다.",
          },
          {
            title: "Claude Code 에이전트로 실험 운영",
            body: "10개 백본에 대해 50개 가까운 평가 태스크를 병렬로 검증하면서 잘못된 결과를 참조하는 문제가 생겨, Claude Code로 실험 운영을 자동화했습니다. 처음에는 에이전트 하나가 계획·실행·평가를 모두 맡았는데 평가가 한쪽으로 치우치는 것이 보여, 역할을 셋으로 나눴습니다. 리더는 실험 목적에 맞춘 페르소나로 계획안·실험 결과·다른 에이전트의 작업물을 평가하고, runner는 GPU와 메모리를 고려해 실험을 배치하며, reviewer는 미리 써 둔 실험 규약을 어기지 않았는지 확인합니다. md 문서마다 읽고 고칠 수 있는 권한을 달리해 맥락이 섞이지 않게 했고, 계획은 제가 승인한 뒤에만 실행되게 했습니다. 결과는 GitHub에 서로 참조하는 문서로 쌓아 수치를 설정까지 되짚을 수 있게 했습니다.",
          },
        ],
      },
      {
        title: "컴퓨터 비전 및 인체 동작 이해",
        period: "2023 – 2025",
        description:
          "지하철역에 배포된 단일 카메라 신장측정 서비스, 자세 추정 기반 VR 운동 지도 웹앱, 스마트폰 기반 실시간 자세 교정 시스템 등 실세계 측정과 동작 분석을 위한 비전 시스템을 개발했습니다.",
        tags: ["컴퓨터 비전", "자세 추정", "배포된 시스템"],
      },
      {
        title: "응용 머신러닝 및 신호 처리",
        period: "2024",
        description:
          "태양광 에너지 생산량 시계열 예측과 생활 노이즈 속 CNN 음성 분류를 수업 프로젝트로 수행했으며, 신호 분해와 잡음에 강건한 특징 추출에 집중했습니다.",
        tags: ["시계열", "신호 처리", "CNN"],
      },
    ],
    projects: [
      {
        title: "임직원용 사내 정책 RAG 챗봇 (LG전자 AX School)",
        description:
          "행동강령·윤리규범·세금·뇌물 정책 문서로 임직원 질문에 답하는 RAG 챗봇을 만드는 팀을 리드했습니다. PRD와 프롬프트 명세(입출력 형식·예시)를 설계하고, 토큰을 아끼기 위해 PDF를 그대로 넣지 않고 MarkItDown으로 변환해 전처리했으며, GitHub Actions로 배포했습니다.",
        tags: ["RAG", "LLM", "프롬프트 설계", "MarkItDown", "GitHub Actions", "팀 리딩"],
        links: {},
      },
      {
        title: "단일 카메라 신장측정 서비스",
        description:
          "참여 연구원으로서 단일 RGB 카메라로 키를 재는 3D 측정 시스템(DeepLabV3+ 분할, 카메라 보정, ray–plane intersection) 개발에 참여했으며, 이 서비스는 지하철역에 배포되었습니다. 실제 이용자 영상에서 모자나 묶어 올린 머리가 사람 영역으로 함께 잡혀 오차가 생기자, 모델 재학습 없이 상단 윤곽을 추출해 정상 곡률을 벗어나는 구간을 이상치로 정의하고 남은 윤곽점으로 보간해 오차를 4.4mm 이내로 줄였습니다.",
        tags: ["컴퓨터 비전", "PyTorch", "OpenCV", "DeepLabV3+", "배포된 제품"],
        award: "Provost's Award, SUNY AI Research Challenge 2025",
        links: {},
      },
      {
        title: "위성영상 처리 파이프라인 및 기후 모니터링 대시보드",
        description:
          "에너지라이프 데이터 엔지니어링 프리랜서로서 Google Earth Engine과 Google Cloud Storage 기반 Landsat 위성영상 처리 파이프라인을 구축하고, 분석 결과를 Folium 인터랙티브 웹 대시보드로 제공했습니다.",
        tags: ["Google Earth Engine", "GCS", "Landsat", "Folium", "대시보드"],
        links: {},
      },
      {
        title: "VR 환경 개인 운동 AI 지도 웹앱",
        description:
          "4인 팀 캡스톤디자인 프로젝트로, 별도 센서 없이 단일 카메라로 동작하는 VR 운동 웹앱입니다. MediaPipe로 자세를 추정하고 One-Class SVM으로 이상 동작을 분석했으며, VR 3D 모션을 구축했습니다.",
        tags: ["MediaPipe", "One-Class SVM", "VR", "자세 추정"],
        award: "인천대학교 졸업작품회 최우수상 (전체 2위), 2024",
        links: { video: videoUrl },
      },
      {
        title: "GOD길 — 공공 주차 안내 챗봇 (ART-AWS 글로컬 해커톤)",
        description:
          "2박 3일 해커톤에서 5인 팀의 리더로 공공 주차 안내 챗봇을 만들고 LLM 프롬프트를 설계했습니다. 일정 압박 속에 한 팀원이 이탈을 언급하자 그 팀원의 역할을 발표자료 제작으로 바꾸고 빈 개발을 직접 맡아, 팀이 발표까지 완주했습니다.",
        tags: ["LLM", "프롬프트 설계", "챗봇", "팀 리딩"],
        award: "특별 리더상",
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
        title: "캘거리 지역 태양 에너지 예측",
        description:
          "데이터 마이닝 수업 프로젝트로 캘거리 태양광 에너지 데이터를 분석했습니다. LOESS 스무딩과 FFT 분해로 추세·계절성·주파수 성분을 분리하고, ACF로 이상 패널의 근거를 구체화해 예측률 85.6%를 달성했습니다.",
        tags: ["시계열", "FFT", "LOESS", "데이터 마이닝"],
        links: {},
      },
      {
        title: "생활 노이즈 속 남/녀 음성 구분 AI 모델",
        description:
          "기계학습 수업 2인 팀 프로젝트로, 주변 잡음 때문에 음성 분류 정확도가 50%에 머물던 문제를 다뤘습니다. 가우시안 필터링으로 음성 음역의 주파수를 분리하고 스펙트로그램으로 바꿔 CNN을 학습해, 노이즈가 섞인 음성에서 정확도를 98.8%까지 높였습니다.",
        tags: ["CNN", "오디오", "신호 처리"],
        award: "수업 프로젝트 전체 2위",
        links: {},
      },
    ],
    education: [
      {
        degree: "컴퓨터과학 석사",
        org: "Stony Brook University (SUNY)",
        period: "2026년 8월 졸업",
        gpa: "GPA 3.92/4.0",
      },
      {
        degree: "컴퓨터공학부 학사",
        org: "인천대학교",
        period: "2024년 8월 졸업",
        gpa: "GPA 3.62/4.5",
      },
      {
        degree: "교환학생",
        org: "California State University",
        period: "2022년 8월 – 12월",
        gpa: "GPA 4.06/4.5",
      },
    ],
    work: [
      {
        role: "데이터 엔지니어링 (프리랜서)",
        org: "에너지라이프",
        period: "2025년 6월 30일 – 8월 30일",
        description:
          "Google Earth Engine·GCS 기반 Landsat 위성영상 처리 파이프라인과 기후 모니터링용 Folium 대시보드를 구축했습니다.",
      },
      {
        role: "피어 리뷰어",
        org: "ACL Rolling Review (ARR) / EMNLP",
        period: "",
        description: "ARR/EMNLP 투고 논문을 리뷰했습니다.",
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
        role: "ESL 봉사 교육자",
        org: "GRA Korea (싱가포르 & 말레이시아)",
        period: "2016년 1월",
        description: "영어 교육 봉사활동에 참여했습니다.",
      },
    ],
    awards: [
      {
        title: "Provost's Award, SUNY AI Research Challenge",
        org: "SUNY · 인천테크노파크",
        period: "2025년 11월",
      },
      {
        title: "졸업작품회 최우수상 (전체 2위)",
        org: "인천대학교 컴퓨터공학부",
        period: "2024년 5월",
      },
      {
        title: "AI 경진대회 1위",
        org: "인천대학교",
        period: "2023년 11월",
      },
      {
        title: "특별 리더상",
        org: "ART-AWS 글로컬 해커톤",
        period: "",
      },
    ],
    skills: [
      { category: "프로그래밍 언어", items: sharedSkills.language },
      { category: "LLM · NLP", items: sharedSkills.llm },
      { category: "ML · Vision", items: sharedSkills.mlVision },
      { category: "Data · Cloud", items: sharedSkills.dataCloud },
      { category: "도구", items: sharedSkills.tools },
      { category: "어학", items: ["OPIc IH (2026.09)"] },
    ],
  },
};
