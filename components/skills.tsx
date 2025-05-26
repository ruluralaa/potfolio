"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type SkillCategory = "전체" | "프론트엔드" | "라이브러리" | "환경 및 배포" | "디자인"

interface Skill {
  name: string
  icon: string
  category: Exclude<SkillCategory, "전체">
}

const skills: Skill[] = [
  { name: "JavaScript", icon: "/icons/javascript.png", category: "프론트엔드" },
  { name: "React", icon: "/icons/react.png", category: "프론트엔드" },
  { name: "Next.js", icon: "/icons/nextjs.png", category: "프론트엔드" },
  { name: "TypeScript", icon: "/icons/typescript.png", category: "프론트엔드" },
  { name: "HTML5", icon: "/icons/html5.png", category: "프론트엔드" },
  { name: "CSS3", icon: "/icons/css3.png", category: "프론트엔드" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.png", category: "라이브러리" },
  { name: "Redux", icon: "/icons/redux.png", category: "라이브러리" },
  { name: "Styled Components", icon: "/icons/styled-components.png", category: "라이브러리" },
  { name: "Git", icon: "/icons/git.png", category: "환경 및 배포" },
  { name: "GitHub", icon: "/icons/github.png", category: "환경 및 배포" },
  { name: "Vercel", icon: "/icons/vercel.png", category: "환경 및 배포" },
  { name: "Figma", icon: "/icons/figma.png", category: "디자인" },
  { name: "Adobe XD", icon: "/icons/adobexd.png", category: "디자인" },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("전체")

  const categories: SkillCategory[] = ["전체", "프론트엔드", "라이브러리", "환경 및 배포", "디자인"]

  return (
    <section id="skills" className="relative z-10 py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-[#7DD3FC]">기술 스택 및 도구</h2>
        <p className="text-xl mb-8 text-center">아래의 기술을 사용할 수 있습니다.</p>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center bg-navy-800 rounded-full p-1 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm md:text-base transition-all",
                  activeCategory === category ? "bg-white text-navy-900 font-medium" : "text-gray-300 hover:text-white",
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={cn(
                  "flex flex-col items-center transition-all duration-300",
                  activeCategory === "전체" || skill.category === activeCategory ? "opacity-100" : "opacity-20 blur-[1px]",
                )}
              >
                <div className="w-16 h-16 mb-2 bg-white rounded-lg p-2 flex items-center justify-center">
                  <div className="relative w-10 h-10">
                    <Image src={skill.icon || "/placeholder.svg"} alt={skill.name} fill className="object-contain" />
                  </div>
                </div>
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
