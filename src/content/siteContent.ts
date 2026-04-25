export const aboutContent: AboutEntry = {
  _id: 'about-local',
  _type: 'about',
  body: [
    {
      type: 'paragraph',
      text:
        'I am a graduate student at Columbia University building toward a long-term future in AI, robotics, and intelligent systems. The through-line in my work is clear: learn quickly, build seriously, and aim at problems with real leverage.',
    },
    {
      type: 'paragraph',
      text:
        'This site is now driven by local content instead of a CMS, which makes it easier to shape the story carefully and update it directly as the portfolio evolves.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Current direction',
    },
    {
      type: 'list',
      style: 'bullet',
      items: [
        'AI systems and practical automation',
        'Software engineering with product instincts',
        'A long-term path toward robotics and embodied intelligence',
      ],
    },
  ],
};

export const careerEntries: CareerEntry[] = [
  {
    _id: 'career-recipeone',
    _type: 'career',
    title: 'Founder & AI Software Engineer',
    company: 'RecipeOne',
    department: '',
    team: '',
    location: 'Alma, MI',
    dateLabel: 'Jul 2025 — Jan 2026',
    startYear: 2025,
    endYear: 2026,
    image: {
      src: '/profile-home.jpg',
      alt: 'RecipeOne',
    },
    description:
      'Built a multi-tenant B2B SaaS platform for institutional foodservice operations, enabling recipe planning, procurement, and inventory workflows across multi-site facilities. Designed a scalable PostgreSQL and REST API backend spanning 15+ entities and 30+ relational tables, and implemented automated unit conversion and yield pipelines across 7,000+ ingredient records to generate purchasing quantities and cost estimates.',
  },
  {
    _id: 'career-eat-pro-japan',
    _type: 'career',
    title: 'Software Engineering Intern',
    company: 'EAT PRO JAPAN',
    department: '',
    team: '',
    location: 'Tokyo, Japan',
    dateLabel: 'May 2024 — Aug 2024',
    startYear: 2024,
    endYear: 2024,
    image: {
      src: '/profile-home.jpg',
      alt: 'EAT PRO JAPAN',
    },
    description:
      'Built and improved web features for a food service platform supporting restaurant operations and customer engagement. Developed backend APIs and frontend components that strengthened core product functionality and improved responsiveness and usability, while collaborating across product and engineering to translate requirements into production-ready features.',
  },
  {
    _id: 'career-listflowai',
    _type: 'career',
    title: 'Co-Founder & Software Engineer',
    company: 'ListFlowAI',
    department: '',
    team: '',
    location: 'Remote — Washington, D.C.',
    dateLabel: 'Oct 2023 — Apr 2025',
    startYear: 2023,
    endYear: 2025,
    image: {
      src: '/profile-home.jpg',
      alt: 'ListFlowAI',
    },
    description:
      'Co-founded an AI-powered B2B SaaS automation platform used by 200+ users, processing 5,000+ inbound leads through LLM-driven enrichment, classification, and routing workflows. Architected backend services and data pipelines with Python, FastAPI, and PostgreSQL to extract structured data from emails, forms, and CRM exports, reducing manual lead processing by 80%.',
  },
  {
    _id: 'career-alma-college-ta',
    _type: 'career',
    title: 'Teaching Assistant, Tutor & Mentor',
    company: 'Alma College',
    department: 'MTH-121 / CSC-121 / CSC-122 / CSC-230 / CSC-240 / CSC-310 / CSC-420',
    team: '',
    location: 'Alma, MI',
    dateLabel: '2022 — 2025',
    startYear: 2022,
    endYear: 2025,
    image: {
      src: '/profile-home.jpg',
      alt: 'Alma College',
    },
    description:
      'Mentored 70+ students across algorithms, data structures, debugging, and core computer science coursework, strengthening analytical thinking and software design skills through personalized, hands-on guidance.',
  },
];

export const educationEntries: EducationEntry[] = [];

