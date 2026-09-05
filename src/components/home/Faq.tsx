"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { faqs } from "@/data/faq"

export default function Faq() {
    const [openId, setOpenId] = useState<string | null>(null)

    const toggle = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id))
    }

    return (
        <section
            id="faq"
            className="mx-auto max-w-7xl px-6 py-28"
        >
            <p className="mb-4 text-xs uppercase tracking-[.25em] text-white/35">
                FAQ
            </p>

            <h2 className="mb-14 max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
                Common{" "}
                <span className="text-white/35">
                    questions
                </span>
            </h2>

            <div className="mx-auto max-w-3xl divide-y divide-white/10 border-y border-white/10">
                {faqs.map((item) => {
                    const isOpen = openId === item.id

                    return (
                        <div key={item.id}>
                            <button
                                type="button"
                                onClick={() => toggle(item.id)}
                                aria-expanded={isOpen}
                                aria-controls={`faq-panel-${item.id}`}
                                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                            >
                                <span className="text-base font-medium sm:text-lg">
                                    {item.question}
                                </span>

                                <Plus
                                    size={18}
                                    aria-hidden="true"
                                    className={`shrink-0 text-white/40 transition-transform duration-200 ${
                                        isOpen ? "rotate-45" : ""
                                    }`}
                                />
                            </button>

                            <div
                                id={`faq-panel-${item.id}`}
                                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                                    isOpen
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                }`}
                            >
                                <p className="min-h-0 overflow-hidden pb-6 text-sm leading-6 text-white/45">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}