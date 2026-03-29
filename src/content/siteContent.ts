export const aboutContent: AboutEntry = {
  _id: 'about-local',
  _type: 'about',
  body: [
    {
      type: 'paragraph',
      text:
        'I am a computer science student building toward a long-term future in AI, robotics, and intelligent systems. The through-line in my work is clear: learn quickly, build seriously, and aim at problems with real leverage.',
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

export const careerEntries: CareerEntry[] = [];

export const educationEntries: EducationEntry[] = [];

export const projectEntries: ProjectEntry[] = [
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
