import { services } from "@/data/portfolio"

export default function Services() {
  return (
    <section
      id="services"
      className="border-y border-white/10 bg-white/[.015] px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-4 text-xs uppercase tracking-[.25em] text-white/35">
          Services
        </p>

        <div className="grid gap-12 lg:grid-cols-[.6fr_1fr]">

          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            What I can{" "}
            <span className="text-white/35">
              build for you.
            </span>
          </h2>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">

            {services.map(
              ({ number, title, description, icon: Icon }) => (
                <div
                  key={number}
                  className="group bg-[#0b0b0f] p-7 transition-colors duration-200 hover:bg-white/[.04]"
                >
                  <div className="mb-12 flex items-center justify-between text-xs text-white/25">
                    <span>{number}</span>
                    <Icon
                      size={20}
                      aria-hidden="true"
                      className="transition-colors duration-200 group-hover:text-white/60"
                    />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/45">
                    {description}
                  </p>
                </div>
              )
            )}

          </div>
        </div>
      </div>
    </section>
  )
}