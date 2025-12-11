import React from "react";
import Header from "../components/Header";
import intro1 from "../../public/timeline_img/intro1.png";
import intro2 from "../../public/timeline_img/intro2.png";
import intro3 from "../../public/timeline_img/intro3.png";
import intro4 from "../../public/timeline_img/intro4.png";
// Cập nhật cấu trúc accent: sử dụng màu sắc hiện đại hơn
const sections = [
  {
    id: "overview",
    title: "Tổng quan giai đoạn 1975-1981",
    // Cải tiến gradient: dùng màu đỏ ấm và vàng đất
    accent: "from-red-700/90 via-amber-600/90 to-stone-800/90",
    description:
      "Giai đoạn 1975–1981: Đảng Cộng sản Việt Nam lãnh đạo cả nước quá độ lên CNXH và bảo vệ Tổ quốc. Thuận lợi: sức mạnh tổng hợp sau thống nhất, niềm tin và đoàn kết toàn dân. Khó khăn: hậu quả chiến tranh nặng nề, kinh tế kiệt quệ, bối cảnh quốc tế phức tạp.",
    points: [
      "Giai đoạn quá độ lên CNXH, vừa xây dựng vừa bảo vệ Tổ quốc sau thống nhất",
      "Thuận lợi: sức mạnh tổng hợp sau Đại thắng 1975, tinh thần đoàn kết",
      "Khó khăn: hậu quả chiến tranh, kinh tế kiệt quệ, bối cảnh quốc tế phức tạp",
    ],
    // Dùng query gợi ý hình ảnh có giá trị thông tin
    image: `url(${intro1})`,
  },
  {
    id: "unification",
    title: "Hoàn thành thống nhất nhà nước (1975-1976)",
    // Gradient vàng đất/cam
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
    // Gradient xanh đậm/tím
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
    subPoints: [
      "HNTƯ6 (8/1979): đột phá 'sản xuất bung ra'",
      "Chỉ thị 100-CT/TW (1/1981): khoán sản phẩm nông nghiệp (Khoán 100), sản lượng lương thực tăng",
      "Quyết định 25-CP (1/1981): mở rộng quyền tự chủ SXKD, tài chính cho xí nghiệp quốc doanh",
    ],
    image: `url(${intro3})`,
  },
  {
    id: "defense",
    title: "Bảo vệ Tổ quốc (1975-1981)",
    // Gradient đỏ/cam cho chủ đề quốc phòng
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

export default function Introduction() {
  return (
    // Nền thay đổi: bg-stone-50 (tinh tế hơn)
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      <div className="sticky top-0 z-50">
        {/* Giả định Header được thiết kế lại: nổi bật, dùng backdrop-blur nếu có thể */}
        <Header />
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 lg:py-14 relative">
        {/* Sidebar TOC (desktop fixed) - Tinh chỉnh thiết kế */}
        <aside className="hidden lg:block lg:fixed lg:w-64 lg:left-[max(16px,calc((100%-72rem)/2+16px))] lg:top-28 sticky">
          {/* Thay border màu đậm bằng border mỏng nhẹ hơn */}
          <div className="border-r border-stone-300 pr-4">
            <p className="text-xs uppercase tracking-[0.18em] text-red-600 font-semibold mb-4">
              Mục lục
            </p>
            <ul className="space-y-4 text-base leading-relaxed text-stone-700">
              {sections.map((s, idx) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollToSection(s.id)}
                    className="text-left hover:text-red-700 transition-colors group"
                  >
                    <span className="font-bold mr-2 text-red-600 group-hover:text-red-700">
                      {idx + 1}.
                    </span>
                    <span className="font-medium text-stone-800 group-hover:text-red-700 transition-colors">
                      {s.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Mobile TOC - Thiết kế dạng Tags/Chips hiện đại */}
          <div className="lg:hidden">
            <div className="rounded-xl border border-stone-200 bg-white shadow-lg p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-red-600 font-semibold mb-3">
                Mục lục
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                {sections.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    // Thiết kế chip: nền trắng, viền nhẹ, hover nổi bật
                    className="px-3 py-1 rounded-full bg-stone-50 border border-stone-300 text-stone-700 hover:bg-red-50 hover:border-red-500 hover:text-red-700 transition-colors shadow-sm"
                  >
                    <span className="font-medium">{idx + 1}.</span>{" "}
                    {s.title.split(" (")[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <main className="flex-1 space-y-12 lg:pl-72">
            {sections.map((s) => (
              <section
                key={s.id}
                id={s.id}
                // Tăng bo góc, đổ bóng sâu hơn, viền nhẹ hơn
                className="rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-200/50 border border-stone-100 bg-white scroll-mt-28 transition-all duration-300 hover:shadow-2xl hover:shadow-stone-300/60"
              >
                {/* Title Bar - Hiện đại hóa Gradient */}
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

                <div className="p-8 md:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-6 w-full">
                    {s.description && (
                      <blockquote className="w-full border-l-4 border-red-500 pl-4 text-base md:text-lg italic text-stone-700 leading-relaxed bg-red-50/50 p-3 rounded-md">
                        {s.description}
                      </blockquote>
                    )}
                    {/* List Points - Dùng icon (dấu check) để sinh động hơn */}
                    <ul className="w-full space-y-3 pt-2">
                      {s.points.map((pt, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-base leading-relaxed text-stone-800 w-full"
                        >
                          {/* Icon mô phỏng dấu check hoặc ngôi sao */}
                          <svg
                            className="w-5 h-5 text-red-500 flex-shrink-0 mt-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10 12.58l-1.94 1.94-2.83-2.83-1.41 1.41L10 15.4l5.18-5.18-1.41-1.41-2.83 2.83zM10 2a8 8 0 100 16 8 8 0 000-16z" />
                          </svg>
                          <span className="font-medium flex-1">{pt}</span>
                        </li>
                      ))}
                    </ul>
                    {/* Tìm đến đoạn s.bulletGroups && (...) và thay thế toàn bộ bằng đoạn này: */}

                    {s.bulletGroups && (
                      // 1. Container: Sử dụng flex-col để xếp chồng lên nhau, w-full để full bề ngang
                      <div className="flex flex-col gap-5 pt-4 w-full">
                        {s.bulletGroups.map((group, i) => (
                          <div
                            key={i}
                            className="w-full rounded-xl border border-stone-200 bg-stone-50/70 p-5 shadow-inner hover:bg-white hover:shadow-md transition-all duration-200"
                          >
                            {/* Tiêu đề Card */}
                            <div className="border-b border-red-100 pb-2 mb-3">
                              <p className="text-sm font-bold text-red-600 uppercase tracking-wide">
                                {group.title}
                              </p>
                            </div>

                            {/* Nội dung List */}
                            <ul className="space-y-3 text-sm text-stone-700">
                              {group.items.map((it, idx2) => (
                                <li
                                  key={idx2}
                                  className="flex gap-3 items-start"
                                >
                                  {/* Bullet point chỉnh lại cho đẹp */}
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
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Image Card - Thiết kế hiện đại hơn */}
                  <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-xl self-start sticky top-28">
                    <div
                      className="h-56 md:h-72 lg:h-full min-h-[300px] bg-cover bg-center"
                      style={{ backgroundImage: s.image }}
                    />
                    {/* Caption/Chú thích ảnh */}
                    {/* <div className="p-5 bg-gradient-to-br from-stone-50 to-red-50/50 text-sm text-stone-700">
                      <p className="font-semibold text-stone-900">
                        Minh họa: {s.title}
                      </p>
                      <p className="text-xs text-stone-500 mt-1 italic">
                        (Bạn có thể thay bằng ảnh tư liệu lịch sử thực tế để
                        tăng tính trực quan và giá trị thông tin.)
                      </p>
                    </div> */}
                  </div>
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