export const researchEntries = [
  {
    _id: 'research-campus-drone-delivery-system',
    title: 'Campus Drone Delivery System',
    institution: 'Colorado State University',
    subtitle: 'Research-Based Web Simulation Project',
    dateLabel: '2024',
    location: '',
    description:
      'Built a web-based simulation modeling autonomous drone deliveries under dynamic weather and demand, capturing realistic last-mile logistics behavior. Designed adaptive route optimization and scheduling algorithms that reduced average delivery time by 18% and energy consumption by 12% compared with baseline heuristics, and developed interactive analytics dashboards to visualize fleet performance in real time.',
  },
  {
    _id: 'research-map-pathfinding-visualizer',
    title: 'Undergraduate Research Assistant',
    institution: 'Alma College',
    subtitle: 'with Dr. Andrew Thall',
    dateLabel: '2024 — 2025',
    location: '',
    linkHref: '/pathfinding-poster-session.pdf',
    linkLabel: 'View poster',
    description:
      'Led undergraduate research on learning-augmented path planning under dynamic uncertainty, presenting the work in poster form through a benchmark-driven study of safety, efficiency, and robustness trade-offs. The project combined interactive visualization, algorithm analysis, and controlled experiments to evaluate how replanning frequency and heuristic design affect navigation performance in changing environments.',
  },
  {
    _id: 'research-senior-thesis',
    title: 'Senior Thesis',
    institution: 'Alma College',
    subtitle: 'Learning-Augmented Model Predictive Control for Human-Aware Robot Navigation',
    dateLabel: '2025',
    location: '',
    linkHref: '/senior-thesis.pdf',
    linkLabel: 'View thesis',
    description:
      'Built a thesis project focused on learning-augmented model predictive control for human-aware robot navigation, examining how predictive control, uncertainty, and social navigation constraints interact in dynamic environments. The work ties together autonomy, decision-making under uncertainty, and intelligent systems with an emphasis on methods that remain reliable beyond idealized settings.',
  },
];

