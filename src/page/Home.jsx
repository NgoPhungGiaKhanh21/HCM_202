import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Carousel from "./Carousel";
// import poster1 from "../../image/carousel1.png";
// import poster2 from "../../image/carousel1.png";
// import poster3 from "../../image/carousel1.png";
// import poster4 from "../../image/carousel1.png";
// import ChatBoxAI from "../components/ChatBoxAI";

// Import icons từ Heroicons (cho phần cũ)
import {
  ArrowRightIcon,
  FlagIcon,
  BuildingLibraryIcon,
  ShieldCheckIcon,
  SparklesIcon,
  MapPinIcon,
  FlagIcon as FlagIconTwo,
  FireIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

// Import icons từ Lucide (cho phần QuoteSlider mới)
// Nếu chưa cài, bạn chạy: npm install lucide-react
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  BookOpen,
  Users,
  AlertTriangle,
  Shield,
  CheckCircle,
  ArrowRight,
  Target,
  Eye,
} from "lucide-react";

// --- COMPONENT HIỆU ỨNG (RevealOnScroll) ---
const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${isVisible
        ? "opacity-100 translate-y-0 scale-100"
        : "opacity-0 translate-y-20 scale-95"
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- DATA & CONFIG ---
const timelineEvents = [
  {
    year: "Khái niệm",
    title: "Tham nhũng là gì?",
    description: "Lấy của công dùng vào việc tư - Giặc nội xâm nguy hiểm",
    details: [
      'Tham ô là "lấy của công dùng vào việc tư"',
      "Chiếm đoạt tài sản Nhà nước hoặc nhân dân",
      'Gọi là "giặc nội xâm", nguy hiểm hơn giặc ngoại xâm',
      "Phá hoại tổ chức từ bên trong",
      'Trái ngược với đức tính "Liêm" - trong sạch, không tham lam',
    ],
    icon: AlertTriangle,
  },
  {
    year: "Đảng",
    title: "Xây dựng Đảng trong sạch",
    description: "Đảng phải là đạo đức, là văn minh - Cần Kiệm Liêm Chính",
    details: [
      'Đảng phải là "đạo đức, là văn minh"',
      "Không có lợi ích nào khác ngoài lợi ích nhân dân",
      'Thực hiện "Cần, Kiệm, Liêm, Chính, Chí công vô tư"',
      'Chỉnh đốn Đảng thường xuyên như "rửa mặt hằng ngày"',
      "Loại bỏ phần tử thoái hóa, giữ gìn sự trong sạch",
    ],
    icon: Shield,
  },
  {
    year: "Nhà nước",
    title: "Nhà nước của dân",
    description: "Bao nhiêu quyền hạn đều là của dân - Cán bộ là đầy tớ",
    details: [
      '"Bao nhiêu quyền hạn đều là của dân", nhân dân là chủ',
      'Cán bộ từ Chủ tịch đến công nhân đều là "công bộc"',
      "Đầy tớ của nhân dân, phục vụ nhân dân",
      "Khi nắm quyền, nếu không kiểm soát chặt chẽ sẽ tha hóa",
      "Quyền dễ bị biến thành công cụ phục vụ lợi ích cá nhân",
    ],
    icon: Users,
  },
  {
    year: "Giải pháp",
    title: "Chống tham nhũng",
    description: "Kiểm soát quyền lực - Huy động nhân dân giám sát",
    details: [
      "Kiểm soát quyền lực bằng pháp luật dân chủ",
      "Huy động nhân dân giám sát, phê bình, đôn đốc",
      "Nhân dân có quyền bãi miễn cán bộ không xứng đáng",
      "Kỷ luật nghiêm minh và nêu gương",
      '"Một tấm gương sống hơn trăm bài tuyên truyền"',
    ],
    icon: CheckCircle,
  },
];

const contentSections = [
  {
    icon: Shield,
    title: "Đảng Trong Sạch",
    description:
      "Xây dựng Đảng vững mạnh, thực hiện Cần, Kiệm, Liêm, Chính, Chí công vô tư",
    color: "bg-red-50",
    accentColor: "text-red-600",
    borderColor: "border-red-300",
  },
  {
    icon: Users,
    title: "Nhà Nước Vì Dân",
    description:
      "Nhà nước của dân, do dân, vì dân - cán bộ là đầy tớ của nhân dân",
    color: "bg-blue-50",
    accentColor: "text-blue-600",
    borderColor: "border-blue-300",
  },
  {
    icon: AlertTriangle,
    title: "Nguy Cơ Tham Nhũng",
    description: "Giặc nội xâm phá hoại từ bên trong, mất niềm tin nhân dân",
    color: "bg-orange-50",
    accentColor: "text-orange-600",
    borderColor: "border-orange-300",
  },
  {
    icon: CheckCircle,
    title: "Giải Pháp Cấp Bách",
    description:
      "Chỉnh đốn thường xuyên, kiểm soát quyền lực, huy động nhân dân",
    color: "bg-green-50",
    accentColor: "text-green-600",
    borderColor: "border-green-300",
  },
];

const keyHighlights = [
  {
    title: "Tha hóa từ quyền lực",
    points: [
      "Quyền lực không kiểm soát bị lợi dụng để vơ vét, tư lợi cá nhân",
      "Cán bộ quên mất bản chất phục vụ nhân dân",
      "Biến quyền lực thành công cụ làm giàu cá nhân",
    ],
  },
  {
    title: "Phá hoại từ bên trong",
    points: [
      "Mục ruỗng tổ chức, suy yếu bộ máy",
      "Phá hoại sự nghiệp xây dựng đất nước",
      "Nguy hiểm hơn cả kẻ thù bên ngoài",
    ],
  },
  {
    title: "Mất niềm tin nhân dân",
    points: [
      "Làm tha hóa cán bộ, suy thoái tư tưởng chính trị",
      "Nhân dân mất niềm tin vào Đảng và Nhà nước",
      "Đảng mất quyền lãnh đạo, mất vai trò tiên phong",
    ],
  },
  {
    title: "Chủ nghĩa cá nhân",
    points: [
      'Coi chủ nghĩa cá nhân là "bệnh mẹ" sinh ra các bệnh khác',
      "Lợi ích cá nhân lấn át lợi ích chung",
      "Tham lam, vơ vét, không biết đủ",
    ],
  },
];

// --- DATA CÁC CÂU TRÍCH DẪN ---
const quotes = [
  {
    text: "Đảng ta là một đạo đức, một nền văn minh. Đảng cộng sản phải thật là trong sạch, phải thật là vững mạnh.",
    author: "Chủ tịch Hồ Chí Minh",
  },
  {
    text: "Tham ô, lãng phí là tội ác. Đó là giặc nội xâm, nguy hiểm hơn giặc ngoại xâm.",
    author: "Chủ tịch Hồ Chí Minh",
  },
  {
    text: "Bao nhiêu quyền hạn đều là của dân. Cán bộ, đảng viên là đầy tớ của nhân dân.",
    author: "Chủ tịch Hồ Chí Minh",
  },
  {
    text: "Một tấm gương sống còn hơn trăm bài tuyên truyền. Lãnh đạo phải gương mẫu, trong sạch.",
    author: "Chủ tịch Hồ Chí Minh",
  },
];

// --- COMPONENT QUOTE SLIDER MỚI ---
const QuoteSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 200);
  };

  const prevQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 200);
  };

  useEffect(() => {
    const timer = setInterval(nextQuote, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <RevealOnScroll>
      <div className="relative group bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl border-l-4 border-amber-500 hover:scale-[1.01] transition-transform duration-500 select-none">
        {/* Icon trang trí nền */}
        <div className="absolute top-4 left-4 opacity-10 text-amber-500">
          <Quote size={60} />
        </div>

        {/* Nội dung trích dẫn */}
        <div
          className={`transition-opacity duration-300 transform ${isAnimating
            ? "opacity-0 translate-y-2"
            : "opacity-100 translate-y-0"
            }`}
        >
          <p className="text-xl md:text-3xl font-bold mb-6 italic leading-relaxed min-h-[120px] flex items-center justify-center">
            "{quotes[currentIndex].text}"
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-amber-300 font-semibold uppercase tracking-wider text-sm md:text-base">
            — {quotes[currentIndex].author}
          </p>
        </div>

        {/* Nút điều hướng */}
        <button
          onClick={prevQuote}
          className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
        >
          <ChevronLeft size={32} />
        </button>

        <button
          onClick={nextQuote}
          className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
        >
          <ChevronRight size={32} />
        </button>

        {/* Chỉ số trang (Dots) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {quotes.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-6 bg-amber-500" : "w-2 bg-gray-600"
                }`}
            ></div>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
};

// --- COMPONENT CHÍNH (HOME) ---
export default function Home() {
  const [activeTimeline, setActiveTimeline] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-white">
      {/* Hero Section */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <section className="relative w-full min-h-[700px] md:min-h-[800px] flex items-center justify-center overflow-hidden">
        <video
          src="/audio/VN2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Content container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="text-center mb-16">
            {/* <RevealOnScroll>
              <div className="inline-block mb-8 animate-pulse">
                <span className="px-6 py-3 border-2 border-yellow-500 text-yellow-400 rounded-full text-base font-bold tracking-wider">
                  1975 - 1981
                </span>
              </div>
            </RevealOnScroll> */}

            <RevealOnScroll delay={200}>
              <h1 className="text-6xl md:text-5xl font-black text-white mb-6 leading-tight drop-shadow-lg">
                “... Tham nhũng là từ trong Đảng mà ra....”
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <h2 className="text-5xl md:text-4xl font-black text-yellow-400 mb-8 leading-tight drop-shadow-lg">
                thách thức nào cho việc xây dựng Đảng và Nhà nước hiện nay?
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={600}>
              <p className="text-lg md:text-xl text-white mb-6 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                "Tham ô thực chất là hành động “lấy của công dùng vào việc tư”.
                Đó là việc cán bộ, đảng viên quên mất đức tính thanh liêm, đạo
                đức để chiếm đoạt tài sản của Nhà nước hoặc của nhân dân làm lợi
                cho bản thân."
              </p>
              <p className="text-base md:text-lg text-white mb-12 max-w-2xl mx-auto drop-shadow-md">
                - Hồ Chí Minh -
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <RevealOnScroll key={index} delay={index * 150}>
                  <button
                    onClick={() => setActiveTimeline(index)}
                    className={`w-full text-left p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 h-full ${activeTimeline === index
                      ? "border-yellow-500 bg-red-700/80 text-white shadow-2xl backdrop-blur-sm"
                      : "border-red-700/50 bg-red-900/60 text-gray-100 hover:border-yellow-400/50 backdrop-blur-sm"
                      }`}
                  >
                    <div className="flex justify-center mb-4">
                      <Icon
                        className={`h-8 w-8 ${activeTimeline === index
                          ? "text-yellow-400"
                          : "text-yellow-300"
                          }`}
                      />
                    </div>
                    <div className="text-2xl font-black mb-2 text-center">
                      {event.year}
                    </div>
                    <div className="font-bold text-sm mb-2 text-center">
                      {event.title}
                    </div>
                    <div className="text-xs opacity-80 leading-relaxed text-center">
                      {event.description}
                    </div>
                  </button>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400" />
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        {/* Timeline Details */}
        <RevealOnScroll>
          <div className="bg-white rounded-2xl shadow-2xl border-2 border-slate-200 p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Nội dung chi tiết
            </h2>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 border-l-4 border-red-600 transition-all duration-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl font-black text-red-600">
                  {timelineEvents[activeTimeline].year}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {timelineEvents[activeTimeline].title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {timelineEvents[activeTimeline].description}
                  </p>
                </div>
              </div>

              <div className="border-t-2 border-slate-200 pt-6 mt-6">
                <h4 className="text-lg font-bold text-slate-900 mb-4">
                  Nội dung chính:
                </h4>
                <ul className="space-y-3">
                  {timelineEvents[activeTimeline].details.map(
                    (detail, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-slate-700 animate-fadeIn"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <span className="text-red-600 font-bold mt-1">•</span>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Key Highlights Section */}
        <RevealOnScroll>
          <div className="bg-white rounded-2xl shadow-2xl border-2 border-amber-200 p-8 md:p-12 mb-16">
            <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                Nguy Cơ Tham Nhũng Đe Dọa Sự Tồn Vong
              </h3>
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold">
                Cảnh báo nghiêm trọng
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyHighlights.map((item, idx) => (
                <RevealOnScroll key={idx} delay={idx * 150} className="h-full">
                  <div className="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6 shadow-sm hover:shadow-md transition-all h-full hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-black shrink-0">
                        {idx + 1}
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-700">
                      {item.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-amber-600 mt-0.5">•</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Carousel Section */}
        {/* <RevealOnScroll>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Hình Ảnh Lịch Sử
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-4 ring-slate-100">
              <Carousel
                autoplay
                autoplaySpeed={5000}
                dotPosition="bottom"
                effect="fade"
              >
                {[poster1, poster2, poster3, poster4].map((img, index) => (
                  <div key={index} className="relative group bg-black">
                    <img
                      src={
                        img ||
                        "/placeholder.svg?height=600&width=1200&query=Vietnam%20history"
                      }
                      alt={`Poster ${index + 1}`}
                      className="w-full h-96 md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="text-2xl font-bold mb-2">
                        Năm {1975 + index}
                      </div>
                      <p className="text-sm opacity-90">
                        Giai đoạn xây dựng chủ nghĩa xã hội
                      </p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </RevealOnScroll> */}

        {/* Content Sections Grid */}
        <div className="mb-16">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Các Nội Dung Chính
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <RevealOnScroll
                  key={index}
                  delay={index * 150}
                  className="h-full"
                >
                  <div
                    className={`${section.color} rounded-xl p-8 border-2 ${section.borderColor} hover:shadow-xl transition-all duration-300 group cursor-pointer h-full hover:-translate-y-2`}
                  >
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`h-12 w-12 ${section.accentColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {section.title}
                    </h3>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {section.description}
                    </p>
                    {/* <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
                      Tìm hiểu thêm
                      <ArrowRightIcon className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div> */}
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>

        {/* Key Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <RevealOnScroll className="h-full">
            <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-8 md:p-12 text-white shadow-xl h-full hover:shadow-2xl transition-shadow">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Target className="h-8 w-8" />
                Mục tiêu
              </h3>
              <ul className="space-y-4 text-base">
                {[
                  "Xây dựng Đảng trong sạch, vững mạnh",
                  "Nhà nước thực sự của dân, do dân, vì dân",
                  "Loại bỏ tham nhũng, tiêu cực trong bộ máy",
                  "Nâng cao niềm tin của nhân dân",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-2xl mt-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="h-full" delay={200}>
            <div className="bg-gradient-to-br from-red-600 to-red-500 rounded-2xl p-8 md:p-12 text-white shadow-xl h-full hover:shadow-2xl transition-shadow">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Eye className="h-8 w-8" />
                Bảo Vệ Tổ Quốc
              </h3>
              <ul className="space-y-4 text-base">
                {[
                  "Chỉnh đốn Đảng thường xuyên",
                  "Kiểm soát quyền lực bằng pháp luật",
                  "Huy động nhân dân giám sát",
                  "Kỷ luật nghiêm minh, lãnh đạo nêu gương",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-2xl mt-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>

        {/* QUOTE SECTION ĐÃ ĐƯỢC THAY THẾ */}
        <QuoteSlider />

        {/* <ChatBoxAI /> */}
      </section>
    </div>
  );
}
