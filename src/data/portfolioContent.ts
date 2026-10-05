import type {
  DeveloperProfile,
  SkillGroup,
  TimelineMilestone,
  ProjectDetail,
  ServiceItem,
  AchievementItem,
  CurrentlyBuildingItem,
} from '../types';

export const DEVELOPER_PROFILE: DeveloperProfile = {
  name: 'Tristan Dave Plaza',
  monogram: 'TDP',
  role: 'Full-Stack Developer & Business-Minded Tech Architect',
  age: 21,
  avatarUrl: '/tristan-dave-plaza.jpg',
  exactLocation: 'Kalagutay, Base Camp, Philippines',
  mindset: 'Business-Minded Technologist & Systems Builder',
  status: 'AVAILABLE FOR HIGH-IMPACT VENTURES & ROLES',
  headline: 'Engineering Scalable Systems with a Sharp Business Mindset.',
  subheadline:
    '21-year-old Full-Stack Developer and tech entrepreneur based in Kalagutay, Base Camp. I build high-performance software, computer vision platforms, and automated architectures designed to drive measurable business growth and solve real-world problems.',
  shortBio: [
    "Hello! I am Tristan Dave Plaza, a 21-year-old full-stack developer, software architect, and business-minded technologist based in Kalagutay, Base Camp, Philippines.",
    "I don't just write code—I engineer end-to-end digital solutions that eliminate operational friction, reduce costs, and unlock new revenue streams for businesses and organizations. My technical expertise spans modern frontend design systems, resilient distributed backends, real-time computer vision, and IoT hardware integration.",
    "With an entrepreneurial perspective, I evaluate every project through a value-driven lens: how intuitively does this serve users, how efficiently does it scale, and what tangible commercial return does it create? Whether collaborating with fast-growing startups or building robust enterprise systems, I deliver with disciplined engineering and relentless drive.",
  ],
  philosophy:
    'Great software is measured not only by code elegance, but by the tangible business value, human empowerment, and real-world problems it solves.',
  location: 'Kalagutay, Base Camp, Philippines • Global Remote Available',
  basedIn: 'Kalagutay, Base Camp, Philippines',
  focus: 'Full-Stack Platforms • Business Automation • AI & Vision Systems',
  careerInterests: [
    'Business-Minded Full-Stack Product Engineering',
    'Scalable SaaS & Cloud Architecture',
    'Enterprise Automation & Operational Systems',
    'Computer Vision & Embedded Edge Solutions',
    'Technology Entrepreneurship & Product Strategy',
  ],
  education: {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'College of Information and Communications Technology',
    period: '2021 – 2025',
    details: 'Specialization in Software Engineering, Enterprise Database Systems, and Hardware Interfacing.',
  },
  socialLinks: {
    github: 'https://github.com/brets60',
    linkedin: 'https://linkedin.com/in/tristandaveplaza',
    email: 'tristan.dave.plaza@gmail.com',
  },
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'frontend',
    categoryName: 'FRONTEND',
    description: 'Creating accessible, responsive, and performance-tuned user interfaces.',
    skills: [
      { name: 'HTML5', iconName: 'Globe', description: 'Semantic structure, accessibility tree, SEO tags', proficiencyLevel: 'Expert' },
      { name: 'CSS3', iconName: 'Palette', description: 'Modern flexbox, CSS grid, media queries, animations', proficiencyLevel: 'Expert' },
      { name: 'JavaScript', iconName: 'Code', description: 'ES6+, asynchronous event loops, DOM manipulation', proficiencyLevel: 'Expert' },
      { name: 'TypeScript', iconName: 'FileCode', description: 'Strict type safety, generics, interfaces, linting', proficiencyLevel: 'Advanced' },
      { name: 'React', iconName: 'Layers', description: 'Hooks, context state, component lifecycle, Next.js', proficiencyLevel: 'Advanced' },
      { name: 'Tailwind CSS', iconName: 'Wind', description: 'Utility-first styling, design tokens, responsive UI', proficiencyLevel: 'Expert' },
    ],
  },
  {
    id: 'backend',
    categoryName: 'BACKEND',
    description: 'Building robust, decoupled APIs and resilient server-side services.',
    skills: [
      { name: 'Python', iconName: 'Terminal', description: 'Concurrent scripts, system daemons, data processing', proficiencyLevel: 'Expert' },
      { name: 'Flask', iconName: 'Server', description: 'Lightweight WSGI services, blueprint routing, auth', proficiencyLevel: 'Advanced' },
      { name: 'Node.js', iconName: 'Cpu', description: 'Event-driven servers, Express middleware, worker pools', proficiencyLevel: 'Advanced' },
      { name: 'REST APIs', iconName: 'Network', description: 'Idempotent routing, OpenAPI/Swagger contracts, rate limits', proficiencyLevel: 'Expert' },
    ],
  },
  {
    id: 'database',
    categoryName: 'DATABASE',
    description: 'Relational data modeling, query optimization, and transaction safety.',
    skills: [
      { name: 'MySQL', iconName: 'Database', description: 'Relational schema design, normalization, foreign keys', proficiencyLevel: 'Advanced' },
      { name: 'PostgreSQL', iconName: 'Database', description: 'Trigram indexing, JSONB queries, ACID transactions', proficiencyLevel: 'Advanced' },
      { name: 'SQLite', iconName: 'HardDrive', description: 'Zero-config local storage, embedded system databases', proficiencyLevel: 'Expert' },
    ],
  },
  {
    id: 'tools',
    categoryName: 'TOOLS',
    description: 'Modern developer ergonomics, version control, and containerization.',
    skills: [
      { name: 'Git', iconName: 'GitBranch', description: 'Branching strategies, interactive rebasing, merge workflows', proficiencyLevel: 'Expert' },
      { name: 'GitHub', iconName: 'Github', description: 'Actions CI/CD pipelines, PR code reviews, releases', proficiencyLevel: 'Expert' },
      { name: 'VS Code', iconName: 'Monitor', description: 'Optimized developer workflows, debugging, extensions', proficiencyLevel: 'Expert' },
      { name: 'PyCharm', iconName: 'Cpu', description: 'Profiling, scientific inspection, virtual environments', proficiencyLevel: 'Advanced' },
      { name: 'Docker', iconName: 'Box', description: 'Containerized microservices, multi-stage builds', proficiencyLevel: 'Proficient' },
    ],
  },
  {
    id: 'other',
    categoryName: 'OTHER',
    description: 'High-level software architecture, intelligence, and UX methodologies.',
    skills: [
      { name: 'AI Integration', iconName: 'Sparkles', description: 'LLM prompts, embeddings, automated pipelines, APIs', proficiencyLevel: 'Advanced' },
      { name: 'System Architecture', iconName: 'Workflow', description: 'Separation of concerns, fault isolation, scalability', proficiencyLevel: 'Advanced' },
      { name: 'UI/UX Engineering', iconName: 'Layout', description: 'Figma prototypes, design systems, WCAG accessibility', proficiencyLevel: 'Advanced' },
      { name: 'Database Design', iconName: 'Boxes', description: 'ER diagrams, index tuning, data deduplication', proficiencyLevel: 'Expert' },
    ],
  },
];