export const projectEntries: ProjectEntry[] = [
  {
    _id: 'project-autonomous-drone-delivery-simulation-platform',
    _type: 'project',
    name: 'Autonomous Drone Delivery Simulation Platform',
    slug: {
      _type: 'slug',
      current: 'autonomous-drone-delivery-simulation-platform',
    },
    startYear: 2025,
    description:
      'Full-stack simulation platform for autonomous drone delivery under dynamic weather and demand, built for evaluation, benchmarking, and route optimization research.',
    tools: ['Python', 'React.js', 'Full-stack Systems', 'Simulation', 'Optimization'],
    mainImage: {
      src: '/drone-delivery-logo.png',
      alt: 'Autonomous Drone Delivery Simulation Platform project cover',
      aspectRatio: 1.7,
      contain: true,
    },
    body: [
      {
        type: 'paragraph',
        text:
          'Autonomous Drone Delivery Simulation Platform is a full-stack system designed to model autonomous drone delivery under dynamic weather and demand, enabling scenario-based evaluation of delivery performance, route quality, and fleet behavior.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Key results',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Executed more than 1,000 simulated delivery scenarios for system evaluation and benchmarking.',
          'Improved delivery time by 18% through graph-based and heuristic route optimization.',
          'Reduced energy consumption by 12% across simulated fleet operations.',
        ],
      },
      {
        type: 'heading',
        level: 3,
        text: 'What I built',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Designed and built a full-stack simulation platform for modeling autonomous drone delivery under dynamic weather and demand.',
          'Engineered route optimization and scheduling methods using graph-based and heuristic approaches.',
          'Used the platform for evaluation, experimentation, and performance benchmarking across delivery scenarios.',
        ],
      },
      {
        type: 'heading',
        level: 3,
        text: 'Why this matters',
      },
      {
        type: 'paragraph',
        text:
          'Autonomous delivery systems have to perform under changing operational conditions, not static assumptions. This project focused on evaluating how routing, scheduling, and environmental variability shape efficiency and system-level performance.',
      },
    ],
  },
  {
    _id: 'project-text-to-sql-analytics-system',
    _type: 'project',
    name: 'Text-to-SQL Analytics System',
    slug: {
      _type: 'slug',
      current: 'text-to-sql-analytics-system',
    },
    startYear: 2026,
    description:
      'LLM-powered analytics system that translates natural language into SQL, executes queries against relational data, and returns usable business insights.',
    codeLink: 'https://github.com/Yassinekraiem08/nl-to-sql-analytics-system',
    demoLink: 'https://querymind-demo.vercel.app/',
    tools: ['Python', 'SQLAlchemy', 'PostgreSQL', 'Pandas', 'Plotly', 'OpenAI API'],
    mainImage: {
      src: '/querymind-logo.png',
      alt: 'Text-to-SQL Analytics System project cover',
      aspectRatio: 1.185,
      contain: true,
    },
    body: [
      {
        type: 'paragraph',
        text:
          'Text-to-SQL Analytics System is an LLM-powered analytics system that translates natural language questions into structured SQL queries, executes them against relational data, and returns usable business insights without requiring manual query writing.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Key results',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Reduced SQL query turnaround time by approximately 70% for analytics-style questions.',
          'Enabled self-serve access to structured data insights across real business-style query workflows.',
          'Built a natural-language-to-database pipeline with query generation, execution, and result presentation.',
        ],
      },
      {
        type: 'heading',
        level: 3,
        text: 'What I built',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Built a natural language interface for generating SQL from user questions over structured relational data.',
          'Added schema-aware prompting and query validation to improve correctness and reduce broken generations.',
          'Designed the pipeline to execute generated SQL, return results, and support analytics-oriented workflows.',
          'Focused on making database access more usable for non-technical users while preserving the structure of underlying data systems.',
        ],
      },
      {
        type: 'heading',
        level: 3,
        text: 'Why this matters',
      },
      {
        type: 'paragraph',
        text:
          'Most analytics systems still depend on someone writing SQL by hand. This project turns natural language into structured database interaction, making data access faster and more usable without removing the rigor of relational systems.',
      },
    ],
  },
  {
    _id: 'project-rag-decision-support-system',
    _type: 'project',
    name: 'RAG Decision Support System',
    slug: {
      _type: 'slug',
      current: 'rag-decision-support-system',
    },
    startYear: 2026,
    description:
      'Production-grade retrieval-augmented generation system for grounded question answering over private documents with hybrid retrieval, reranking, inline citations, and confidence-aware responses.',
    codeLink: 'https://github.com/Yassinekraiem08/rag-decision-support-system',
    tools: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'pgvector',
      'OpenAI API',
      'Docker',
      'GitHub Actions',
    ],
    mainImage: {
      src: '/rag-logo.png',
      alt: 'RAG Decision Support System project cover',
      aspectRatio: 1,
      contain: true,
    },
    body: [
      {
        type: 'paragraph',
        text:
          'RAG Decision Support System is a production-grade retrieval-augmented generation system built for grounded question answering over private document collections, with hybrid retrieval, reranking, inline citations, and confidence-aware response generation.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Key results',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Indexed more than 1,600 document chunks across uploaded knowledge sources for retrieval and citation-backed answers.',
          'Reached approximately 0.78 Precision@3 in retrieval evaluation across diverse query types.',
          'Reduced repeated-query latency with caching and parallel reranking, cutting rerank latency by about 76% and repeated-query latency by about 57%.',
        ],
      },
      {
        type: 'heading',
        level: 3,
        text: 'What I built',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Built an end-to-end RAG pipeline with document ingestion, chunking, embeddings, hybrid retrieval, and response generation.',
          'Combined vector search, keyword retrieval, and cross-encoder reranking to improve answer relevance and grounding.',
          'Implemented inline citation support, score filtering, and multi-factor confidence estimation to make outputs more trustworthy.',
          'Designed an evaluation framework covering retrieval quality, groundedness, latency, and hallucination behavior across multiple query categories.',
        ],
      },
      {
        type: 'heading',
        level: 3,
        text: 'Why this matters',
      },
      {
        type: 'paragraph',
        text:
          'Most LLM demos answer confidently whether the evidence is strong or weak. This system was built to make retrieval quality visible, reduce hallucinations, and produce answers that stay tied to source material.',
      },
    ],
  },
  {
    _id: 'project-ai-workflow-orchestrator',
    _type: 'project',
    name: 'AI Workflow Orchestrator',
    slug: {
      _type: 'slug',
      current: 'ai-workflow-orchestrator',
    },
    startYear: 2026,
    description:
      'Production-grade multi-agent system that autonomously triages logs, tickets, and emails, executes API actions, and replans when conditions change.',
    codeLink: 'https://github.com/Yassinekraiem08/ai-workflow-orchestrator',
    demoLink: 'https://ai-workflow-orchestrator.vercel.app/',
    tools: ['Python', 'FastAPI', 'Redis', 'Celery', 'PostgreSQL', 'Docker', 'AWS ECS'],
    mainImage: {
      src: '/aiworkflow-logo.png',
      alt: 'AI Workflow Orchestrator project cover',
      aspectRatio: 1,
      contain: true,
    },
    body: [
      {
        type: 'paragraph',
        text:
          'AI Workflow Orchestrator is a production-grade multi-agent system built to autonomously triage logs, tickets, and emails, execute downstream actions through APIs, and dynamically replan when operating conditions change.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Key results',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Achieved 96.7% successful task completion across production-like scenarios.',
          'Reduced manual incident triage effort through end-to-end automation.',
          'Maintained approximately 1.9 seconds average response latency with distributed execution.',
        ],
      },
      {
        type: 'heading',
        level: 3,
        text: 'What I built',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Designed a multi-agent execution loop that moves through classify, plan, execute, and replan stages with real-time decision updates.',
          'Implemented fault-tolerant pipelines using Celery workers, retries, and dead-letter queues.',
          'Built multi-model routing to balance cost and performance across LLM calls.',
          'Added human-in-the-loop escalation for low-confidence decisions.',
        ],
      },
      {
        type: 'heading',
        level: 3,
        text: 'Why this matters',
      },
      {
        type: 'paragraph',
        text:
          'Most AI systems stop at summarization. This system is built to execute decisions end-to-end under uncertainty, which is closer to the level of reliability and autonomy required for real operational leverage.',
      },
    ],
  },
  {
    _id: 'project-map-pathfinding-visualizer',
    _type: 'project',
    name: 'Map Pathfinding Visualizer',
    slug: {
      _type: 'slug',
      current: 'map-pathfinding-visualizer',
    },
    startYear: 2024,
    description:
      'Interactive algorithm visualization platform for analyzing pathfinding behavior under dynamic obstacles, uncertain map conditions, and changing search constraints.',
    codeLink: 'https://github.com/Yassinekraiem08/Map-pathfinding-visualizer',
    demoLink: 'https://map-pathfinding-visualizer.vercel.app/',
    tools: ['React.js', 'D3.js', 'Python', 'JavaScript', 'Git/GitHub'],
    mainImage: {
      src: '/pathfinding-logo.png',
      alt: 'Map Pathfinding Visualizer project cover',
      aspectRatio: 1,
      contain: true,
    },
    body: [
      {
        type: 'paragraph',
        text:
          'Map Pathfinding Visualizer is an interactive algorithm visualization platform for analyzing how pathfinding methods behave under dynamic obstacles, uncertain map conditions, and changing search constraints.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Key results',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Implemented and visualized core search algorithms including A*, Dijkstra’s, and Breadth-First Search.',
          'Simulated dynamic obstacles and stochastic sensor noise to study route stability under uncertainty.',
          'Benchmarked heuristic inflation and replanning frequency, showing roughly 17% higher success under uncertainty with only about 7% runtime overhead.',
        ],
      },
      {
        type: 'heading',
        level: 3,
        text: 'What I built',
      },
      {
        type: 'list',
        style: 'bullet',
        items: [
          'Built an interactive map-based visualization environment for comparing shortest-path and graph-search algorithms in real time.',
          'Added support for dynamic terrain changes, obstacle updates, and uncertainty-aware path replanning.',
          'Designed experiments to evaluate how search behavior changes under different heuristic and replanning settings.',
          'Used the system as a research-oriented tool for understanding safety, efficiency, and robustness tradeoffs in navigation.',
        ],
      },
      {
        type: 'heading',
        level: 3,
        text: 'Why this matters',
      },
      {
        type: 'paragraph',
        text:
          'Most pathfinding demos show static shortest paths. This system makes algorithm behavior visible under changing conditions, which is closer to how real navigation works in robotics and autonomous systems.',
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projectEntries.find((project) => project.slug.current === slug) || null;
}
