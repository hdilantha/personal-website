export const site = {
  name: "Dilantha Haputhanthri",
  title: "Dilantha Haputhanthri | Data Scientist & Technical AI Consultant",
  description:
    "AI consultant and Data Scientist delivering production-grade enterprise AI, GenAI, Azure-native AI architecture, and agentic workflow automation.",
  role: "Data Scientist & AI Consultant @ PS Hummingbird",
  location: "Bundoora, Victoria, Australia",
  positioning: "AI consultant delivering production-grade enterprise AI systems.",
  hero:
    "I design and deliver Azure-native AI, GenAI, and agentic workflow automation solutions that move beyond prototypes into secure, scalable enterprise workflows.",
  cvUrl: "/cv.pdf",
  profileImage: "/profile.jpg",
  links: {
    email: "mailto:dilantha.inbox@gmail.com",
    linkedin: "https://www.linkedin.com/in/dilantha-haputhanthri",
    github: "https://github.com/hdilantha",
    scholar: "https://scholar.google.com/citations?user=c7cb-jAAAAAJ&hl=en",
    latrobe: "https://scholars.latrobe.edu.au/dhaputhanthr",
  },
  contact: {
    email: "dilantha.inbox@gmail.com",
    linkedin: "linkedin.com/in/dilantha-haputhanthri",
    github: "github.com/hdilantha",
    scholar: "scholar.google.com/citations?user=c7cb-jAAAAAJ&hl=en",
  },
};

export const navItems = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Work", href: "/#work" },
  { label: "Research", href: "/#research" },
  { label: "Teaching", href: "/#teaching" },
  { label: "Writing", href: "/writing/" },
  { label: "Contact", href: "/#contact" },
  { label: "CV", href: site.cvUrl },
] as const;

export const credibility = [
  "Enterprise AI",
  "Azure-native Architecture",
  "Azure AI",
  "Agentic Workflows",
  "LLM Orchestration",
  "Cloud Delivery",
  "DevOps",
] as const;

export const heroStats = [
  { value: "5+ years", label: "AI delivery" },
  { value: "PhD", label: "in AI" },
  { value: "500+", label: "Citations" },
] as const;

export const projects = [
  {
    title: "Urban Planning AI Platform",
    role: "Data Scientist / Azure AI Implementation",
    description:
      "Designed and delivered a production Azure-native multi-agent AI solution to automate core urban planning workflows, including Azure architecture design, Azure DevOps setup, production deployment approach, and agentic workflow implementation.",
    tags: ["Azure OpenAI", "Azure AI Foundry", "Agentic AI", "Multi-Agent Systems", "Azure DevOps"],
    relatedPosts: [
      {
        title: "Building a Durable AI Job Architecture on Azure Container Apps and Service Bus",
        href: "/writing/durable-ai-job-architecture-azure-container-apps-service-bus/",
      },
      {
        title: "Deploying to a Private Azure App Service from Azure DevOps with Managed DevOps Pools",
        href: "/writing/deploying-private-azure-app-service-from-azure-devops-managed-devops-pools/",
      },
    ],
  },
  {
    title: "Enterprise GenAI Enablement",
    role: "Data Science Specialist",
    description:
      "Delivered GenAI capabilities across multiple telecommunications digital products, including RAG-based customer support, LLM evaluation, search enhancement, and FAQ automation for large-scale customer-facing use cases.",
    tags: ["GenAI", "RAG", "LLM Evaluation", "Search Enhancement", "FAQ Automation"],
  },
  {
    title: "Energy Analytics & Forecasting Platform",
    role: "Data Scientist",
    description:
      "Led solar generation analytics and machine learning pipeline development for an energy analytics platform, supporting forecasting, performance monitoring, and net-zero decision-making.",
    tags: ["Energy Analytics", "Forecasting", "Machine Learning", "Solar Generation", "Net-Zero Analytics"],
    relatedPublications: [
      {
        title: "Unisolar: An open dataset of photovoltaic solar energy generation in a large multi-campus university setting",
        href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=c7cb-jAAAAAJ&citation_for_view=c7cb-jAAAAAJ:Y0pCki6q_DkC",
      },
      {
        title: "Solar irradiance nowcasting for virtual power plants using multimodal long short-term memory networks",
        href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=c7cb-jAAAAAJ&citation_for_view=c7cb-jAAAAAJ:UeHWp8X0CEIC",
      },
      {
        title: "Solar power forecasting with sparse deep learning for fast frequency response ancillary services",
        href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=c7cb-jAAAAAJ&citation_for_view=c7cb-jAAAAAJ:_FxGoFyzp5QC",
      },
    ],
  },
] as const;