export const FEATURED_PROJECTS: ProjectDetail[] = [
  {
    id: 'speed-detection-system',
    title: 'Speed Detection and Warning System',
    shortDescription:
      'A smart traffic safety prototype that detects vehicle speed, provides pedestrian warnings, and supports CCTV-based monitoring.',
    category: 'SYSTEMS',
    technologies: ['Arduino', 'ESP32-CAM', 'Python', 'SQLite', 'CustomTkinter', 'RF Communication'],
    githubUrl: 'https://github.com/tristandaveplaza/speed-detection-warning-system',
    liveDemoUrl: '#cctv-speed-demo',
    featured: true,
    status: 'Academic Defense',
    stats: {
      metric: '<50ms',
      label: 'Siren Relay Alert Latency',
    },
    overview:
      'An end-to-end traffic safety monitoring station combining roadside optical sensors, ESP32-CAM wireless video capture, and a Python desktop control station running CustomTkinter. The system computes real-time vehicle velocity, logs violations to a local SQLite database, and wirelessly trips high-decibel audio-visual sirens when pedestrians occupy the crosswalk.',
    problem:
      'Pedestrian crosswalk accidents frequently occur on municipal secondary roads where multi-million peso automated radar gantries are financially unfeasible. Standard roadside cameras lack real-time localized alerting mechanisms to warn pedestrians stepping into oncoming hazards.',
    solution:
      'Engineered an edge hardware array featuring low-power microcontrollers and Python computer vision calibration. The system tracks vehicle displacement across calibrated road markers, automatically determines velocity vectors, and fires physical RF-actuated warnings within 50 milliseconds.',
    features: [
      'Sub-50ms emergency relay triggering via 433MHz RF wireless module',
      'Dual optical sensor baseline calibration for verified velocity calculation',
      'CustomTkinter administrative dashboard with live velocity graphing',
      'Local SQLite transaction store with tamper-evident violation logging',
      'Integrated pedestrian push-button & ultrasonic zone awareness',
    ],
    architectureNotes: [
      'Hardware Edge: ESP32-CAM frame streaming + Arduino sensor interrupt triggers',
      'Wireless Transport: RF transceiver layer avoiding Wi-Fi congestion and latency spikes',
      'Desktop Control Plane: Python event loop asynchronously dispatching frame processing',
      'Storage: Atomic SQLite write operations with indexed timestamp queries',
    ],
    challenges: [
      'Overcoming frame buffer jitter and optical lens distortion when calculating millimeter distances',
      'Eliminating false positives caused by shadows and environmental ambient lighting changes',
      'Ensuring reliable RF packet delivery in electromagnetic noisy roadside environments',
    ],
    results: [
      'Achieved 96.4% speed measurement correlation compared against municipal radar reference devices',
      'Maintained 0 false siren triggers over continuous 48-hour prototype burn-in testing',
      'Successfully presented and defended before inter-agency engineering evaluation panel',
    ],
    imagePlaceholderGradient: 'from-blue-600/30 via-indigo-900/40 to-slate-950',
  },
  {
    id: 'laundry-management-platform',
    title: 'Laundry Pickup and Delivery Management System',
    shortDescription:
      'A web-based management platform designed to organize customers, laundry orders, pickups, deliveries, and payments.',
    category: 'FULL-STACK',
    technologies: ['Python', 'Flask', 'HTML5', 'CSS3', 'JavaScript', 'SQLite/MySQL'],
    githubUrl: 'https://github.com/brets60/Laundry-Pickup-and-Delivery-Management-System',
    liveDemoUrl: 'https://laundry-mgmt.demo.local',
    featured: true,
    status: 'Production',
    stats: {
      metric: '-60%',
      label: 'Order Processing Time',
    },
    overview:
      'A comprehensive commercial web application created for laundry enterprises to replace error-prone paper ticketing. Features multi-role access control (Admin, Counter Staff, Delivery Riders, Customers), automated weight and service pricing calculations, dispatch route mapping, and instant SMS status notifications.',
    problem:
      'Local laundry and garment service businesses struggled with lost laundry tickets, unorganized delivery schedules, untracked payment balances, and customer disputes over garment status.',
    solution:
      'Developed a responsive full-stack platform with Flask and MySQL/SQLite. Provides an interactive order wizard, real-time stage tracking (Received, Washing, Drying, Folding, Out for Delivery, Completed), and daily revenue reconciliation dashboards.',
    features: [
      'Multi-role role-based access control (RBAC) with secure session authentication',
      'Live order lifecycle tracker with printable thermal-receipt barcode vouchers',
      'Automated pickup and drop-off schedule dispatch board for delivery staff',
      'Customer self-service portal to check order weight, charges, and laundry progress',
      'Daily financial analytics exportable to Excel/CSV with payment ledger audit logs',
    ],
    architectureNotes: [
      'Backend Architecture: Flask Application Factory pattern with modular Blueprint separation',
      'Data Modeling: Normalized relational schema handling customer accounts, orders, line items, and audit logs',
      'Frontend: Responsive vanilla JavaScript modules with custom CSS utility classes ensuring instant load times',
    ],
    challenges: [
      'Handling concurrent staff edits on orders while delivery riders update drop-off statuses in the field',
      'Designing an intuitive point-of-sale interface fast enough for busy peak-hour shop counter staff',
    ],
    results: [
      'Reduced average customer check-in time from 4.5 minutes to under 50 seconds',
      'Eliminated 100% of misplaced order disputes during trial business pilot',
      'Generated clear daily cash and digital payment reports for shop management',
    ],
    imagePlaceholderGradient: 'from-sky-600/30 via-blue-900/40 to-slate-950',
  },
  {
    id: 'ai-job-skills-assistant',
    title: 'AI Job & Skills Assistant',
    shortDescription:
      'An AI-powered platform designed to help users identify suitable career paths, evaluate skills, discover skill gaps, and create personalized learning directions.',
    category: 'AI',
    technologies: ['React', 'TypeScript', 'Python', 'Tailwind CSS', 'AI APIs', 'PostgreSQL'],
    githubUrl: 'https://github.com/tristandaveplaza/ai-job-skills-assistant',
    liveDemoUrl: 'https://ai-skills-assistant.demo.local',
    featured: true,
    status: 'Active Development',
    stats: {
      metric: '92%',
      label: 'Skill Gap Match Precision',
    },
    overview:
      'An intelligent career roadmap application that parses user resumes, evaluates current technical proficiencies against live market demands, diagnoses missing prerequisites, and generates milestone-based curriculum roadmaps with curated project recommendations.',
    problem:
      'Aspiring tech professionals and career changers face overwhelming information overload when determining which frameworks, architectures, and technical competencies are actually demanded by employers for specific engineering roles.',
    solution:
      'Architected a React + TypeScript frontend paired with a Python backend that ingests user portfolios and job targets. Employs structured AI evaluations to extract competency vectors, highlighting specific missing skills with targeted learning projects.',
    features: [
      'Interactive Resume & Portfolio skill extractor with immediate competency profiling',
      'Visual skill gap radar diagram comparing candidate proficiencies against role standards',
      'Dynamic curriculum generator delivering actionable 4-week, 8-week, and 12-week study plans',
      'Curated project suggestions designed to fill high-priority resume deficiencies',
      'Exportable personalized career roadmap in formatted PDF format',
    ],
    architectureNotes: [
      'Client: React 18 with TypeScript and Tailwind CSS for rapid responsive rendering',
      'Inference Layer: Async Python service validating prompt structures with JSON Schema enforcement',
      'Persistence: PostgreSQL storing user progress, market skill taxonomies, and bookmarks',
    ],
    challenges: [
      'Preventing AI hallucination in skill assessments by strictly grounding outputs against a verified industry skill taxonomy',
      'Creating an engaging, non-intimidating visual UI for users assessing their skill gaps',
    ],
    results: [
      'Achieved 92% user satisfaction during beta testing with 120+ computer science graduates',
      'Shortened career direction planning time from days of research into an actionable 5-minute diagnostic',
    ],
    imagePlaceholderGradient: 'from-indigo-600/30 via-purple-900/40 to-slate-950',
  },
  {
    id: 'social-welfare-matcher',
    title: 'Algorithmic Municipal Relief Matcher',
    shortDescription:
      'A deterministic rule engine resolving cross-barangay duplicate beneficiary claims and distributing disaster relief equitably.',
    category: 'FULL-STACK',
    technologies: ['FastAPI', 'PostgreSQL', 'Supabase', 'Tailwind CSS', 'React'],
    githubUrl: 'https://github.com/brets60/smartaid',
    liveDemoUrl: '#aid-matcher-demo',
    featured: false,
    status: 'Prototype',
    stats: {
      metric: '18ms',
      label: 'Batch Deduplication Query',
    },
    overview:
      'An administrative control plane designed for local government units (LGUs). Employs composite cryptographic hashing and PostgreSQL trigram similarity indices to detect phonetic and ID duplicate claims, while computing Weighted Multi-Factor Vulnerability Scores.',
    problem:
      'Disaster relief distribution in municipal jurisdictions suffers from double-dipping, phonetic misspelling of family names, and lack of transparent prioritization criteria.',
    solution:
      'Developed a high-throughput FastAPI engine with PostgreSQL row-level security that ingests demographic rosters and generates tamper-evident beneficiary rankings with zero duplicate allocation.',
    features: [
      'Deterministic composite identity hashing (National ID + Mobile + Household code)',
      'PostgreSQL pg_trgm fuzzy matching for misspelled street names and surnames',
      'Weighted vulnerability scoring (PWD, senior, minor, income, flood danger indices)',
      'Immutable audit trail conforming to Commission on Audit transparency requirements',
    ],
    architectureNotes: [
      'Backend: FastAPI ASGI server with asynchronous connection pooling',
      'Database: PostgreSQL with GIN trigram indexes achieving sub-20ms queries across 30k records',
    ],
    challenges: [
      'Ensuring fair priority ranking without human political bias or arbitrary discretion',
    ],
    results: [
      '100% duplicate claim resolution across simulated 40,000 resident records',
      'Slashing distribution queue validation time by 65%',
    ],
    imagePlaceholderGradient: 'from-amber-600/30 via-orange-900/40 to-slate-950',
  },
  {
    id: 'academic-portal-prototype',
    title: 'Campus Attendance & Evaluation Terminal',
    shortDescription:
      'Contactless RFID attendance logger and student laboratory terminal with automatic grade calculation.',
    category: 'ACADEMIC',
    technologies: ['Python', 'SQLite', 'RFID RC522', 'Tkinter', 'Raspberry Pi'],
    githubUrl: 'https://github.com/tristandaveplaza/academic-attendance-terminal',
    featured: false,
    status: 'Academic Defense',
    stats: {
      metric: '0.4s',
      label: 'Badge Scan Tap Time',
    },
    overview:
      'Hardware terminal deployed in computer laboratories to log student station check-ins using 13.56MHz RFID cards, track equipment usage, and automatically compute laboratory participation metrics.',
    problem:
      'Manual paper sign-in sheets in academic engineering laboratories were constantly damaged, skipped, or forged by proxy attendees.',
    solution:
      'Integrated an RC522 RFID reader with a standalone Python desktop client on Raspberry Pi to instantaneously log student timestamps and seat assignments.',
    features: [
      'Instant RFID card UID reading and verification',
      'Automated laboratory hours tally and absence alerts',
      'CSV/Excel reporting for faculty instructors',
    ],
    architectureNotes: [
      'Hardware: SPI bus interfacing with MFRC522 scanner module',
      'Storage: Local SQLite database with automated scheduled backup triggers',
    ],
    challenges: [
      'Handling rapid sequential badge taps during class rush without crashing the SPI bus',
    ],
    results: [
      'Deployed across 3 university computer laboratories during academic capstone trial',
      '100% elimination of proxy sign-ins',
    ],
    imagePlaceholderGradient: 'from-emerald-600/30 via-teal-900/40 to-slate-950',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'fullstack-web',
    iconName: 'Globe',
    title: 'Full-Stack Web Development',
    shortExplanation:
      'End-to-end responsive web applications using React, TypeScript, and modern backend frameworks tailored for real-world workflows.',
    deliverables: ['Custom frontend architectures', 'Responsive mobile-first interfaces', 'Full-stack integration'],
  },
  {
    id: 'business-mgmt',
    iconName: 'Building2',
    title: 'Business Management Systems',
    shortExplanation:
      'Custom management software for order processing, inventory tracking, appointment scheduling, and role-based staff operations.',
    deliverables: ['Role-based access control (RBAC)', 'Order & inventory tracking', 'Audit-ready transaction logs'],
  },
  {
    id: 'database-dev',
    iconName: 'Database',
    title: 'Database Development & Architecture',
    shortExplanation:
      'Normalized relational schema design, query optimization, data indexing, and migration pipelines for MySQL, PostgreSQL, and SQLite.',
    deliverables: ['Normalized schema design', 'Trigram & B-tree index tuning', 'Deduplication & integrity constraints'],
  },
  {
    id: 'ui-ux',
    iconName: 'Layout',
    title: 'UI/UX Implementation',
    shortExplanation:
      'Translating design prototypes into pixel-perfect, accessible, and high-performance interfaces with clean design tokens.',
    deliverables: ['WCAG AAA color contrast', '48px touch-target ergonomics', 'Smooth micro-interactions'],
  },
  {
    id: 'api-dev',
    iconName: 'Server',
    title: 'API Development & Integration',
    shortExplanation:
      'Restful API design with clean endpoint contracts, data validation, rate limiting, and third-party webhook integrations.',
    deliverables: ['FastAPI & Express endpoints', 'OpenAPI/Swagger documentation', 'Secure token authentication'],
  },
  {
    id: 'ai-integration',
    iconName: 'Sparkles',
    title: 'AI Integration & Automation',
    shortExplanation:
      'Embedding intelligent AI capabilities, prompt engineering pipelines, and smart classifiers into existing business applications.',
    deliverables: ['Structured LLM outputs', 'Intelligent search & categorization', 'Automated document parsing'],
  },
  {
    id: 'automation',
    iconName: 'Workflow',
    title: 'Workflow Automation',
    shortExplanation:
      'Automating repetitive business processes, file processing, data scraping, and notification dispatches with custom Python scripts.',
    deliverables: ['Scheduled cron daemons', 'Automated report exports (PDF/CSV)', 'Data transformation pipelines'],
  },
  {
    id: 'system-prototyping',
    iconName: 'Cpu',
    title: 'System & IoT Prototyping',
    shortExplanation:
      'Rapid functional prototyping connecting software backends to physical microcontrollers, sensors, and hardware relays.',
    deliverables: ['Arduino/ESP32 firmware integration', 'Sensor telemetry dashboards', 'Physical relay alarm controls'],
  },
];

