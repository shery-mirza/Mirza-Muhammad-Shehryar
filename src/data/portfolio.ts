import {
    Code2,
    Database,
    Server,
    Globe,
    type LucideIcon,
} from "lucide-react"

export interface Service {
    number: string
    title: string
    description: string
    icon: LucideIcon
}

export interface Project {
    id: string
    title: string
    type: string
    description: string
    image?: string
    link?: string
}

export const services: Service[] = [
    {
        number: "01",
        title: "Frontend Development",
        description:
            "Fast, responsive and accessible interfaces with modern React-based technologies.",
        icon: Code2,
    },
    {
        number: "02",
        title: "Backend Development",
        description:
            "Scalable APIs, business logic, authentication and reliable server-side systems.",
        icon: Server,
    },
    {
        number: "03",
        title: "Database Architecture",
        description:
            "Well-structured data models, secure queries and production-ready database systems.",
        icon: Database,
    },
    {
        number: "04",
        title: "Full-Stack Solutions",
        description:
            "End-to-end web applications from idea and architecture through deployment.",
        icon: Globe,
    },
]

export const techStack = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "React",
    "React Libraries",
    "ES6",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "REST APIs",
    "Git",
    "Docker",
]

export const projects: Project[] = [
    {
        id: "prep-titans-lms",
        title: "Prep Titans LMS",
        type: "Education - LMS · Full-stack",
        description:
            "Pakistan's MDCAT preparation platform, 174000+ MCQs, 150+ past papers, custom quiz builder, and per-option explanations.",
        image: "/images/logo1.png",
        link: "https://preptitanslms.com/",
    },
    {
        id: "sound-waves-generator",
        title: "Sound Waves Generator",
        type: "Shopify Store · Next.js",
        description:
            "Shopify-powered sound wave generator store built with a modern, responsive interface and seamless e-commerce experience.",
        image: "/images/sound wave generator.png",
        link: "https://wavevisual.com/",
    },
    {
        id: "apotheek-nl",
        title: "Apotheek.nl",
        type: "Medical Website · Full-stack",
        description:
            "A modern pharmacy e-commerce platform with a clean, intuitive interface for discovering and purchasing healthcare products online.",
        image: "/images/logo.svg",
        link: "https://www.apotheek.nl/",
    },
    {
        id: "stress-traders",
        title: "Stress Traders",
        type: "Trading Demo Website · Next.js + Python",
        description:
            "A simulated trading platform with real-time market data and a polished interface, built as a university project (not a live trading product).",
        image: "/images/Stress Traders.png",
        link: "https://stress-traders.vercel.app/",
    },
    {
        id: "aurelia-store",
        title: "Aurelia",
        type: "Shopify Store · Next.js",
        description:
            "A store designed to showcase the skills to develop any kind of E-commerce web, shopify stores with modern techniques and tools.",
        image: "/images/Aurelia Store.png",
        link: "https://aurelia-store-mu.vercel.app/",
    },
    {
        id: "wavelength-saas-dashboard",
        title: "Wavelength SaaS Dashboard",
        type: "SaaS Dashboard · React + Node.js",
        description:
            "A comprehensive dashboard for managing and monitoring SaaS applications, featuring real-time analytics and a user-friendly interface.",
        image: "/images/wavelength.png",
        link: "https://demo-saas-dashboard.vercel.app/",
    },
]