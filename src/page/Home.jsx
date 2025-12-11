import React from "react";
import Header from "../components/Header";

import { useState } from "react";
import Carousel from "./Carousel";
import poster1 from "../../image/carousel1.png";
import poster2 from "../../image/carousel1.png";
import poster3 from "../../image/carousel1.png";
import poster4 from "../../image/carousel1.png";
import {
  ArrowRightIcon,
  FlagIcon,
  BuildingLibraryIcon,
  ShieldCheckIcon,
  SparklesIcon,
  MapPinIcon,
  FlagIcon as FlagIconTwo,
  FireIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

const timelineEvents = [
  {
    year: "1975",
    title: "Thống nhất đất nước",
    description:
      "Ngày 30/4/1975, Đại thắng mùa Xuân. Việt Nam độc lập, thống nhất, bước vào kỷ nguyên mới",
    details: [
      "Quân Giải phóng chiếm Sài Gòn ngày 30/4/1975",
      "Tập đoàn Pôn Pốt thi hành chính sách diệt chủng ở Campuchia",
      "Hội nghị Ban Chấp hành TW Đảng khoá III (tháng 8/1975) chủ trương quá độ lên XHCN",
      "Ủy ban Thường vụ Quốc hội họp phiên đặc biệt (27/10/1975) về thống nhất",
      "Hội nghị Hiệp thương chính trị (15-21/11/1975) giữa miền Bắc và miền Nam tại Sài Gòn",
    ],
    icon: MapPinIcon,
  },
  {
    year: "1976",
    title: "Xây dựng Đảng và Nhà nước mới",
    description: "Cuộc Tổng tuyển cử, đổi tên nước, Đại hội IV của Đảng",
    details: [
      "Cuộc Tổng tuyển cử bầu Quốc hội (25/4/1976) với tỉ lệ cử tri 98,77%",
      "Kỳ họp thứ nhất Quốc hội thống nhất (24/6-3/7/1976): đặt tên nước Cộng hòa XHCN Việt Nam",
      "Đổi tên Sài Gòn thành Thành phố Hồ Chí Minh",
      "Đặt Hà Nội làm Thủ đô của nước Việt Nam thống nhất",
      "Đại hội IV Đảng (14-20/12/1976): quyết định đổi tên thành Đảng Cộng sản Việt Nam",
    ],
    icon: FlagIconTwo,
  },
  {
    year: "1977-1979",
    title: "Chiến tranh biên giới, Bảo vệ Tổ quốc",
    description:
      "Xung đột với Trung Quốc và Campuchia, giải phóng Campuchia khỏi chế độ Pol Pot",
    details: [
      "Năm 1978: Trung Quốc tuyên bố rút chuyên gia, cắt viện trợ, lấn chiếm biên giới",
      "Cuối 12/1978: Chính quyền Pôn Pốt tấn công xâm lược trên biên giới Tây Nam",
      "7/1/1979: Quân Việt Nam phối hợp giải phóng Phnôm Pênh, đánh đổ chế độ Pol Pot",
      "17/2/1979: Trung Quốc huy động hơn 60 vạn quân tấn công biên giới phía Bắc",
      "18/2/1979: Việt Nam - Campuchia ký Hiệp ước hòa bình, hữu nghị và hợp tác",
    ],
    icon: FireIcon,
  },
  {
    year: "1980-1981",
    title: "Đổi mới kinh tế, Phục hồi phát triển",
    description: "Cải cách kinh tế, phục hồi sản xuất, hoàn thiện Hiến pháp",
    details: [
      "8/1979: Hội nghị TW 6 - bước đột phá đầu tiên đổi mới kinh tế, cho 'sản xuất bung ra'",
      "10/1979: Quyết định về tận dụng đất đai nông nghiệp, xóa bỏ các trạm kiểm soát",
      "9/1980: Ban Chấp hành TW chỉ đạo thảo luận Dự thảo Hiến pháp mới",
      "1/1981: Ban Bí thư ban hành Chỉ thị 100-CT/TW về khoán sản phẩm",
      "1/1981: Chính phủ ban hành Quyết định 25-CP, 26-CP về quyền chủ động sản xuất kinh doanh",
    ],
    icon: StarIcon,
  },
];

const contentSections = [
  {
    icon: BuildingLibraryIcon,
    title: "Công nghiệp hóa",
    description:
      "Xây dựng cơ sở hạ tầng, khu công nghiệp và năng lượng cho giai đoạn mới",
    color: "bg-blue-50",
    accentColor: "text-blue-600",
    borderColor: "border-blue-300",
  },
  {
    icon: FlagIcon,
    title: "Hợp tác hóa nông nghiệp",
    description: "Cải tạo nông nghiệp, nâng năng suất và bảo đảm lương thực",
    color: "bg-green-50",
    accentColor: "text-green-600",
    borderColor: "border-green-300",
  },
  {
    icon: ShieldCheckIcon,
    title: "Quốc phòng - An ninh",
    description: "Xây dựng sức mạnh quân sự, bảo vệ biên giới lãnh thổ",
    color: "bg-red-50",
    accentColor: "text-red-600",
    borderColor: "border-red-300",
  },
  {
    icon: SparklesIcon,
    title: "Giáo dục - Văn hóa",
    description: "Phát triển giáo dục, khoa học công nghệ cho nhân dân",
    color: "bg-purple-50",
    accentColor: "text-purple-600",
    borderColor: "border-purple-300",
  },
];

const keyHighlights = [
  {
    title: "Thống nhất 1975-1976",
    points: [
      "Hội nghị TƯ 24 (8/1975) chủ trương hoàn thành thống nhất, đưa cả nước tiến lên CNXH",
      "Hiệp thương chính trị Bắc - Nam (11/1975) thống nhất tổng tuyển cử chung trên toàn quốc",
      "Tổng tuyển cử 25/4/1976 với 98,77% cử tri tham gia",
    ],
  },
  {
    title: "Đại hội IV (12/1976)",
    points: [
      "Đổi tên Đảng Lao động Việt Nam thành Đảng Cộng sản Việt Nam",
      "Đường lối ba cuộc cách mạng: quan hệ sản xuất, khoa học-kỹ thuật then chốt, tư tưởng-văn hóa",
      "Kế hoạch 5 năm 1976-1980: bảo đảm đời sống và tích lũy cơ sở vật chất",
    ],
  },
  {
    title: "Đột phá kinh tế 1979-1981",
    points: [
      "Hội nghị TƯ 6 (8/1979) chủ trương 'sản xuất bung ra'",
      "Chỉ thị 100-CT/TW (1/1981) khoán sản phẩm, sản lượng lương thực tăng rõ",
      "Quyết định 25-CP (1/1981) mở rộng quyền tự chủ cho xí nghiệp quốc doanh",
    ],
  },
  {
    title: "Bảo vệ Tổ quốc",
    points: [
      "Biên giới Tây Nam: đánh bại Pol Pot, giải phóng Phnom Penh 7/1/1979",
      "Biên giới phía Bắc: đẩy lùi cuộc tấn công 17/2/1979, Trung Quốc rút 5/3",
      "Giữ vững an ninh nội địa, làm thất bại FULRO và các lực lượng vũ trang lưu vong",
    ],
  },
];

export default function Home() {
  const [activeTimeline, setActiveTimeline] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-white">
      {/* Hero Section */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <section className="relative w-full min-h-[700px] md:min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* 1. The Video Element */}
        <video
          // The path to your video file, accessible via the /audio folder
          src="/audio/VN2.mp4"
          // Auto-plays the video as soon as the page loads
          autoPlay
          // Loops the video continuously
          loop
          // Mutes the audio (required for most browsers to allow autoPlay)
          muted
          // Prevents the video from showing controls
          playsInline
          // CSS class to ensure it covers the background
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        {/* Dark red overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-red-900/80 via-red-800/75 to-red-900/80" /> */}

        {/* Content container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="text-center mb-16">
            <div className="inline-block mb-8 animate-pulse">
              <span className="px-6 py-3 border-2 border-yellow-500 text-yellow-400 rounded-full text-base font-bold tracking-wider">
                1975 - 1981
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
              Xây dựng Chủ nghĩa Xã hội
            </h1>

            <h2 className="text-5xl md:text-6xl font-black text-yellow-400 mb-8 leading-tight">
              Bảo vệ Tổ quốc
            </h2>

            <p className="text-lg md:text-xl text-white mb-6 max-w-3xl mx-auto leading-relaxed">
              Giai đoạn quá độ lên CNXH: hoàn thành thống nhất nhà nước, triển
              khai đường lối Đại hội IV và kiên quyết bảo vệ biên giới trong bối
              cảnh hậu chiến nhiều khó khăn.
            </p>

            <p className="text-base md:text-lg text-white mb-12 max-w-2xl mx-auto">
              Tinh thần: đoàn kết, xây dựng, đổi mới tư duy kinh tế và giữ vững
              chủ quyền lãnh thổ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTimeline(index)}
                  className={`p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                    activeTimeline === index
                      ? "border-yellow-500 bg-red-700/60 text-white shadow-2xl"
                      : "border-red-700/50 bg-red-900/50 text-gray-100 hover:border-yellow-400/50"
                  }`}
                >
                  <div className="flex justify-center mb-4">
                    <Icon
                      className={`h-8 w-8 ${
                        activeTimeline === index
                          ? "text-yellow-400"
                          : "text-yellow-300"
                      }`}
                    />
                  </div>
                  <div className="text-2xl font-black mb-2">{event.year}</div>
                  <div className="font-bold text-sm mb-2">{event.title}</div>
                  <div className="text-xs opacity-80 leading-relaxed">
                    {event.description}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400" />
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-slate-200 p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Các Cột Mốc Lịch Sử Chi Tiết
          </h2>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 border-l-4 border-red-600">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-4xl font-black text-red-600">
                {timelineEvents[activeTimeline].year}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {timelineEvents[activeTimeline].title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {timelineEvents[activeTimeline].description}
                </p>
              </div>
            </div>

            {/* Detailed timeline events */}
            <div className="border-t-2 border-slate-200 pt-6 mt-6">
              <h4 className="text-lg font-bold text-slate-900 mb-4">
                Sự kiện chính trong giai đoạn:
              </h4>
              <ul className="space-y-3">
                {timelineEvents[activeTimeline].details.map((detail, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Key Highlights Section */}
        <div className="bg-white rounded-2xl shadow-2xl border-2 border-amber-200 p-8 md:p-12 mb-16">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              Ý chính giai đoạn 1975 - 1981
            </h3>
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold">
              Quá độ lên CNXH & bảo vệ Tổ quốc
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyHighlights.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-black">
                    {idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h4>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5">•</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Hình Ảnh Lịch Sử
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Carousel
              autoplay
              autoplaySpeed={5000}
              dotPosition="bottom"
              effect="fade"
            >
              {[poster1, poster2, poster3, poster4].map((img, index) => (
                <div key={index} className="relative group bg-black">
                  <img
                    src={
                      img ||
                      "/placeholder.svg?height=600&width=1200&query=Vietnam%20history"
                    }
                    alt={`Poster ${index + 1}`}
                    className="w-full h-96 md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-2xl font-bold mb-2">
                      Năm {1975 + index}
                    </div>
                    <p className="text-sm opacity-90">
                      Giai đoạn xây dựng chủ nghĩa xã hội
                    </p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Content Sections Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Các Lĩnh Vực Phát Triển
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className={`${section.color} rounded-xl p-8 border-2 ${section.borderColor} hover:shadow-lg transition-all duration-300 group cursor-pointer`}
                >
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`h-12 w-12 ${section.accentColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {section.title}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {section.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">
                    Tìm hiểu thêm
                    <ArrowRightIcon className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <BuildingLibraryIcon className="h-8 w-8" />
              Xây Dựng Kinh Tế
            </h3>
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-3">
                <span className="text-2xl mt-0">✓</span>
                <span>Công nghiệp hóa bước đầu toàn quốc</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl mt-0">✓</span>
                <span>Nông nghiệp hóa theo hình thức xã hội chủ nghĩa</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl mt-0">✓</span>
                <span>Phát triển cơ sở hạ tầng và giao thông</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl mt-0">✓</span>
                <span>Cải tạo xã hội chủ nghĩa ở miền Nam</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-600 to-red-500 rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <ShieldCheckIcon className="h-8 w-8" />
              Bảo Vệ Tổ Quốc
            </h3>
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-3">
                <span className="text-2xl mt-0">✓</span>
                <span>Chiến tranh biên giới Tây Nam 1977-1979</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl mt-0">✓</span>
                <span>Chiến tranh biên giới phía Bắc 1979</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl mt-0">✓</span>
                <span>Bảo vệ chủ quyền lãnh thổ quốc gia</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl mt-0">✓</span>
                <span>Tăng cường lực lượng vũ trang nhân dân</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-center text-white shadow-2xl border-l-4 border-amber-500">
          <p className="text-2xl md:text-3xl font-bold mb-6 italic leading-relaxed">
            "Trong bất kỳ hoàn cảnh nào, chúng ta cũng kiên quyết giữ vững độc
            lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Tổ quốc"
          </p>
          <p className="text-amber-300 font-semibold">
            — Trích Lịch sử Đảng Cộng sản Việt Nam
          </p>
        </div>
      </section>
    </div>
  );
}
