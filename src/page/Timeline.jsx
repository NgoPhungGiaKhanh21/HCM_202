import React, { useEffect, useState, useRef } from "react";
// Giả sử Header component đã được định nghĩa
import Header from "../components/Header";

// Dữ liệu sự kiện được giữ nguyên
const events = [
  {
    date: "4-1975",
    year: "1975", // Thêm trường year để dễ dàng làm nổi bật
    title: "Đại thắng mùa Xuân",
    description:
      "Đất nước bước vào kỷ nguyên mới: Tổ quốc hoàn toàn độc lập, thống nhất, quá độ đi lên chủ nghĩa xã hội.",
    image: "/timeline_img/Picture1.png",
    icon: "🎉", // Icon tượng trưng cho sự kiện
  },
  {
    date: "3-5-1975",
    year: "1975",
    title: "Pôn Pốt chống Việt Nam",
    description:
      "Tập đoàn Pôn Pốt bắt đầu thi hành chính sách diệt chủng ở Campuchia và tăng cường chống Việt Nam, có quân đổ bộ chiếm Thổ Chu, Phú Quốc.",
    image: "/timeline_img/Picture2.png",
    icon: "⚔️",
  },
  {
    date: "8-1975",
    year: "1975",
    title: "Hội nghị TW 24 (khóa III)",
    description:
      "Quyết tâm hoàn thành thống nhất nước nhà, đưa cả nước tiến nhanh, tiến mạnh, tiến vững chắc lên chủ nghĩa xã hội.",
    image: "/timeline_img/Picture3.png",
    icon: "🏛️",
  },
  {
    date: "27-10-1975",
    year: "1975",
    title: "Ủy ban Thường vụ QH họp",
    description:
      "Phiên đặc biệt bàn về chủ trương, biện pháp thống nhất nước nhà về mặt nhà nước.",
    image: "/timeline_img/Picture4.png",
    icon: "📜",
  },
  {
    date: "15 đến 21-11-1975",
    year: "1975",
    title: "Hội nghị Hiệp thương chính trị",
    description:
      "Hội nghị xác định cần sớm thống nhất về mặt nhà nước và tổ chức Tổng tuyển cử chung vào nửa đầu năm 1976.",
    image: "/timeline_img/Picture5.png",
    icon: "🤝",
  },
  {
    date: "3-1-1976",
    year: "1976",
    title: "Chỉ thị về Tổng tuyển cử",
    description:
      "Bộ Chính trị ra Chỉ thị số 228-CT/TW nêu rõ tầm quan trọng của cuộc Tổng tuyển cử.",
    image: "/timeline_img/Picture6.png",
    icon: "📣",
  },
  {
    date: "25-4-1976",
    year: "1976",
    title: "Tổng tuyển cử 1976",
    description:
      "Cuộc Tổng tuyển cử bầu Quốc hội chung của nước Việt Nam thống nhất, tỉ lệ cử tri đi bầu đạt 98,77%.",
    image: "/timeline_img/Picture7.png",
    icon: "🗳️",
  },
  {
    date: "24-6 đến 3-7-1976",
    year: "1976",
    title: "Kỳ họp đầu tiên Quốc Hội nước Việt Nam",
    description:
      "Quyết định tên nước là Cộng hòa Xã hội chủ nghĩa Việt Nam, đặt Thủ đô là Hà Nội, đổi tên Sài Gòn thành TP. Hồ Chí Minh.",
    image: "/timeline_img/Picture8.png",
    icon: "🇻🇳",
  },
  {
    date: "14 đến 20-12-1976",
    year: "1976",
    title: "Đại hội IV của Đảng họp tại Hà Nội",
    description:
      "Đổi tên Đảng Lao động Việt Nam thành Đảng Cộng sản Việt Nam; đề ra phương hướng, nhiệm vụ cho kế hoạch 5 năm (1976-1980).",
    image: "/timeline_img/Picture9.png",
    icon: "🚩",
  },
  {
    date: "1978",
    year: "1978",
    title: "Căng thẳng với Trung Quốc",
    description:
      "Trung Quốc rút chuyên gia, cắt viện trợ, lấn chiếm và có xung đột trên tuyến biên giới phía Bắc.",
    image: "/timeline_img/Picture10.png",
    icon: "🚧",
  },
  {
    date: "Cuối 12-1978",
    year: "1978",
    title: "Chính quyền Pôn Pốt tiến công",
    description:
      "Chính quyền Pôn Pốt huy động tổng lực tiến công xâm lược quy mô lớn trên tuyến biên giới Tây Nam; Việt Nam phản công.",
    image: "/timeline_img/Picture11.png",
    icon: "💥",
  },
  {
    date: "7-1-1979",
    year: "1979",
    title: "Giải phóng Phnom Penh",
    description:
      "Quân tình nguyện Việt Nam phối hợp giúp Campuchia tổng tiến công, giải phóng Phnom Penh, đánh đổ chế độ diệt chủng Pôn Pốt.",
    image: "/timeline_img/Picture12.png",
    icon: "🕊️",
  },
  {
    date: "17-2-1979",
    year: "1979",
    title: "Trung Quốc tấn công biên giới phía Bắc",
    description:
      "Trung Quốc huy động hơn 60 vạn quân tấn công toàn tuyến biên giới phía Bắc.",
    image: "/timeline_img/Picture13.png",
    icon: "🚨",
  },
  {
    date: "18-2-1979",
    year: "1979",
    title: "Hiệp ước VN-Campuchia",
    description:
      "Việt Nam và Campuchia ký Hiệp ước hòa bình, hữu nghị và hợp tác.",
    image: "/timeline_img/Picture14.png",
    icon: "✍️",
  },
  {
    date: "5-3-1979",
    year: "1979",
    title: "Tổng động viên toàn quốc",
    description:
      "Chủ tịch Tôn Đức Thắng ra lệnh Tổng động viên toàn quốc; Trung Quốc tuyên bố rút quân, nhưng căng thẳng kéo dài.",
    image: "/timeline_img/Picture15.png",
    icon: " mobilization",
  },
  {
    date: "8-1979",
    year: "1979",
    title: "Trung ương 6 (bước đột phá đầu tiên đổi mới kinh tế của Đảng)",
    description:
      "Hội nghị Trung ương 6 được coi là bước đột phá đầu tiên đổi mới kinh tế: khắc phục quản lý kinh tế, khuyến khích sản xuất.",
    image: "/timeline_img/Picture16.png",
    icon: "💡",
  },
  {
    date: "10-1979",
    year: "1979",
    title: "Khai hoang, xóa trạm kiểm soát",
    description:
      "Chính phủ tận dụng đất nông nghiệp để khai hoang, phục hoá; xóa bớt trạm kiểm soát để mở rộng trao đổi thị trường.",
    image: "/timeline_img/Picture17.png",
    icon: "🚜",
  },
  {
    date: "9-1980",
    year: "1980",
    title: "Thảo luận Dự thảo Hiến pháp",
    description:
      "Ban Chấp hành Trung ương chỉ đạo thảo luận Dự thảo Hiến pháp mới của nước CHXHCNVN.",
    image: "/timeline_img/Picture18.png",
    icon: "⚖️",
  },
  {
    date: "1-1981",
    year: "1981",
    title: "Chỉ thị số 100-CT/TW",
    description:
      "Ban Bí thư ban hành Chỉ thị số 100-CT/TW về khoán sản phẩm đến nhóm và người lao động trong các hợp tác xã nông nghiệp.",
    image: "/timeline_img/Picture19.png",
    icon: "🌾",
  },
  {
    date: "1-1981",
    year: "1981",
    title: "Quyết định 25-CP",
    description:
      "Chính phủ ban hành Quyết định số 25-CP về quyền chủ động sản xuất kinh doanh và quyền tự chủ về tài chính của các xí nghiệp quốc doanh.",
    image: "/timeline_img/Picture20.png",
    icon: "🏭",
  },
  {
    date: "1-1981",
    year: "1981",
    title: "Quyết định 26-CP",
    description:
      "Chính phủ ban hành Quyết định số 26-CP về việc mở rộng hình thức trả lương khoán, lương sản phẩm và vận dụng hình thức tiền thưởng trong các đơn vị sản xuất kinh doanh của Nhà nước.",
    image: "/timeline_img/Picture21.png",
    icon: "💰",
  },
];

