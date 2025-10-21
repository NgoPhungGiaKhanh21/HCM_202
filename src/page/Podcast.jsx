import img1 from "../assets/cm1.jpg";
import img2 from "../assets/cm2.jpg";
import img3 from "../assets/cm3.jpg";
import img4 from "../assets/cm4.jpg";
import poster1 from "../assets/pic1.jpg";
import Header from "../components/Header";
import AnimatedSection from "../components/AnimatedSection";

const timelineData = [
  {
    id: 1,
    title: "Cách mạng công nghiệp lần thứ nhất",
    description:
      "Cách mạng công nghiệp lần thứ nhất khởi phát ở Anh, bắt đầu từ thế kỷ XVIII đến giữa thế kỷ XIX",
    image: img1,
  },
  {
    id: 2,
    title: "Cách mạng công nghiệp lần thứ hai",
    description:
      "Cách mạng công nghiệp lần hai diễn ra nửa cuối thể kỷ XIX đến đầu thế kỷ XX.",
    image: img2,
  },
  {
    id: 3,
    title: "Cách mạng công nghiệp lần thứ ba",
    description:
      "Cách mạng công nghiệp lần thứ ba bắt đầu từ khoảng những năm đầu thập niên 60 của thế kỷ XX đến cuối thể kỷ XX.",
    image: img3,
  },
  {
    id: 4,
    title: "Cách mạng công nghiệp lần thứ tư",
    description:
      'Được đề cập lần đầu tiên tại hội chợ triển lãm công nghệ Hannover (CHLB Đức) năm 2011 và được chính phủ Đức đưa vào "kế hoạch hành động chiến lược công nghệ cao" năm 2012.',
    image: img4,
  },
];

const TimelinePage = () => {
  return (
    <div className="vintage-background min-h-screen">
      <Header />

      <div className="relative py-24 px-8 max-w-6xl mx-auto">
        <AnimatedSection animationType="fadeInDown" delay={0}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold vintage-title mb-4">
              Timeline Cách mạng Công nghiệp
            </h1>
            <p className="text-xl vintage-text max-w-3xl mx-auto leading-relaxed">
              Khám phá hành trình phát triển của các cuộc cách mạng công nghiệp
              đã thay đổi thế giới
            </p>
          </div>
        </AnimatedSection>

        <div className="absolute left-1/2 top-0 h-full w-3 timeline-line-enhanced transform -translate-x-1/2"></div>

        <div className="space-y-24">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <AnimatedSection
                key={item.id}
                animationType={isLeft ? "fadeInLeft" : "fadeInRight"}
                delay={index * 200}
                duration={800}
              >
                <div className="flex items-center justify-between relative">
                  <div
                    className={`w-5/12 ${
                      isLeft ? "" : "order-2"
                    } flex justify-center`}
                  >
                    <AnimatedSection
                      animationType="scaleIn"
                      delay={index * 200 + 300}
                      duration={600}
                    >
                      <div className="relative group timeline-item">
                        <div className="vintage-poster">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 w-full max-w-md object-cover timeline-image"
                            style={{
                              filter:
                                "sepia(0.2) contrast(1.1) brightness(0.95)",
                              transition:
                                "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                            <div className="bg-yellow-400/20 backdrop-blur-sm rounded-full p-2 border border-yellow-400/30">
                              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                            </div>
                          </div>
                          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                            <div className="bg-gradient-to-r from-yellow-600/90 to-amber-600/90 backdrop-blur-sm rounded-lg px-3 py-1 border border-yellow-400/30">
                              <span className="text-white text-xs font-medium">
                                📜 Cách mạng {item.id}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>

                  <div
                    className={`w-5/12 ${
                      isLeft ? "order-2" : ""
                    } flex justify-center`}
                  >
                    <AnimatedSection
                      animationType={isLeft ? "fadeInRight" : "fadeInLeft"}
                      delay={index * 200 + 500}
                      duration={700}
                    >
                      <div className="historical-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 max-w-sm group timeline-card">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-gradient-to-br from-yellow-600 to-amber-700 rounded-full flex items-center justify-center text-white font-bold text-sm timeline-number">
                            {item.id}
                          </div>
                          <div className="w-12 h-1 bg-gradient-to-r from-yellow-600 to-amber-400 rounded-full"></div>
                        </div>
                        <h3 className="text-2xl font-bold vintage-text mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="vintage-text leading-relaxed group-hover:text-amber-800 transition-colors duration-300">
                          {item.description}
                        </p>
                        <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-yellow-600 font-medium">
                            Cuộc cách mạng {item.id}
                          </span>
                        </div>
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-3 group-hover:translate-y-0">
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                            <span className="text-xs text-amber-600 ml-2">
                              Lịch sử phát triển
                            </span>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>

                  <AnimatedSection
                    animationType="scaleIn"
                    delay={index * 200 + 400}
                    duration={500}
                  >
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-yellow-600 to-amber-700 w-6 h-6 rounded-full border-4 border-yellow-100 shadow-lg z-10 hover:scale-125 transition-transform duration-300 cursor-pointer timeline-dot"></div>
                  </AnimatedSection>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection animationType="fadeInUp" delay={1000}>
          <div className="text-center mt-16">
            <div className="historical-card rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold vintage-title mb-4">
                Hành trình phát triển
              </h3>
              <p className="vintage-text leading-relaxed">
                Từ cách mạng công nghiệp lần thứ nhất đến lần thứ tư, nhân loại
                đã trải qua những bước tiến vượt bậc trong công nghệ và sản
                xuất.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* AI Technology 4.0 Section */}
        <AnimatedSection animationType="fadeInUp" delay={800} duration={1000}>
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl historical-card group cursor-pointer">
              <img
                src={poster1}
                alt="Công nghệ AI 4.0"
                className="w-full h-auto object-contain transition-all duration-500 group-hover:scale-105"
              />

              {/* Overlay chỉ hiện khi hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Text chỉ hiện khi hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-yellow-900/20 backdrop-blur-md rounded-xl p-6 border border-yellow-400/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-yellow-300 text-sm font-semibold tracking-wider uppercase">
                      Công nghệ tương lai
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold vintage-title mb-3">
                    Công nghệ AI 4.0 - Tương lai của Công nghiệp hóa
                  </h3>
                  <p className="vintage-text leading-relaxed">
                    Trí tuệ nhân tạo và Cách mạng Công nghiệp 4.0 đang định hình
                    lại nền kinh tế toàn cầu, tạo ra những cơ hội và thách thức
                    mới cho quá trình công nghiệp hóa, hiện đại hóa của Việt
                    Nam.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-1 w-12 bg-yellow-400 rounded-full"></div>
                    <span className="text-yellow-300 text-sm font-medium">
                      Cách mạng Công nghiệp 4.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default TimelinePage;
