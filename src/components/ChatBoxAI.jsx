"use client";

import { MessageCircle, Send, X } from "lucide-react";
import { useState, useRef, useEffect } from "react"; // ⬅️ Đảm bảo có useRef và useEffect

const intents = [
  // Giai đoạn 1975-1981
  {
    patterns: ["1975-1981", "giai đoạn 1975", "thời kỳ 1975", "sau thống nhất"],
    response:
      "Giai đoạn 1975–1981 là thời kỳ Đảng Cộng sản Việt Nam lãnh đạo cả nước quá độ lên chủ nghĩa xã hội (CNXH), đặc trưng bởi:\n• Hoàn thành thống nhất đất nước về mặt nhà nước (1975–1976)\n• Đại hội IV và thực hiện đường lối xây dựng CNXH (1976–1981)\n• Bảo vệ Tổ quốc (chiến tranh biên giới Tây Nam và phía Bắc)",
  },

  // Thống nhất đất nước
  {
    patterns: [
      "thống nhất đất nước",
      "thống nhất 1976",
      "thống nhất nhà nước",
      "cộng hòa xã hội chủ nghĩa việt nam",
    ],
    response:
      "Hoàn thành thống nhất đất nước (1975-1976):\n• Hội nghị lần thứ 24 Ban Chấp hành TW Đảng khóa III (8/1975): Chủ trương hoàn thành thống nhất nước nhà, đưa cả nước tiến nhanh, tiến mạnh, tiến vững chắc lên CNXH\n• 25/4/1976: Tổng tuyển cử với 98,77% cử tri đi bầu\n• 24/6-3/7/1976: Kỳ họp thứ nhất Quốc hội quyết định:\n  - Đặt tên nước: Cộng hòa Xã hội chủ nghĩa Việt Nam\n  - Thủ đô: Hà Nội\n  - Đổi tên Sài Gòn thành TP Hồ Chí Minh",
  },

  // Đại hội IV
  {
    patterns: ["đại hội iv", "đại hội 4", "đại hội lần thứ 4", "1976"],
    response:
      "Đại hội đại biểu toàn quốc lần thứ IV (12/1976):\n• Đổi tên: Đảng Lao động Việt Nam → Đảng Cộng sản Việt Nam\n• Đặc điểm lớn nhất: Nước ta tiến thẳng lên CNXH từ nền kinh tế sản xuất nhỏ, bỏ qua giai đoạn phát triển TBCN\n• Đường lối chung: Nắm vững chuyên chính vô sản, tiến hành đồng thời 3 cuộc cách mạng (quan hệ sản xuất, khoa học-kỹ thuật, tư tưởng-văn hóa)\n• Kế hoạch 5 năm (1976-1980): Bảo đảm đời sống nhân dân và tích lũy xây dựng cơ sở vật chất-kỹ thuật CNXH",
  },

  // Ba cuộc cách mạng
  {
    patterns: ["ba cuộc cách mạng", "3 cuộc cách mạng", "cách mạng then chốt"],
    response:
      "Ba cuộc cách mạng đồng thời:\n1. Cách mạng quan hệ sản xuất\n2. Cách mạng khoa học-kỹ thuật (then chốt)\n3. Cách mạng tư tưởng-văn hóa",
  },

  // Khoán 100
  {
    patterns: ["khoán 100", "chỉ thị 100", "khoán sản phẩm", "1981"],
    response:
      "Chỉ thị số 100-CT/TW (1/1981) - 'Khoán 100':\n• Nội dung: Khoán sản phẩm đến nhóm và người lao động trong hợp tác xã nông nghiệp\n• Kết quả:\n  - Sản lượng lương thực tăng từ 13,4 triệu tấn/năm (1976-1980) lên 17 triệu tấn/năm (1981-1985)\n  - Nông dân ủng hộ nhiệt liệt\n  - Là bước đột phá đầu tiên trong cải cách kinh tế",
  },

  // Quyết định 25
  {
    patterns: [
      "quyết định 25",
      "25-cp",
      "tự chủ doanh nghiệp",
      "quyết định 25-cp",
    ],
    response:
      "Quyết định số 25-CP (1/1981):\n• Nội dung: Mở rộng quyền chủ động sản xuất kinh doanh và tự chủ tài chính cho xí nghiệp quốc doanh\n• Ý nghĩa: Tạo động lực thúc đẩy sản xuất công nghiệp",
  },

  // Khó khăn kinh tế
  {
    patterns: ["khó khăn kinh tế", "khủng hoảng", "1979", "lạm phát"],
    response:
      "Khó khăn kinh tế giai đoạn 1976-1979:\n• Nguyên nhân:\n  - Chủ trương nóng vội, chủ quan duy ý chí\n  - Ưu tiên phát triển công nghiệp nặng vượt khả năng\n  - Đặt chỉ tiêu không thực tế\n• Hậu quả:\n  - Lưu thông, phân phối rối ren\n  - Giá cả tăng vọt\n  - Nhập khẩu gấp 4-5 lần xuất khẩu\n  - Đời sống nhân dân khó khăn",
  },

  // Hội nghị Trung ương 6
  {
    patterns: ["hội nghị trung ương 6", "tw 6", "bung ra", "8/1979"],
    response:
      "Hội nghị Trung ương 6 (8/1979):\n• Là bước đột phá đầu tiên\n• Chủ trương: Khắc phục khuyết điểm trong quản lý kinh tế để 'sản xuất bung ra'\n• Ý nghĩa: Bắt đầu điều chỉnh nhận thức về phát triển kinh tế",
  },

  // Chiến tranh biên giới Tây Nam
  {
    patterns: ["chiến tranh tây nam", "campuchia", "pol pot", "1978", "1979"],
    response:
      "Chiến tranh biên giới Tây Nam (1975-1979):\n• Nguyên nhân: Tập đoàn Pol Pot thực hiện chính sách diệt chủng và tăng cường tấn công biên giới Việt Nam từ 4/1975\n• Diễn biến: Cuối 12/1978, Pol Pot tiến công xâm lược quy mô lớn\n• Kết quả: 7/1/1979, quân tình nguyện VN phối hợp giải phóng Phnom Penh, lật đổ chế độ diệt chủng\n• Ý nghĩa: Bảo vệ biên giới, giải cứu nhân dân Campuchia",
  },

  // Chiến tranh biên giới phía Bắc
  {
    patterns: [
      "chiến tranh phía bắc",
      "trung quốc",
      "17/2/1979",
      "biên giới bắc",
    ],
    response:
      "Chiến tranh biên giới phía Bắc (1979):\n• Bối cảnh: Quan hệ VN-Trung Quốc xấu đi từ 1978, TQ rút chuyên gia và cắt viện trợ\n• 17/2/1979: TQ huy động >60 vạn quân tấn công toàn tuyến biên giới phía Bắc\n• Kết quả: Quân dân VN kiên cường chiến đấu, TQ tuyên bố rút quân 5/3/1979\n• Hậu quả: Cuộc chiến bảo vệ biên giới kéo dài nhiều năm sau đó",
  },

  // FULRO
  {
    patterns: ["fulro", "tây nguyên", "phản động"],
    response:
      "Đấu tranh chống FULRO:\n• Quân dân cả nước đấu tranh thắng lợi làm thất bại âm mưu phá hoại của lực lượng phản động FULRO vũ trang ở Tây Nguyên\n• Tiêu diệt lực lượng lưu vong vũ trang\n• Bảo vệ vững chắc thành quả cách mạng",
  },

  // Chào hỏi
  {
    patterns: ["hello", "xin chào", "chào", "hi"],
    response:
      "Xin chào! ⭐ Tôi có thể giúp bạn tìm hiểu về giai đoạn 1975-1981:\n• Thống nhất đất nước 1975-1976\n• Đại hội IV năm 1976\n• Khoán 100 và Quyết định 25\n• Chiến tranh biên giới Tây Nam và phía Bắc\nBạn muốn hỏi gì? 😊",
  },
];

