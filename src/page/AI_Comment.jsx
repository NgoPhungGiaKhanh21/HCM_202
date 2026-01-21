import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import {
  Code2,
  Box,
  Terminal,
  ImageIcon,
  Layers,
  FileText,
  BookOpen,
  Link as LinkIcon,
  Cpu,
  PenTool,
} from "lucide-react";

// --- COMPONENT HIỆU ỨNG REVEAL ---
const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${isVisible
        ? "opacity-100 translate-y-0 scale-100"
        : "opacity-0 translate-y-12 scale-95"
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function AIAppendix() {
  // --- DỮ LIỆU ---

  // Công cụ làm web
  const webTools = [
    {
      name: "ReactJS",
      icon: <Code2 className="w-6 h-6 text-white" />,
      // Ảnh minh họa Code/React
      image: "https://statics.cdn.200lab.io/2024/09/reactjs-la-gi.png",
      description: "Xây dựng giao diện người dùng hiện đại",
      details: [
        "Framework JavaScript UI component-based",
        "Quản lý state và routing phức tạp",
        "Tối ưu hiệu năng với Virtual DOM",
      ],
    },
    {
      name: "Three.js",
      icon: <Box className="w-6 h-6 text-white" />,
      // Ảnh minh họa 3D Abstract
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNzjRIDpyx7Ntz0fCjgo2bwA0YCZnzNw_UuQ&s",
      description: "Xây dựng flipbook mô hình 3D tương tác",
      details: [
        "Thư viện WebGL render đồ họa 3D trên trình duyệt",
        "Tạo hiệu ứng lật trang flipbook mượt mà",
        "Xử lý animation và tương tác người dùng",
      ],
    },
    {
      name: "Cursor & Copilot",
      icon: <Terminal className="w-6 h-6 text-white" />,
      // Ảnh minh họa Terminal/Matrix
      image: "https://blog.nashtechglobal.com/wp-content/uploads/2025/06/cursor-vs-copilot.webp",
      description: "Trợ lý AI: Viết code, thiết kế và sửa lỗi",
      details: [
        "AI code assistant tăng tốc độ phát triển",
        "Gợi ý cấu trúc component thông minh",
        "Debug và refactor code tối ưu",
      ],
    },
    {
      name: "Nano Banana (Gemini) & Canva",
      icon: <ImageIcon className="w-6 h-6 text-white" />,
      // Ảnh minh họa Art/Design
      image: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/a82a88d5-9407-479b-ac50-1de4f8ddf071/image.png?t=1762100196",
      description: "Sáng tạo và xử lý hình ảnh",
      details: [
        "Tạo hình ảnh minh họa AI từ text prompt",
        "Thiết kế đồ họa, banner, infographic",
        "Tối ưu hóa visual cho nền tảng web",
      ],
    },   
  ];

  // Công cụ soạn thảo nội dung
  const contentTools = [
    {
      name: "Notebook",
      icon: <FileText className="w-6 h-6 text-white" />,
      // Ảnh minh họa Writing/Vintage
      image: "https://phongvu.vn/cong-nghe/wp-content/uploads/2025/03/cach-su-dung-notebooklm-1.jpg",
      description: "Soạn thảo, lưu trữ và tổng hợp tư liệu",
      details: [
        "Xây dựng kịch bản dòng thời gian 1975-1981",
        "Hệ thống hóa các sự kiện lịch sử logic",
        "Lưu trữ và phân loại nguồn tài liệu tham khảo",
        "Tóm tắt văn kiện, nghị quyết quan trọng",
      ],
    },
  ];

  // Tài liệu tham khảo
  const references = [
    {
      title: "Giáo trình học phần Tư tưởng Hồ Chí Minh",
      url: "https://drive.google.com/file/d/1IcRiR-SGJ0s6omK8pE6TfDtzvVehSRyn/view",
      type: "Giáo trình",
    },
    {
      title: "Tư liệu văn kiện Đảng Cộng sản Việt Nam",
      url: "https://tulieuvankien.dangcongsan.vn/page/Article/Book/Detail/review/69049c865fda1e07a9075f54",
      type: "Văn kiện",
    },
    {
      title: "Tài liệu về chống tham nhũng",
      url: "https://drive.google.com/file/d/1Tf3Fyybs8puDEnp5JGw3zqezIfreh6H2/view",
      type: "Tài liệu",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5efe2] text-gray-900 font-sans">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        {/* --- PHẦN 1: CÔNG CỤ LÀM WEB --- */}
        <section>
          <RevealOnScroll>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#8B1E1E] rounded-full shadow-lg shadow-[#8B1E1E]/30">
                <Cpu className="w-8 h-8 text-[#f5efe2]" />
              </div>
              <h2 className="text-4xl font-black text-[#8B1E1E] uppercase tracking-wide">
                Công cụ kỹ thuật
              </h2>
            </div>
            <p className="text-[#8B1E1E]/80 mb-12 max-w-2xl text-lg font-serif italic">
              "Những công nghệ nền tảng giúp tái hiện lịch sử sống động trên môi trường số."
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webTools.map((tool, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100} className="h-full">
                <div className="group bg-white rounded-3xl border border-[#C5A065]/40 shadow-md hover:shadow-2xl hover:shadow-[#8B1E1E]/20 overflow-hidden flex flex-col h-full hover:-translate-y-2 transition-all duration-500">

                  {/* PHẦN HÌNH ẢNH */}
                  <div className="relative h-48 overflow-hidden">
                    {/* Overlay màu để ảnh hòa vào background */}
                    <div className="absolute inset-0 bg-[#8B1E1E]/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Badge Icon & Name nổi trên ảnh */}
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#2c1b12] to-transparent z-20 flex items-center gap-3">
                      <div className="p-2 bg-[#8B1E1E] rounded-lg shadow-lg">
                        {tool.icon}
                      </div>
                      <span className="font-bold text-xl text-[#f5efe2] text-shadow-sm">{tool.name}</span>
                    </div>
                  </div>

                  {/* PHẦN NỘI DUNG */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="font-bold text-[#8B1E1E] mb-4 text-lg border-b border-[#C5A065]/30 pb-2">
                      {tool.description}
                    </h4>
                    <ul className="space-y-3 mt-auto">
                      {tool.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C5A065] shrink-0" />
                          <span className="text-sm leading-relaxed font-medium">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <RevealOnScroll>
          <div className="border-t border-[#C5A065]/40 max-w-xs mx-auto"></div>
        </RevealOnScroll>

        {/* --- PHẦN 2: CÔNG CỤ SOẠN THẢO NỘI DUNG --- */}
        <section>
          <RevealOnScroll>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#8B1E1E] rounded-full shadow-lg shadow-[#8B1E1E]/30">
                <PenTool className="w-8 h-8 text-[#f5efe2]" />
              </div>
              <h2 className="text-4xl font-black text-[#8B1E1E] uppercase tracking-wide">
                Biên tập nội dung
              </h2>
            </div>
            <p className="text-[#8B1E1E]/80 mb-12 max-w-2xl text-lg font-serif italic">
              "Quy trình nghiên cứu và tổng hợp tư liệu khoa học."
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {contentTools.map((tool, idx) => (
              <RevealOnScroll key={idx} delay={idx * 150} className="h-full">
                <div className="group bg-white rounded-3xl border border-[#C5A065]/40 shadow-md hover:shadow-2xl hover:shadow-[#8B1E1E]/20 overflow-hidden flex flex-col h-full hover:-translate-y-2 transition-all duration-500">

                  {/* PHẦN HÌNH ẢNH */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-[#8B1E1E]/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#2c1b12] to-transparent z-20 flex items-center gap-3">
                      <div className="p-2 bg-[#8B1E1E] rounded-lg shadow-lg">
                        {tool.icon}
                      </div>
                      <span className="font-bold text-xl text-[#f5efe2]">{tool.name}</span>
                    </div>
                  </div>

                  <div className="p-8 flex-1">
                    <h4 className="font-bold text-[#8B1E1E] mb-4 text-xl border-b border-[#C5A065]/30 pb-2">
                      {tool.description}
                    </h4>
                    <ul className="space-y-3">
                      {tool.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C5A065] shrink-0" />
                          <span className="text-base leading-relaxed font-medium">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Tài liệu tham khảo - Style cũ nhưng tinh chỉnh */}
          <RevealOnScroll delay={200}>
            <div className="bg-[#2c1b12] text-[#f5efe2] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-[#C5A065]/30">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#8B1E1E] opacity-20 rounded-full blur-[100px] -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#C5A065] opacity-10 rounded-full blur-[80px] -ml-10 -mb-10"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 text-[#C5A065]">
                  <BookOpen className="w-8 h-8" />
                  Nguồn Tài Liệu Tham Khảo
                </h3>

                <div className="space-y-4">
                  {references.map((ref, idx) => (
                    <RevealOnScroll key={idx} delay={300 + idx * 100}>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#8B1E1E]/40 hover:border-[#C5A065]/50 transition-all duration-300 group"
                      >
                        <div className="bg-white/10 p-3 rounded-xl group-hover:scale-110 transition-transform">
                          <LinkIcon className="w-6 h-6 text-[#C5A065]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#2c1b12] bg-[#C5A065] px-2 py-0.5 rounded-sm">
                              {ref.type}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold text-[#f5efe2] mb-1 group-hover:text-[#C5A065] transition-colors truncate">
                            {ref.title}
                          </h4>
                          <p className="text-white/40 text-sm truncate font-mono">
                            {ref.url}
                          </p>
                        </div>
                      </a>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </section>
      </main>
    </div>
  );
}