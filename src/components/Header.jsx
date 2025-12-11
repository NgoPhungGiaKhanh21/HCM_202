import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="bg-[#f5efe2] dark:bg-slate-900 shadow-md border-b border-black/10 dark:border-slate-700 transition-colors duration-300 relative z-50">
      {/* Thêm flex-nowrap vào container cha để tránh bị vỡ layout khi co màn hình */}
      <div className="max-w-6xl mx-auto flex flex-nowrap items-center gap-6 p-3 md:p-4">
        {/* --- LOGO + TITLE --- */}
        <Link
          to="/"
          className="flex items-center gap-3 no-underline text-black dark:text-white group shrink-0"
          aria-label="Trang chủ"
        >
          <svg
            className="w-14 h-14 shrink-0 transform transition-transform duration-200 ease-out group-hover:scale-105 group-hover:-rotate-3"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <circle cx="50" cy="50" r="45" fill="#a40000" />
            <polygon
              points="50,18 60,46 90,46 65,63 74,90 50,73 26,90 35,63 10,46 40,46"
              fill="#ffd54f"
            />
          </svg>

          <div className="leading-tight whitespace-nowrap">
            <div className="text-sm md:text-lg font-extrabold transition-colors duration-200 group-hover:text-[#a40000] dark:group-hover:text-[#ff4d4d]">
              Xây dựng CNXH &amp; Bảo vệ Tổ quốc
            </div>
            <div className="text-xs text-gray-700 dark:text-gray-400 transition-colors duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-200">
              1975 – 1981
            </div>
          </div>
        </Link>

        {/* --- NAV --- */}
        <nav aria-label="Chính" className="ml-10 hidden md:block shrink-0">
          <ul className="flex gap-6 list-none m-0 p-0 font-semibold">
            {[
              ["/", "Trang chủ"],
              ["/introduction", "Giới thiệu"],
              ["/timeline", "Mốc thời gian"],
              ["/game", "Game"],
              ["/quiz", "Quiz"],
              ["/phu-luc-ai", "Phụ lục AI"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-gray-800 dark:text-gray-200 transition-colors transition-transform duration-150 ease-out hover:text-[#a40000] dark:hover:text-[#ffd54f] hover:scale-105 whitespace-nowrap"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* --- NOTEBOOK GROUP (Đã sửa lỗi xuống dòng) --- */}
        {/* Thêm 'flex-nowrap' và bỏ 'gap' để 2 nút dính liền nhau */}
        <div
          className="ml-auto relative flex items-center flex-nowrap"
          ref={dropdownRef}
        >
          {/* Nút Notebook chính */}
          <Link
            to="/book"
            aria-label="Mở Notebook"
            // Sửa: rounded-r-none (vuông góc phải), border-r-0 (bỏ viền phải để ghép nút kia vào)
            className="inline-flex flex-col items-center justify-center bg-[#a40000] text-[#ffd54f] px-4 py-2 rounded-l-xl rounded-r-none shadow-xl dark:shadow-red-900/40 border-2 border-r-0 border-[#ffd54f]/70 hover:bg-[#7f0000] transition-all duration-200 leading-tight no-underline font-extrabold h-12 whitespace-nowrap"
          >
            <span className="text-sm tracking-wide uppercase">Notebook</span>
          </Link>

          {/* Nút Mũi tên Dropdown */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            // Sửa: rounded-l-none (vuông góc trái)
            className={`h-12 w-8 flex items-center justify-center bg-[#a40000] text-[#ffd54f] rounded-r-xl rounded-l-none shadow-xl dark:shadow-red-900/40 border-2 border-[#ffd54f]/70 hover:bg-[#7f0000] transition-all duration-200 outline-none ${
              isDropdownOpen ? "bg-[#7f0000]" : ""
            }`}
            aria-label="Mở menu mở rộng"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className={`w-4 h-4 transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>

          {/* --- DROPDOWN MENU --- */}
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-gray-100 dark:border-slate-700 overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top-right z-50">
              <ul className="py-1">
                <li>
                  <Link
                    to="/video"
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-[#a40000] dark:hover:text-[#ffd54f] transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span>🎥</span> Video
                  </Link>
                </li>
                <li>
                  <Link
                    to="/qa"
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-[#a40000] dark:hover:text-[#ffd54f] transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span>❓</span> Q&A
                  </Link>
                </li>
                <div className="h-px bg-gray-200 dark:bg-slate-700 my-1 mx-2" />
                <li>
                  <Link
                    to="/thank-you"
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-[#a40000] dark:hover:text-[#ffd54f] transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span>💖</span> Thank you
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
