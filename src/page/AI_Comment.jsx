import React from "react";
import Header from "../components/Header"; // Giả định bạn đã có Header
import {
  Users,
  Crown,
  Cpu,
  Code2,
  PenTool,
  BookOpen,
  Box,
  Sparkles,
  Terminal,
  Palette,
} from "lucide-react";

export default function AIAppendix() {
  // Dữ liệu thành viên
  const members = [
    { name: "Ngô Phùng Gia Khánh", id: "SE182960", role: "Leader" },
    { name: "Vũ Minh Đức", id: "SE182942", role: "Member" },
    { name: "Huỳnh Quốc Khang", id: "SE182958", role: "Member" },
    { name: "Nguyễn Hoàng Thiên", id: "SE182297", role: "Member" },
    { name: "Trần Mạnh Phú", id: "SE180166", role: "Member" },
  ];

  // Dữ liệu Công cụ & AI
  const aiTools = [
    {
      title: "NotebookLM & Research",
      icon: <BookOpen className="w-6 h-6" />,
      toolName: "Notebook / Docs",
      description: "Soạn thảo và Quản lý nội dung",
      details: [
        "Soạn thảo kịch bản chi tiết cho dòng thời gian 1975-1981.",
        "Lọc ý chính, sắp xếp các sự kiện lịch sử theo trình tự logic.",
        "Lưu trữ và phân loại các nguồn tài liệu tham khảo.",
      ],
      color: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      title: "Trợ lý AI Tổng hợp",
      icon: <Sparkles className="w-6 h-6" />,
      toolName: "Google Gemini",
      description: "Sáng tạo và Kiểm chứng thông tin",
      details: [
        "Gợi ý cấu trúc website và các tính năng tương tác (Quiz, Flipbook).",
        "Tóm tắt các văn kiện Đại hội Đảng, nghị quyết trung ương ngắn gọn.",
        "Tìm kiếm và đối chiếu nguồn gốc hình ảnh, sự kiện lịch sử.",
        "Tạo prompt để sinh hình ảnh minh họa cho các phần thiếu tư liệu.",
      ],
      color: "bg-purple-100 text-purple-800 border-purple-200",
    },
    {
      title: "Lập trình & Code",
      icon: <Terminal className="w-6 h-6" />,
      toolName: "Copilot & Cursor",
      description: "Trợ lý Lập trình thông minh",
      details: [
        "Hỗ trợ viết code ReactJS nhanh chóng và tối ưu cấu trúc component.",
        "Debug lỗi logic trong các hàm xử lý Quiz và hiệu ứng chuyển trang.",
        "Gợi ý cách tổ chức CSS (Tailwind) để giao diện đồng nhất.",
        "Refactor code để tăng hiệu năng tải trang.",
      ],
      color: "bg-emerald-100 text-emerald-800 border-emerald-200",
    },
    {
      title: "Thiết kế 3D & Hiệu ứng",
      icon: <Box className="w-6 h-6" />,
      toolName: "Blender",
      description: "Tạo hình và Hiệu ứng 3D",
      details: [
        "Dựng mô hình cuốn sách 3D (Flipbook) chi tiết.",
        "Xử lý ánh sáng (Lighting) và vật liệu (Texture) để sách trông cổ kính.",
        "Render các asset cần thiết để tích hợp vào môi trường Web.",
      ],
      color: "bg-orange-100 text-orange-800 border-orange-200",
    },
  ];

  const techStack = [
    {
      name: "ReactJS",
      desc: "Xây dựng giao diện người dùng (UI) hiện đại, quản lý trạng thái (State) của ứng dụng.",
      icon: <Code2 className="w-8 h-8 text-[#61DAFB]" />,
    },
    {
      name: "Three.js / R3F",
      desc: "Thư viện cốt lõi để hiển thị mô hình 3D và thực hiện hiệu ứng lật trang (Flipbook) mượt mà trên trình duyệt.",
      icon: <Box className="w-8 h-8 text-stone-800" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f1e7] text-stone-900 font-sans">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* --- PHẦN 1: THÀNH VIÊN NHÓM --- */}
        <section className="animate-fadeIn">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-[#9b2f2f]" />
            <h2 className="text-3xl font-black text-[#9b2f2f] uppercase tracking-wide">
              Thành viên nhóm
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((mem, index) => {
              const isLeader = mem.role === "Leader";
              return (
                <div
                  key={index}
                  className={`relative p-6 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-[#fcf7ee] ${
                    isLeader
                      ? "border-[#9b2f2f] shadow-md ring-4 ring-[#9b2f2f]/10"
                      : "border-stone-300 hover:border-amber-400"
                  }`}
                >
                  {isLeader && (
                    <div className="absolute -top-3 -right-3 bg-[#9b2f2f] text-amber-100 p-2 rounded-full shadow-sm">
                      <Crown className="w-5 h-5" />
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                        isLeader
                          ? "bg-[#9b2f2f] text-amber-100"
                          : "bg-stone-200 text-stone-600"
                      }`}
                    >
                      {mem.name.charAt(0)}
                    </div>
                    <div>
                      <h3
                        className={`font-bold text-lg ${
                          isLeader ? "text-[#9b2f2f]" : "text-stone-800"
                        }`}
                      >
                        {mem.name}
                      </h3>
                      <p className="text-sm font-mono text-stone-500">
                        {mem.id}
                      </p>
                      {isLeader && (
                        <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded mt-1 inline-block">
                          TEAM LEADER
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="border-t-2 border-dashed border-stone-300"></div>

        {/* --- PHẦN 2: PHỤ LỤC AI & CÔNG NGHỆ --- */}
        <section className="animate-fadeIn delay-100">
          <div className="flex items-center gap-3 mb-2">
            <Cpu className="w-8 h-8 text-[#9b2f2f]" />
            <h2 className="text-3xl font-black text-[#9b2f2f] uppercase tracking-wide">
              Phụ lục AI & Công nghệ
            </h2>
          </div>
          <p className="text-stone-600 mb-8 max-w-2xl text-lg">
            Bảng tổng hợp các công cụ Trí tuệ nhân tạo và Kỹ thuật lập trình
            được sử dụng để xây dựng dự án.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {aiTools.map((tool, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow"
              >
                <div
                  className={`px-6 py-4 border-b border-stone-100 flex items-center justify-between ${tool.color}`}
                >
                  <div className="flex items-center gap-3">
                    {tool.icon}
                    <span className="font-bold text-lg">{tool.toolName}</span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider opacity-80">
                    AI Tool
                  </span>
                </div>
                <div className="p-6 flex-1">
                  <h4 className="font-bold text-stone-800 mb-3 text-lg">
                    {tool.description}
                  </h4>
                  <ul className="space-y-2">
                    {tool.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-stone-600"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-400 shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Phần Core Technology */}
          <div className="bg-[#2c1b12] text-amber-50 rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#9b2f2f] opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Palette className="w-6 h-6 text-amber-400" />
                Công nghệ cốt lõi (Core Tech Stack)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="mt-1 bg-white/10 p-2 rounded-lg h-fit">
                      {tech.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-amber-400 mb-2">
                        {tech.name}
                      </h4>
                      <p className="text-stone-300 text-sm leading-relaxed opacity-90">
                        {tech.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer nhỏ */}
      <footer className="text-center py-8 text-stone-500 text-sm">
        © 2025 History Project 1975-1981. Designed with AI Assistance.
      </footer>
    </div>
  );
}