export const experience = [
  {
    organization: "PS Hummingbird",
    title: "Data Scientist",
    period: "November 2025 - Present",
    startDate: "2025-11-01",
    endDate: "2026-06-14",
    lane: 0,
    location: "Melbourne, VIC",
    summary:
      "Current Data Scientist role focused on applied AI and production-grade data science delivery.",
  },
  {
    organization: "La Trobe University",
    title: "Lecturer (Sessional Academic)",
    period: "August 2022 - Present",
    startDate: "2022-08-01",
    endDate: "2026-06-14",
    lane: 2,
    location: "Melbourne, VIC",
    summary:
      "Delivering lectures and workshops for postgraduate coursework in data warehousing, big data analytics, cloud platforms, analytics, artificial intelligence, and hyperautomation.",
  },
  {
    organization: "La Trobe University",
    title: "Doctoral Researcher",
    period: "May 2022 - November 2025",
    startDate: "2022-05-01",
    endDate: "2025-11-01",
    lane: 1,
    location: "Melbourne, VIC",
    summary:
      "Conducted doctoral research in energy-efficient Artificial Intelligence, focusing on Sparse Distributed Representations, Vector Symbolic Architectures, and Sparse Deep Learning.",
  },
  {
    organization: "Telstra",
    title: "Data Science Specialist",
    period: "November 2024 - May 2025",
    startDate: "2024-11-01",
    endDate: "2025-05-01",
    lane: 0,
    location: "Australia",
    summary:
      "Deployed GenAI solutions across multiple products, improving customer satisfaction, engagement, and operational efficiency.",
  },
  {
    organization: "Centre For Data Analytics and Cognition",
    title: "Data Scientist",
    period: "January 2020 - November 2024",
    startDate: "2020-01-01",
    endDate: "2024-11-01",
    lane: 0,
    location: "Melbourne, Victoria, Australia",
    summary:
      "Led solar generation analytics within the La Trobe Energy Analytics Platform, including forecasting and performance monitoring for 7,500+ panels across multiple campuses.",
  },
] as const;

export const education = [
  {
    institution: "La Trobe University",
    degree: "Doctor of Philosophy - PhD, Artificial Intelligence",
    period: "2022 - 2025",
  },
  {
    institution: "University of Moratuwa",
    degree: "Master of Science - MS, Computer Science",
    period: "2020 - 2021",
  },
  {
    institution: "University of Moratuwa",
    degree: "Bachelor of Science (Hons.), Computer Science and Engineering",
    period: "2015 - 2019",
  },
] as const;

export const profileHighlights = [
  {
    label: "Enterprise AI",
    title: "Production-grade AI delivery",
    description:
      "5+ years' experience delivering enterprise AI, GenAI, and applied AI solutions across telecommunications, energy, transportation, healthcare, and urban planning.",
  },
  {
    label: "Research Credibility",
    title: "PhD in AI with 500+ Google Scholar citations",
    description:
      "Combines a PhD in Artificial Intelligence with published AI and Data Science research, bringing applied research depth into enterprise AI delivery.",
  },
  {
    label: "Azure-native",
    title: "Secure cloud architecture",
    description:
      "Designing Azure-native AI architecture with Azure OpenAI, Azure AI Foundry, DevOps, CI/CD, production deployment patterns, and enterprise workflow automation.",
  },
  {
    label: "GenAI Products",
    title: "Customer-facing enablement",
    description:
      "Delivered GenAI capabilities across large-scale digital products, including RAG-based customer support, LLM evaluation, search enhancement, and FAQ automation.",
  }
] as const;

export const researchLinks = {
  publications: "https://www.researchgate.net/profile/Dilantha-Haputhanthri",
} as const;

export const thesis = {
  title: "Sparse Distributed Representations for Energy-Efficient Artificial Intelligence",
  degree: "Doctor of Philosophy thesis",
  institution: "La Trobe University",
  school: "La Trobe Business School",
  yearAwarded: "2025",
  posted: "2026-06-03",
  doi: "10.26181/32441283",
  url: "https://doi.org/10.26181/32441283",
  description:
    "PhD thesis on Sparse Distributed Representations for energy-efficient AI, with research spanning vector data classification, manifold learning, Sparse Distributed Representations, Vector Symbolic Architectures, and sparse deep learning.",
  subjects: ["Artificial intelligence", "Energy-efficient computing", "Artificial life and complex adaptive systems"],
} as const;

export const researchThemes = [
  {
    title: "Sparse Distributed Representations",
    description:
      "Energy-efficient representations for vector data classification, topology preservation, and scalable AI systems.",
  },
  {
    title: "Vector Symbolic Architectures",
    description:
      "Hyperdimensional computing methods for representation, binding, bundling, unsupervised learning, and efficient symbolic computation.",
  },
  {
    title: "Energy & Forecasting AI",
    description:
      "Solar generation forecasting, energy analytics, demand forecasting, and machine learning for net-zero infrastructure.",
  },
  {
    title: "Applied AI for Complex Domains",
    description:
      "Research outputs across energy, healthcare, transportation, social data analysis, and intelligent infrastructure.",
  },
] as const;

