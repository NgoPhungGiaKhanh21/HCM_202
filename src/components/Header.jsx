import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {

  // Cấu hình Menu
  const navLinks = [
    { to: "/", label: "Trang chủ" },
    { to: "/introduction", label: "Giới thiệu" },
    { to: "/exhibition", label: "Triển lãm" },
    { to: "/documents", label: "Tư liệu" },
    { to: "/game", label: "Câu nói lịch sử" },
    { to: "/quiz", label: "Quiz" },
    { to: "/phu-luc-ai", label: "Phụ lục AI" },
  ];

  return (
    <header className="bg-[#f5efe2] dark:bg-slate-900 shadow-md border-b border-black/10 dark:border-slate-700 transition-colors duration-300 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-nowrap items-center gap-6 p-3 md:p-4">

        {/* --- LOGO + TITLE --- */}
        <Link
          to="/"
          className="flex items-center gap-4 no-underline text-black dark:text-white group shrink-0 max-w-[300px] md:max-w-md"
          aria-label="Trang chủ"
        >
          <svg
            className="w-12 h-12 md:w-16 md:h-16 shrink-0 transform transition-transform duration-200 ease-out group-hover:scale-105 group-hover:-rotate-3"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <circle cx="50" cy="50" r="45" fill="#a40000" stroke="#ffd54f" strokeWidth="2" />
            <g transform="translate(0, 5)">
              <path d="M50 20 C65 45 65 60 65 60 C65 75 50 85 50 85 C50 85 35 75 35 60 C35 45 50 20 50 20 Z" fill="#ffd54f" />
              <path d="M35 60 C35 45 20 35 20 35 C15 55 25 75 30 82 C35 80 35 80 35 80" fill="#ffd54f" opacity="0.9" />
              <path d="M65 60 C65 45 80 35 80 35 C85 55 75 75 70 82 C65 80 65 80 65 80" fill="#ffd54f" opacity="0.9" />
              <path d="M30 80 Q50 90 70 80 L50 85 Z" fill="#d69e2e" />
            </g>
          </svg>

          <div className="leading-tight">
            {/* Câu trích dẫn chính */}
            <div className="text-xs md:text-base font-black italic transition-colors duration-200 group-hover:text-[#a40000] dark:group-hover:text-[#ff4d4d] leading-snug">
              “... Tham nhũng là từ trong Đảng mà ra....”
            </div>

            {/* Vế câu hỏi/Thách thức */}
            <div className="text-[10px] md:text-xs mt-1 text-gray-700 dark:text-gray-400 font-medium uppercase tracking-wider transition-colors duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-200">
              Thách thức nào cho việc xây dựng Đảng &amp; Nhà nước hiện nay?
            </div>
          </div>
        </Link>

        {/* --- NAV --- */}
        <nav aria-label="Chính" className="ml-6 hidden lg:block shrink-0">
          <ul className="flex gap-4 font-semibold">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `
                    px-3 py-1 rounded-lg text-sm xl:text-base
                    transition-all duration-200
                    ${isActive
                      ? "bg-[#a40000] text-[#ffd54f] shadow-md"
                      : "text-gray-800 dark:text-gray-200 hover:text-[#a40000] dark:hover:text-[#ffd54f]"
                    }
                    `
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* --- NOTEBOOK --- */}
        <div className="ml-auto">
          <NavLink
            to="/book"
            className={({ isActive }) =>
              `
              inline-flex flex-col items-center justify-center
              px-6 py-2 h-12 rounded-xl font-extrabold uppercase tracking-wide
              border-2 shadow-xl transition-all duration-200
              ${isActive
                ? "bg-[#7f0000] text-[#ffd54f] border-[#ffd54f]"
                : "bg-[#a40000] text-[#ffd54f] border-[#ffd54f]/70 hover:bg-[#7f0000]"
              }
              `
            }
            aria-label="Mở Notebook"
          >
            <span className="text-sm">Notebook</span>
          </NavLink>
        </div>

      </div>
    </header>
  );
}
