import { process } from "@/data/process"

export default function Process() {
    return (
        <section
            id="process"
            className="mx-auto max-w-7xl px-6 py-28"
        >
            <p className="mb-4 text-xs uppercase tracking-[.25em] text-white/35">
                How I work
            </p>

            <h2 className="mb-14 max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
                A clear{" "}
                <span className="text-white/35">
                    process
                </span>
            </h2>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {process.map(({ number, title, description, icon: Icon }, i) => (
                    <div
                        key={number}
                        className="relative rounded-2xl border border-white/10 bg-white/[.02] p-7"
                    >
                        <div className="mb-10 flex items-center justify-between text-xs text-white/25">
                            <span>{number}</span>
                            <Icon size={20} aria-hidden="true" />
                        </div>

                        <h3 className="text-lg font-semibold">
                            {title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-white/45">
                            {description}
                        </p>

                        {/* Connector line between steps on large screens */}
                        {i < process.length - 1 && (
                            <div
                                aria-hidden="true"
                                className="absolute right-[-11px] top-1/2 hidden h-px w-5 -translate-y-1/2 bg-white/10 lg:block"
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}