const levenshtein = (a, b) => {
  const matrix = Array(a.length + 1)
    .fill(null)
    .map(() => Array(b.length + 1).fill(null));

  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost,
      );
    }
  }

  return matrix[a.length][b.length];
};

const topicKeywords = [
  "Hồ Chí Minh",
  "Nguyễn Ái Quốc",
  "tư tưởng",
  "độc lập",
  "tự do",
  "hạnh phúc",
  "dân tộc",
  "chủ nghĩa xã hội",
  "quá độ",
  "Mác-Lênin",
  "Đảng cộng sản",
  "nhà nước",
  "nhân dân",
  "dân chủ",
  "đại đoàn kết",
  "quốc tế",
  "văn hóa",
  "đạo đức",
  "con người",
  "cần",
  "kiệm",
  "liêm",
  "chính",
  "chí công vô tư",
  "cách mạng",
  "giải phóng",
  "thống nhất",
  "đầy tớ",
  "công bộc",
  "tự phê bình",
  "phê bình",
  "kỷ luật",
  "UNESCO",
  "chủ nghĩa cá nhân",
  "giặc nội xâm",
];

const defaultKeywords = [
  "Tư tưởng Hồ Chí Minh",
  "Độc lập dân tộc gắn liền với CNXH",
  "Nhà nước của dân, do dân, vì dân",
  "Đảng là đạo đức, là văn minh",
  "Liên minh công - nông - trí thức",
  "Cần, Kiệm, Liêm, Chính, Chí công vô tư",
  "Di chúc Hồ Chí Minh",
  "Quét sạch chủ nghĩa cá nhân",
  "Xây đi đôi với chống",
  "UNESCO vinh danh Anh hùng giải phóng dân tộc",
  "Thời kỳ quá độ đặc thù",
  "Lấy dân làm gốc",
];

