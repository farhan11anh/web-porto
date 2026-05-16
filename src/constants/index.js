import {
  backend,
  creator,
  mobile,
  web,
  code,
  concepts,
  designs,
  ideas,
  contact,
  skills,
  about,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "achievement",
    title: "Achievement",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: mobile,
  },
  {
    title: "API Integration",
    icon: backend,
  },
  {
    title: "Database Management",
    icon: creator,
  },
];

const achievements = [
  {
    title: ["Bachelor's Degree"],
    company_name: "Universitas Amikom Yogyakarta",
    icon: web,
    iconBg: "#383E56",
    date: "2019 – 2022",
    points: [
      "Teknik Informatika – GPA 3.89",
    ],
    credential: [],
  },
  {
    title: ["BRI – PT. Bank Rakyat Indonesia"],
    company_name: "BRI",
    icon: backend,
    iconBg: "#003087",
    date: "Sep 2025 – Present",
    points: [
      "Implemented UI/UX designs for NDS (New Delivery System) application",
      "Integrated NDS with backend services for seamless data communication",
      "Developed BRIVA (BRI Virtual Account) features for transaction processing",
      "Worked on Debitur Hitam Nasional (DHN) customer blacklist feature",
      "Used Quasar Framework for responsive high-performance components",
      "Implemented gRPC for efficient backend integration",
    ],
    credential: [],
  },
  {
    title: ["Bayarind – PT. Bayarind Artha Internusa"],
    company_name: "Bayarind",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Aug 2024 – Aug 2024",
    points: [
      "Designed UI for Dashboard Lifestyle platform and integrated RESTful APIs",
      "Developed responsive webview for UniPin integration in BRImo app",
      "Built UI for Bayarind Disbursement system and integrated payment APIs",
      "Enhanced performance and UX on bayarind.id and pg-bayarind",
    ],
    credential: [],
  },
  {
    title: ["Telkomsigma – PT. Sigma Cipta Caraka"],
    company_name: "Telkomsigma",
    icon: mobile,
    iconBg: "#e4002b",
    date: "Jul 2023 – Jul 2024",
    points: [
      "Developed App Jesica AI (Nuxt 3 + Tailwind CSS)",
      "Built App ERM – Risk Management (Nuxt 3 + Tailwind CSS)",
      "Created App TMA – Asset Management (Nuxt 3 + Tailwind CSS)",
      "Developed App SAK EP – Financial Statements (Angular + Bootstrap)",
      "Developed project Taspen (Next.js + Tailwind CSS)",
      "Built HR Supercharge with Angular, RxJS, NG-ZORRO and Bootstrap",
    ],
    credential: [],
  },
  {
    title: ["ZettaByte Pte Ltd"],
    company_name: "ZettaByte",
    icon: creator,
    iconBg: "#383E56",
    date: "Sep 2022 – Dec 2022",
    points: [
      "Developed restaurant app frontend with Angular and Bootstrap",
      "Integrated backend via Apollo GraphQL for real-time data fetching",
    ],
    credential: [],
  },
  {
    title: ["CV. Lumintu Logic"],
    company_name: "Lumintu Logic",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Feb 2022 – Jun 2022",
    points: [
      "Built LMS backend chat feature using Ratchet WebSocket (PHP)",
      "Implemented payment gateway using Midtrans",
      "Developed Lumintu Liberate LMS API",
      "Created test cases and flow documentation",
    ],
    credential: [],
  },
  {
    title: ["Seven Pion – CV. Media Inovasi Berkarya"],
    company_name: "Seven Pion",
    icon: web,
    iconBg: "#383E56",
    date: "Sep 2021 – Dec 2021",
    points: [
      "Implemented wedding card and Tabungan Hijau frontend (Bootstrap + jQuery)",
      "Built backend with Laravel 8 and created RESTful APIs",
    ],
    credential: [],
  },
];

