import {
    MessageSquare,
    PenTool,
    Code2,
    Rocket,
    type LucideIcon,
} from "lucide-react"

export interface ProcessStep {
    number: string
    title: string
    description: string
    icon: LucideIcon
}

export const process: ProcessStep[] = [
    {
        number: "01",
        title: "Discovery",
        description:
            "We talk through your goals, users, and constraints so the right problem gets solved, not just the first idea.",
        icon: MessageSquare,
    },
    {
        number: "02",
        title: "Design & Planning",
        description:
            "I map out architecture, data models, and interface direction before writing production code.",
        icon: PenTool,
    },
    {
        number: "03",
        title: "Build",
        description:
            "Iterative development with regular check-ins, so you see progress and can steer early rather than at the end.",
        icon: Code2,
    },
    {
        number: "04",
        title: "Deploy & Support",
        description:
            "Launch, monitor, and fix — plus ongoing support if you need features or changes after go-live.",
        icon: Rocket,
    },
]