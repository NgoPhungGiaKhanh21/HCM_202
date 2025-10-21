import Header from "../components/Header";
import ChatBoxAI from "../components/ChatBoxAI";
import AnimatedSection from "../components/AnimatedSection";
import {
  Sparkles,
  TrendingUp,
  Globe,
  Factory,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import poster1 from "../assets/pic1.jpg";
import poster2 from "../assets/bg1.jpg";
import poster3 from "../assets/bg2.jpg";
import poster4 from "../assets/bg3.jpg";
import TakeQuiz from "../page/TakeQuiz";
import Carousel from "./Carousel";

export default function App() {
  return (
    <div className="min-h-screen modern-background">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section id="home" className="text-center mb-16 pt-8">
          <AnimatedSection animationType="fadeInDown" delay={0}>
            <div className="inline-flex items-center gap-2 glass-effect text-white px-4 py-2 rounded-full mb-6">
              <Sparkles size={20} />
              <span className="text-sm font-medium">
                Chương 6: Công nghiệp hóa, Hiện đại hóa & Hội nhập kinh tế quốc
                tế
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fadeInUp" delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight text-balance">
              Công nghiệp hóa, Hiện đại hóa <br />
              <span className="">và Hội nhập kinh tế quốc tế</span> của Việt Nam
            </h1>
          </AnimatedSection>

          <AnimatedSection animationType="fadeInUp" delay={400}>
            <p className="text-xl modern-text max-w-3xl mx-auto leading-relaxed mb-10">
              Khám phá quá trình chuyển đổi nền kinh tế Việt Nam từ nền sản xuất
              lạc hậu sang nền sản xuất hiện đại, và vai trò của hội nhập kinh
              tế quốc tế trong sự phát triển bền vững
            </p>
          </AnimatedSection>

          <AnimatedSection animationType="scaleIn" delay={800} duration={1200}>
            <div className="max-w-7xl mx-auto">
              <Carousel
                autoplay
                autoplaySpeed={5000}
                dotPosition="bottom"
                className="rounded-3xl overflow-hidden shadow-2xl poster-container modern-carousel"
                effect="fade"
              >
                {[poster1, poster2, poster3, poster4].map((img, index) => (
                  <div key={index}>
                    <AnimatedSection
                      animationType="fadeIn"
                      delay={index * 300}
                      duration={1000}
                    >
                      <div className="relative group poster-container">
                        <img
                          src={img || "/placeholder.svg"}
                          alt={`Poster ${index + 1}`}
                          className="w-full h-[600px] md:h-[800px] object-cover transition-all duration-1000 ease-out group-hover:scale-105 group-hover:brightness-110"
                          style={{
                            filter: "brightness(0.9) contrast(1.1)",
                            transition: "all 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                        />
                        <div className="poster-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                        <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-6 group-hover:translate-y-0 poster-float">
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-xl">
                            <h4 className="text-2xl font-bold mb-2 drop-shadow-lg gradient-text">
                              Hình ảnh {index + 1}
                            </h4>
                            <p className="text-sm text-gray-200 drop-shadow-md leading-relaxed">
                              Minh họa cho quá trình công nghiệp hóa và hiện đại
                              hóa Việt Nam
                            </p>
                            <div className="mt-3 flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                              <span className="text-xs text-blue-300 font-medium">
                                Đang hiển thị
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30 shadow-lg">
                            <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                          </div>
                        </div>
                        <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-600 transform -translate-y-2 group-hover:translate-y-0">
                          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                            <span className="text-white text-xs font-medium">
                              📸 Poster {index + 1}
                            </span>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                ))}
              </Carousel>
            </div>
          </AnimatedSection>

          {/* Hội nhập Kinh tế Quốc tế Poster */}
          <AnimatedSection
            animationType="fadeInUp"
            delay={1000}
            duration={1000}
          >
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl modern-card group cursor-pointer">
                <img
                  src={poster3}
                  alt="Việt Nam trong mạng lưới hội nhập toàn cầu"
                  className="w-full h-auto object-contain transition-all duration-500 group-hover:scale-105"
                />

                {/* Overlay chỉ hiện khi hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Text chỉ hiện khi hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-blue-300 text-sm font-semibold tracking-wider uppercase">
                        Hội nhập toàn cầu
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      Việt Nam trong mạng lưới hội nhập toàn cầu
                    </h3>
                    <p className="text-gray-200 leading-relaxed">
                      Việt Nam đang tích cực tham gia vào các tổ chức kinh tế
                      quốc tế, mở rộng quan hệ thương mại và đầu tư với các nước
                      trên thế giới, tạo ra những cơ hội phát triển mới cho nền
                      kinh tế.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
                      <span className="text-blue-300 text-sm font-medium">
                        Hội nhập Kinh tế Quốc tế
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <AnimatedSection animationType="fadeInLeft" delay={0}>
            <div className="modern-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Factory className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Công nghiệp hóa
              </h3>
              <p className="modern-text leading-relaxed">
                Quá trình chuyển đổi căn bản từ sử dụng sức lao động thủ công
                sang sử dụng công nghệ, phương tiện hiện đại, nhằm tạo ra năng
                suất lao động xã hội cao
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fadeInUp" delay={200}>
            <div className="modern-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 group">
              <div className="bg-gradient-to-br from-green-100 to-green-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Hiện đại hóa
              </h3>
              <p className="modern-text leading-relaxed">
                Nâng cao trình độ khoa học kỹ thuật, cải tiến phương thức quản
                lý, và nâng cao chất lượng cuộc sống toàn xã hội
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="fadeInRight" delay={400}>
            <div className="modern-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 group">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Hội nhập kinh tế quốc tế
              </h3>
              <p className="modern-text leading-relaxed">
                Quá trình gắn kết nền kinh tế Việt Nam với nền kinh tế thế giới,
                mở rộng thị trường và hợp tác quốc tế
              </p>
            </div>
          </AnimatedSection>
        </section>

        <AnimatedSection animationType="fadeInUp" delay={0}>
          <section className="bg-white rounded-xl shadow-lg p-10 border border-gray-100 mb-16">
            <AnimatedSection animationType="fadeInDown" delay={200}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Các cuộc Cách mạng Công nghiệp
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6">
              <AnimatedSection animationType="fadeInLeft" delay={400}>
                <div className="border-l-4 border-blue-600 pl-6 py-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Lần thứ I (Thế kỷ XVIII-XIX)
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Khởi phát ở Anh, chuyển từ lao động thủ công sang sử dụng
                    máy móc, cơ giới hóa sản xuất bằng năng lượng nước và hơi
                    nước
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animationType="fadeInRight" delay={600}>
                <div className="border-l-4 border-green-600 pl-6 py-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Lần thứ II (Thế kỷ XIX-XX)
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Chuyển nền sản xuất cơ khí sang nền sản xuất điện-cơ khí và
                    tự động hóa cục bộ trong sản xuất
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animationType="fadeInLeft" delay={800}>
                <div className="border-l-4 border-orange-600 pl-6 py-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Lần thứ III (Thập niên 60-cuối thế kỷ XX)
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Xuất hiện công nghệ thông tin, tự động hóa sản xuất, và sự
                    phát triển của máy tính
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animationType="fadeInRight" delay={1000}>
                <div className="border-l-4 border-purple-600 pl-6 py-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Lần thứ IV (Từ năm 2011)
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Xuất hiện các công nghệ đột phá: trí tuệ nhân tạo, big data,
                    in 3D, và Internet of Things
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection animationType="scaleIn" delay={0}>
          <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-2xl shadow-2xl p-10 mb-16 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <AnimatedSection animationType="fadeInRight" delay={200}>
                  <h2 className="text-3xl font-bold mb-4">
                    Công nghiệp hóa, Hiện đại hóa ở Việt Nam
                  </h2>
                </AnimatedSection>
                <AnimatedSection animationType="fadeInUp" delay={400}>
                  <p className="text-blue-100 text-lg leading-relaxed mb-6">
                    Công nghiệp hóa ở Việt Nam được thực hiện theo định hướng xã
                    hội chủ nghĩa với mục tiêu "dân giàu, nước mạnh, dân chủ,
                    công bằng, văn minh"
                  </p>
                </AnimatedSection>
                <AnimatedSection animationType="fadeInLeft" delay={600}>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-white/20 rounded-full p-1 mt-1 flex-shrink-0">
                        <CheckCircle size={16} />
                      </div>
                      <span>
                        Tạo lập điều kiện chuyển đổi từ nền sản xuất lạc hậu
                        sang hiện đại
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-white/20 rounded-full p-1 mt-1 flex-shrink-0">
                        <CheckCircle size={16} />
                      </div>
                      <span>Ứng dụng thành tựu khoa học công nghệ mới</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-white/20 rounded-full p-1 mt-1 flex-shrink-0">
                        <CheckCircle size={16} />
                      </div>
                      <span>
                        Chuyển đổi cơ cấu kinh tế theo hướng hiện đại và hợp lý
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-white/20 rounded-full p-1 mt-1 flex-shrink-0">
                        <CheckCircle size={16} />
                      </div>
                      <span>Thích ứng với cách mạng công nghiệp 4.0</span>
                    </li>
                  </ul>
                </AnimatedSection>
              </div>
              <AnimatedSection animationType="fadeInLeft" delay={800}>
                <div className="flex-shrink-0">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                    <Factory className="text-white mb-4" size={64} />
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">Mục tiêu</div>
                      <div className="text-blue-100">Phát triển bền vững</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection animationType="fadeInUp" delay={0}>
          <section className="mb-16">
            <AnimatedSection animationType="fadeInDown" delay={200}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Hội nhập Kinh tế Quốc tế
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection animationType="fadeInLeft" delay={400}>
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <CheckCircle className="text-green-600" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Tác động Tích cực
                    </h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold text-lg flex-shrink-0">
                        ✓
                      </span>
                      <span>
                        Mở rộng thị trường và tiếp thu khoa học công nghệ
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold text-lg flex-shrink-0">
                        ✓
                      </span>
                      <span>Thu hút vốn đầu tư nước ngoài</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold text-lg flex-shrink-0">
                        ✓
                      </span>
                      <span>Thúc đẩy công nghiệp hóa và tăng tích lũy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold text-lg flex-shrink-0">
                        ✓
                      </span>
                      <span>Tạo nhiều cơ hội việc làm mới</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold text-lg flex-shrink-0">
                        ✓
                      </span>
                      <span>Nâng cao chất lượng nguồn nhân lực</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection animationType="fadeInRight" delay={600}>
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <AlertCircle className="text-orange-600" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Tác động Tiêu cực
                    </h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-lg flex-shrink-0">
                        !
                      </span>
                      <span>Gia tăng cạnh tranh gay gắt</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-lg flex-shrink-0">
                        !
                      </span>
                      <span>
                        Phụ thuộc nền kinh tế vào thị trường bên ngoài
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-lg flex-shrink-0">
                        !
                      </span>
                      <span>Phân phối không công bằng lợi ích</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-lg flex-shrink-0">
                        !
                      </span>
                      <span>Nguy cơ chuyển dịch cơ cấu kinh tế tự nhiên</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold text-lg flex-shrink-0">
                        !
                      </span>
                      <span>Thách thức đối với chủ quyền quốc gia</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection animationType="fadeInUp" delay={0}>
          <section className="bg-white rounded-xl shadow-lg p-10 border border-gray-100 mb-16">
            <AnimatedSection animationType="fadeInDown" delay={200}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Phương hướng Nâng cao Hiệu quả Hội nhập
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6">
              <AnimatedSection animationType="fadeInLeft" delay={400}>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-lg">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Nhận thức sâu sắc về thời cơ và thách thức
                    </h3>
                    <p className="text-gray-600">
                      Hội nhập kinh tế là xu thế khách quan của thời đại, cần
                      thấy rõ cả mặt tích cực và tiêu cực
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection animationType="fadeInRight" delay={600}>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-lg">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Xây dựng chiến lược hội nhập phù hợp
                    </h3>
                    <p className="text-gray-600">
                      Lộ trình hội nhập phải được cân nhắc với trình độ phát
                      triển của đất nước
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection animationType="fadeInLeft" delay={800}>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Tham gia tích cực vào các liên kết kinh tế quốc tế
                    </h3>
                    <p className="text-gray-600">
                      Thực hiện đầy đủ các cam kết để nâng cao uy tín và vai trò
                      của Việt Nam
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection animationType="fadeInRight" delay={1000}>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-lg">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Hoàn thiện thể chế kinh tế và pháp luật
                    </h3>
                    <p className="text-gray-600">
                      Rà soát và hoàn thiện hệ thống pháp luật liên quan đến hội
                      nhập kinh tế
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection animationType="fadeInLeft" delay={1200}>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-lg">
                      5
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Nâng cao năng lực cạnh tranh quốc tế
                    </h3>
                    <p className="text-gray-600">
                      Tăng cường hỗ trợ doanh nghiệp để vượt qua thách thức thời
                      kỳ hội nhập
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection animationType="fadeInRight" delay={1400}>
                <div className="flex gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-lg">
                      6
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Xây dựng nền kinh tế độc lập, tự chủ
                    </h3>
                    <p className="text-gray-600">
                      Không bị lệ thuộc vào nước khác, bảo vệ chủ quyền quốc gia
                      và lợi ích dân tộc
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection animationType="scaleIn" delay={0}>
          <section className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-10 border border-blue-200 mb-16">
            <AnimatedSection animationType="fadeInDown" delay={200}>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Câu hỏi đặt ra
              </h3>
            </AnimatedSection>
            <AnimatedSection animationType="fadeInUp" delay={400}>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Liệu Việt Nam có thể tận dụng tối đa những cơ hội từ hội nhập
                kinh tế quốc tế để thực hiện thành công công nghiệp hóa, hiện
                đại hóa,
                <span className="font-bold text-blue-600">
                  {" "}
                  vươn lên ngang tầm với các quốc gia phát triển
                </span>{" "}
                trong kỷ nguyên số?
              </p>
            </AnimatedSection>
          </section>
        </AnimatedSection>

        {/* Quiz Section */}
        <AnimatedSection animationType="fadeInUp" delay={0}>
          <section id="takequiz">
            <TakeQuiz />
          </section>
        </AnimatedSection>
      </main>
      <ChatBoxAI />
    </div>
  );
}
