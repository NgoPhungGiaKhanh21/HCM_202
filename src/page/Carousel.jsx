import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      image: "https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg",
      title: "Công nghiệp hóa - Nền tảng phát triển",
      description:
        "Xây dựng cơ sở vật chất kỹ thuật hiện đại, phát triển công nghiệp nặng và công nghiệp chế biến làm nền tảng cho sự phát triển kinh tế.",
    },
    {
      image:
        "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
      title: "Hiện đại hóa công nghệ",
      description:
        "Ứng dụng khoa học công nghệ tiên tiến vào sản xuất, nâng cao năng suất lao động và chất lượng sản phẩm.",
    },
    {
      image:
        "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
      title: "Phát triển lực lượng sản xuất",
      description:
        "Nâng cao trình độ chuyên môn của người lao động, xây dựng đội ngũ công nhân kỹ thuật lành nghề.",
    },
    {
      image:
        "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg",
      title: "Quan hệ sản xuất xã hội chủ nghĩa",
      description:
        "Xây dựng và hoàn thiện quan hệ sản xuất phù hợp với lực lượng sản xuất, đảm bảo sự phát triển bền vững.",
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
    <div className="min-h-screen bg-gradient-to-br  flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <div className="relative group">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full relative">
                  <div className="relative h-[600px]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                    <div className="absolute inset-0 flex items-end">
                      <div className="p-8 md:p-12 w-full">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl transform transition-all duration-500 hover:bg-white/15">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                            <span className="text-red-300 text-sm font-semibold tracking-wider uppercase">
                              Hình ảnh {index + 1} / {slides.length}
                            </span>
                          </div>

                          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                            {slide.title}
                          </h2>

                          <p className="text-lg text-gray-200 leading-relaxed max-w-3xl">
                            {slide.description}
                          </p>

                          <div className="mt-6 flex items-center gap-2">
                            <div className="h-1 w-12 bg-red-500 rounded-full"></div>
                            <span className="text-red-300 text-sm font-medium">
                              Kinh tế chính trị Mác-Lênin
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
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full border border-white/30 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full border border-white/30 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? "w-12 h-3 bg-blue-500"
                    : "w-3 h-3 bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/20 shadow-lg transition-all duration-300 font-medium"
          >
            {isAutoPlaying ? "Tạm dừng tự động" : "Tiếp tục tự động"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
