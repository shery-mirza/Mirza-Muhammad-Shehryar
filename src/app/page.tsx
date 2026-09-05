import Navbar from "@/components/home/Navbar"
import Hero from "@/components/home/Hero"
import TechStack from "@/components/home/TechStack"
import About from "@/components/home/About"
import Services from "@/components/home/Services"
import Process from "@/components/home/Process"
import Projects from "@/components/home/Projects"
import Contact from "@/components/home/Contact"
import Footer from "@/components/home/Footer"
import Experience from "@/components/home/Experience"
import Faq from "@/components/home/Faq"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07070a]">

      <Navbar />

      <Hero />

      <TechStack />

      <About />

      <Experience />

      <Services />

      <Process />

      <Projects />

      <Faq />

      <Contact />

      <Footer />

    </main>
  )
}