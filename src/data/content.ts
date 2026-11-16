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

export type DetailSlide = {
  title: string;
  bullets: string[];
  images?: SlideImage[];
  stacked?: boolean;
};

export type FeaturedProject = {
  title: string;
  period: string;
  bullets: string[];
  tags: string[];
  paper?: { label: string; authors: string; venue: string };
  slides: DetailSlide[];
};

export type ProjectItem = {
  title: string;
  period: string;
  bullets: string[];
  tags: string[];
  award?: string;
  links: { demo?: string; code?: string; video?: string };
};

export type ProjectGroup = {
  label: string;
  featured?: FeaturedProject;
  projects: ProjectItem[];
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
  projectGroups: ProjectGroup[];
  education: EducationItem[];
  work: ExperienceItem[];
  teaching: ExperienceItem[];
  international: ExperienceItem[];
  awards: AwardItem[];
  skills: SkillGroup[];
};

const videoUrl = "https://youtu.be/OlViYYn-kFo";

const fig = {
  senseConflation: { url: "/research/sense_conflation.png", width: 1360, height: 860 },
  semcorVsDictionary: { url: "/research/semcor-vs-dictionary.png", width: 1360, height: 744 },
  decafArchitecture: { url: "/research/decaf/architecture.png", width: 3140, height: 1160 },
  decafWsd: { url: "/research/decaf/wsd.png", width: 3133, height: 1360 },
  decafSts: { url: "/research/decaf/sts.png", width: 3133, height: 1367 },
  decafQualitative: { url: "/research/decaf/qualitative.png", width: 3100, height: 1540 },
  diceDiagram: { url: "/research/diagram.svg", width: 3200, height: 1200 },
  bankHeatmap: { url: "/research/results/3d_bank_deberta_base_heatmap.svg", width: 784, height: 288 },
  bankScatter: { url: "/research/results/3d_bank_deberta_base_scatter3d.svg", width: 648, height: 331 },
  craneHeatmap: { url: "/research/results/3d_crane_deberta_base_heatmap.svg", width: 785, height: 304 },
  craneScatter: { url: "/research/results/3d_crane_deberta_base_scatter3d.svg", width: 647, height: 331 },
};

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
    projectGroups: [
      {
        label: "Graduate (2025 – )",
        featured: {
          title: "DECAF: Dictionary-Enabled Cost-Effective Architecture-Agnostic Fine-tuning for Language Models",
          period: "2025.01 – Present",
          bullets: [
            "Extends my M.S. thesis, DICE (Definition-Induced Calibration of Embeddings), from encoders to decoder LLMs — annotation-free fine-tuning that uses only WordNet dictionary definitions.",
            "Evaluated 10 backbones (LLMs, encoders, and embedding models) on all 41 MTEB tasks, SemEval WSD, and Hard WSD, each trained on a single RTX 3090.",
            "Three LLMs: word sense disambiguation +24.8%p and general embedding (MTEB) +20.7%p on average; embedding-only models kept over 99% of their MTEB performance.",
            "Separated the effect of fine-tuning from that of the decoder prompt (PromptEOL), and ran experiments with role-separated Claude Code agents.",
          ],
          tags: ["LLM", "Embeddings", "WSD", "MTEB", "Evaluation"],
          paper: {
            label: "First Author",
            authors: "Sojeong Shin et al.",
            venue: "Under submission (NAACL)",
          },
          slides: [
            {
              title: "Problem & Background",
              bullets: [
                "Embeddings underpin the retrieval step that grounds LLMs and reduces hallucination.",
                "Language model embeddings tend to read a word only in its most frequent sense (MFS bias).",
                "Existing fixes need costly data: hundreds of millions of sentence pairs, or manually sense-annotated corpora such as SemCor.",
                "Goal: sharpen both word-sense and sentence embeddings using only a dictionary, with no manual labels.",
              ],
              images: [
                { ...fig.senseConflation, caption: "A single embedding vector is pulled toward the most frequent sense." },
                { ...fig.semcorVsDictionary, caption: "DECAF uses dictionary definitions only — never a sense-annotated corpus." },
              ],
            },
            {
              title: "Method: DECAF Architecture",
              bullets: [
                "Inputs: a contextual instance (example sentence + a question restating the target word), a context-free instance (\"the meaning of w\"), and WordNet glosses.",
                "LLMs are tuned with LoRA; a trainable linear bridge (W_q) maps the query representation toward the definition space.",
                "Contrastive objective (InfoNCE): pull each query toward its gold definition and away from negatives drawn from all 117K WordNet glosses.",
                "Inference: WSD picks the sense whose definition is closest after the bridge; sentence embeddings (MTEB) are taken without the bridge.",
              ],
              images: [{ ...fig.decafArchitecture, caption: "DECAF training (a) and inference (b)." }],
            },
            {
              title: "Results: Comparison with Other Methods",
              stacked: true,
              bullets: [
                "Compared against the original model, PromptEOL, SimCSE, and LLM2Vec on LLMs and encoders.",
                "Average SemEval ALL gain: +24.8 points for LLMs, +19.0 for encoders, +8.1 for embedding models.",
                "Improves sentence embeddings (STS) for raw LLMs and encoders while largely preserving those of embedding models.",
                "Uses far less data and compute than embedding-specific fine-tuning.",
              ],
              images: [
                { ...fig.decafWsd, caption: "Word sense disambiguation (SemEval ALL F1) per backbone." },
                { ...fig.decafSts, caption: "Sentence similarity (STS, Spearman) per backbone." },
              ],
            },
            {
              title: "Qualitative Analysis",
              bullets: [
                "Qwen3-8B embeddings of ten sentences per sense for \"crane\" (bird / machine / stretch neck) and \"culture\" (society & arts / organization / biology).",
                "Before DECAF, all senses collapse into one block; after DECAF, each sense forms its own block and cluster.",
                "crane: Δ 0.05 → 0.44, silhouette 0.72 → 0.89 · culture: Δ 0.03 → 0.26, silhouette 0.51 → 0.67.",
                "Senses are arranged by how related their definitions are.",
              ],
              images: [{ ...fig.decafQualitative, caption: "Qwen3-8B before and after DECAF: similarity heatmaps and 3D PCA." }],
            },
            {
              title: "Separating Prompt Effects from Fine-tuning",
              bullets: [
                "Extracting an in-context word embedding from a decoder requires appending a prompt.",
                "Contrasted my prompt with PromptEOL to separate the prompt's effect from the fine-tuning effect.",
                "The gain shared by every model came from the fine-tuning method; the prompt added more only where model and prompt fit well (Mistral-7B with PromptEOL).",
                "Lesson: when a score goes up, first separate where the gain came from.",
              ],
            },
            {
              title: "Experiment Operations with Claude Code Agents",
              bullets: [
                "Validating close to 50 evaluation tasks across 10 backbones in parallel led to runs referencing the wrong results, so I automated experiment operations with Claude Code.",
                "A single agent planning, running, and judging its own work began to skew its evaluations, so I split it into three roles.",
                "Leader: evaluates plans, results, and the other agents' output against the experiment goal · Runner: schedules jobs around GPU and memory · Reviewer: checks each run against pre-written protocols.",
                "Different read/write permissions per Markdown document keep contexts separate; no plan runs until I approve it.",
                "Results are kept on GitHub as cross-referenced documents, so every number traces back to its configuration.",
              ],
            },
            {
              title: "M.S. Thesis: DICE (2025.01 – 2026.06)",
              bullets: [
                "Annotation-free contrastive fine-tuning that repairs encoder embedding geometry using WordNet definitions, driven by a lightweight Bridge Layer.",
                "Validated across model scale (xsmall–base), pretraining-data volume (10% / 100%), and pretraining objective.",
                "Reproducible evaluation pipeline over 7 task families: SemEval WSD, WSD Hard Benchmark, STS, WiC, analogy, and word similarity/relatedness.",
              ],
              images: [{ ...fig.diceDiagram, caption: "DICE overview." }],
            },
            {
              title: "DICE Results",
              bullets: [
                "Sentence-level semantics (STS): 32.8 → 62.6 Spearman.",
                "Word-level semantics (similarity & relatedness): 26.5 → 61.8.",
                "Public hard WSD set built to defeat the most-frequent-sense shortcut: 55.3 macro-F1 vs. 0.0 for the MFS baseline.",
                "For \"bank\" and \"crane,\" senses that the baseline collapses separate into distinct clusters after DICE.",
              ],
              images: [
                { ...fig.bankHeatmap, caption: "'bank' sense similarity: baseline vs. DICE." },
                { ...fig.bankScatter, caption: "'bank' embeddings in 3D PCA." },
                { ...fig.craneHeatmap, caption: "'crane' sense similarity: baseline vs. DICE." },
                { ...fig.craneScatter, caption: "'crane' embeddings in 3D PCA." },
              ],
            },
          ],
        },
        projects: [
          {
            title: "Internal Policy RAG Chatbot for Employees (LG Electronics AX School)",
            period: "2026.11",
            bullets: [
              "Led a team building a RAG chatbot that answers employees' questions from internal policy documents (code of conduct, ethics, tax, anti-bribery).",
              "Designed the PRD and the prompt specification (input/output format and examples).",
              "Converted PDFs to Markdown with MarkItDown instead of feeding them in raw, to save tokens.",
              "Deployed with GitHub Actions.",
            ],
            tags: ["RAG", "LLM", "Prompt Design", "MarkItDown", "GitHub Actions", "Team Lead"],
            links: {},
          },
          {
            title: "Satellite Imagery Pipeline & Climate Dashboard",
            period: "2025.06 – 2025.08",
            bullets: [
              "Freelance data engineering at EnergyLife.",
              "Built a Landsat satellite-imagery processing pipeline on Google Earth Engine and Google Cloud Storage.",
              "Delivered the analysis as an interactive Folium web dashboard for climate monitoring.",
            ],
            tags: ["Google Earth Engine", "GCS", "Landsat", "Folium", "Dashboard"],
            links: {},
          },
          {
            title: "Single-Camera Height Measurement Service",
            period: "2025.02 – 2025.06",
            bullets: [
              "Participating researcher on a monocular 3D height measurement system (DeepLabV3+ segmentation, camera calibration, ray–plane intersection) deployed in South Korean subway stations.",
              "In real user footage, hats and tied-up hair were segmented as part of the person and caused errors.",
              "Without retraining, extracted the top contour, flagged segments that broke the normal curvature as outliers, and interpolated over the remaining points.",
              "Kept the error within 4.4 mm.",
            ],
            tags: ["Computer Vision", "PyTorch", "OpenCV", "DeepLabV3+", "Deployed Product"],
            award: "Provost's Award, SUNY AI Research Challenge 2025",
            links: {},
          },
        ],
      },
      {
        label: "Undergraduate (– 2024)",
        projects: [
          {
            title: "Solar Energy Production Forecasting",
            period: "2024.03 – 2024.08",
            bullets: [
              "Data mining course project on Calgary solar energy data.",
              "Separated trend, seasonality, and frequency components with LOESS smoothing and FFT decomposition.",
              "Used ACF to pin down the evidence behind anomalous panels.",
              "Reached 85.6% forecast accuracy.",
            ],
            tags: ["Time Series", "FFT", "LOESS", "Data Mining"],
            links: {},
          },
          {
            title: "Male/Female Voice Classification under Everyday Noise",
            period: "2024.03 – 2024.08",
            bullets: [
              "Machine learning course project, team of 2; ambient noise held accuracy at 50%.",
              "Separated the voice frequency band with Gaussian filtering and converted it to spectrograms for CNN training.",
              "Raised accuracy on noisy speech from 50% to 98.8%.",
            ],
            tags: ["CNN", "Audio", "Signal Processing"],
            award: "2nd Place, Course Project",
            links: {},
          },
          {
            title: "GOD-gil — Public Parking Guidance Chatbot (ART-AWS Glocal Hackathon)",
            period: "2024.01",
            bullets: [
              "Led a 5-person team from five universities through a 3-day hackathon and designed the LLM prompts.",
              "When a teammate considered leaving under time pressure, shifted their role to the presentation and took over the open development work myself.",
              "The team finished through the final pitch.",
            ],
            tags: ["LLM", "Prompt Design", "Chatbot", "Team Lead"],
            award: "Special Leadership Award",
            links: {},
          },
          {
            title: "AI Workout Coaching Web App in VR",
            period: "2023.09 – 2024.08",
            bullets: [
              "Capstone design project, team of 4.",
              "Single-camera VR workout web app — no extra sensors required.",
              "Estimated posture with MediaPipe, analyzed abnormal movement with a One-Class SVM, and built 3D motion in VR.",
            ],
            tags: ["MediaPipe", "One-Class SVM", "VR", "Pose Estimation"],
            award: "Excellence Award (2nd overall), INU Graduation Project Exhibition 2024",
            links: { video: videoUrl },
          },
          {
            title: "Real-time Posture Correction on Mobile Device",
            period: "2023",
            bullets: [
              "Real-time posture correction with a smartphone camera, targeting forward head posture and lumbar disc health.",
              "Extracted 3D pose with MediaPipe and detected abnormal posture with a One-Class SVM.",
            ],
            tags: ["MediaPipe", "One-Class SVM", "Mobile", "Healthcare AI"],
            award: "1st Place, INU AI Competition 2023",
            links: {},
          },
        ],
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
        role: "Graduate Teaching Assistant",
        org: "SUNY, Dept. of Computer Science",
        period: "Aug 2024 – Jun 2025",
        description:
          "CSE101 (Fall 2024), CSE215, CSE216 (Spring 2025)",
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
        title: "Special Leadership Award",
        org: "ART-AWS Glocal Hackathon",
        period: "January 2024",
      },
      {
        title: "1st Place, AI Competition",
        org: "Incheon National University",
        period: "November 2023",
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
    projectGroups: [
      {
        label: "석사 (2025 – )",
        featured: {
          title: "DECAF: Dictionary-Enabled Cost-Effective Architecture-Agnostic Fine-tuning for Language Models",
          period: "2025.01 – 현재",
          bullets: [
            "석사 학위논문 DICE(Definition-Induced Calibration of Embeddings)를 인코더에서 디코더 LLM까지 확장한, WordNet 사전 정의만 쓰는 무라벨(annotation-free) 임베딩 파인튜닝 기법입니다.",
            "인코더·임베딩 모델·LLM 등 10개 백본을 MTEB 41개 태스크와 SemEval WSD·Hard WSD로 평가했고, 모든 모델을 RTX 3090 한 장으로 학습했습니다.",
            "LLM 3종에서 의미 구분(WSD) 성능을 평균 24.8%p, 일반 임베딩(MTEB) 성능을 평균 20.7%p 높였고, 임베딩 전용 모델은 MTEB 성능을 99% 이상 유지했습니다.",
            "디코더 프롬프트(PromptEOL)의 영향을 파인튜닝 효과와 분리해 분석했고, 역할을 나눈 Claude Code 에이전트로 실험을 운영했습니다.",
          ],
          tags: ["LLM", "임베딩", "WSD", "MTEB", "평가"],
          paper: {
            label: "제1저자",
            authors: "Sojeong Shin et al.",
            venue: "NAACL 투고 중",
          },
          slides: [
            {
              title: "문제 및 배경",
              bullets: [
                "임베딩은 LLM 환각을 줄이는 검색의 토대입니다.",
                "언어모델 임베딩은 단어를 자주 쓰이는 의미로만 해석하는 편향(MFS 편향)을 갖고 있습니다.",
                "기존 방법은 수억 개의 문장 쌍이나 SemCor 같은 수작업 의미 주석 코퍼스처럼 비싼 데이터가 필요합니다.",
                "목표: 사전 하나만으로, 수작업 라벨 없이 단어 의미와 문장 임베딩을 함께 개선하는 것.",
              ],
              images: [
                { ...fig.senseConflation, caption: "단일 임베딩 벡터가 최빈 의미(MFS) 쪽으로 쏠리는 현상." },
                { ...fig.semcorVsDictionary, caption: "의미 주석 코퍼스가 아닌 사전 정의만 사용합니다." },
              ],
            },
            {
              title: "방법: DECAF 구조",
              bullets: [
                "입력: 문맥 인스턴스(예문 + 대상 단어의 뜻을 묻는 질문), 문맥 없는 인스턴스(\"the meaning of w\"), WordNet 정의문.",
                "LLM은 LoRA로 학습하고, 학습 가능한 선형 브리지(W_q)가 쿼리 표현을 정의문 공간으로 옮깁니다.",
                "대조학습(InfoNCE): 각 쿼리를 정답 정의문 쪽으로 당기고, WordNet 전체 11.7만 개 정의문에서 뽑은 음성 예시와는 멀어지게 합니다.",
                "추론: WSD는 브리지를 거친 뒤 가장 가까운 정의문의 의미를 고르고, 문장 임베딩(MTEB)은 브리지 없이 뽑습니다.",
              ],
              images: [{ ...fig.decafArchitecture, caption: "DECAF 학습(a)과 추론(b) 구조." }],
            },
            {
              title: "결과: 다른 방법과 비교",
              stacked: true,
              bullets: [
                "원본 모델, PromptEOL, SimCSE, LLM2Vec과 LLM·인코더별로 비교했습니다.",
                "SemEval ALL 평균 향상: LLM +24.8점, 인코더 +19.0점, 임베딩 모델 +8.1점.",
                "LLM과 인코더의 문장 임베딩(STS)도 높였고, 임베딩 모델의 문장 임베딩 성능은 대체로 유지했습니다.",
                "임베딩 전용 파인튜닝보다 훨씬 적은 데이터와 연산을 씁니다.",
              ],
              images: [
                { ...fig.decafWsd, caption: "백본별 의미 구분 성능 (SemEval ALL F1)." },
                { ...fig.decafSts, caption: "백본별 문장 유사도 성능 (STS, Spearman)." },
              ],
            },
            {
              title: "정성 분석",
              bullets: [
                "Qwen3-8B로 'crane'(새 / 기계 / 목을 빼다)과 'culture'(사회·예술 / 조직 / 생물) 의미별 문장 10개씩의 임베딩을 비교했습니다.",
                "DECAF 전에는 모든 의미가 한 덩어리로 뭉쳐 있고, 적용 후에는 의미마다 별도의 블록과 군집을 이룹니다.",
                "crane: Δ 0.05 → 0.44, 실루엣 0.72 → 0.89 · culture: Δ 0.03 → 0.26, 실루엣 0.51 → 0.67.",
                "의미들은 정의문끼리 얼마나 가까운지에 따라 배치됩니다.",
              ],
              images: [{ ...fig.decafQualitative, caption: "DECAF 적용 전후 Qwen3-8B의 유사도 히트맵과 3D PCA." }],
            },
            {
              title: "프롬프트 효과와 파인튜닝 효과 분리",
              bullets: [
                "디코더에서 문장 속 단어 임베딩을 뽑으려면 프롬프트를 붙여야 합니다.",
                "제가 쓰던 프롬프트와 PromptEOL을 대조해 프롬프트의 영향과 파인튜닝의 효과를 나눠 봤습니다.",
                "모든 모델에 공통된 향상은 파인튜닝 기법에서 왔고, 프롬프트는 Mistral-7B와 PromptEOL처럼 모델과 잘 맞을 때 성능을 더했습니다.",
                "배운 점: 점수가 오르면 원인부터 나눠 봐야 합니다.",
              ],
            },
            {
              title: "Claude Code 에이전트로 실험 운영",
              bullets: [
                "10개 백본에 대해 50개 가까운 평가 태스크를 병렬로 검증하면서 잘못된 결과를 참조하는 문제가 생겨, Claude Code로 실험 운영을 자동화했습니다.",
                "에이전트 하나가 계획·실행·평가를 모두 맡자 평가가 한쪽으로 치우치는 것이 보여, 역할을 셋으로 나눴습니다.",
                "리더: 실험 목적에 맞춰 계획안·결과·다른 에이전트의 작업물을 평가 · runner: GPU와 메모리를 고려해 실험 배치 · reviewer: 미리 써 둔 실험 규약 위반 점검.",
                "md 문서마다 읽기·수정 권한을 달리해 맥락이 섞이지 않게 했고, 계획은 제가 승인한 뒤에만 실행되게 했습니다.",
                "결과는 GitHub에 서로 참조하는 문서로 쌓아 수치를 설정까지 되짚을 수 있게 했습니다.",
              ],
            },
            {
              title: "석사 학위논문: DICE (2025.01 – 2026.06)",
              bullets: [
                "WordNet 정의문으로 인코더 임베딩의 기하 구조를 복원하는 무라벨 대조학습 파인튜닝이며, 경량 Bridge Layer가 성능 향상을 이끕니다.",
                "모델 규모(xsmall–base), 사전학습 데이터량(10% / 100%), 사전학습 목적함수에 걸쳐 검증했습니다.",
                "SemEval WSD, WSD Hard Benchmark, STS, WiC, 유추, 단어 유사도/연관성 등 7개 태스크 유형의 재현 가능한 평가 파이프라인을 구축했습니다.",
              ],
              images: [{ ...fig.diceDiagram, caption: "DICE 개요." }],
            },
            {
              title: "DICE 결과",
              bullets: [
                "문장 수준 의미(STS): 32.8 → 62.6 Spearman.",
                "단어 수준 의미(유사도·연관성): 26.5 → 61.8.",
                "최빈 의미 지름길이 통하지 않도록 만든 공개 hard WSD 평가셋: MFS 기준선 0.0 대비 55.3 macro-F1.",
                "'bank', 'crane'처럼 기준선에서 뭉쳐 있던 의미들이 DICE 적용 후 뚜렷한 군집으로 나뉩니다.",
              ],
              images: [
                { ...fig.bankHeatmap, caption: "'bank' 의미 유사도: 기준선 vs. DICE." },
                { ...fig.bankScatter, caption: "'bank' 임베딩의 3D PCA." },
                { ...fig.craneHeatmap, caption: "'crane' 의미 유사도: 기준선 vs. DICE." },
                { ...fig.craneScatter, caption: "'crane' 임베딩의 3D PCA." },
              ],
            },
          ],
        },
        projects: [
          {
            title: "임직원용 사내 정책 RAG 챗봇 (LG전자 AX School)",
            period: "2026.11",
            bullets: [
              "행동강령·윤리규범·세금·뇌물 정책 문서로 임직원 질문에 답하는 RAG 챗봇을 만드는 팀을 리드했습니다.",
              "PRD와 프롬프트 명세(입출력 형식·예시)를 설계했습니다.",
              "토큰을 아끼기 위해 PDF를 그대로 넣지 않고 MarkItDown으로 변환해 전처리했습니다.",
              "GitHub Actions로 배포했습니다.",
            ],
            tags: ["RAG", "LLM", "프롬프트 설계", "MarkItDown", "GitHub Actions", "팀 리딩"],
            links: {},
          },
          {
            title: "위성영상 처리 파이프라인 및 기후 모니터링 대시보드",
            period: "2025.06 – 2025.08",
            bullets: [
              "에너지라이프 데이터 엔지니어링 프리랜서.",
              "Google Earth Engine과 Google Cloud Storage 기반 Landsat 위성영상 처리 파이프라인을 구축했습니다.",
              "분석 결과를 Folium 인터랙티브 웹 대시보드로 제공했습니다.",
            ],
            tags: ["Google Earth Engine", "GCS", "Landsat", "Folium", "대시보드"],
            links: {},
          },
          {
            title: "단일 카메라 신장측정 서비스",
            period: "2025.02 – 2025.06",
            bullets: [
              "참여 연구원으로 단일 RGB 카메라 3D 신장측정 시스템(DeepLabV3+ 분할, 카메라 보정, ray–plane intersection) 개발에 참여했으며, 지하철역에 배포되었습니다.",
              "실제 이용자 영상에서 모자나 묶어 올린 머리가 사람 영역으로 함께 잡혀 오차가 생겼습니다.",
              "모델 재학습 없이 상단 윤곽을 추출해 정상 곡률을 벗어나는 구간을 이상치로 정의하고, 남은 윤곽점으로 보간했습니다.",
              "오차를 4.4mm 이내로 줄였습니다.",
            ],
            tags: ["컴퓨터 비전", "PyTorch", "OpenCV", "DeepLabV3+", "배포된 제품"],
            award: "Provost's Award, SUNY AI Research Challenge 2025",
            links: {},
          },
        ],
      },
      {
        label: "학부 (– 2024)",
        projects: [
          {
            title: "캘거리 지역 태양 에너지 예측",
            period: "2024.03 – 2024.08",
            bullets: [
              "데이터 마이닝 수업 프로젝트로 캘거리 태양광 에너지 데이터를 분석했습니다.",
              "LOESS 스무딩과 FFT 분해로 추세·계절성·주파수 성분을 분리했습니다.",
              "ACF로 이상 패널의 근거를 구체화했습니다.",
              "예측률 85.6%를 달성했습니다.",
            ],
            tags: ["시계열", "FFT", "LOESS", "데이터 마이닝"],
            links: {},
          },
          {
            title: "생활 노이즈 속 남/녀 음성 구분 AI 모델",
            period: "2024.03 – 2024.08",
            bullets: [
              "기계학습 수업 2인 팀 프로젝트로, 주변 잡음 때문에 정확도가 50%에 머물던 문제를 다뤘습니다.",
              "가우시안 필터링으로 음성 음역의 주파수를 분리하고 스펙트로그램으로 바꿔 CNN을 학습했습니다.",
              "노이즈가 섞인 음성에서 정확도를 50%에서 98.8%로 높였습니다.",
            ],
            tags: ["CNN", "오디오", "신호 처리"],
            award: "수업 프로젝트 전체 2위",
            links: {},
          },
          {
            title: "GOD길 — 공공 주차 안내 챗봇 (ART-AWS 글로컬 해커톤)",
            period: "2024.01",
            bullets: [
              "2박 3일 해커톤에서 5개 대학 출신 5인 팀의 리더로 공공 주차 안내 챗봇을 만들고 LLM 프롬프트를 설계했습니다.",
              "일정 압박 속에 한 팀원이 이탈을 언급하자, 그 팀원의 역할을 발표자료 제작으로 바꾸고 빈 개발을 직접 맡았습니다.",
              "팀이 발표까지 완주했습니다.",
            ],
            tags: ["LLM", "프롬프트 설계", "챗봇", "팀 리딩"],
            award: "특별 리더상",
            links: {},
          },
          {
            title: "VR 환경 개인 운동 AI 지도 웹앱",
            period: "2023.09 – 2024.08",
            bullets: [
              "4인 팀 캡스톤디자인 프로젝트.",
              "별도 센서 없이 단일 카메라로 동작하는 VR 운동 웹앱입니다.",
              "MediaPipe로 자세를 추정하고 One-Class SVM으로 이상 동작을 분석했으며, VR 3D 모션을 구축했습니다.",
            ],
            tags: ["MediaPipe", "One-Class SVM", "VR", "자세 추정"],
            award: "인천대학교 졸업작품회 최우수상 (전체 2위), 2024",
            links: { video: videoUrl },
          },
          {
            title: "모바일 실시간 자세 교정 시스템",
            period: "2023",
            bullets: [
              "스마트폰 카메라로 거북목과 허리 디스크 건강 문제를 다루는 실시간 자세 교정 시스템입니다.",
              "MediaPipe로 3D 자세를 추출하고 One-Class SVM으로 비정상 자세를 탐지했습니다.",
            ],
            tags: ["MediaPipe", "One-Class SVM", "모바일", "헬스케어 AI"],
            award: "인천대학교 AI 경진대회 1위, 2023",
            links: {},
          },
        ],
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
        role: "대학원 조교 (Graduate Teaching Assistant)",
        org: "SUNY, Dept. of Computer Science",
        period: "2024년 8월 – 2025년 6월",
        description:
          "CSE101 (2024 가을), CSE215, CSE216 (2025 봄)",
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
        title: "특별 리더상",
        org: "ART-AWS 글로컬 해커톤",
        period: "2024년 1월",
      },
      {
        title: "AI 경진대회 1위",
        org: "인천대학교",
        period: "2023년 11월",
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
