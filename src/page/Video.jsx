import React from "react";
// Nếu muốn nút quay lại
import { Link } from "react-router-dom";

export default function VideoPage() {
  return (
    <div className="min-h-screen bg-[#f5efe2] dark:bg-slate-900 flex flex-col items-center justify-center p-4">
      {/* Container giới hạn độ rộng */}
      <div className="max-w-4xl w-full bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-slate-700">
        {/* Tiêu đề */}
        <div className="p-4 border-b border-gray-200 dark:border-slate-700 flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#a40000] dark:text-[#ffd54f]">
            Tư liệu Phim: Xây dựng & Bảo vệ Tổ quốc
          </h1>
          {/* Nút đóng/quay lại */}
          <Link
            to="/"
            className="text-gray-500 hover:text-red-600 font-bold px-2"
          >
            ✕ Đóng
          </Link>
        </div>

        {/* Trình phát Video */}
        <div className="relative aspect-video bg-black">
          <video
            className="w-full h-full object-contain"
            controls
            autoPlay
            // src sẽ trỏ thẳng vào thư mục public
            src="/audio/Việt_Nam_1975-1981.mp4"
          >
            Trình duyệt của bạn không hỗ trợ thẻ video.
          </video>
        </div>

        {/* Mô tả video (nếu cần) */}
        <div className="p-6 text-gray-700 dark:text-gray-300">
          <p>Đây là đoạn phim tư liệu về giai đoạn 1975 - 1981...</p>
        </div>
      </div>
    </div>
  );
}
