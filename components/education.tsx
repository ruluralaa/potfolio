export default function Education() {
  return (
    <section id="education" className="relative z-10 py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#7DD3FC]">교육 및 어학</h2>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {/* 교육 섹션 */}
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex items-center md:items-start gap-2 md:w-48 shrink-0">
                  <span className="text-gray-400">★</span>
                  <span className="text-gray-400">2016 – 2023</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">서강대학교</h3>
                  <p className="text-gray-300 mt-1">Art & Technology 전공, 융합소프트웨어 복수전공</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        웹 프로그래밍 기초, 이미지 프로세싱 및 인터랙티브 미디어 프로그래밍 학습
                        <br />
                        기초 디자인 및 UI/UX 디자인 학습
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        C, Java, 자료구조, 알고리즘 등 기초 CS지식 학습
                        <br />
                        Python, R, 빅데이터 프로그래밍, 코퍼스 언어학 등 데이터 프로그래밍 학습
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex items-center md:items-start gap-2 md:w-48 shrink-0">
                  <span className="text-gray-400">★</span>
                  <span className="text-gray-400">2013 – 2016</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">한국디지털미디어고등학교</h3>
                  <p className="text-gray-300 mt-1">디지털콘텐츠과</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>컴퓨터 그래픽, 3D 모델링, 영상 편집, 컴퓨터 음악 등 디지털 콘텐츠 제작 기술 교육</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 자격증 섹션 */}
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex items-center md:items-start gap-2 md:w-48 shrink-0">
                  <span className="text-gray-400">★</span>
                  <span className="text-gray-400">2024.03.19</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">OPIc</h3>
                  <p className="text-gray-300 mt-1">Intermediate HIGH</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex items-center md:items-start gap-2 md:w-48 shrink-0">
                  <span className="text-gray-400">★</span>
                  <span className="text-gray-400">2023.11.26</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">TOEIC</h3>
                  <p className="text-gray-300 mt-1">915 점</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
