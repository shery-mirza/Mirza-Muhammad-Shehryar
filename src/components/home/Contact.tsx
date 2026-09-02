import { ArrowUpRight } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[.03] p-8 sm:p-14">

        <p className="mb-4 text-xs uppercase tracking-[.25em] text-white/35">
          Have a project?
        </p>

        <h2 className="max-w-4xl text-5xl font-semibold tracking-[-.04em] sm:text-7xl">
          Let's build something{" "}
          <span className="text-white/35">
            great.
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-white/45">
          Tell me what you're working on, what you need, and where you
          want to go. I'll help turn it into a clear technical plan.
        </p>

        <a
          href="mailto:sherymirzashuja10@gmail.com"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          sherymirzashuja10@gmail.com
          <ArrowUpRight size={17} />
        </a>

      </div>
    </section>
  )
}