import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import type { Project } from "@/data/portfolio"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasLink = Boolean(project.link)
  const Wrapper = hasLink ? "a" : "div"

  return (
    <Wrapper
      {...(hasLink && {
        href: project.link,
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      className={`group block min-h-[330px] rounded-2xl border border-white/10 bg-white/[.025] p-5 transition md:min-h-[390px] ${hasLink
          ? "hover:-translate-y-1 hover:bg-white/[.04]"
          : "cursor-default"
        }`}
    >
      <article className="flex h-full flex-col justify-between rounded-xl border border-white/5 bg-[#0b0b0f] p-6">

        <div className="flex justify-between">
          <span className="text-xs text-white/35">
            {project.type}
          </span>

          {hasLink && (
            <ArrowUpRight
              size={19}
              aria-hidden="true"
              className="text-white/30 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
            />
          )}
        </div>

        <div>
          <div className="relative mb-5 h-40 w-full overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-white/[.07] to-transparent">
            {project.image && (
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 767px) calc(100vw - 136px), (max-width: 1279px) calc(50vw - 122px), 518px"
                className="object-contain p-4"
              />
            )}
          </div>

          <h3 className="text-2xl font-semibold">
            {project.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-white/40">
            {project.description}
          </p>
        </div>

      </article>
    </Wrapper>
  )
}