const placeholderImage =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450'><defs><linearGradient id='g' x1='0' x2='1'><stop offset='0' stop-color='#60a5fa'/><stop offset='1' stop-color='#7c3aed'/></linearGradient></defs><rect width='100%' height='100%' fill='url(#g)'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='28' fill='white'>Ảnh minh hoạ</text></svg>`
  );

// Danh sách màu sắc cho từng card (có thể điều chỉnh)
const colors = [
  "border-amber-500 bg-amber-50 dark:bg-amber-900/10", // amber
  "border-blue-500 bg-blue-50 dark:bg-blue-900/10", // blue
  "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/10", // green
  "border-purple-500 bg-purple-50 dark:bg-purple-900/10", // purple
  "border-teal-500 bg-teal-50 dark:bg-teal-900/10", // teal
  "border-orange-500 bg-orange-50 dark:bg-orange-900/10", // orange
  "border-red-500 bg-red-50 dark:bg-red-900/10", // red
];

const getYearStats = () => {
  const yearMap = {};
  events.forEach((ev) => {
    const year = ev.year; // Sử dụng trường year đã thêm
    yearMap[year] = (yearMap[year] || 0) + 1;
  });
  return Object.entries(yearMap)
    .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
    .map(([year, count]) => ({ year, count }));
};

