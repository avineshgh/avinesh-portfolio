export const personalInfo = {
  name: "Avinesh Harikrishnan",
  greeting: "Hi, I'm Avinesh",
  tagline: "Building voice AI, agentic systems, and intelligent products.",
  email: "avineshwnp@gmail.com",
  phone: "+91-9087013160",
  location: "Chennai, Tamil Nadu",
  social: {
    linkedin: "https://www.linkedin.com/in/avineshharikrishnan",
    github: "https://github.com/avineshgh",
  },
};

export const clients = [
  { name: "GCP", logo: "Google Cloud", icon: "googlecloud" },
  { name: "Azure", logo: "Microsoft Azure", icon: "/icons/ms-azure.png", forceWhite: true },
  { name: "Retell AI", logo: "Retell AI", icon: "/icons/retell-ai.png" },
  { name: "LangChain", logo: "LangChain", icon: "langchain" },
  { name: "OpenAI", logo: "OpenAI", icon: "/icons/openai-white-logomark.png" },
  { name: "Gemini", logo: "Gemini", icon: "googlegemini" },
  { name: "FastAPI", logo: "FastAPI", icon: "fastapi" },
  { name: "CrewAI", logo: "CrewAI", icon: "crewai" },
  { name: "ElevenLabs", logo: "ElevenLabs", icon: "elevenlabs" },
  { name: "Promptfoo", logo: "Promptfoo", icon: "/icons/promptfoo.png", forceWhite: true },
];

export const services = [
  {
    icon: "mic",
    title: "Voice AI",
    description:
      "Building production-grade conversational voice agents using Retell AI, Gemini Speech-to-Speech, and ElevenLabs.",
  },
  {
    icon: "network",
    title: "Agentic AI",
    description:
      "Designing multi-agent systems and automation pipelines with LangChain, CrewAI, and workflow orchestration tools.",
  },
  {
    icon: "database",
    title: "LLM & RAG",
    description:
      "Engineering RAG pipelines, knowledge base systems, and prompt-tested LLM applications with vector search.",
  },
  {
    icon: "cloud",
    title: "Cloud & Backend",
    description:
      "Deploying AI solutions on GCP and Azure with FastAPI backends, Cloud Run, and scalable REST APIs.",
  },
];

export const projects = [
  {
    id: 1,
    title: "VOI — Voice Optimized Intelligence",
    category: "Voice AI Platform",
    year: "2025",
    tags: ["Python", "FastAPI", "Gemini S2S", "VAD", "Vertex AI", "GCP Cloud Run", "GCP Bucket", "RAG Engine", "PostgreSQL", "Promptfoo"],
    thumbnail: null,
    gradient: "linear-gradient(135deg, #0a1628 0%, #0f2d4a 50%, #0d1f35 100%)",
    icon: "mic",
    overview:
      "A multi-source Knowledge Base platform powering dynamic, context-aware voice agent responses with file uploads, website crawling, and raw text ingestion.",
    role: "AI Developer",
    description:
      "Designed and built a multi-source KB system supporting three ingestion modes: direct file uploads, website crawling, and raw text. Built a Promptfoo-powered prompt testing pipeline to reduce regressions. Engineered a web crawling-to-KB pipeline that auto-ingests website content, eliminating manual data entry for clients.",
    link: "https://sandhata.com",
    color: "#0f1e2e",
  },
  {
    id: 2,
    title: "EVA — SDLC Automation Platform",
    category: "Internal AI Platform",
    year: "2025",
    tags: ["Python", "FastAPI", "MSAL", "Azure DevOps", "Azure App Service", "PostgreSQL", "Azure OpenAI"],
    thumbnail: null,
    gradient: "linear-gradient(135deg, #0e0e2e 0%, #1a1060 50%, #080820 100%)",
    icon: "code",
    overview:
      "An internal AI-powered SDLC platform with SSO, dynamic Azure DevOps sync, workspace management, and AI-generated test cases from user stories.",
    role: "AI Developer",
    description:
      "Implemented SSO (MSAL + React SPA + Spring Boot) for unified authentication. Built Dynamic Azure DevOps Sync for automated project data updates. Designed a Workspace concept for multi-org ADO management and developed AI-powered test case generation directly pushed back into ADO user stories.",
    link: "https://sandhata.com",
    color: "#1a1a2e",
  },
  {
    id: 3,
    title: "Saha — AI Voice Sales Agent",
    category: "Conversational AI",
    year: "2025",
    tags: ["VOI", "Python", "FastAPI", "GCP Cloud Run", "PostgreSQL", "SMTP", "Twilio"],
    thumbnail: null,
    gradient: "linear-gradient(135deg, #0a1f0a 0%, #1a3d1a 50%, #0d2a0d 100%)",
    icon: "phone",
    overview:
      "A production inbound voice AI agent handling sales queries, appointment booking, and lead capture — replacing the need for a live sales representative.",
    role: "AI Developer",
    description:
      "Built and iteratively refined an inbound voice agent with multi-step booking flows, function call sequencing, post-call analysis, and automated email triggers (greeting mail to user, lead mail to sales team). Adapted the same architecture for Gemini Speech-to-Speech, demonstrating platform-agnostic prompt design.",
    link: "https://sandhata.com",
    color: "#1e2a1a",
  },
  {
    id: 4,
    title: "SimbliAI — Multi-Agent Automation",
    category: "Agentic AI",
    year: "2024",
    tags: ["CrewAI", "LangChain", "n8n", "Python"],
    thumbnail: null,
    gradient: "linear-gradient(135deg, #1e0a2e 0%, #3d1060 50%, #150820 100%)",
    icon: "network",
    overview:
      "A multi-agent automation platform for sales and marketing — Agent Sam for lead generation and scheduling, Agent Alfred for social media content creation.",
    role: "Junior AI Developer",
    description:
      "Built Agent Sam for automated lead generation and scheduling, and Agent Alfred for social media content creation and publishing.",
    link: "#",
    color: "#2e1a2a",
  },
  {
    id: 6,
    title: "Restaurant Voice Agent",
    category: "Voice AI",
    year: "2024",
    tags: ["VOI", "Python", "FastAPI", "GCP Cloud Run", "PostgreSQL", "SMTP", "Twilio"],
    thumbnail: null,
    gradient: "linear-gradient(135deg, #041e1e 0%, #0a3d3d 50%, #062828 100%)",
    icon: "utensils",
    overview:
      "A voice agent for a restaurant client handling takeaway orders and table bookings over phone with automated SMS notifications.",
    role: "AI Developer",
    description:
      "Developed a voice agent for Veg Chennai Srilalitha (Finchley branch) handling takeaway orders and table bookings. Implemented availability-based dish restrictions, booking confirmation flows, and automated SMS notifications to both customer and restaurant manager.",
    link: "#",
    color: "#1a2e2e",
  },
];

