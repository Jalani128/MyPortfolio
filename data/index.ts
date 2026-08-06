/**
 * Single source of truth for every piece of content on the site.
 * Edit this file to update the portfolio — no component changes needed.
 */

import type { IconType } from "react-icons";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiRedux,
  SiGit,
  SiPostgresql,
  SiMysql,
  SiSolidity,
  SiWeb3Dotjs,
  SiStripe,
  SiPaypal,
  SiBootstrap,
  SiPostman,
  SiVercel,
  SiJsonwebtokens,
  SiCplusplus,
  SiNetlify,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

/* ---------------------------------- site ---------------------------------- */

export const site = {
  name: "Ghulam Jalani",
  role: "MERN Stack Developer",
  tagline:
    "I build production-grade fullstack applications — secure APIs, payment integrations, and interfaces that stay fast under load.",
  location: "Lahore, Pakistan",
  email: "jilanighulam128@gmail.com",
  phone: "0321-1422065",
  // Used for SEO canonical URLs and Open Graph tags. Update after deploying.
  url: "https://ghulam-jalani.vercel.app",
  resume: "/resume.pdf",
  availableForWork: true,
};

export const socials = {
  github: "https://github.com/Jalani128",
  linkedin: "https://www.linkedin.com/in/ghulam-jalani/",
  vercel: "https://vercel.com/jalanis-projects-70aef4e8",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/* ---------------------------------- about --------------------------------- */

export const about = {
  heading: "About",
  paragraphs: [
    "I'm a MERN Stack Developer with over two years of hands-on experience designing, building, and deploying production-grade fullstack web applications. I work primarily with React.js, Node.js, Express.js, and MongoDB.",  
    "At Sysmatixx I build secure RESTful APIs with JWT authentication, integrate payment gateways like Stripe and PayPal, and tune MongoDB queries and indexes to handle high-concurrency traffic. I also have a background in blockchain — writing Solidity smart contracts and wiring them into React frontends as DApps.",
    "I work comfortably in agile teams: sprint planning, code reviews, daily standups, and continuous deployment. I care about clean architecture, accessible interfaces, and shipping things that hold up in production.",
  ],
  highlights: [
    { value: "2+", label: "Years experience" },
    { value: "99%+", label: "Production uptime" },
    { value: "40%", label: "Faster load times" },
    { value: "1000+", label: "Concurrent requests" },
  ],
};

/* --------------------------------- skills --------------------------------- */

export type Skill = { name: string; icon: IconType; color: string };
export type SkillGroup = { title: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#7C7C7C" },
      { name: "REST APIs", icon: TbApi, color: "#0EA5E9" },
      { name: "JWT Auth", icon: SiJsonwebtokens, color: "#D63AFF" },
      { name: "Stripe", icon: SiStripe, color: "#635BFF" },
      { name: "PayPal", icon: SiPaypal, color: "#00457C" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    title: "Blockchain",
    skills: [
      { name: "Solidity", icon: SiSolidity, color: "#8C8C8C" },
      { name: "Web3.js", icon: SiWeb3Dotjs, color: "#F16822" },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git / GitHub", icon: SiGit, color: "#F05032" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "#8E8E8E" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
    ],
  },
];

/** Flat list used by the scrolling marquee under the hero. */
export const marqueeSkills = skillGroups.flatMap((g) => g.skills).slice(0, 16);

/* -------------------------------- projects -------------------------------- */

export type Project = {
  title: string;
  blurb: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  adminUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    title: "Assets Appraisals",
    blurb: "Property valuation platform",
    description:
      "A fullstack property appraisal platform serving multiple concurrent users with real-time data synchronization. Includes an admin dashboard with role-based access control, user management, and analytics visualization.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "REST APIs",
    ],
    image: "/projects/assets-appraisals.svg",
    liveUrl: "https://lnkd.in/dzf8fvCq",
    adminUrl: "https://lnkd.in/dJA3Zbzu",
    // TODO: add the public GitHub repo URL if/when it exists.
    repoUrl: "",
    featured: true,
    highlights: [
      "Role-based access control with a full admin dashboard",
      "99%+ production uptime through robust error handling",
      "40% faster load times via code splitting and lazy loading",
      "MongoDB indexing tuned for 1000+ concurrent requests",
    ],
  },
  {
    title: "Blockchain Vehicle Management",
    blurb: "Decentralized vehicle registry",
    description:
      "A decentralized system for vehicle registration and ownership transfer. Solidity smart contracts handle the on-chain records, connected to a React dashboard so users can interact with the contract directly from the browser.",
    tech: ["Solidity", "Web3.js", "React.js", "Smart Contracts"],
    image: "/projects/vehicle-blockchain.svg",
    liveUrl: "",
    repoUrl: "https://github.com/Jalani128",
    featured: true,
    highlights: [
      "Smart contracts for registration and ownership transfer",
      "React dashboard wired to the contract via Web3.js",
      "Secure coding practices with contract auditing",
    ],
  },
  {
    title: "Wrist Watch Store",
    blurb: "E-commerce storefront",
    description:
      "A full e-commerce storefront for wristwatches with product browsing, brand and price filtering, search, and a complete cart-to-checkout flow. Backed by JWT authentication with user registration and order confirmation.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs",
    ],
    image: "/projects/wrist-watch.svg",
    liveUrl: "https://wrist-watch-orcin.vercel.app/",
    // TODO: add the public GitHub repo URL if/when it exists.
    repoUrl: "",
    featured: true,
    highlights: [
      "Cart and checkout with order confirmation",
      "JWT authentication for signup and login",
      "Search plus brand, category, and price filtering",
    ],
  },
  {
    title: "Real Estate Portal",
    blurb: "Property listing platform",
    description:
      "A property search platform where buyers browse premium listings tailored to their lifestyle. Includes map-based discovery, multi-criteria filtering, and an admin dashboard for managing properties.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    image: "/projects/real-estate.svg",
    liveUrl: "https://re-s-client.vercel.app/",
    repoUrl: "",
    featured: true,
    highlights: [
      "Map-based property discovery",
      "Multi-criteria search and filtering",
      "Admin dashboard for listing management",
    ],
  },
  {
    title: "Sysmatixx",
    blurb: "Software agency website",
    description:
      "The marketing site for Sysmatixx, a software innovation studio. Features an interactive service selector, a staged process timeline, animated client carousel, and consultation booking flows throughout.",
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/sysmatixx.svg",
    liveUrl: "https://sysmatixx-main.vercel.app/",
    repoUrl: "",
    highlights: [
      "Interactive service selector across six offerings",
      "Animated client logo carousel and process timeline",
      "Conversion-focused layout with consultation CTAs",
    ],
  },
];