const yearStats = getYearStats();

export default function Timeline() {
  const [active, setActive] = useState(0);
  const [filterYear, setFilterYear] = useState(null);

  const headerRef = useRef(null);

  // Lọc sự kiện theo năm
  const filteredEvents = filterYear
    ? events.filter((ev) => ev.year === filterYear)
    : events;

  // Logic Intersection Observer được giữ nguyên
  useEffect(() => {
    // Đảm bảo chỉ tạo observer khi có filteredEvents
    if (filteredEvents.length === 0) return;

    const els = filteredEvents
      .map((_, i) => document.getElementById(`event-${i}`))
      .filter(Boolean);
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace("event-", "");
            setActive(Number(id));
          }
        });
      },
      // Căn giữa sự kiện đang hoạt động trên màn hình
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [filterYear, filteredEvents.length]); // Thêm filteredEvents.length vào dependencies

  // Keep aside aligned under header: measure header height and expose it as CSS variable
  useEffect(() => {
    const setHeaderVar = () => {
      const h = headerRef.current ? headerRef.current.offsetHeight : 88;
      document.documentElement.style.setProperty("--header-height", `${h}px`);
    };

    setHeaderVar();
    window.addEventListener("resize", setHeaderVar);
    return () => window.removeEventListener("resize", setHeaderVar);
  }, []);

  const scrollToEvent = (i) => {
    const el = document.getElementById(`event-${i}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setActive(i);
    }
  };

  // Component Card Sự kiện
  const EventCard = ({ ev, eventColor, yearColor }) => (
    <article
      className={`border-l-4 p-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02] ${eventColor} `}
    >
      <div className="flex items-center justify-between mb-3 border-b pb-2 border-gray-200 dark:border-slate-700">
        <span
          className={`text-xl font-extrabold px-3 py-1 rounded-full text-white shadow-md ${yearColor}`}
        >
          {ev.year}
        </span>
        <span className="text-3xl">{ev.icon}</span>
      </div>

      <img
        src={ev.image || placeholderImage}
        alt={ev.title}
        className="w-full h-32 md:h-40 object-cover rounded-md mb-3 border border-gray-100 dark:border-slate-700"
      />
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1 font-mono">
        {ev.date}
      </div>
      <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-100">
        {ev.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
        {ev.description}
      </p>
    </article>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <div
        ref={headerRef}
        className="sticky top-0 z-50"
        style={{ "--header-height": "88px" }}
      >
        <Header />
      </div>

      <div className="flex w-full pt-6">
        {/* appendix box - positioned at left edge */}
        <aside
          className="hidden lg:block w-72 flex-shrink-0 h-fit sticky p-4"
          style={{ top: "calc(var(--header-height) + 8px)" }} // sticky under header
        >
          {/* year filter section */}
          <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-xl shadow-2xl p-4">
            <div className="mb-4 pb-4 border-b border-gray-200 dark:border-slate-600">
              <h5 className="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400 mb-3">
                <span className="text-lg mr-2">📅</span> Lọc theo năm
              </h5>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterYear(null)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors shadow ${
                    filterYear === null
                      ? "bg-red-600 text-white shadow-red-500/50"
                      : "bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-600"
                  }`}
                >
                  Tất cả ({events.length})
                </button>
                {yearStats.map(({ year, count }) => (
                  <button
                    key={year}
                    onClick={() => setFilterYear(year)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors shadow ${
                      filterYear === year
                        ? "bg-blue-600 text-white shadow-blue-500/50"
                        : "bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-600"
                    }`}
                  >
                    {year} ({count})
                  </button>
                ))}
              </div>
            </div>

            {/* Thanh tiến trình - moved here so it appears under the year filter */}
            <div className="mt-4 pt-3 border-t border-gray-200 dark:border-slate-600">
              <div className="mt-3 text-xs text-gray-600 dark:text-gray-300 flex items-center justify-between font-semibold">
                <span>Tiến trình</span>
                <span>
                  {active + 1}/{filteredEvents.length}
                </span>
              </div>
              <div className="mt-2 bg-gray-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                <div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.round(
                      ((active + 1) / filteredEvents.length) * 100
                    )}%`,
                    background: "linear-gradient(90deg, #f97316, #ef4444)",
                  }}
                />
              </div>
            </div>

            <h4 className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-200">
              <span className="text-lg mr-1">📚</span> CÁC SỰ KIỆN (
              {filteredEvents.length})
            </h4>

            {/* Mục lục sự kiện */}
            <div className="overflow-y-auto pr-2 max-h-[52vh] custom-scrollbar">
              <ul className="space-y-2">
                {filteredEvents.map((ev, i) => (
                  <li key={i}>
                    <button
                      onClick={() => scrollToEvent(i)}
                      className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors text-left border-2 border-transparent ${
                        i === active
                          ? "bg-red-50 dark:bg-red-900/30 text-gray-800 dark:text-gray-100 !border-red-600 font-bold shadow-inner"
                          : "hover:bg-gray-100 dark:hover:bg-slate-700"
                      }`}
                    >
                      <span className="text-xl">{ev.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-gray-500 dark:text-gray-300">
                          {ev.date}
                        </div>
                        <div className="text-sm truncate">{ev.title}</div>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* timeline content - wider area */}
        <main className="relative flex-1 px-4 max-w-7xl mx-auto md:px-8 lg:px-4">
          {/* central vertical line spanning whole timeline */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0">
            <div className="w-1 bg-gray-300 dark:bg-gray-700 h-full mx-auto shadow-md" />
          </div>

          <div className="space-y-12 py-8">
            {filteredEvents.map((ev, idx) => {
              const isLeft = idx % 2 === 0;
              const eventColorClass = colors[idx % colors.length];
              // Màu sắc ngẫu nhiên cho năm để nổi bật hơn
              const yearColors = [
                "bg-red-600",
                "bg-blue-600",
                "bg-emerald-600",
                "bg-purple-600",
              ];
              const yearColorClass = yearColors[idx % yearColors.length];

              return (
                <div
                  id={`event-${idx}`}
                  key={ev.date + idx}
                  className="timeline-event grid grid-cols-1 md:grid-cols-3 items-center gap-6"
                >
                  {/* left column (Card hoặc khoảng trống) */}
                  <div
                    className={`col-span-1 ${
                      isLeft ? "md:text-right md:pr-10" : "md:pr-10"
                    } max-w-3xl mx-auto md:mx-0 ${
                      !isLeft ? "hidden md:block" : ""
                    }`} // Ẩn cột này trên mobile nếu là right
                  >
                    {isLeft && (
                      <EventCard
                        ev={ev}
                        isLeft={isLeft}
                        idx={idx}
                        eventColor={eventColorClass}
                        yearColor={yearColorClass}
                      />
                    )}
                  </div>

                  {/* center column - marker */}
                  <div className="col-span-1 flex justify-center items-center relative h-full">
                    {/* Đường ngang nhỏ kết nối từ đường dọc đến card (chỉ hiển thị trên desktop) */}
                    <div
                      className={`hidden md:block absolute w-5 h-0.5 bg-gray-300 dark:bg-gray-700 ${
                        isLeft ? "right-full" : "left-full"
                      }`}
                    />

                    <div className="z-10 bg-white dark:bg-slate-900 rounded-full p-1 shadow-xl">
                      <div
                        className={`h-8 w-8 rounded-full ${yearColorClass} ring-4 ring-white dark:ring-slate-900 shadow-inner flex items-center justify-center text-white text-xl font-bold`}
                        style={{
                          boxShadow: `0 0 0 4px #ffffff, 0 0 0 8px ${yearColorClass}`,
                        }}
                      >
                        {ev.icon}
                      </div>
                    </div>
                  </div>

                  {/* right column (Card hoặc khoảng trống) */}
                  <div
                    className={`col-span-1 ${
                      !isLeft ? "md:text-left md:pl-10" : "md:pl-10"
                    } max-w-3xl mx-auto md:mx-0 ${
                      isLeft ? "hidden md:block" : ""
                    }`} // Ẩn cột này trên mobile nếu là left
                  >
                    {!isLeft && (
                      <EventCard
                        ev={ev}
                        isLeft={isLeft}
                        idx={idx}
                        eventColor={eventColorClass}
                        yearColor={yearColorClass}
                      />
                    )}
                  </div>

                  {/* Card hiển thị trên mobile (chiếm toàn bộ chiều rộng) */}
                  <div className={`md:hidden col-span-3 w-full`}>
                    <EventCard
                      ev={ev}
                      isLeft={isLeft}
                      idx={idx}
                      eventColor={eventColorClass}
                      yearColor={yearColorClass}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}

// Thêm style cho custom-scrollbar (tùy chọn, cần đặt trong file CSS hoặc tag <style>)
// .custom-scrollbar::-webkit-scrollbar {
//   width: 8px;
// }
// .custom-scrollbar::-webkit-scrollbar-track {
//   background: #f1f1f1;
//   border-radius: 10px;
// }
// .custom-scrollbar::-webkit-scrollbar-thumb {
//   background: #888;
//   border-radius: 10px;
// }
// .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//   background: #555;
// }
