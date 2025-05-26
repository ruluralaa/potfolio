import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <section className="relative z-10 py-20 text-center bg-white shadow-lg">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-navy-700">함께 일해보세요</h2>
        <p className="text-lg text-gray-600 mb-8">
          새로운 프로젝트나 협업 기회에 관심이 있습니다. 이메일이나 소셜 미디어를 통해 연락해 주세요.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button className="bg-navy-700 hover:bg-navy-800" asChild>
            <a href="mailto:example@email.com">
              <Mail className="mr-2 h-4 w-4" /> 이메일 보내기
            </a>
          </Button>
          <Button variant="outline" className="border-navy-700 text-navy-700 hover:bg-navy-50" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
          <Button variant="outline" className="border-navy-700 text-navy-700 hover:bg-navy-50" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
        </div>

        <p className="text-gray-500">감사합니다!</p>
      </div>
    </section>
  )
}
