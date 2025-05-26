import Header from "@/components/header"
import AboutMe from "@/components/about-me"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import EndingMessage from "@/components/ending-message"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative">
        <AboutMe />
        <div className="relative">
          <Skills />
          <Projects />
          <Education />
        </div>
      </div>
      <Footer />
    </div>
  )
}