export const experiences = [
  {
    id: 1,
    company: "Sandhata Technologies",
    role: "AI Engineer",
    duration: "Dec 2025 — Present",
    type: "Full-time",
    description:
      "Building and owning AI product initiatives across voice AI, platform engineering, and intelligent automation. Driving VOI (voice AI platform), EVA (SDLC automation), and Saha (AI voice sales agent) end to end.",
    skills: ["Python", "FastAPI", "CrewAI", "LangChain", "RAG", "LLMs", "Prompt Engineering", "SQL", "Pinecone", "Weaviate", "Retell AI", "n8n", "Azure", "GCP"],
  },
  {
    id: 2,
    company: "Dot Com Infoway",
    role: "Junior AI Developer",
    duration: "Aug 2025 — Nov 2025",
    type: "Full-time",
    description:
      "Built SimbliAI (multi-agent sales automation) with Agent Sam for lead generation and Agent Alfred for social media content creation. Developed a conversational voice agent for hotel operations (booking, check-in, check-out) using Retell AI and n8n.",
    skills: ["Python", "Flask", "FastAPI", "CrewAI", "LangChain", "RAG", "LLMs", "Prompt Engineering", "SQL", "n8n"],
  },
  {
    id: 3,
    company: "Dot Com Infoway",
    role: "AI Trainee",
    duration: "Jul 2025",
    type: "Training",
    description:
      "Completed hands-on training in LLM application development, RAG architectures, and workflow automation tools. Gained foundational experience across the Generative AI stack.",
    skills: ["LLM", "RAG", "Prompt Engineering", "Workflow Automation"],
  },
  {
    id: 4,
    company: "Wec.ai",
    role: "AI Intern",
    duration: "Apr 2024",
    type: "Internship",
    description:
      "Assisted in building AI-powered automation solutions and gained foundational experience in Generative AI frameworks and real-world AI product development.",
    skills: ["Generative AI", "Automation", "Python"],
  },
];

export const skills = [
  { label: "Python", category: "Backend" },
  { label: "FastAPI", category: "Backend" },
  { label: "Flask", category: "Backend" },
  { label: "LangChain", category: "AI Framework" },
  { label: "LangGraph", category: "AI Framework" },
  { label: "CrewAI", category: "AI Framework" },
  { label: "Promptfoo", category: "AI Framework" },
  { label: "RAG", category: "AI" },
  { label: "LLM Integration", category: "AI" },
  { label: "Prompt Engineering", category: "AI" },
  { label: "Retell AI", category: "Voice AI" },
  { label: "ElevenLabs", category: "Voice AI" },
  { label: "Bland AI", category: "Voice AI" },
  { label: "Workflow Automation", category: "Automation" },
  { label: "n8n", category: "Automation" },
  { label: "Make", category: "Automation" },
  { label: "Zapier", category: "Automation" },
  { label: "GCP", category: "Cloud" },
  { label: "Vertex AI", category: "Cloud" },
  { label: "Azure", category: "Cloud" },
  { label: "AWS", category: "Cloud" },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "K.L.N College of Engineering, Madurai",
    year: "2023 — 2025",
    score: "80%",
  },
  {
    degree: "Bachelor of Science in Computer Science (B.Sc CS)",
    institution: "K.L.N College of Arts and Science, Madurai",
    year: "2020 — 2023",
    score: "70%",
  },
];
