import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#f5efe2] shadow-md border-b border-black/10">
      <div className="max-w-6xl mx-auto flex items-center gap-6 p-3 md:p-4">
        {/* LOGO + TITLE */}
        <Link
          to="/"
          className="flex items-center gap-3 no-underline text-black group"
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
            <div className="text-sm md:text-lg font-extrabold transition-colors duration-200 group-hover:text-[#a40000]">
              Xây dựng CNXH &amp; Bảo vệ Tổ quốc
            </div>
            <div className="text-xs text-gray-700 transition-colors duration-200 group-hover:text-gray-900">
              1975 – 1981
            </div>
          </div>
        </Link>

        {/* NAV */}
        <nav aria-label="Chính" className="ml-10">
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
                  className="text-yellow-600 dark:text-gray-100 transition-colors transition-transform duration-150 ease-out hover:text-[#a40000] hover:scale-105"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* NOTEBOOK */}
        <div className="ml-auto">
          <Link
            to="/book"
            aria-label="Mở Notebook"
            className="inline-flex flex-col items-center justify-center bg-[#a40000] text-[#ffd54f] px-6 py-2 rounded-xl shadow-xl border-2 border-[#ffd54f]/70 hover:bg-[#7f0000] hover:scale-105 transform transition-all duration-200 leading-tight no-underline font-extrabold focus:outline-none focus:ring-4 focus:ring-[#a4000055]"
          >
            <span className="text-sm tracking-wide uppercase">Notebook</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
