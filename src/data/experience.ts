export interface ExperienceItem {
    id: string
    role: string
    company: string
    period: string
    description: string
}

export const experience: ExperienceItem[] = [
    {
        id: "exp-1",
        role: "Senior Frontend Web Developer",
        company: "Binary Marvels",
        period: "2021 — 2024",
        description:
            "Led frontend architecture and development for production web applications, mentored junior developers, and worked closely with design and backend teams to ship polished, performant interfaces at scale.",
    },
    {
        id: "exp-2",
        role: "Full-stack Web Developer",
        company: "Binary Marvels",
        period: "2024 — Present",
        description:
            "Building full-stack web applications for clients across education, e-commerce, and healthcare, from architecture through deployment.",
    },
]