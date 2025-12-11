import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
// Import ảnh của bạn...
import intro1 from "../../public/timeline_img/intro1.png";
import intro2 from "../../public/timeline_img/intro2.png";
import intro3 from "../../public/timeline_img/intro3.png";
import intro4 from "../../public/timeline_img/intro4.png";

// ... (Giữ nguyên phần RevealOnScroll và data sections) ...

// --- COMPONENT HIỆU ỨNG (Giữ nguyên) ---
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
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
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-95"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- DỮ LIỆU SECTIONS (Giữ nguyên không đổi) ---
const sections = [
  {
    id: "overview",
    title: "Tổng quan giai đoạn 1975-1981",
    accent: "from-red-700/90 via-amber-600/90 to-stone-800/90",
    description:
      "Giai đoạn 1975–1981: Đảng Cộng sản Việt Nam lãnh đạo cả nước quá độ lên CNXH và bảo vệ Tổ quốc. Thuận lợi: sức mạnh tổng hợp sau thống nhất, niềm tin và đoàn kết toàn dân. Khó khăn: hậu quả chiến tranh nặng nề, kinh tế kiệt quệ, bối cảnh quốc tế phức tạp.",
    points: [
      "Giai đoạn quá độ lên CNXH, vừa xây dựng vừa bảo vệ Tổ quốc sau thống nhất",
      "Thuận lợi: sức mạnh tổng hợp sau Đại thắng 1975, tinh thần đoàn kết",
      "Khó khăn: hậu quả chiến tranh, kinh tế kiệt quệ, bối cảnh quốc tế phức tạp",
    ],
    image: `url(${intro1})`,
  },
  {
    id: "unification",
    title: "Hoàn thành thống nhất nhà nước (1975-1976)",
    accent: "from-amber-700/90 via-orange-600/90 to-amber-800/90",
    description:
      "Sau Đại thắng mùa Xuân 1975, nhiệm vụ cấp thiết: thống nhất nhà nước, hợp nhất hai chính quyền hai miền, tạo bộ máy quản lý thống nhất cho xây dựng và phát triển.",
    points: [
      "Hội nghị TƯ 24 (8/1975): chủ trương hoàn thành thống nhất, đưa cả nước tiến lên CNXH",
      "Hiệp thương chính trị Bắc - Nam (11/1975): thống nhất tổng tuyển cử chung",
      "Tổng tuyển cử 25/4/1976: 98,77% cử tri; đặt tên nước CHXHCN Việt Nam, đổi tên TP Sài Gòn thành TP Hồ Chí Minh",
    ],
    bulletGroups: [
      {
        title: "Chủ trương chiến lược",
        items: [
          "Hội nghị TƯ 24 (8/1975): hoàn thành thống nhất, đưa cả nước tiến nhanh, mạnh, vững lên CNXH",
          "Miền Bắc tiếp tục hoàn thiện quan hệ sản xuất XHCN; miền Nam vừa cải tạo vừa xây dựng CNXH",
        ],
      },
      {
        title: "Thống nhất & bầu cử",
        items: [
          "Hiệp thương chính trị Bắc - Nam (11/1975) tại Sài Gòn: thống nhất tổng tuyển cử toàn quốc",
          "Tổng tuyển cử chung 25/4/1976: tỉ lệ cử tri 98,77%",
        ],
      },
      {
        title: "Kết quả nhà nước thống nhất",
        items: [
          "Quốc hội khóa VI (24/6 - 3/7/1976): đặt tên nước CHXHCN Việt Nam, chọn Hà Nội làm Thủ đô",
          "Đổi tên Sài Gòn thành Thành phố Hồ Chí Minh; thống nhất các tổ chức chính trị - xã hội",
        ],
      },
    ],
    image: `url(${intro2})`,
  },
  {
    id: "congress4",
    title: "Đại hội IV và đường lối xây dựng CNXH (1976-1981)",
    accent: "from-blue-700/90 via-indigo-600/90 to-slate-800/90",
    description:
      "Đại hội IV (12/1976) tổng kết thắng lợi kháng chiến, xác định đường lối mới cho xây dựng CNXH, nhưng giai đoạn đầu gặp chủ quan nóng vội, phải điều chỉnh từ 1979.",
    points: [
      "Đổi tên Đảng Lao động Việt Nam thành Đảng Cộng sản Việt Nam",
      "Đường lối ba cuộc cách mạng: quan hệ sản xuất; khoa học-kỹ thuật (then chốt); tư tưởng-văn hóa",
      "Kế hoạch 5 năm 1976-1980: bảo đảm đời sống nhân dân và tích lũy cơ sở vật chất-kỹ thuật",
    ],
    bulletGroups: [
      {
        title: "Đặc điểm & đường lối",
        items: [
          "Tiến thẳng lên CNXH từ nền kinh tế sản xuất nhỏ, bỏ qua tư bản chủ nghĩa",
          "Nắm vững chuyên chính vô sản, quyền làm chủ tập thể, ba cuộc cách mạng song hành",
        ],
      },
      {
        title: "Mục tiêu kế hoạch 5 năm 1976-1980",
        items: [
          "Bảo đảm nhu cầu đời sống nhân dân",
          "Tích lũy để xây dựng cơ sở vật chất - kỹ thuật CNXH",
        ],
      },
      {
        title: "Điều chỉnh & đột phá (1979-1981)",
        items: [
          "HNTƯ 6 (8/1979): 'sản xuất bung ra' khắc phục quản lý kinh tế",
          "Chỉ thị 100-CT/TW (1/1981): Khoán 100 trong nông nghiệp, tăng sản lượng lương thực",
          "Quyết định 25-CP (1/1981): mở rộng quyền tự chủ SXKD, tài chính cho xí nghiệp quốc doanh",
        ],
      },
    ],
    image: `url(${intro3})`,
  },
  {
    id: "defense",
    title: "Bảo vệ Tổ quốc (1975-1981)",
    accent: "from-rose-700/90 via-red-600/90 to-amber-700/90",
    description:
      "Song song xây dựng, Việt Nam phải bảo vệ biên giới Tây Nam và phía Bắc, đồng thời giữ vững an ninh nội địa.",
    points: [
      "Biên giới Tây Nam: đánh bại Pol Pot, phối hợp giải phóng Phnom Penh 7/1/1979",
      "Biên giới phía Bắc: đẩy lùi cuộc tấn công 17/2/1979, Trung Quốc tuyên bố rút 5/3/1979; xung đột còn kéo dài",
      "An ninh nội địa: làm thất bại âm mưu FULRO và lực lượng lưu vong vũ trang",
    ],
    bulletGroups: [
      {
        title: "Chiến tranh biên giới Tây Nam",
        items: [
          "Pol Pot lấn chiếm, diệt chủng; tấn công quy mô cuối 12/1978",
          "Quân tình nguyện Việt Nam phối hợp Campuchia giải phóng Phnom Penh 7/1/1979, lật đổ chế độ diệt chủng",
        ],
      },
      {
        title: "Chiến tranh biên giới phía Bắc",
        items: [
          "Quan hệ xấu từ 1978; 17/2/1979 Trung Quốc huy động >60 vạn quân tấn công toàn tuyến",
          "Việt Nam kiên cường phòng thủ; 5/3/1979 Trung Quốc tuyên bố rút quân, xung đột còn dai dẳng",
        ],
      },
      {
        title: "An ninh nội địa",
        items: [
          "Đập tan FULRO vũ trang ở Tây Nguyên",
          "Làm thất bại lực lượng lưu vong vũ trang, giữ vững thành quả cách mạng",
        ],
      },
    ],
    image: `url(${intro4})`,
  },
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const headerOffset = 90;
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
};

