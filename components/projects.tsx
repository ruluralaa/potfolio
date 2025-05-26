import Image from "next/image"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl: string
  demoUrl: string
}

const projects: Project[] = [
  {
    title: "포트폴리오 웹사이트",
    description:
      "Next.js와 Tailwind CSS를 활용한 개인 포트폴리오 웹사이트입니다. 반응형 디자인과 모던한 UI/UX를 구현했습니다.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
  {
    title: "쇼핑몰 프로젝트",
    description: "React와 Redux를 활용한 이커머스 웹사이트입니다. 상품 목록, 장바구니, 결제 기능 등을 구현했습니다.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Redux", "Styled Components", "Firebase"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
  {
    title: "날씨 앱",
    description: "React Native로 개발한 모바일 날씨 애플리케이션입니다. 위치 기반 날씨 정보와 주간 예보를 제공합니다.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React Native", "Expo", "API Integration"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-20 bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-navy-700">프로젝트</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-navy-700">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-navy-50 text-navy-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-navy-700 text-navy-700 hover:bg-navy-50"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  <Button size="sm" className="bg-navy-700 hover:bg-navy-800" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ArrowUpRight className="mr-1 h-4 w-4" /> Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
