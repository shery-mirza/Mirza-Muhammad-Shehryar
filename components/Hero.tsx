"use client";

import Image from "next/image";
import { Button } from "antd";
import { DownloadOutlined, ProjectOutlined } from "@ant-design/icons";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 py-12">
      
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image → Top on Mobile */}
        <div className="flex justify-center md:order-2">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-96 md:h-[420px]">
            <Image
              src="/PFP.png"
              alt="Shery"
              fill
              className="object-cover rounded-2xl border border-gray-800 shadow-xl"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left md:order-1">
          
          {/* Heading */}
          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-6xl
              font-bold mb-6 leading-tight
            "
          >
            Hi, I'm <span className="text-blue-500">Shehryar</span>
          </h2>

          {/* Paragraph 1 */}
          <p
            className="
              text-gray-400
              text-sm sm:text-base md:text-lg
              mb-6
              max-w-xl
              mx-auto md:mx-0
            "
          >
            I'm a Front-End Web Developer specializing in building modern,
            high-performance web applications using Next.js, HTML, CSS,
            React, and Tailwind CSS.
          </p>

          {/* Paragraph 2 */}
          <p
            className="
              text-gray-500
              text-sm sm:text-base
              mb-8
              max-w-xl
              mx-auto md:mx-0
            "
          >
            I love crafting beautiful UI, functional web and
            seamless user experiences. Currently focused on SaaS apps,
            trading dashboards, and AI-powered tools.
          </p>

          {/* Buttons */}
          <div
            className="
              flex flex-col sm:flex-row
              gap-4
              justify-center md:justify-start
            "
          >
            
            {/* View Projects */}
            <Button
              type="primary"
              size="large"
              icon={<ProjectOutlined />}
              onClick={() => {
                const section = document.getElementById("projects");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="
                !bg-transparent
                !border-gray-300
                !text-gray-300

                sm:!bg-blue-600
                sm:!border-blue-600
                sm:!text-white
              "
            >
              View Projects
            </Button>

            {/* Download CV */}
            <a href="/Remote Resume.pdf" download="Shehryar-CV.pdf">
              <Button
                size="large"
                icon={<DownloadOutlined />}
                className="w-full sm:w-auto"
              >
                Download CV
              </Button>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