const testimonials = [
  {
    testimonial:
      "Farhan consistently delivers high-quality frontend code and always meets deadlines. A true professional.",
    name: "Team Lead",
    designation: "Lead Developer",
    company: "Telkomsigma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "His attention to detail in translating UI/UX designs into pixel-perfect interfaces is impressive.",
    name: "Project Manager",
    designation: "PM",
    company: "Bayarind",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "Farhan is a fast learner who quickly adapted to our tech stack and contributed from day one.",
    name: "Senior Developer",
    designation: "Sr. Engineer",
    company: "BRI",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const projects = [
  {
    name: "NDS – New Delivery System",
    description:
      "Enterprise frontend system for BRI's new delivery platform, featuring BRIVA virtual account management and customer blacklist (DHN) validation.",
    tags: [
      { name: "Quasar", color: "blue-text-gradient" },
      { name: "Vue 3", color: "green-text-gradient" },
      { name: "gRPC", color: "pink-text-gradient" },
    ],
    image: web,
    images: [web],
    source_code_link: "#",
    live_demo_link: "#",
    metrics: { stars: 0, forks: 0, views: "—" },
    features: [
      "BRIVA virtual account management",
      "DHN customer blacklist validation",
      "gRPC backend integration",
      "Responsive high-performance components with Quasar",
      "Seamless data communication with backend services",
      "Enterprise-grade delivery system UI",
    ],
  },
  {
    name: "Dashboard Lifestyle & BRImo UniPin Webview",
    description:
      "Responsive dashboard and embedded webview for BRImo's UniPin top-up integration, with real-time API-driven data rendering.",
    tags: [
      { name: "Vue 3", color: "blue-text-gradient" },
      { name: "Nuxt 3", color: "green-text-gradient" },
      { name: "REST API", color: "pink-text-gradient" },
    ],
    image: mobile,
    images: [mobile],
    source_code_link: "#",
    live_demo_link: "#",
    metrics: { stars: 0, forks: 0, views: "—" },
    features: [
      "Dashboard Lifestyle platform UI",
      "BRImo UniPin webview integration",
      "Bayarind Disbursement system UI",
      "Real-time API-driven data rendering",
      "Responsive design for mobile and desktop",
      "Performance optimization for bayarind.id",
    ],
  },
  {
    name: "Jesica AI App",
    description:
      "AI-powered internal application with clean UI built with Nuxt 3 and Tailwind CSS, integrated with AI backend services.",
    tags: [
      { name: "Nuxt 3", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
    ],
    image: creator,
    images: [creator],
    source_code_link: "#",
    live_demo_link: "#",
    metrics: { stars: 0, forks: 0, views: "—" },
    features: [
      "AI-powered internal tool",
      "Clean and modern UI with Tailwind CSS",
      "Nuxt 3 SSR for fast page loads",
      "AI backend service integration",
      "Responsive and accessible design",
      "Internal workflow automation",
    ],
  },
  {
    name: "ERM – Risk Management App",
    description:
      "Enterprise risk management dashboard with dynamic data visualization, built with Nuxt 3 and integrated with backend via REST API.",
    tags: [
      { name: "Nuxt 3", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "REST API", color: "pink-text-gradient" },
    ],
    image: backend,
    images: [backend],
    source_code_link: "#",
    live_demo_link: "#",
    metrics: { stars: 0, forks: 0, views: "—" },
    features: [
      "Enterprise risk management dashboard",
      "Dynamic data visualization",
      "REST API integration",
      "Responsive design with Tailwind CSS",
      "SSR with Nuxt 3",
      "Role-based access control",
    ],
  },
  {
    name: "HR Supercharge",
    description:
      "HR management platform with complex data tables and real-time sync, built with Angular, RxJS, NG-ZORRO, and Bootstrap.",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: "RxJS", color: "green-text-gradient" },
      { name: "NG-ZORRO", color: "pink-text-gradient" },
      { name: "Bootstrap", color: "orange-text-gradient" },
    ],
    image: web,
    images: [web],
    source_code_link: "#",
    live_demo_link: "#",
    metrics: { stars: 0, forks: 0, views: "—" },
    features: [
      "Complex data table management",
      "Real-time data sync with RxJS",
      "NG-ZORRO component library",
      "Responsive design with Bootstrap",
      "HR workflow automation",
      "Employee management system",
    ],
  },
  {
    name: "Restaurant App – ZettaByte",
    description:
      "Full-featured restaurant ordering application with real-time data sync via Apollo GraphQL, built with Angular and Bootstrap.",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: "Bootstrap", color: "green-text-gradient" },
      { name: "Apollo GraphQL", color: "pink-text-gradient" },
    ],
    image: creator,
    images: [creator],
    source_code_link: "#",
    live_demo_link: "#",
    metrics: { stars: 0, forks: 0, views: "—" },
    features: [
      "Restaurant ordering system",
      "Real-time data sync via Apollo GraphQL",
      "Responsive design with Bootstrap",
      "Menu management system",
      "Order tracking",
      "Angular-based SPA",
    ],
  },
];

const words = [
  { text: "Ideas", imgPath: ideas, font: "Arial, sans-serif" },
  {
    text: "Concepts",
    imgPath: concepts,
    font: "'Courier New', Courier, monospace",
  },
  {
    text: "Designs",
    imgPath: designs,
    font: "'Times New Roman', Times, serif",
  },
  { text: "Code", imgPath: code, font: "'Fira Mono', monospace" },
  {
    text: "Ideas",
    imgPath: ideas,
    font: "'Comic Sans MS', cursive, sans-serif",
  },
  { text: "Concepts", imgPath: concepts, font: "'Roboto', sans-serif" },
  { text: "Designs", imgPath: designs, font: "'Georgia', serif" },
  { text: "Code", imgPath: code, font: "'Source Code Pro', monospace" },
];

export { achievements, projects, services, testimonials, words };
