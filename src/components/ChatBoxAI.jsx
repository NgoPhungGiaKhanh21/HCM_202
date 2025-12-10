"use client";

import { MessageCircle, Send, X } from "lucide-react";
import { useState } from "react";

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
      "Hoàn thành thống nhất đất nước (1975-1976):\n• Hội nghị lần thứ 24 Ban Chấp hành TW Đảng khóa III (8/1975): Chủ trương hoàn thành thống nhất nước nhà, đưa cả nước tiến nhanh, tiến mạnh, tiến vững chắc lên CNXH\n• 25/4/1976: Tổng tuyển cử với 98,77% cử tri đi bầu\n• 24/6-3/7/1976: Kỳ họp thứ nhất Quốc hội quyết định:\n  - Đặt tên nước: Cộng hòa Xã hội chủ nghĩa Việt Nam\n  - Thủ đô: Hà Nội\n  - Đổi tên Sài Gòn thành TP Hồ Chí Minh",
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
      "Chỉ thị số 100-CT/TW (1/1981) - 'Khoán 100':\n• Nội dung: Khoán sản phẩm đến nhóm và người lao động trong hợp tác xã nông nghiệp\n• Kết quả:\n  - Sản lượng lương thực tăng từ 13,4 triệu tấn/năm (1976-1980) lên 17 triệu tấn/năm (1981-1985)\n  - Nông dân ủng hộ nhiệt liệt\n  - Là bước đột phá đầu tiên trong cải cách kinh tế",
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
      "Khó khăn kinh tế giai đoạn 1976-1979:\n• Nguyên nhân:\n  - Chủ trương nóng vội, chủ quan duy ý chí\n  - Ưu tiên phát triển công nghiệp nặng vượt khả năng\n  - Đặt chỉ tiêu không thực tế\n• Hậu quả:\n  - Lưu thông, phân phối rối ren\n  - Giá cả tăng vọt\n  - Nhập khẩu gấp 4-5 lần xuất khẩu\n  - Đời sống nhân dân khó khăn",
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
      "Xin chào! 🇻🇳 Tôi có thể giúp bạn tìm hiểu về giai đoạn 1975-1981:\n• Thống nhất đất nước 1975-1976\n• Đại hội IV năm 1976\n• Khoán 100 và Quyết định 25\n• Chiến tranh biên giới Tây Nam và phía Bắc\nBạn muốn hỏi gì? 😊",
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
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[a.length][b.length];
};

const topicKeywords = [
  "1975",
  "1976",
  "1977",
  "1978",
  "1979",
  "1980",
  "1981",
  "thống nhất",
  "đất nước",
  "nhà nước",
  "đại hội",
  "iv",
  "4",
  "cộng hòa",
  "xã hội",
  "chủ nghĩa",
  "việt nam",
  "khoán",
  "100",
  "sản phẩm",
  "quyết định",
  "25",
  "tự chủ",
  "doanh nghiệp",
  "chiến tranh",
  "biên giới",
  "tây nam",
  "phía bắc",
  "campuchia",
  "pol pot",
  "trung quốc",
  "fulro",
  "tây nguyên",
  "cách mạng",
  "khoa học",
  "kỹ thuật",
  "kinh tế",
  "khó khăn",
  "lạm phát",
  "hội nghị",
  "trung ương",
  "bung ra",
  "nông nghiệp",
  "công nghiệp",
  "đảng",
  "cộng sản",
];

const defaultKeywords = [
  "Giai đoạn 1975-1981",
  "Thống nhất đất nước 1976",
  "Đại hội IV năm 1976",
  "Ba cuộc cách mạng",
  "Khoán 100 (1981)",
  "Quyết định 25-CP",
  "Khó khăn kinh tế 1976-1979",
  "Hội nghị TW 6 (1979)",
  "Chiến tranh Tây Nam",
  "Chiến tranh biên giới Bắc",
  "FULRO ở Tây Nguyên",
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
      text: "Xin chào! 🇻🇳 Tôi có thể giúp bạn tìm hiểu về giai đoạn 1975-1981:",
      keywords: defaultKeywords,
    },
  ]);
  const [input, setInput] = useState("");

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
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-br from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-40"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 z-50">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-red-200">
            <div className="bg-gradient-to-r from-red-600 to-yellow-600 text-white p-4 flex justify-between items-center">
              <span className="font-semibold text-sm">
                Chat – Giai đoạn 1975-1981
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-red-700 p-1 rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-64 overflow-y-auto bg-gray-50 p-4 space-y-3">
              {messages.map((msg, idx) => (
                <div key={idx}>
                  <div
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg text-sm leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-red-600 text-white rounded-br-none"
                          : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>

                  {msg.keywords && (
                    <div className="mt-2 flex flex-wrap gap-2 justify-start">
                      {msg.keywords.map((keyword, keyIdx) => (
                        <button
                          key={keyIdx}
                          onClick={() => handleKeywordClick(keyword)}
                          className="bg-red-100 hover:bg-red-200 text-red-800 text-xs px-3 py-1 rounded-full border border-red-200 transition-colors duration-200"
                        >
                          {keyword}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 p-4 bg-white flex gap-2">
              <input
                type="text"
                placeholder="Nhập câu hỏi..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSend}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-1"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
