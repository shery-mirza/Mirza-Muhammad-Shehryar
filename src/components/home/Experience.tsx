import { experience } from "@/data/experience"

export default function Experience() {
    return (
        <section
            id="experience"
            className="mx-auto max-w-7xl px-6 py-28"
        >
            <p className="mb-4 text-xs uppercase tracking-[.25em] text-white/35">
                Experience
            </p>

            <h2 className="mb-14 max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
                Where I've{" "}
                <span className="text-white/35">
                    worked
                </span>
            </h2>

            <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
                {experience.map((item) => (
                    <div
                        key={item.id}
                        className="grid gap-2 py-8 sm:grid-cols-[.8fr_.5fr_1.7fr] sm:items-start sm:gap-8"
                    >
                        <h3 className="text-lg font-semibold">
                            {item.role}
                            <span className="block text-sm font-normal text-white/40">
                                {item.company}
                            </span>
                        </h3>

                        <p className="text-sm text-white/35">
                            {item.period}
                        </p>

                        <p className="text-sm leading-6 text-white/45">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}