const isTopicRelated = (text) => {
  const lowerText = text.toLowerCase();
  return topicKeywords.some((keyword) => lowerText.includes(keyword));
};

const getIntentResponse = (input) => {
  const text = input.toLowerCase().trim();

  if (!isTopicRelated(text)) {
    return {
      text: "❌ Xin lỗi, tôi chỉ có thể trả lời các câu hỏi về giai đoạn 1975-1981:\n• Thống nhất đất nước (1975-1976)\n• Đại hội IV năm 1976\n• Khoán 100 và Quyết định 25-CP\n• Chiến tranh biên giới Tây Nam và phía Bắc\n• FULRO ở Tây Nguyên\n\nVui lòng hỏi về các chủ đề trên nhé! 😊",
      keywords: defaultKeywords,
    };
  }

  let bestMatch = null;
  let bestScore = Number.POSITIVE_INFINITY;
  let bestPattern = null;

  for (const intent of intents) {
    for (const pattern of intent.patterns) {
      const normalizedPattern = pattern.toLowerCase().trim();

      if (text === normalizedPattern) {
        return {
          text: intent.response,
          keywords: defaultKeywords,
        };
      }

      if (text.includes(normalizedPattern)) {
        return {
          text: intent.response,
          keywords: defaultKeywords,
        };
      }

      if (normalizedPattern.includes(text)) {
        return {
          text: `🔍 (Hiểu ý bạn hỏi về: "${pattern}")\n${intent.response}`,
          keywords: defaultKeywords,
        };
      }

      const distance = levenshtein(text, normalizedPattern);
      const similarityRatio =
        distance / Math.max(text.length, normalizedPattern.length);

      if (similarityRatio < bestScore && similarityRatio <= 0.35) {
        bestScore = similarityRatio;
        bestMatch = intent;
        bestPattern = pattern;
      }
    }
  }

  if (bestMatch && bestScore <= 0.35) {
    return {
      text: `🤔 (Có phải bạn muốn hỏi "${bestPattern}"?)\n${bestMatch.response}`,
      keywords: defaultKeywords,
    };
  }

  return {
    text: "🤔 Tôi hiểu bạn đang hỏi về giai đoạn 1975-1981, nhưng câu hỏi cụ thể hơn được không? Ví dụ:\n• 'Thống nhất đất nước 1976'\n• 'Đại hội IV'\n• 'Khoán 100'\n• 'Chiến tranh Tây Nam'",
    keywords: defaultKeywords,
  };
};