export const featuredPublications = [
  {
    title: "Parametrization of sparse distributed representations for vector data classification",
    venue: "Neurocomputing",
    year: "2026",
    description:
      "Sparse Distributed Representation research focused on vector data classification and efficient representation learning.",
    tags: ["SDR", "Vector Classification", "Efficient AI"],
  },
  {
    title: "Solar power forecasting with sparse deep learning for fast frequency response ancillary services",
    venue: "International Journal of Electrical Power & Energy Systems",
    year: "2026",
    description:
      "Applied energy AI research using sparse deep learning for solar power forecasting and grid support use cases.",
    tags: ["Sparse Deep Learning", "Forecasting", "Energy Systems"],
  },
  {
    title: "Hyperseed: Unsupervised Learning With Vector Symbolic Architectures",
    venue: "IEEE Transactions on Neural Networks and Learning Systems",
    year: "2024",
    description:
      "Vector Symbolic Architecture research for unsupervised learning and topology-preserving feature representation.",
    tags: ["VSA", "Unsupervised Learning", "Hyperdimensional Computing"],
  },
] as const;

export const scholarMetrics = [
  {
    value: "535",
    label: "Citations",
    description: "Current Google Scholar cited-by count.",
  },
  {
    value: "10",
    label: "h-index",
    description: "Google Scholar author impact metric.",
  },
  {
    value: "10",
    label: "i10-index",
    description: "Google Scholar count of publications with 10+ citations.",
  },
] as const;

export const teachingHighlights = [
  {
    title: "BUS5WB - Data Warehousing and Big Data Analytics",
    institution: "La Trobe University",
    period: "2024 - Present",
    description:
      "Postgraduate subject covering enterprise data warehouse architecture, dimensional modelling, ETL lifecycles, OLAP, big data analytics, data lakes, PySpark, Hive metastore, Databricks, Delta Lake, medallion architecture, and NoSQL.",
    tags: [
      "Data Warehousing",
      "Big Data Analytics",
      "Dimensional Modelling",
      "SQL",
      "ETL",
      "OLAP",
      "MDX",
      "PySpark",
      "Databricks",
      "Delta Lake",
      "Medallion Architecture",
      "NoSQL",
    ],
  },
  {
    title: "BUS5PR1 - Artificial Intelligence and Hyperautomation",
    institution: "La Trobe University",
    period: "2023 - 2025",
    description:
      "Industry-based, employability-focused subject advancing analytics capability into Artificial Intelligence and Hyperautomation through an analytics pitch, scrum-based group assignment, and final insights presentation for an organisational context.",
    tags: [
      "Generative AI",
      "Predictive AI",
      "NLP",
      "Ethics",
      "Data Security",
      "Deep Learning",
      "Analytics Communication",
      "Scrum-based Delivery",
      "Hyperautomation",
    ],
  },
  {
    title: "BUS5001 - Cloud Platforms and Analytics",
    institution: "La Trobe University",
    period: "2022 - 2025",
    description:
      "Cloud analytics subject covering cloud platform fundamentals, cloud architectures, adoption, security and governance, version control, DevOps, serverless computing, cloud data platforms, end-to-end data solutions, AI in the cloud, RPA, conversational agents, and data ethics.",
    tags: [
      "Cloud Platforms",
      "Cloud Architecture",
      "Cloud Adoption",
      "Security and Governance",
      "Version Control",
      "DevOps",
      "Serverless Computing",
      "Cloud Data Platforms",
      "AI in the Cloud",
      "RPA",
      "Conversational Agents",
      "Data Ethics",
    ],
  },
] as const;

export const writingTopics = [
  "Production AI",
  "Azure AI",
  "Enterprise RAG",
  "Agentic Workflows",
  "LLM Evaluation",
  "Sparse AI",
] as const;

export const writingPlaceholders = [
  {
    title: "From AI research to production AI systems",
    description:
      "Notes on translating research ideas into maintainable AI systems that survive real enterprise constraints.",
    category: "Production AI",
    readTime: "6 min read",
    tags: ["Applied AI", "Architecture", "Delivery"],
  },
  {
    title: "What matters when building enterprise RAG",
    description:
      "A practical breakdown of retrieval quality, evaluation, governance, citations, and workflow fit for enterprise RAG systems.",
    category: "Enterprise RAG",
    readTime: "8 min read",
    tags: ["RAG", "LLM Evaluation", "Search"],
  },
  {
    title: "Notes on Azure AI architecture",
    description:
      "Implementation notes on Azure-native AI systems, secure deployment patterns, DevOps, and production readiness.",
    category: "Azure AI",
    readTime: "7 min read",
    tags: ["Azure OpenAI", "Azure AI Foundry", "DevOps"],
  },
  {
    title: "Sparse AI and energy-efficient machine learning",
    description:
      "Reflections on Sparse Distributed Representations, Vector Symbolic Architectures, and efficient learning systems.",
    category: "Sparse AI",
    readTime: "9 min read",
    tags: ["SDR", "VSA", "Energy-Efficient AI"],
  },
] as const;
