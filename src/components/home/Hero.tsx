"use client"

import { motion } from "framer-motion"
import {
  ArrowUpRight,
  PhoneIcon,
  Mail,
  Sparkles,
} from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="grid-bg relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[.025] blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-16 py-20 lg:grid-cols-[1.15fr_.85fr] lg:items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-4 py-2 text-xs uppercase tracking-[.2em] text-white/60">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for projects
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.04em] sm:text-7xl lg:text-8xl">
            I build{" "}
            <span className="text-white/40">
              digital products
            </span>{" "}
            that work.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
            I transform ideas into polished,
            high-performance web applications with thoughtful design,
            solid architecture, and scalable full-stack engineering.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black"
            >
              View my work
              <ArrowUpRight
                size={17}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold hover:bg-white/5"
            >
              Start a project
            </a>
          </div>

          <div className="mt-14 flex items-center gap-7 text-white/40">
            <a
              href="https://wa.me/923065340366"
              className="hover:text-green-400"
              target="_blank"
            >
              <PhoneIcon size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/mirza-muhammad-shehryar"
              className="hover:text-[#0A66C2]"
              target="_blank"
            >
              <svg
                aria-label="LinkedIn"
                role="img"
                viewBox="0 0 24 24"
                width="21"
                height="21"
                fill="currentColor"
              >
                <path d="M6.5 8.25H3.25V21H6.5V8.25ZM4.88 3A1.88 1.88 0 1 0 4.88 6.75 1.88 1.88 0 0 0 4.88 3ZM21 13.69c0-3.84-2.05-5.63-4.79-5.63-2.2 0-3.18 1.21-3.73 2.06V8.25H9.23V21h3.25v-6.31c0-1.66.31-3.27 2.37-3.27 2.03 0 2.06 1.9 2.06 3.38V21H21v-7.31Z" />
              </svg>
            </a>

            <a
              href="mailto:sherymirzashuja10@gmail.com"
              className="hover:text-red-400"
              target="_blank"
            >
              <Mail size={21} />
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="glow relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[.08] via-white/[.02] to-transparent p-5">

            <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b0b0f]">

              {/* Image */}
              <img
                src="/transparent.png"
                alt="Full-stack developer"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Dark gradient so text stays readable */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-[#0b0b0f]/95" />

              {/* All Text / Content */}
              <div className="relative z-10 flex h-full flex-col justify-between p-7">

                {/* Header */}
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span>FULL-STACK / 2026</span>
                  <Sparkles size={15} />
                </div>

                {/* Skills */}
                <div className="grid grid-cols-2 gap-3 text-xs text-white/60">

                  <div className="rounded-xl border border-white/15 bg-black/30 p-4 backdrop-blur-md">
                    <b className="text-white">Frontend</b>
                    <br />
                    Tailwind CSS · Javascript · React · Next.js
                  </div>

                  <div className="rounded-xl border border-white/15 bg-black/30 p-4 backdrop-blur-md">
                    <b className="text-white">Backend</b>
                    <br />
                    Node.js · Express.js · MongoDB · PostgreSQL
                  </div>

                </div>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}