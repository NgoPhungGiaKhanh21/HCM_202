import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
// Import ảnh của bạn...
import intro1 from "../../public/image/tutuonghcm.png";
import intro2 from "../../public/image/thamnhung.png";
import intro3 from "../../public/image/phan3.png";
import intro4 from "../../public/timeline_img/intro4.png";
import intro5 from "../../public/image/phan5.png";


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

// --- DỮ LIỆU SECTIONS (5 Phần I - V) ---
const sections = [
  {
    id: "i-hochiminh-overview",
    title: "I. Tư tưởng Hồ Chí Minh về xây dựng Đảng và Nhà nước",
    accent: "from-teal-700/90 via-cyan-600/90 to-blue-700/90",
    description:
      "Xây dựng Đảng trong sạch, vững mạnh và xây dựng Nhà nước của dân, do dân, vì dân là hai nội dung thống nhất, có quan hệ biện chứng với nhau. Sự trong sạch của Đảng quyết định trực tiếp bản chất và hiệu quả hoạt động của Nhà nước.",
    points: [
      "Đảng là lực lượng lãnh đạo Nhà nước và xã hội, sự trong sạch quyết định hiệu quả hoạt động",
      "Nhà nước của dân là môi trường kiểm nghiệm đạo đức, năng lực và uy tín của Đảng cầm quyền",
      "Suy thoái trong Đảng, đặc biệt tham nhũng, trực tiếp làm biến chất Nhà nước và xâm hại lợi ích nhân dân",
    ],
    bulletGroups: [
      {
        title: "Mối quan hệ biện chứng",
        items: [
          "Đảng Cộng sản là lực lượng lãnh đạo Nhà nước và xã hội",
          "Sự trong sạch, vững mạnh của Đảng quyết định trực tiếp bản chất và hiệu quả Nhà nước",
          "Nhà nước của dân là nơi kiểm nghiệm uy tín và năng lực lãnh đạo",
        ],
      },
      {
        title: "Nguy cơ tha hóa",
        items: [
          "Mọi suy thoái trong Đảng làm biến chất Nhà nước",
          "Tham nhũng trực tiếp xâm hại lợi ích của nhân dân",
          "Mất sự tin tưởng của nhân dân với chế độ",
        ],
      },
    ],
    image: `url(${intro1})`,
  },
  {
    id: "ii-tham-nhung-concept",
    title: "II. Quan điểm về 'Tham ô' – Cội nguồn của tham nhũng",
    accent: "from-orange-700/90 via-amber-600/90 to-red-700/90",
    description:
      "Hồ Chí Minh dùng thuật ngữ 'Tham ô' để chỉ hành vi 'lấy của công làm của tư'. Dù tên gọi khác với 'Tham nhũng' ngày nay, nhưng bản chất cốt lõi vẫn là sự tha hóa quyền lực: Chỉ người có chức, có quyền trong bộ máy mới có điều kiện để xâm phạm tài sản công.",
    points: [
      "Định nghĩa: Tham ô là hành vi cán bộ, đảng viên đục khoét nhân dân, ăn bớt của bộ đội, tiêu phạm tiền của Nhà nước.",
      "Bản chất: Là 'Giặc nội xâm' - kẻ địch bên trong, nguy hiểm hơn giặc ngoại xâm vì nó phá hoại từ gốc rễ.",
      "Tính giai cấp: Bác coi đây là hành động phản lại Đảng, là 'bạn đồng minh của thực dân và phong kiến'.",
    ],
    bulletGroups: [
      {
        title: "Từ 'Tham ô' đến 'Tham nhũng'",
        items: [
          "Bác gọi là 'Tham ô': Lấy của công dùng vào việc tư.",
          "Luật nay gọi là 'Tham nhũng': Lợi dụng chức vụ, quyền hạn vì vụ lợi.",
          "Điểm gặp gỡ: Đều xuất phát từ người có quyền lực -> 'Từ trong Đảng mà ra'.",
        ],
      },
      {
        title: "Mức độ nguy hiểm (Giặc nội xâm)",
        items: [
          "Là kẻ thù giấu mặt, ở ngay trong tổ chức, trong máu thịt.",
          "Làm mục ruỗng bộ máy, hỏng tinh thần trong sạch của cán bộ.",
          "Phá hoại sự nghiệp xây dựng chủ nghĩa xã hội nghiêm trọng hơn kẻ thù ngoài.",
        ],
      },
      {
        title: "Đối lập với đạo đức Cách mạng",
        items: [
          "Trái ngược hoàn toàn với đức 'Liêm' (trong sạch, không tham lam).",
          "Kẻ tham ô đã đánh mất tư cách 'công bộc', trở thành 'quan cách mạng'.",
          "Biến quyền lực phục vụ nhân dân thành công cụ vơ vét cá nhân.",
        ],
      },
    ],
    image: `url(${intro2})`,
  },
  {
    id: "iii-dan-by-dan-for-dan",
    title: "III. Nhà nước của dân, do dân, vì dân",
    accent: "from-green-700/90 via-emerald-600/90 to-teal-700/90",
    description:
      "Hồ Chí Minh xây dựng quan điểm về Nhà nước của nhân dân, do nhân dân và vì nhân dân. 'Bao nhiêu quyền hạn đều là của dân', cán bộ Nhà nước là đầy tớ của nhân dân, chứ không phải những 'quan cách mạng'.",
    points: [
      "Đảng là 'đạo đức, là văn minh', không có lợi ích khác ngoài lợi ích của nhân dân và dân tộc",
      "Đảng viên phải thực hiện 'Cần, Kiệm, Liêm, Chính, Chí công vô tư' để xứng đáng làm công bộc",
      "Cán bộ Nhà nước từ Chủ tịch nước đến người quét rác đều là 'đầy tớ' của nhân dân",
    ],
    bulletGroups: [
      {
        title: "Mục tiêu của Đảng Cộng sản",
        items: [
          "Đảng cầm quyền phải là 'đạo đức, là văn minh'",
          "Lãnh đạo giải phóng dân tộc, giải phóng xã hội và giải phóng con người",
          "Không có lợi ích nào khác ngoài lợi ích của nhân dân và dân tộc",
        ],
      },
      {
        title: "Yêu cầu đối với đảng viên",
        items: [
          "Thấm nhuần đạo đức cách mạng từ bên trong",
          "Thực hiện 5 điều: Cần, Kiệm, Liêm, Chính, Chí công vô tư",
          "Giữ gìn Đảng thật trong sạch để xứng đáng làm người lãnh đạo, người đầy tớ trung thành",
        ],
      },
      {
        title: "Nguyên tắc Nhà nước",
        items: [
          "'Bao nhiêu quyền hạn đều là của dân' - nhân dân là chủ, dân làm chủ",
          "Cán bộ từ Chủ tịch nước đến người quét rác đều là 'công bộc', 'đầy tớ'",
          "Không phải những 'quan cách mạng' để đè đầu cưỡi cổ dân",
        ],
      },
      {
        title: "Cảnh báo từ 1945",
        items: [
          "Từ năm 1945, Hồ Chí Minh đã cảnh báo các căn bệnh: cậy thế, hủ hóa, tư túng, chia rẽ, quan liêu",
          "'Cán bộ các cơ quan, từ thứ trưởng trở xuống, đều là đầy tớ của nhân dân'",
          "Nhấn mạnh nguy cơ tha hóa của một Đảng cầm quyền",
        ],
      },
    ],
    image: `url(${intro3})`,
  },
  {
    id: "iv-tham-nhung-threat",
    title: "IV. Tham nhũng - nguy cơ đe dọa tồn vong Đảng và chế độ",
    accent: "from-red-700/90 via-rose-600/90 to-pink-700/90",
    description:
      "Hồ Chí Minh chỉ rõ rằng tham nhũng là 'giặc nội xâm' phá hoại từ bên trong, làm mất niềm tin của nhân dân và tính chính danh của Đảng, trực tiếp đe dọa vận mệnh của chế độ xã hội chủ nghĩa.",
    points: [
      "Sự tha hóa từ quyền lực: cán bộ nhà nước có nguy cơ lạm quyền, hủ hóa nếu không kiểm soát",
      "Tham nhũng phá hoại tổ chức từ bên trong, suy yếu bộ máy và sự nghiệp xây dựng đất nước",
      "Tham nhũng làm mất niềm tin của nhân dân, suy thoái tư tưởng chính trị của cán bộ",
      "Chủ nghĩa cá nhân là 'bệnh mẹ' sinh ra tham nhũng; làm đứt mối quan hệ Đảng-Nhà nước-Nhân dân",
    ],
    bulletGroups: [
      {
        title: "Thứ nhất: Tha hóa từ quyền lực",
        items: [
          "Khi nắm giữ quyền lực, cán bộ nhà nước có nguy cơ lạm quyền, 'cậy thế, cậy quyền'",
          "Quyền lực nếu không kiểm soát bị lợi dụng để vơ vét, tư lợi cá nhân",
          "Dẫn đến hủ hóa, suy thoái tư tưởng chính trị",
        ],
      },
      {
        title: "Thứ hai: 'Giặc nội xâm' phá hoại từ bên trong",
        items: [
          "Nguy hiểm hơn giặc ngoại xâm vì mục ruỗng tổ chức từ bên trong",
          "Suy yếu bộ máy Nhà nước, làm hỏng tinh thần cán bộ",
          "Phá hoại sự nghiệp xây dựng đất nước",
        ],
      },
      {
        title: "Thứ ba: Mất niềm tin và tính chính danh",
        items: [
          "Hồ Chí Minh: Nếu Đảng không còn đạo đức sẽ mất quyền lãnh đạo",
          "Tham nhũng làm tha hóa cán bộ, gây suy thoái tư tưởng chính trị",
          "Đe dọa trực tiếp vận mệnh của Đảng và chế độ",
        ],
      },
      {
        title: "Thứ tư: Chủ nghĩa cá nhân - 'bệnh mẹ'",
        items: [
          "Chủ nghĩa cá nhân là 'bệnh mẹ' sinh ra hàng trăm thứ bệnh khác",
          "Khi cá nhân lấn át, cán bộ quên lợi ích chung, chạy theo danh lợi, quyền lực",
          "Nhà nước bị biến dạng, đứt gãy mối quan hệ máu thịt Đảng-Nhà nước-Nhân dân",
        ],
      },
    ],
    image: `url(${intro4})`,
  },
  {
    id: "v-requestion",
    title:
      "V. Những yêu cầu cấp bách: chỉnh đốn Đảng, kiểm soát quyền lực, phát huy nhân dân",
    accent: "from-purple-700/90 via-pink-600/90 to-rose-700/90",
    description:
      "Để bảo vệ thành quả cách mạng và xây dựng xã hội chủ nghĩa, Đảng và Nhà nước phải luôn giữ gìn sự trong sạch, kiểm soát quyền lực nghiêm minh, và phát huy vai trò giám sát của nhân dân.",
    points: [
      "Chỉnh đốn Đảng thường xuyên như 'rửa mặt hằng ngày' để loại bỏ những phần tử thoái hóa, biến chất",
      "Kiểm soát quyền lực bằng pháp luật dân chủ, nghiêm minh kết hợp kiểm tra từ trên xuống và giám sát từ dưới lên",
      "Huy động nhân dân tham gia giám sát, phê bình và bãi miễn những cán bộ không xứng đáng",
      "Thực hiện kỷ luật nghiêm minh không có 'vùng cấm' và cán bộ lãnh đạo phải gương mẫu về đạo đức",
    ],
    bulletGroups: [
      {
        title: "Thứ nhất: Chỉnh đốn Đảng thường xuyên",
        items: [
          "Chỉnh đốn không phải nhiệm vụ nhất thời mà là công việc lâu dài, thường xuyên",
          "Kịp thời loại bỏ những phần tử thoái hóa, biến chất để giữ gìn sự trong sạch của Đảng",
          "Hồ Chí Minh ví việc này như 'rửa mặt hằng ngày' - phải liên tục duy trì",
        ],
      },
      {
        title: "Thứ hai: Kiểm soát quyền lực bằng pháp luật",
        items: [
          "Kiểm soát quyền lực là yêu cầu tất yếu để phòng chống sự tha hóa",
          "Xây dựng hệ thống pháp luật dân chủ, nghiêm minh, không có ngoại lệ",
          "Kết hợp kiểm tra từ trên xuống với giám sát từ dưới lên theo hệ thống",
        ],
      },
      {
        title: "Thứ ba: Huy động nhân dân tham gia giám sát",
        items: [
          "Đảng và Nhà nước phải dựa hẳn vào nhân dân, hoan nghênh quần chúng phê bình, đôn đốc",
          "Nhân dân có quyền giám sát, phê bình và thậm chí bãi miễn những cán bộ không xứng đáng",
          "Phát huy vai trò của nhân dân để củng cố niềm tin vào chế độ",
        ],
      },
      {
        title: "Thứ tư: Kỷ luật nghiêm minh và nêu gương",
        items: [
          "Kiên quyết xử lý những cán bộ thoái hóa, biến chất, không có 'vùng cấm'",
          "Cán bộ lãnh đạo, nhất là người đứng đầu, phải gương mẫu về đạo đức và lối sống",
          "'Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên truyền'",
        ],
      },
    ],
    image: `url(${intro5})`,
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
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans w-full overflow-x-hidden">
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <div className="w-full pl-4 md:pl-6 pr-0 py-10 lg:py-14 relative">
        {/* --- SIDEBAR MỚI (Card Style) --- */}
        <aside className="hidden lg:block lg:fixed lg:w-72 lg:left-6 lg:top-32 sticky z-40">
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

                <div className="flex flex-col">
                  {/* Ảnh ở trên cùng - Full width */}
                  <div className="w-full relative h-[400px] md:h-[500px] bg-stone-100">
                    <div
                      className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat"
                      style={{
                        backgroundImage: s.image,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30"></div>
                  </div>

                  {/* Nội dung ở dưới - Chia cột để không quá dài */}
                  <div className="p-8 md:p-10 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Cột trái: Description và Points */}
                      <div className="space-y-6">
                        {s.description && (
                          <blockquote className="border-l-4 border-red-500 pl-4 text-base md:text-lg italic text-stone-700 leading-relaxed bg-red-50/50 p-3 rounded-md">
                            {s.description}
                          </blockquote>
                        )}

                        <ul className="space-y-3">
                          {s.points.map((pt, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-base leading-relaxed text-stone-800"
                            >
                              <svg
                                className="w-5 h-5 text-red-500 flex-shrink-0 mt-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 12.58l-1.94 1.94-2.83-2.83-1.41 1.41L10 15.4l5.18-5.18-1.41-1.41-2.83 2.83zM10 2a8 8 0 100 16 8 8 0 000-16z" />
                              </svg>
                              <span className="font-medium">{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Cột phải: Bullet Groups */}
                      {s.bulletGroups && (
                        <div className="flex flex-col gap-5">
                          {s.bulletGroups.map((group, i) => (
                            <RevealOnScroll
                              key={i}
                              delay={i * 100}
                              className="w-full"
                            >
                              <div className="rounded-xl border border-stone-200 bg-stone-50/70 p-5 shadow-inner hover:bg-white hover:shadow-md transition-all duration-200">
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
