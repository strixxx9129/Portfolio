export const profile = {
  name: 'Chetan Sharma',
  role: 'Full-Stack Python Developer',
  location: 'Mohali, Punjab',
  email: 'sharma.chetan9129@gmail.com',
  phone: '+91 8894927475',
  linkedin: 'https://linkedin.com/in/chetan9129',
  github: 'https://github.com/chetan9129',
  tagline:
    'I build scalable Shopify apps, real-time async pipelines and clean APIs that power web, iOS and Android products.',
  summary:
    'Full-Stack Python Developer with 1+ year of experience building scalable Shopify e-commerce apps and backend systems. I enjoy designing Redis/Celery-based asynchronous pipelines, Celery Beat scheduling, GraphQL/REST APIs, and integrating third-party services like OneSignal and OpenAI into production APIs consumed by web, iOS and Android clients.',
};

export const stats = [
  { value: 1, suffix: '+', label: 'Year of industry experience' },
  { value: 9.35, decimals: 2, label: 'CGPA at Chitkara University' },
  { value: 200, suffix: '+', label: 'Teams beaten at HackRx 3.0' },
  { value: 3, label: 'Platforms served: web, iOS, Android' },
];

export const skills = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'Java', 'C++', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks',
    items: ['Django', 'Django REST Framework', 'FastAPI', 'ReactJS', 'Next.js', 'Express.js', 'Node.js'],
  },
  {
    title: 'Async & Scheduling',
    items: ['Celery', 'Celery Beat', 'Redis', 'Background task queues', 'Cron jobs', 'Periodic tasks'],
  },
  {
    title: 'Shopify & Integrations',
    items: ['Shopify Admin API', 'Shopify GraphQL API', 'Shopify Webhooks', 'OAuth 2.0', 'OneSignal', 'OpenAI API', 'REST', 'GraphQL'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'PgAdmin', 'VS Code', 'Ngrok'],
  },
];

export const experience = [
  {
    role: 'Python Developer — Full-Stack',
    company: 'The Brihaspati Infotech Private Limited',
    location: 'Mohali, Punjab',
    period: 'Apr 2025 — Jun 2026',
    points: [
      'Built Shopify apps that sync products, customers and orders into PostgreSQL, using Redis-backed Celery queues to process Shopify webhooks in real time.',
      'Designed optimized, indexed queries to serve product, customer and order data inside the merchant app with low latency, replacing slower lookups.',
      'Made every Celery background job idempotent and safe to retry, preventing duplicate writes on webhook redelivery or task failure.',
      'Developed REST/GraphQL APIs consumed by the iOS and Android teams, and integrated OneSignal push notifications across mobile clients.',
      'Integrated the OpenAI API into FastAPI services to power AI-driven features in mobile and admin-facing APIs.',
      'Built the admin panel API layer (React + FastAPI + PostgreSQL) with Celery Beat and cron jobs for inventory sync, order-status polling and recurring reports.',
      'Worked in agile sprints with front-end and UI/UX teams to define API contracts, own PostgreSQL data modeling and ship on schedule.',
    ],
    tags: ['Python', 'FastAPI', 'Django', 'Celery', 'Redis', 'PostgreSQL', 'Shopify', 'GraphQL', 'OpenAI'],
  },
];

export const projects = [
  {
    title: 'Venato',
    subtitle: 'Alternative Credit Score App',
    date: 'June 2022',
    badge: '1st Place · HackRx 3.0',
    description:
      'Led the call-tracking module that logged call events (timestamps, duration, type) into a weighted behavioral credit-scoring algorithm. Integrated Firebase for real-time storage and device-level permissions across a 5-member team. Won 1st place nationally in a 36-hour hackathon.',
    tags: ['Android (Java)', 'Firebase', 'Android SDK'],
  },
  {
    title: 'AmplifAI',
    subtitle: 'Emotion-Aware Music Recommendation',
    date: 'Jun — Sep 2023',
    description:
      'Real-time facial emotion detection pipeline (FER model) feeding a custom recommendation engine with Spotify API integration for dynamic playlist generation — optimized to sub-second latency.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Spotify API'],
  },
  {
    title: 'Task & Management Dashboard',
    subtitle: 'Internal Full-Stack Platform',
    date: 'August 2026',
    description:
      'Task management platform with FastAPI REST APIs, CRUD, assignment, status/priority tracking and analytics. Backend-driven search, filtering, sorting and pagination with modular routes, services, repositories and Pydantic schemas; reusable React components with solid loading and error states.',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Pydantic'],
  },
];

export const education = {
  school: 'Chitkara University, Punjab',
  degree: 'B.E. Computer Science',
  period: 'Oct 2020 — Aug 2024',
  score: 'CGPA 9.35 / 10.0',
};

export const achievements = [
  {
    title: 'National Hackathon Winner',
    detail: 'HackRx 3.0 by Bajaj Finserv — 1st place among 200+ teams with Venato.',
  },
];
