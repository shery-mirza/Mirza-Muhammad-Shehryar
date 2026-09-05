import { projects } from "@/data/portfolio"
import ProjectCard from "./ProjectCard"

export default function Projects() {
    return (
        <section
            id="projects"
            className="mx-auto max-w-7xl px-6 py-28"
        >
            <p className="mb-4 text-xs uppercase tracking-[.25em] text-white/35">
                Best work
            </p>

            <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                    Featured{" "}
                    <span className="text-white/35">
                        projects
                    </span>
                </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </section>
    )
}