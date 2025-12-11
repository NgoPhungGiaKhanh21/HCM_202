import React from "react";
import { Link } from "react-router-dom";
// Đảm bảo đường dẫn import Header đúng với cấu trúc thư mục của bạn
import Header from "../components/Header";

// DỮ LIỆU 9 CÂU HỎI (Giữ nguyên)
const qaData = [
  {
    id: 1,
    question: "Sự kiện 25/4/1976?",
    answer:
      "Tổng tuyển cử bầu Quốc hội chung trên toàn lãnh thổ, tỉ lệ đi bầu đạt 98,77%.",
    color: "from-red-500 to-orange-500",
    icon: "🗳️",
  },
  {
    id: 2,
    question: "Tên nước từ 1976?",
    answer:
      "Quốc hội quyết định tên nước là CHXHCN Việt Nam, thủ đô Hà Nội, đổi tên Sài Gòn thành TP.HCM.",
    color: "from-yellow-400 to-amber-600",
    icon: "🇻🇳",
  },
  {
    id: 3,
    question: "Đại hội IV (12/1976)?",
    answer:
      "Đổi tên Đảng Lao động VN thành Đảng Cộng sản VN. Xác định đường lối tiến thẳng lên CNXH.",
    color: "from-blue-500 to-cyan-500",
    icon: "🚩",
  },
  {
    id: 4,
    question: "Hội nghị Hiệp thương 1975?",
    answer:
      "Họp tại Sài Gòn (11/1975), nhất trí hoàn toàn việc tổ chức tổng tuyển cử thống nhất đất nước.",
    color: "from-emerald-400 to-green-600",
    icon: "🤝",
  },
  {
    id: 5,
    question: "Chiến tranh Tây Nam?",
    answer:
      "Phản công quân Pol Pot xâm lược và giúp Campuchia giải phóng Phnom Penh (7/1/1979).",
    color: "from-purple-500 to-pink-500",
    icon: "🛡️",
  },
  {
    id: 6,
    question: "Sự kiện 17/2/1979?",
    answer:
      "Trung Quốc huy động 60 vạn quân tấn công biên giới phía Bắc. Quân dân ta kiên cường chiến đấu.",
    color: "from-rose-500 to-red-700",
    icon: "🔥",
  },
  {
    id: 7,
    question: "Bước đột phá 'Bung ra'?",
    answer:
      "Hội nghị TW 6 (8/1979) chủ trương 'làm cho sản xuất bung ra' để khắc phục trì trệ kinh tế.",
    color: "from-indigo-500 to-blue-700",
    icon: "🚀",
  },
  {
    id: 8,
    question: "Chỉ thị 100 (1/1981)?",
    answer:
      "Khoán sản phẩm đến nhóm và người lao động trong nông nghiệp, giúp sản lượng lương thực tăng vọt.",
    color: "from-teal-400 to-emerald-600",
    icon: "🌾",
  },
  {
    id: 9,
    question: "Quyết định 25-CP?",
    answer:
      "Chính phủ ban hành (1/1981) trao quyền chủ động kinh doanh và tự chủ tài chính cho xí nghiệp quốc doanh.",
    color: "from-orange-400 to-red-500",
    icon: "🏭",
  },
];

export default function QAFlippingCards() {
  return (
    // BỎ padding p-6 md:p-12 ở đây để Header tràn viền
    <div className="min-h-screen bg-[#fffcf5] dark:bg-slate-900 font-sans transition-colors duration-300 relative overflow-hidden">
      {/* --- HEADER --- */}
      {/* Đặt z-50 để Header nằm trên các hiệu ứng nền bay bay */}
      <div className="relative z-50">
        <Header />
      </div>

      {/* =========================================
          PHẦN HIỆU ỨNG NỀN (NHẢY NHẢY & TƯỢNG TRƯNG)
         ========================================= */}

      {/* 1. Họa tiết chấm bi mờ */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#a40000 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* 2. Dấu hỏi chấm to đùng nhảy bên trái */}
      <div className="absolute top-20 -left-10 md:left-10 animate-bounce duration-[3000ms] z-0 pointer-events-none opacity-80">
        <span className="text-[10rem] font-black text-red-200 dark:text-red-900/20 rotate-[-15deg] block">
          ?
        </span>
      </div>

      {/* 3. Ngôi sao vàng nhảy bên phải */}
      <div className="absolute top-40 -right-10 md:right-10 animate-bounce duration-[4000ms] delay-700 z-0 pointer-events-none opacity-80">
        <span className="text-[8rem] text-yellow-300 dark:text-yellow-600/20 rotate-[15deg] block drop-shadow-md">
          ★
        </span>
      </div>

      {/* 4. Bóng tròn màu cam trôi lơ lửng ở dưới */}
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse dark:bg-orange-800 pointer-events-none"></div>

      {/* 5. Biểu tượng cuốn sách mờ mờ */}
      <div className="absolute bottom-10 right-10 opacity-10 rotate-12 pointer-events-none">
        <span className="text-9xl">📖</span>
      </div>

      {/* =========================================
          NỘI DUNG CHÍNH (Z-INDEX CAO HƠN)
         ========================================= */}
      {/* THÊM padding p-6 md:p-12 vào đây để nội dung cách lề đẹp */}
      <div className="relative z-10 max-w-7xl mx-auto p-6 md:p-12">
        {/* Header Title */}
        <div className="text-center mb-12 mt-4">
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500 mb-4 drop-shadow-sm uppercase inline-block relative">
            Q & A
            <span className="absolute -top-2 -right-6 text-5xl text-red-500 animate-bounce delay-100">
              !
            </span>
          </h1>
        </div>

        {/* Grid 9 ô */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qaData.map((item) => (
            <div key={item.id} className="group h-64 w-full perspective-1000">
              {/* Inner Container */}
              <div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180 shadow-xl rounded-3xl cursor-pointer hover:shadow-2xl hover:shadow-yellow-500/20">
                {/* --- MẶT TRƯỚC --- */}
                <div
                  className={`absolute inset-0 backface-hidden rounded-3xl p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br ${item.color} text-white border-2 border-white/20`}
                >
                  <div className="text-5xl mb-4 bg-white/20 p-4 rounded-full backdrop-blur-sm shadow-inner transform group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wide drop-shadow-md">
                    {item.question}
                  </h3>
                  <span className="mt-4 text-xs font-bold bg-white/20 px-3 py-1 rounded-full animate-pulse">
                    Lật thẻ ➜
                  </span>
                </div>

                {/* --- MẶT SAU --- */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl p-6 flex flex-col items-center justify-center text-center bg-white dark:bg-slate-800 border-4 border-double border-gray-100 dark:border-slate-600 overflow-hidden">
                  {/* Họa tiết trang trí mặt sau */}
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-10 rounded-bl-full pointer-events-none`}
                  ></div>
                  <div
                    className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr ${item.color} opacity-10 rounded-tr-full pointer-events-none`}
                  ></div>

                  <p className="text-gray-800 dark:text-gray-100 font-semibold text-lg leading-relaxed z-10">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nút Home Nổi (Vẫn giữ lại nếu bạn thích, hoặc có thể bỏ vì Header đã có nút Home) */}
      <div className="fixed bottom-8 right-8 z-50 animate-bounce hover:animate-none">
        <Link
          to="/"
          className="flex items-center justify-center w-14 h-14 bg-[#a40000] text-white rounded-full shadow-2xl hover:bg-red-700 hover:scale-110 transition-all border-2 border-yellow-400"
          title="Về trang chủ"
        >
          🏠
        </Link>
      </div>

      {/* Styles CSS cho 3D Flip */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
}
