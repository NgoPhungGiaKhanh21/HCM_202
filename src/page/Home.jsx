import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { Banner } from "../components/Banner";
import ChatBoxAI from "../components/ChatBoxAI";
import {
  Shield,
  Users,
  AlertTriangle,
  CheckCircle,
  Target,
  Eye,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// --- HOOK HIỆU ỨNG CUỘN ---
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
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- DATA CỐT LÕI ---
const coreValues = [
  {
    title: "Vấn đề Tham nhũng",
    desc: "Được coi là 'giặc nội xâm', phá hoại tổ chức từ bên trong.",
    icon: AlertTriangle,
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=500", // Thay bằng ảnh minh họa pháp luật/tư liệu
    color: "bg-orange-50",
    textColor: "text-orange-600",
  },
  {
    title: "Xây dựng Đảng",
    desc: "Đảng phải là đạo đức, văn minh. Chỉnh đốn thường xuyên như 'rửa mặt'.",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=500", // Thay bằng ảnh tư liệu Đảng
    icon: Shield,
    color: "bg-red-50",
    textColor: "text-red-600",
  },
  {
    title: "Nhà nước vì Dân",
    desc: "Bao nhiêu quyền hạn đều là của dân. Cán bộ là đầy tớ công bộc.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=500", // Thay bằng ảnh nhân dân/hội họp
    icon: Users,
    color: "bg-blue-50",
    textColor: "text-blue-600",
  },
];

const quotes = [
  {
    text: "Tham ô, lãng phí là tội ác. Đó là giặc nội xâm, nguy hiểm hơn giặc ngoại xâm.",
    author: "Hồ Chí Minh",
  },
  {
    text: "Đảng ta là một đạo đức, một nền văn minh. Đảng cộng sản phải thật là trong sạch.",
    author: "Hồ Chí Minh",
  },
  {
    text: "Bao nhiêu quyền hạn đều là của dân. Cán bộ, đảng viên là đầy tớ của nhân dân.",
    author: "Hồ Chí Minh",
  },
];

// --- COMPONENT TRÍCH DẪN (TINH GỌN) ---
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
          className={`transition-opacity duration-300 transform ${
            isAnimating
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
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-6 bg-amber-500" : "w-2 bg-gray-600"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
};

// --- TRANG HOME HOÀN CHỈNH ---
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      {/* Hero Section - Súc tích */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <video
          src="/audio/VN2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-4xl font-black text-white mb-6 leading-tight">
              “... Tham nhũng là từ trong Đảng mà ra....”
            </h1>
            <p className="text-lg md:text-2xl text-yellow-400 font-bold uppercase tracking-[0.2em] mb-8">
              Thách thức xây dựng Đảng & Nhà nước hiện nay
            </p>
            <div className="flex justify-center gap-4">
              <div className="h-1 w-20 bg-red-600 rounded-full" />
              <div className="h-1 w-20 bg-yellow-500 rounded-full" />
            </div>
          </RevealOnScroll>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 pb-20">
        {/* 3 Trụ cột chính */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {coreValues.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 150}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 group border border-slate-100">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 ${item.color} opacity-20`}
                  />
                  <item.icon
                    className={`absolute bottom-4 right-4 h-8 w-8 ${item.textColor} bg-white rounded-full p-1.5 shadow-md`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Khối Giải pháp Tinh gọn */}
        <RevealOnScroll>
          <div className="bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-200 mb-20">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-red-700 p-10 md:p-14 text-white">
                <h2 className="text-3xl font-bold mb-6">Trọng tâm Giải pháp</h2>
                <p className="text-red-100 leading-relaxed">
                  Để ngăn chặn sự tha hóa, cần một hệ thống kiểm soát quyền lực
                  chặt chẽ và sự tham gia chủ động của nhân dân.
                </p>
              </div>
              <div className="md:w-2/3 p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex gap-4">
                  <Target className="text-red-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Kiểm soát quyền lực
                    </h4>
                    <p className="text-sm text-slate-600">
                      Xây dựng cơ chế pháp luật để "nhốt quyền lực vào lồng".
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Eye className="text-red-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Nhân dân giám sát
                    </h4>
                    <p className="text-sm text-slate-600">
                      Phát huy vai trò của tai mắt nhân dân trong việc phản
                      biện.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-red-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Nêu gương cán bộ
                    </h4>
                    <p className="text-sm text-slate-600">
                      Lãnh đạo trong sạch là tấm gương sống giá trị hơn mọi lời
                      nói.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="text-red-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">
                      Kỷ luật nghiêm minh
                    </h4>
                    <p className="text-sm text-slate-600">
                      Xử lý không có vùng cấm đối với các sai phạm về tham
                      nhũng.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Slider Trích dẫn */}

        {/* <QuoteSlider /> */}
        <Banner />
        {/* <ChatBoxAI /> */}
      </main>
    </div>
  );
}