export default function ChatBoxAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Xin chào! ⭐ Tôi có thể giúp bạn tìm hiểu về bài học",
      keywords: defaultKeywords,
    },
  ]);
  const [input, setInput] = useState("");

  // 1. Dùng Ref cho tin nhắn cuối cùng (Tin nhắn bot mới nhất)
  const lastMessageRef = useRef(null);

  // 2. Hàm cuộn tới đầu tin nhắn cuối cùng
  const scrollToLastMessage = () => {
    // Cuộn đến đầu phần tử ('block: "start"') để hiển thị nội dung ngay từ đầu
    lastMessageRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // 3. Kích hoạt cuộn khi messages thay đổi
  useEffect(() => {
    if (messages.length > 1) {
      // Chỉ cuộn sau tin nhắn chào mừng ban đầu
      scrollToLastMessage();
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    const response = getIntentResponse(input);
    const botMsg = {
      sender: "bot",
      text: response.text,
      keywords: response.keywords,
    };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
    // Việc cuộn sẽ được xử lý tự động bởi useEffect
  };

  const handleKeywordClick = (keyword) => {
    const userMsg = { sender: "user", text: keyword };
    const response = getIntentResponse(keyword);
    const botMsg = {
      sender: "bot",
      text: response.text,
      keywords: response.keywords,
    };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    // Việc cuộn sẽ được xử lý tự động bởi useEffect
  };

  return (
    <>
      {/* Thay thế đoạn {!isOpen && (...)} bằng đoạn này */}
      {/* Thay thế đoạn {!isOpen && (...)} bằng đoạn này */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
          {/* 1. Bong bóng thoại chào mời (Nằm trên đầu con bot) */}
          <div className="mb-2 mr-2 bg-white px-4 py-2 rounded-2xl rounded-br-none shadow-xl border border-red-100 animate-bounce origin-bottom-right">
            <p className="text-xs text-gray-800 font-bold whitespace-nowrap">
              Hỏi tớ về bài học nhé! 👇
            </p>
          </div>

          {/* 2. Nút hình con Bot */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative group transition-transform hover:-translate-y-1 duration-300"
          >
            {/* Hình ảnh Robot (Bạn thay link ảnh của bạn vào src bên dưới) */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
              alt="AI Bot"
              className="w-20 h-20 drop-shadow-2xl hover:brightness-110 transition-all"
            />

            {/* Dấu chấm xanh báo Online */}
            <span className="absolute bottom-2 right-2 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
            </span>

            {/* Số thông báo giả lập (Màu đỏ) */}
            <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm transform translate-x-1 -translate-y-1">
              1
            </div>
          </button>
        </div>
      )}

      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
          {/* Container chính: Tăng Width và Height, bo góc lớn, đổ bóng đậm */}
          <div className="w-[90vw] sm:w-[420px] h-[600px] max-h-[80vh] bg-gray-50 rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-200 font-sans animate-fade-in-up">
            {/* --- HEADER: Gradient Đỏ Vàng rực rỡ --- */}
            <div className="bg-gradient-to-r from-red-700 via-red-600 to-yellow-500 p-5 flex justify-between items-center shadow-md shrink-0 relative overflow-hidden">
              {/* Họa tiết trang trí (Đã sửa z-0 để nằm dưới) */}
              <div className="absolute top-0 right-0 -mt-2 -mr-2 w-24 h-24 bg-white opacity-10 rounded-full blur-xl pointer-events-none"></div>

              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 bg-white rounded-full p-1 shadow-sm flex items-center justify-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
                    alt="Bot"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg leading-tight">
                    AI
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-red-100 text-xs font-medium">
                      Đang trực tuyến
                    </span>
                  </div>
                </div>
              </div>

              {/* NÚT TẮT (Đã sửa: thêm relative z-50 và cursor-pointer) */}
              <button
                onClick={() => setIsOpen(false)}
                className="relative z-50 text-white/90 hover:text-white hover:bg-white/20 p-2 rounded-full transition-all cursor-pointer"
                aria-label="Đóng chat"
              >
                <X size={24} />
              </button>
            </div>

            {/* --- BODY: Tin nhắn --- */}
            <div className="flex-1 overflow-y-auto p-4 space-y-5 bg-[#f8f9fa] custom-scrollbar">
              {messages.map((msg, idx) => {
                const isLastMessage = idx === messages.length - 1;
                const isUser = msg.sender === "user";

                return (
                  <div
                    key={idx}
                    ref={isLastMessage ? lastMessageRef : null}
                    className={`flex w-full ${
                      isUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`flex max-w-[85%] gap-2 ${
                        isUser ? "flex-row-reverse" : "flex-row"
                      }`}
                    >
                      {/* Avatar nhỏ bên cạnh tin nhắn Bot */}
                      {!isUser && (
                        <div className="w-8 h-8 rounded-full bg-white border border-gray-200 p-1 shrink-0 self-end mb-1 shadow-sm">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
                            alt="Bot"
                          />
                        </div>
                      )}

                      <div className="flex flex-col gap-1">
                        {/* Bong bóng chat */}
                        <div
                          className={`px-5 py-3 text-sm leading-relaxed shadow-sm ${
                            isUser
                              ? "bg-gradient-to-br from-red-600 to-orange-500 text-white rounded-2xl rounded-tr-none"
                              : "bg-white text-gray-800 border border-gray-100 rounded-2xl rounded-tl-none"
                          }`}
                        >
                          {/* Xử lý xuống dòng cho nội dung dài */}
                          <div className="whitespace-pre-line">{msg.text}</div>
                        </div>

                        {/* Keywords gợi ý (Chỉ hiện cho Bot) */}
                        {!isUser && msg.keywords && (
                          <div className="flex flex-wrap gap-2 mt-1 ml-1">
                            {msg.keywords.map((keyword, keyIdx) => (
                              <button
                                key={keyIdx}
                                onClick={() => handleKeywordClick(keyword)}
                                className="bg-white hover:bg-red-50 text-red-700 text-xs font-medium px-3 py-1.5 rounded-lg border border-red-200 shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
                              >
                                {keyword}
                              </button>
                            ))}
                          </div>
                        )}

                        {/* Thời gian (Giả lập) */}
                        <span
                          className={`text-[10px] text-gray-400 ${
                            isUser ? "text-right mr-1" : "text-left ml-1"
                          }`}
                        >
                          {isUser ? "Bạn" : "Bot Lịch sử"}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* --- FOOTER: Ô nhập liệu --- */}
            <div className="p-4 bg-white border-t border-gray-100 shrink-0">
              <div className="relative flex items-center bg-gray-100 rounded-full px-4 py-2 border border-transparent focus-within:border-red-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-red-100 transition-all">
                <input
                  type="text"
                  placeholder="Nhập câu hỏi về lịch sử..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1 bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400 h-8"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className={`ml-2 p-2 rounded-full transition-all duration-200 ${
                    input.trim()
                      ? "bg-red-600 text-white shadow-lg hover:bg-red-700 transform hover:scale-110"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <Send size={16} className={input.trim() ? "ml-0.5" : ""} />
                </button>
              </div>
              <div className="text-center mt-2">
                <p className="text-[10px] text-gray-400">
                  Hỗ trợ bởi AI Lịch sử Việt Nam
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
