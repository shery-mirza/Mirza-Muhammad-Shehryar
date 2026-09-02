import { techStack } from "@/data/portfolio"

export default function TechStack() {
  return (
    <section className="border-y border-white/10 px-6 py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-x-10 gap-y-4 text-sm text-white/30">
        {techStack.map((tech) => (
          <span key={tech}>
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}