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
  title: string
  type: string
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
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "Git",
  "Docker",
]

export const projects: Project[] = [
  {
    title: "SaaS Dashboard",
    type: "Product · Full-stack",
  },
  {
    title: "E-commerce Platform",
    type: "Commerce · Next.js",
  },
  {
    title: "Agency Website",
    type: "Brand · Web development",
  },
]