export default function Introduction({ imageFit = "cover" }) {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans w-full overflow-x-hidden">
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <div className="w-full pl-4 md:pl-6 pr-0 py-10 lg:py-14 relative">
        {/* --- SIDEBAR MỚI (Card Style) --- */}
        <aside className="hidden lg:block lg:fixed lg:w-72 lg:left-6 lg:top-28 sticky z-40">
          <RevealOnScroll className="h-full">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-stone-200/60 shadow-xl shadow-stone-200/50 p-6 relative overflow-hidden">
              {/* Vạch màu trang trí bên trái */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-red-600 via-amber-500 to-red-700"></div>

              {/* Header Mục lục */}
              <div className="flex items-center gap-3 mb-6 pl-2 border-b border-stone-100 pb-4">
                <div className="w-8 h-8 rounded bg-red-50 flex items-center justify-center text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </div>
                <p className="text-sm uppercase tracking-[0.2em] text-stone-800 font-bold">
                  Mục lục
                </p>
              </div>

              {/* Danh sách */}
              <ul className="space-y-3 relative">
                <div className="absolute left-[15px] top-4 bottom-4 w-[1px] bg-stone-200 -z-10"></div>
                {sections.map((s, idx) => (
                  <li key={s.id}>
                    <button
                      onClick={() => scrollToSection(s.id)}
                      className="text-left group flex items-start gap-4 w-full p-2 rounded-lg hover:bg-stone-50 transition-all duration-200"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-white bg-stone-100 text-stone-500 font-bold text-xs flex items-center justify-center shadow-sm group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 transition-all z-10">
                        {idx + 1}
                      </span>
                      <span className="text-sm font-medium text-stone-600 group-hover:text-red-700 leading-snug pt-1 transition-colors line-clamp-2">
                        {s.title}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-50 rounded-full opacity-50 blur-xl pointer-events-none"></div>
            </div>
          </RevealOnScroll>
        </aside>

        {/* --- MAIN CONTENT --- 
            THAY ĐỔI QUAN TRỌNG:
            - Đổi lg:pl-72 thành lg:pl-[22rem]
            - Giải thích: Sidebar rộng 72 + cách lề 6 = 19.5rem. 
            - 22rem sẽ tạo ra khoảng hở 2.5rem giữa Sidebar và Content.
        */}
        <main className="flex-1 space-y-12 lg:pl-[22rem] w-full">
          {sections.map((s) => (
            <RevealOnScroll key={s.id} className="w-full">
              <section
                id={s.id}
                className="rounded-l-[2rem] rounded-r-[2rem] lg:rounded-r-none overflow-hidden shadow-2xl shadow-stone-200/50 border-y border-l border-stone-100 border-r lg:border-r-0 bg-white scroll-mt-28 transition-all duration-300 hover:shadow-stone-300/60 mr-4 md:mr-6 lg:mr-0"
              >
                {/* Title Bar */}
                <div
                  className={`bg-gradient-to-r ${s.accent} text-white px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4`}
                >
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] opacity-80 font-light">
                      Chủ đề
                    </p>
                    <h3 className="text-2xl md:text-3xl font-extrabold mt-1 leading-snug">
                      {s.title}
                    </h3>
                  </div>
                  <span className="hidden md:inline-block text-xs px-3 py-1 rounded-full bg-white/30 font-medium whitespace-nowrap">
                    #{s.id.toUpperCase()}
                  </span>
                </div>

                <div className="flex flex-col lg:flex-row h-full">
                  {/* Cột chữ: Giữ nguyên w-35rem */}
                  <div className="w-full lg:w-[35rem] flex-shrink-0 p-8 md:p-10 lg:p-12 space-y-6">
                    {s.description && (
                      <blockquote className="w-full border-l-4 border-red-500 pl-4 text-base md:text-lg italic text-stone-700 leading-relaxed bg-red-50/50 p-3 rounded-md">
                        {s.description}
                      </blockquote>
                    )}

                    <ul className="w-full space-y-3 pt-2">
                      {s.points.map((pt, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-base leading-relaxed text-stone-800 w-full"
                        >
                          <svg
                            className="w-5 h-5 text-red-500 flex-shrink-0 mt-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 12.58l-1.94 1.94-2.83-2.83-1.41 1.41L10 15.4l5.18-5.18-1.41-1.41-2.83 2.83zM10 2a8 8 0 100 16 8 8 0 000-16z" />
                          </svg>
                          <span className="font-medium flex-1">{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {s.bulletGroups && (
                      <div className="flex flex-col gap-5 pt-4 w-full">
                        {s.bulletGroups.map((group, i) => (
                          <RevealOnScroll
                            key={i}
                            delay={i * 100}
                            className="w-full"
                          >
                            <div className="w-full rounded-xl border border-stone-200 bg-stone-50/70 p-5 shadow-inner hover:bg-white hover:shadow-md transition-all duration-200">
                              <div className="border-b border-red-100 pb-2 mb-3">
                                <p className="text-sm font-bold text-red-600 uppercase tracking-wide">
                                  {group.title}
                                </p>
                              </div>
                              <ul className="space-y-3 text-sm text-stone-700">
                                {group.items.map((it, idx2) => (
                                  <li
                                    key={idx2}
                                    className="flex gap-3 items-start"
                                  >
                                    <span className="text-red-500 font-bold text-lg leading-none mt-[-1px] select-none">
                                      •
                                    </span>
                                    <span className="leading-relaxed text-stone-800">
                                      {it}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </RevealOnScroll>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Cột ảnh: Giữ nguyên */}
                  <div className="w-full lg:flex-1 relative min-h-[300px] lg:min-h-auto bg-stone-100">
                    <div
                      className={`absolute inset-0 w-full h-full bg-center bg-no-repeat transition-transform duration-700 hover:scale-105 bg-${imageFit}`}
                      style={{
                        backgroundImage: s.image,
                        backgroundSize: imageFit,
                      }}
                    />
                    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent hidden lg:block"></div>
                  </div>
                </div>
              </section>
            </RevealOnScroll>
          ))}
        </main>
      </div>
    </div>
  );
}
