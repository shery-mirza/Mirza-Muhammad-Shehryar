export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="grid gap-14 lg:grid-cols-2">

        <div>
          <p className="mb-4 text-xs uppercase tracking-[.25em] text-white/35">
            About me
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Engineering with a{" "}
            <span className="text-white/35">
              designer's eye.
            </span>
          </h2>
        </div>

        <div className="text-lg leading-8 text-white/55">
          <div className="space-y-6">
            <p>
              I create modern digital experiences where thoughtful design
              meets dependable engineering. My focus is writing maintainable
              code, solving real product problems and shipping work that
              feels polished.
            </p>

            <p>
              Whether it's a marketing site, SaaS platform, dashboard or
              custom web application, I can take a project from architecture
              to deployment.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-semibold text-white">15+</p>
              <p className="mt-1 text-sm text-white/40">Projects delivered</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">5+</p>
              <p className="mt-1 text-sm text-white/40">Years experience</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">10+</p>
              <p className="mt-1 text-sm text-white/40">Happy clients</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}