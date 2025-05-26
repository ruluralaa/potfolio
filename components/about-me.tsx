import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutMe() {
  return (
    <section id="about" className="sticky top-0 z-0 py-20 flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8 relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-navy-700">
            <img
              src="/profile.jpg"
              alt="프로필 이미지"
              
              className="object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy-700">
            안녕하세요, <br />
            <span className="text-navy-700">프론트엔드 개발자</span><br></br><span className="text-[#60A5FA]">박순영</span>입니다.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
          저는 “배움에 대한 열정과 의지”가 있습니다. <br></br> 새로운 것을 배우고, 익숙해져가는 그 과정을 좋아합니다. </p>
      
          <p>그래서 CS과목을 수강할 수 있는 전자공학부를 복수전공하면서 총 182학점을 수강하였고, <br></br>
          졸업작품으로 만든 “GPT기반 복습용 문제 생성 어플리케이션” 외 <br></br>
          총 4가지 프로젝트를 만들면서 개발자의 꿈을 키워왔습니다. <br></br>
          학교 생활 내내 보였던 이 열정과 의지를 앞으로도 지속하여 꾸준히 성장하는 개발자가 되겠습니다!
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-navy-700 hover:bg-navy-800">
              이력서 보기 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-navy-700 text-navy-700 hover:bg-navy-50">
              연락하기
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  )
}