/* ------------------------------- experience ------------------------------- */

export type TimelineEntry = {
  kind: "work" | "education";
  title: string;
  org: string;
  period: string;
  location?: string;
  points: string[];
};

export const timeline: TimelineEntry[] = [
  {
    kind: "work",
    title: "MERN Stack Developer",
    org: "Sysmatixx",
    period: "06/2024 — Present",
    location: "Lahore",
    points: [
      "Develop and maintain fullstack web applications with React.js, Node.js, Express.js, and MongoDB in an agile environment.",
      "Build secure RESTful APIs with JWT authentication, data validation, and comprehensive error handling.",
      "Integrate Stripe and PayPal for secure online transactions and checkout workflows.",
      "Optimize MongoDB queries and indexing strategies for high-concurrency scenarios.",
      "Collaborate in agile sprints with code reviews, standups, version control, and continuous deployment.",
    ],
  },
  {
    kind: "work",
    title: "Blockchain Developer Intern",
    org: "Dev & Mark",
    period: "03/2024 — 06/2024",
    location: "Lahore",
    points: [
      "Designed and deployed Solidity smart contracts for vehicle management with ownership transfer and registration.",
      "Integrated the blockchain backend with a React frontend to enable DApp interactions.",
      "Applied secure coding practices and smart contract auditing to ensure data integrity.",
    ],
  },
  {
    kind: "education",
    title: "BS Information Technology",
    org: "Superior University",
    period: "2020 — 2024",
    location: "Lahore",
    points: [
      "Bachelor's degree in Information Technology with a focus on software engineering, databases, and computer networks.",
    ],
  },
];

export const certifications = [
  "MERN Stack Development — Meta",
  "Frontend Development — Coursera",
  "SQL Fundamentals",
  "NoSQL Database Design",
  "Computer Networks",
];
