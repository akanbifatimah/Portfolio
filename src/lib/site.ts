export const site = {
  name: "Fatimah Akanbi",
  title: "Frontend & Mobile Engineer",
  url: "https://fatimahakanbi.vercel.app",
  email: "akanbifatimah@gmail.com",
  location: "Lagos, Nigeria · Working remotely",
  cv: "/Fatimah-Akanbi-CV.pdf",
  description:
    "Fatimah Akanbi is a Frontend & Mobile Engineer with 5+ years of experience leading React, Next.js and React Native builds, from Figma to the App Store and Google Play.",
  socials: [
    { label: "GitHub", href: "https://github.com/akanbifatimah", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/fatimah-akanbi-746992159/", icon: "linkedin" },
    { label: "YouTube", href: "https://www.youtube.com/channel/UCiWaaD-8VtUCcMmMWt39xTQ", icon: "youtube" },
    { label: "X", href: "https://twitter.com/FatimahAkanbi2", icon: "x" },
  ],
} as const;

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const stats = [
  { value: 5, suffix: "+", label: "Years shipping production software" },
  { value: 530, suffix: "+", label: "Commits across product codebases in 2026" },
  { value: 150, suffix: "+", label: "Mobile screens built for iOS & Android" },
  { value: 9, suffix: "", label: "Codebases owned across 3 products this year" },
] as const;

export const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Expo & EAS",
  "Tailwind CSS",
  "React Query",
  "Zustand",
  "Socket.IO",
  "WebRTC",
  "NestJS",
  "MongoDB",
  "Stripe",
  "Paystack",
  "Framer Motion",
  "Shadcn UI",
] as const;

export const expertise = [
  {
    title: "Web platforms",
    kicker: "React · Next.js · TypeScript",
    body: "Marketing sites that rank and convert, and multi-role web apps with role-based access, analytics, finance and admin tooling that operations teams rely on every day.",
    points: ["Multi-portal dashboards & RBAC", "SEO, structured data & performance", "Design systems from Figma"],
  },
  {
    title: "Mobile apps",
    kicker: "React Native · Expo · EAS",
    body: "I own the whole mobile lifecycle: Figma translation, native features, build pipelines, store compliance and publishing to the App Store and Google Play.",
    points: ["OTP, biometrics & onboarding flows", "Push notifications & deep links", "App Store & Play Store releases"],
  },
  {
    title: "Real-time & payments",
    kicker: "WebSockets · WebRTC · Payments",
    body: "Live video consultations, chat that stays in sync across web and mobile, live dispatch maps, wallets and checkout flows with Stripe, PayPal and Paystack.",
    points: ["Video & chat with Socket.IO / mediasoup", "Wallets, withdrawals & billing", "Live tracking on real maps"],
  },
] as const;

export type Role = {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: Role[] = [
  {
    company: "Harris Consult",
    role: "Lead Frontend Engineer",
    period: "Nov 2024 — Present",
    location: "Remote · Contract",
    points: [
      "Single-handedly engineered and shipped cross-platform mobile apps to the App Store and Google Play, owning build pipelines, store compliance and delivery.",
      "Led frontend architecture for ColCare: role-specific portals for doctors, pharmacies, labs and super admins, plus the super admin finance suite with wallets, withdrawals, billing and RBAC.",
      "Built real-time telemedicine: WebSocket-driven video consultations and messaging kept in sync across web and mobile.",
      "Delivered KiaRelay, TKPMA Ontime, SchoolRider and GCN: websites, admin portals and mobile apps.",
    ],
  },
  {
    company: "Crafter",
    role: "Full Stack Engineer",
    period: "Nov 2023 — Jun 2025",
    location: "Remote · Part-time",
    points: [
      "Designed and built the module behind Crafter's AI features: a custom chat interface, insight generation and automatic ticket generation from uploaded documents.",
      "Implemented backend APIs and UI with NestJS, Next.js, React and TypeScript, and integrated third-party services.",
    ],
  },
  {
    company: "Intrapair Technologies",
    role: "Lead Frontend Engineer",
    period: "Jul 2023 — Aug 2024",
    location: "Remote",
    points: [
      "Led the frontend team building TrackMedRec, a healthcare platform with telemedicine, live chat and electronic health records.",
      "Built every page of Stitchvine, a showcase platform for fashion businesses.",
      "Ran weekly code reviews and mentored engineers through complex problems.",
    ],
  },
  {
    company: "MinieMoney",
    role: "Frontend Engineer",
    period: "Feb 2022 — Jul 2023",
    location: "Victoria Island, Lagos",
    points: [
      "Shipped website v2, which lifted conversions by 85% and cut load times by 15%.",
      "Built digital-bank web app features: wallet, fund transfers and payment gateway integrations with robust error handling.",
    ],
  },
  {
    company: "DPD Schools · The Bulb Africa · LoftyInc",
    role: "Frontend Engineer",
    period: "May 2020 — Feb 2022",
    location: "Lagos",
    points: [
      "Built Agro-Connect, an agritech product connecting organic farmers to consumers.",
      "Developed and maintained React UIs in a Scrum team, and shipped web pages for client projects.",
    ],
  },
];

export const community = [
  {
    title: "Technical Program Manager",
    org: "Kids That Code",
    href: "https://www.kidsthatcode.co/",
    body: "Shaping the curriculum and programs that introduce children to building with code.",
  },
  {
    title: "Coding Mentor",
    org: "Chess in Slums Africa",
    href: "https://www.chessinslumsafrica.com/",
    body: "Mentoring young people from underserved communities on their first steps into tech.",
  },
  {
    title: "Educator & Speaker",
    org: "YouTube · Podcasts · Events",
    href: "https://www.youtube.com/channel/UCiWaaD-8VtUCcMmMWt39xTQ",
    body: "Breaking web development down for beginners, and speaking about careers in tech.",
  },
] as const;

export const classroom = [
  { title: "AgroBiz", href: "https://agro-biz.netlify.app/" },
  { title: "Clean 4 All", href: "https://clean-4-all.netlify.app/" },
  { title: "School 4 All", href: "https://school-4-all.netlify.app/" },
  { title: "Automobile Fix", href: "https://automobile-fix-grp3.netlify.app/" },
  { title: "My Pie Shop", href: "https://my-pie-shop.netlify.app/" },
  { title: "Air Quality India", href: "https://airquality-bice.vercel.app/" },
] as const;

export const testimonials = [
  {
    quote:
      "Fatimah is dedicated to providing quality work. She checks and rechecks her software before turning it in… She strives to make her programs as user friendly as possible. She is detail oriented and rarely has any bugs in her finished product.",
    name: "AbdulGaniyu Adeniran",
    title: "CEO, Alfa Trust Limited",
  },
  {
    quote:
      "She knows her way about things and has a great and rich mind. She provided solutions to my tech needs which I applied and my business has been doing great today.",
    name: "Simon Dave",
    title: "Project Manager",
  },
  {
    quote:
      "Fatimah is always looking for ways to improve her skills… She is also very organized, which makes her a great person to work with. If you are looking for a front-end developer who is detail-oriented, organized, and motivated to learn new things, then Fatimah is the right person for you!",
    name: "Pius Henry",
    title: "Digital Marketing Expert",
  },
] as const;
