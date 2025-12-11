import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      image: "/image/img1.jpg",
      title: "Thống nhất đất nước - Mốc son lịch sử",
      description:
        "Ngày 30/4/1975, đất nước hoàn toàn thống nhất. Đảng lãnh đạo nhân dân cả nước bước vào thời kỳ quá độ lên chủ nghĩa xã hội, khôi phục và phát triển kinh tế, xây dựng đất nước.",
      badge: "1975-1976",
    },
    {
      image: "/image/img2.jpg",
      title: "Xây dựng chủ nghĩa xã hội (1976-1981)",
      description:
        "Đại hội IV (12/1976) đổi tên Đảng Lao động Việt Nam thành Đảng Cộng sản Việt Nam. Đường lối ba cuộc cách mạng: quản lý sản xuất, khoa học-kỹ thuật thần chốt, tư tưởng-văn hóa. Kế hoạch 5 năm 1976-1980 bảo đảm đời sống và tích lũy cơ sở vật chất.",
      badge: "Đại hội IV",
    },
    {
      image: "/image/img3.jpg",
      title: "Đột phá kinh tế 1979-1981",
      description:
        "Hội nghị TW 6 (8/1979) chủ trương 'sản xuất bung ra'. Chỉ thị 100-CT/TW (1/1981) khoán sản phẩm, sản lượng lương thực tăng rõ. Quyết định 25-CP (1/1981) mở rộng quyền tự chủ cho xí nghiệp quốc doanh.",
      badge: "1979-1981",
    },
    {
      image: "../../public/timeline_img/intro2.png",
      title: "Bảo vệ Tổ quốc & Công cuộc Đổi mới",
      description:
        "Biên giới Tây Nam: đánh bại Pol Pot, giải phóng Phnom Penh 7/1/1979. Biên giới phía Bắc: đẩy lùi cuộc tấn công 17/2/1979, Trung Quốc rút 5/3. Giữ vững an ninh nội địa, làm thất bại FULRO và các lực lượng vũ trang lưu vong. Đại hội VI (1986) mở ra công cuộc Đổi mới toàn diện.",
      badge: "1975-1986",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="w-full">
        <div className="text-center py-6 bg-white/80 backdrop-blur-sm border-b-2 border-orange-300">
          <div className="inline-flex items-center gap-3 px-6 py-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">⭐</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-700 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Xây dựng CNXH & Bảo vệ Tổ quốc
            </h1>
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">⭐</span>
            </div>
          </div>
          <p className="text-base text-gray-700 font-semibold mt-1">
            1975 - 1981
          </p>
        </div>

        <div className="relative group">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full relative">
                  <div className="relative h-screen">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    <div className="absolute inset-0 flex items-end">
                      <div className="p-6 md:p-10 w-full">
                        <div className="bg-gradient-to-br from-orange-100/95 to-yellow-100/95 backdrop-blur-md rounded-2xl p-6 md:p-8 border-2 border-orange-300 shadow-2xl transform transition-all duration-500 hover:scale-[1.01] max-w-5xl mx-auto">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                              {slide.badge}
                            </span>
                            <span className="text-gray-600 text-xs font-semibold">
                              Giai đoạn {index + 1} / {slides.length}
                            </span>
                          </div>

                          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-700 via-orange-600 to-yellow-600 bg-clip-text text-transparent mb-3 leading-tight">
                            {slide.title}
                          </h2>

                          <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-4 font-medium">
                            {slide.description}
                          </p>

                          <div className="flex items-center gap-2">
                            <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
                            <span className="text-orange-700 text-xs font-bold uppercase tracking-wide bg-orange-200/50 px-3 py-1.5 rounded-full border border-orange-300">
                              🇻🇳 Lịch Sử Đảng CSVN
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-md text-orange-600 p-3 rounded-full border-2 border-orange-300 shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-md text-orange-600 p-3 rounded-full border-2 border-orange-300 shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-orange-300 shadow-lg">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? "w-10 h-2.5 bg-gradient-to-r from-orange-500 to-yellow-500 shadow-lg"
                    : "w-2.5 h-2.5 bg-orange-300 hover:bg-orange-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center py-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-6 py-3 rounded-full border-2 border-orange-300 shadow-xl transition-all duration-300 font-bold text-sm hover:scale-105"
          >
            {isAutoPlaying ? "⏸️ Tạm dừng tự động" : "▶️ Tiếp tục tự động"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
