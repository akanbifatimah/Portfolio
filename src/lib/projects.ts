export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  name: string;
  sector: string;
  year: string;
  role: string;
  company: string;
  tagline: string;
  summary: string;
  /** Accent colour used for the card glow and case-study details. */
  accent: string;
  image?: string;
  /** Shown in the mock browser bar when there is no public link yet. */
  domain?: string;
  status?: string;
  platforms: string[];
  stack: string[];
  metrics: { value: string; label: string }[];
  links: ProjectLink[];
  sections: { title: string; points: string[] }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "colcare",
    name: "ColCare",
    sector: "Telehealth",
    year: "2026",
    role: "Lead Frontend Engineer",
    company: "Harris Consult",
    tagline: "Healthcare for students, on every screen.",
    summary:
      "A telehealth platform that connects students with licensed doctors, pharmacies and diagnostic labs. I built the marketing site, a four-portal web app and the student mobile app, with live video consultations running across all of them.",
    accent: "#5eead4",
    image: "/work/colcare.png",
    platforms: ["Website", "Web app · 4 portals", "iOS & Android"],
    stack: ["Next.js 16", "React 19", "TypeScript", "Socket.IO", "WebRTC · mediasoup", "Expo", "NativeWind", "Zustand", "Paystack", "Framer Motion"],
    metrics: [
      { value: "4", label: "Role-based portals" },
      { value: "49", label: "Mobile screens" },
      { value: "227", label: "Web app commits" },
    ],
    links: [
      { label: "Website", href: "https://mycolcare.com" },
      { label: "Web app", href: "https://app.mycolcare.com" },
    ],
    featured: true,
    sections: [
      {
        title: "Doctor portal",
        points: [
          "Dashboard, appointment requests and availability rules",
          "Live chat and video consultations",
          "Prescriptions, lab orders and follow-up scheduling",
        ],
      },
      {
        title: "Pharmacy & diagnostic centre portals",
        points: [
          "Prescription orders grouped by consultation, with verification and payments",
          "Test order queue, sample collection, result entry and upload",
          "Operating hours, staff accounts and admin-only access",
        ],
      },
      {
        title: "Super admin & finance",
        points: [
          "Institutions, users, reviews, disputes and support",
          "Finance suite: wallets, withdrawals, recurring billing and token refund analytics",
          "Role-based access control across every module",
        ],
      },
      {
        title: "Student mobile app",
        points: [
          "Email OTP sign-up, multi-step onboarding and biometric login",
          "Symptom intake that hands off to an AI assistant",
          "Book by specialty, then consult live by chat, voice or video",
          "Medical records, prescriptions, a Paystack wallet and push notifications",
        ],
      },
      {
        title: "Marketing website",
        points: [
          "11 public pages for students, doctors, pharmacies and labs",
          "Dockerfile and GitHub Actions CI/CD, migrated to mycolcare.com",
        ],
      },
    ],
  },
  {
    slug: "kiarelay",
    name: "KiaRelay",
    sector: "Logistics",
    year: "2026",
    role: "Lead Frontend Engineer",
    company: "Harris Consult",
    tagline: "Same-day delivery across Texas & Louisiana.",
    summary:
      "A delivery logistics platform built as four products: a marketing site, admin and business web portals, and separate customer and driver mobile apps. It covers everything from booking to live dispatch to proof of delivery.",
    accent: "#ffc46b",
    status: "Launching soon",
    domain: "kiarelay.com",
    platforms: ["Website", "Admin + Business portals", "Customer app", "Driver app"],
    stack: ["React 19", "Vite 8", "TypeScript", "Tailwind CSS 4", "Google Maps", "Recharts", "Next.js 16", "Expo SDK 57", "Zustand"],
    metrics: [
      { value: "94", label: "Web app pages" },
      { value: "104", label: "Mobile screens" },
      { value: "4", label: "Apps shipped" },
    ],
    links: [],
    featured: true,
    sections: [
      {
        title: "Admin dashboard",
        points: [
          "KPI dashboard, live dispatch map and order monitoring",
          "Customer verification, invoices, claims investigation and support queues",
          "Revenue, driver and claims reports with CSV and PDF export",
          "Role-based user management with an audit log",
        ],
      },
      {
        title: "Business portal",
        points: [
          "Company registration with email and phone verification",
          "Document review that gates booking until approved",
          "Three-step booking and live tracking on a real map",
          "Invoices, statements, spend, teams and saved locations",
        ],
      },
      {
        title: "Customer & driver apps",
        points: [
          "Customer: ID verification, booking, live tracking and proof of delivery",
          "Driver: four-step registration with background check and Go Online offers",
          "Guided pickup to drop-off with navigation hand-off",
          "Proof of delivery by photo, signature or PIN, plus an earnings wallet",
        ],
      },
      {
        title: "Marketing website",
        points: [
          "11 pages with JSON-LD, sitemap and social share images",
          "Light and dark themes; all copy driven from config files",
        ],
      },
    ],
  },
  {
    slug: "tkpma-ontime",
    name: "TKPMA Ontime",
    sector: "Education",
    year: "2025 — 2026",
    role: "Lead Frontend Engineer",
    company: "Harris Consult",
    tagline: "Running a music academy, end to end.",
    summary:
      "The system behind a music academy: online enrollment with Stripe and PayPal checkout, and an admin web app for classes, attendance, payments and real-time group messaging.",
    accent: "#8b7bff",
    platforms: ["Enrollment website", "Admin web app", "Mobile app (contributor)"],
    stack: ["React 19", "Vite", "Tailwind CSS 4", "React Query", "Socket.IO", "Stripe", "PayPal", "Google Maps"],
    metrics: [
      { value: "109", label: "My commits in 2026" },
      { value: "2", label: "Payment gateways" },
      { value: "6", label: "Admin modules" },
    ],
    links: [{ label: "Web app", href: "https://app.tkpma.com" }],
    featured: true,
    sections: [
      {
        title: "Enrollment & payments",
        points: [
          "Multi-step enrollment: parent, child and class preferences, with a review step",
          "Stripe and PayPal checkout with gateway callback handling",
          "Google Maps address autocomplete and a parent dashboard",
        ],
      },
      {
        title: "School administration",
        points: [
          "Enrollment review, documents and parent/child profiles",
          "Classes, curriculum, schedules, attendance and assignments",
          "Communication hub with announcements, events and real-time group chat",
          "Director and super admin dashboards with payments and analytics",
        ],
      },
    ],
  },
  {
    slug: "crafter",
    name: "Crafter",
    sector: "AI · Product management",
    year: "2023 — 2025",
    role: "Full Stack Engineer",
    company: "Crafter",
    tagline: "AI that turns documents into roadmaps.",
    summary:
      "An AI-powered product management tool. I designed and built the module behind its AI features: a custom chat interface, insight generation and automatic ticket generation from uploaded documents. I worked on both the frontend and the backend.",
    accent: "#ff7a59",
    image: "/work/crafter.png",
    platforms: ["Website", "Web app", "API"],
    stack: ["Next.js", "React", "TypeScript", "NestJS", "AI integrations"],
    metrics: [
      { value: "AI", label: "Chat, insights & tickets" },
      { value: "Full", label: "Stack ownership" },
      { value: "1.5y", label: "Part-time engagement" },
    ],
    links: [
      { label: "Website", href: "https://usecrafter.com" },
      { label: "Web app", href: "https://app.usecrafter.com" },
    ],
    featured: true,
    sections: [
      {
        title: "AI module",
        points: [
          "Custom chat interface for product managers",
          "Insight generation across a team's work",
          "Automatic ticket generation from uploaded documents",
        ],
      },
      {
        title: "Platform",
        points: [
          "Backend APIs in NestJS, integrated with external services and third-party APIs",
          "Performance, scalability and security work on frontend and backend",
        ],
      },
    ],
  },
  {
    slug: "schoolrider",
    name: "SchoolRider",
    sector: "Transport",
    year: "2024 — 2026",
    role: "Frontend Lead",
    company: "Harris Consult",
    tagline: "Safe school transport, tracked live.",
    summary:
      "A school transportation platform for children. I led the web platform and admin dashboards, including real-time tracking of vehicles and users.",
    accent: "#60a5fa",
    image: "/work/schoolrider.png",
    platforms: ["Website", "Admin dashboard"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Query"],
    metrics: [],
    links: [{ label: "Website", href: "https://web.schoolrider.com" }],
    sections: [
      {
        title: "What I built",
        points: [
          "A clear, family-friendly public website",
          "Admin dashboards with real-time vehicle and user tracking",
        ],
      },
    ],
  },
  {
    slug: "miniemoney",
    name: "MinieMoney",
    sector: "Fintech",
    year: "2022 — 2023",
    role: "Frontend Engineer",
    company: "MinieMoney",
    tagline: "Financial literacy for kids.",
    summary:
      "A fintech platform that teaches children about money. I shipped website v2 (85% more conversions, 15% faster loads) and built wallet and transfer features in the web app.",
    accent: "#34d399",
    image: "/work/miniemoney.png",
    platforms: ["Website", "Web app"],
    stack: ["Next.js", "React", "Tailwind CSS", "REST APIs"],
    metrics: [
      { value: "+85%", label: "Conversions" },
      { value: "−15%", label: "Load time" },
    ],
    links: [
      { label: "Website", href: "https://miniemoney.com" },
      { label: "Web app", href: "https://app.miniemoney.com" },
    ],
    sections: [
      {
        title: "What I built",
        points: [
          "Website v2: a full rebuild focused on conversion and speed",
          "Wallet and fund transfers between users and banks",
          "Payment gateway integrations with robust error handling",
        ],
      },
    ],
  },
  {
    slug: "trackmedrec",
    name: "TrackMedRec",
    sector: "Healthcare",
    year: "2023 — 2024",
    role: "Lead Frontend Engineer",
    company: "Intrapair Technologies",
    tagline: "Telemedicine meets health records.",
    summary:
      "A unified healthcare platform combining telemedicine, live chat and electronic health records. I led the frontend team, ran code reviews and built responsive interfaces.",
    accent: "#f472b6",
    image: "/work/trackmedrec.png",
    platforms: ["Website", "Web app"],
    stack: ["React", "TypeScript", "WebSockets", "REST APIs"],
    metrics: [],
    links: [{ label: "Website", href: "https://trackmedrec.com" }],
    sections: [
      {
        title: "What I led",
        points: [
          "Telemedicine with integrated live chat",
          "Electronic health record (EHR) interfaces",
          "Weekly code reviews and mentoring for the frontend team",
        ],
      },
    ],
  },
  {
    slug: "gcn",
    name: "GCN",
    sector: "Community healthcare",
    year: "2024 — 2025",
    role: "Frontend Lead",
    company: "Harris Consult",
    tagline: "Community healthcare enrollment.",
    summary:
      "Community-focused healthcare web applications. I led the frontend from first design through production support.",
    accent: "#a3e635",
    image: "/work/gcn.png",
    platforms: ["Web app"],
    stack: ["Next.js", "React", "TypeScript"],
    metrics: [],
    links: [{ label: "Web app", href: "https://enrollment.harrisconsult.tech" }],
    sections: [
      {
        title: "What I built",
        points: ["Enrollment flows for a community healthcare programme", "Responsive interfaces, from design through production"],
      },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const moreProjects = projects.filter((p) => !p.featured);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
