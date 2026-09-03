import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/data/portfolio"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className="group min-h-[330px] rounded-2xl border border-white/10 bg-white/[.025] p-5 transition hover:-translate-y-1 hover:bg-white/[.04] md:min-h-[390px]">

      <div className="flex h-full flex-col justify-between rounded-xl border border-white/5 bg-[#0b0b0f] p-6">

        <div className="flex justify-between">
          <span className="text-xs text-white/35">
            {project.type}
          </span>

          <ArrowUpRight
            size={19}
            className="text-white/30 transition group-hover:text-white"
          />
        </div>

        <div>
          <div className="mb-5 h-24 w-full rounded-lg border border-white/10 bg-gradient-to-br from-white/[.07] to-transparent" />

          <h3 className="text-2xl font-semibold">
            {project.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-white/40">
            {project.description}
          </p>
        </div>

      </div>
    </article>
  )
}