// ThankYouPage.js
import React from "react";
import { Link } from "react-router-dom";

export default function ThankYouPage() {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-[#fdfbf7] dark:bg-slate-900 relative overflow-hidden transition-colors duration-300 px-4">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse dark:opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000 dark:opacity-10"></div>

      {/* Main Content Card */}
      <div className="relative z-10 bg-white dark:bg-slate-800/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 dark:border-slate-700 max-w-2xl w-full text-center">
        {/* Animated Icon */}
        <div className="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-50 dark:bg-red-900/30 text-6xl shadow-inner animate-bounce">
          💖
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-800 dark:text-white">
          Cảm ơn bạn!
        </h1>

        {/* Subtitle / Description */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Cảm ơn bạn đã dành thời gian tìm hiểu về giai đoạn lịch sử
          <br className="hidden md:block" />
          <span className="font-bold text-red-600 dark:text-red-400">
            "Xây dựng CNXH & Bảo vệ Tổ quốc"
          </span>
          .
          <br />
          Hy vọng bạn đã có những trải nghiệm kiến thức thú vị.
        </p>
      </div>
    </div>
  );
}