export const TIMELINE_EXPERIENCE: TimelineMilestone[] = [
  {
    year: '2025',
    period: 'Q3 – Q4 2025',
    title: 'Speed Detection & Warning Prototype Defense',
    organization: 'Hardware & Systems Engineering Capstone',
    category: 'Achievements',
    description:
      'Successfully built and defended a functional traffic monitoring and pedestrian safety prototype combining ESP32-CAM optical sensing and sub-50ms physical relay sirens.',
    highlights: [
      'Achieved 96.4% velocity correlation against calibrated radar benchmarks',
      'Defended before university panel with unanimous highest technical commendation',
      'Delivered fully functional CustomTkinter live monitoring software',
    ],
    tags: ['IoT', 'Python', 'Arduino', 'System Defense', 'Hardware Relays'],
  },
  {
    year: '2025',
    period: 'Q1 – Q2 2025',
    title: 'Lead Full-Stack Developer: Laundry Management System',
    organization: 'Commercial Software Development Project',
    category: 'Projects',
    description:
      'Architected the end-to-end database, backend API, and administrative dashboard for a multi-station laundry enterprise management platform.',
    highlights: [
      'Implemented Flask application factory with Blueprint routing and SQLite/MySQL backends',
      'Cut customer check-in and intake time by 60% with printable thermal barcodes',
      'Engineered automated delivery dispatch workflows for rider fleets',
    ],
    tags: ['Flask', 'MySQL', 'Full-Stack', 'Business Systems', 'RBAC'],
  },
  {
    year: '2024',
    period: 'Q3 – Q4 2024',
    title: 'Full-Stack & Systems Architecture Fellowship',
    organization: 'Civic Technology Lab & Research Cohort',
    category: 'Development',
    description:
      'Researched and built algorithmic deduplication engines for local government welfare relief distribution, resolving phonetic duplicate claims across synthetic census datasets.',
    highlights: [
      'Created PostgreSQL trigram fuzzy index query responding in 18ms across 30,000 records',
      'Conducted field interviews with caseworkers to refine human-centered UI workflows',
    ],
    tags: ['PostgreSQL', 'FastAPI', 'Algorithms', 'Deduplication'],
  },
  {
    year: '2024',
    period: 'Q1 – Q2 2024',
    title: 'Embedded Systems & Sensor Interfacing Lab Assistant',
    organization: 'Electronics & Computer Engineering Laboratory',
    category: 'Internships',
    description:
      'Assisted in configuring microcontrollers, RFID attendance readers, ultrasonic rangefinders, and serial communication buses for student engineering projects.',
    highlights: [
      'Built automated hardware burn-in test scripts in Python',
      'Troubleshooted circuit noise on I2C and SPI peripheral lines',
    ],
    tags: ['Embedded Systems', 'Raspberry Pi', 'Arduino', 'Lab Research'],
  },
  {
    year: '2021 – 2025',
    period: 'Undergraduate Degree',
    title: 'BS in Information Technology / Computer Science',
    organization: 'University Engineering & Technology Department',
    category: 'Education',
    description:
      'Rigorous academic coursework in Data Structures, Relational Database Management, Operating Systems, Software Engineering, and Computer Networks.',
    highlights: [
      'Consistent academic honors and Dean’s List recognition',
      'Lead software developer for collegiate research group',
    ],
    tags: ['Computer Science', 'Dean’s List', 'Software Engineering'],
  },
];

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    id: 'achieve-1',
    title: 'Outstanding Engineering Prototype Award',
    issuer: 'CICT Engineering Design Jury',
    date: 'December 2025',
    description:
      'Awarded for the Speed Detection & Pedestrian Warning CCTV System for demonstrating exceptional hardware-software integration and real-world safety impact.',
    badgeType: 'Award',
    verified: true,
  },
  {
    id: 'achieve-2',
    title: 'Full-Stack Software Engineering Capstone Distinction',
    issuer: 'Academic Technology Council',
    date: 'June 2025',
    description:
      'Recognized for exceptional architectural rigor, test coverage, and documentation in developing the Laundry Pickup and Delivery platform.',
    badgeType: 'Academic',
    verified: true,
  },
  {
    id: 'achieve-3',
    title: 'Relational Database Design & Query Tuning Certification',
    issuer: 'Database Professionals Institute [Placeholder Credential]',
    date: 'March 2024',
    description:
      'Demonstrated mastery in PostgreSQL schema normalization, index strategies, query plan evaluation, and ACID transaction safety. [Placeholder credential for ongoing certification track]',
    badgeType: 'Certification',
    verified: false,
  },
  {
    id: 'achieve-4',
    title: 'Regional Civic Hackathon Finalist',
    issuer: 'Open Gov Civic Innovation Challenge',
    date: 'November 2024',
    description:
      'Engineered an algorithmic duplicate detection module for municipal social relief distribution under high disaster-response stress constraints.',
    badgeType: 'Competition',
    verified: true,
  },
];

export const CURRENTLY_BUILDING: CurrentlyBuildingItem = {
  projectName: 'Autonomous Edge Vision Dispatcher (AEVD)',
  status: 'In Development',
  technologies: ['Python 3.12', 'FastAPI', 'OpenCV', 'React 19', 'Tailwind CSS', 'Docker'],
  progressPercent: 78,
  shortDescription:
    'A lightweight, edge-compatible video inference gateway that transforms commercial IP cameras into localized intrusion and safety dispatch alerts without relying on costly cloud streaming subscriptions.',
  targetRelease: 'Target Beta: Q4 2026',
  milestones: [
    { name: 'Architecture & Frame Buffer Design', completed: true },
    { name: 'Homography Calibration Tooling', completed: true },
    { name: 'Local MQTT & Webhook Dispatcher', completed: true },
    { name: 'Low-latency WebRTC Browser Dashboard', completed: false },
    { name: 'Hardware Strobe Fail-safe Watchdog', completed: false },
  ],
};
