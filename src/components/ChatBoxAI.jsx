"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const intents = [
  {
    patterns: ["cách mạng công nghiệp"],
    response:
      "Có 4 cuộc cách mạng công nghiệp: lần thứ nhất (thế kỷ XVIII-XIX), lần thứ hai (thế kỷ XIX-XX), lần thứ ba (thập niên 60-cuối thế kỷ XX) và lần thứ tư (từ năm 2011).",
  },
  {
    patterns: ["nội dung website"],
    response:
      "Website sẽ cung cấp hệ thống tri thức về công nghiệp hóa, hiện đại hóa ở Việt Nam trong bối cảnh thích ứng với cuộc cách mạng công nghiệp lần thứ tư.",
  },
  {
    patterns: ["vai trò cách mạng công nghiệp"],
    response:
      "Thúc đẩy sự phát triển lực lượng sản xuất - Thúc đẩy hoàn thiện quan hệ sản xuất - Thúc đẩy đổi mới phương thức quản trị phát triển",
  },
  {
    patterns: ["mô hình công nghiệp hóa"],
    response:
      "Cổ điển - Liên Xô (cũ) - Nhật Bản và các nước công nghiệp mới (NICs)",
  },
  {
    patterns: ["hội nhập kinh tế quốc tế"],
    response:
      "Hội nhập kinh tế quốc tế của một quốc gia là quá trình quốc gia đó thực hiện gắn kết nền kinh tế của mình với nền kinh tế thế giới dựa trên sự chia sẻ lợi ích đồng thời tuân thủ các chuẩn mực quốc tế chung.",
  },
  {
    patterns: ["Tác động tích cực của hội nhập kinh tế quốc tế"],
    response:
      "Tạo điều kiện mở rộng thị trường, tiếp thu khoa học công nghệ - Tạo cơ hội để nâng cao nguồn nhân lực - Tạo điều kiện thúc đẩy hội nhập các lĩnh vực văn hóa, chính trị và củng cố an ninh quốc phòng.",
  },
  {
    patterns: ["Tác động tiêu cực của hội nhập kinh tế quốc tế"],
    response:
      "Cạnh tranh gay gắt - sự phụ thuộc nền kinh tế quốc gia vào thị trường - Phân phối không công bằng lợi ích và rủi ro - Các nước phát triển phải đối mặt với nguy cơ chuyển dịch cơ cấu kinh tế - Tạo ra thách thức lớn cho nhà nước - Tình trạng khủng bố buôn lậu tăng cao.",
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

const getIntentResponse = (input) => {
  const text = input.toLowerCase().trim();
  let bestMatch = null;
  let bestScore = Number.POSITIVE_INFINITY;
  let bestPattern = null;

  for (const intent of intents) {
    for (const pattern of intent.patterns) {
      const normalizedPattern = pattern.toLowerCase().trim();

      if (text === normalizedPattern) {
        return `${intent.response}`;
      }

      if (text.includes(normalizedPattern)) {
        const extraWords = text
          .replace(normalizedPattern, "")
          .trim()
          .split(/\s+/)
          .filter((w) => w.length > 0);

        if (extraWords.length > 0) {
          const patternHasExtraWords = extraWords.some((word) =>
            normalizedPattern.includes(word)
          );
          if (!patternHasExtraWords) {
            continue;
          }
        }

        return `🔍 (Hiểu ý bạn hỏi về: "${pattern}")\n${intent.response}`;
      }

      if (normalizedPattern.includes(text)) {
        return `🔍 (Hiểu ý bạn hỏi về: "${pattern}")\n${intent.response}`;
      }

      const inputWords = text.split(/\s+/).filter((w) => w.length > 0);
      const patternWords = normalizedPattern
        .split(/\s+/)
        .filter((w) => w.length > 0);

      const extraKeywords = inputWords.filter(
        (iWord) => !patternWords.some((pWord) => levenshtein(iWord, pWord) <= 1)
      );

      if (extraKeywords.length > 0 && patternWords.length < inputWords.length) {
        continue;
      }

      const matchedWords = patternWords.filter((word) =>
        inputWords.some((iWord) => levenshtein(word, iWord) <= 1)
      );

      if (matchedWords.length >= patternWords.length * 0.5) {
        const distance = levenshtein(text, normalizedPattern);
        const similarityRatio =
          distance / Math.max(text.length, normalizedPattern.length);

        const lengthDifference = text.length - normalizedPattern.length;
        const adjustedThreshold = lengthDifference > 10 ? 0.25 : 0.35;

        if (
          similarityRatio < bestScore &&
          similarityRatio <= adjustedThreshold
        ) {
          bestScore = similarityRatio;
          bestMatch = intent;
          bestPattern = pattern;
        }
      }
    }
  }

  if (bestMatch && bestScore <= 0.35) {
    return `🤔 (Có phải bạn muốn hỏi "${bestPattern}"?)\n${bestMatch.response}`;
  }

  return "Mình chưa hiểu ý bạn 😅. Hãy hỏi về AI, chuyên đổi số hoặc công nghiệp hóa nhé!";
};

export default function ChatBoxAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Xin chào 🤖! Mình sẽ giúp bạn hiểu rõ được công nghiệp hóa, hiện đại hóa và hội nhập kinh tế quốc tế của Việt Nam là gì?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    const botMsg = { sender: "bot", text: getIntentResponse(input) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-40"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 z-50">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center">
              <span className="font-semibold text-sm">
                AI Chat – CNH, HĐH & Chuyển đổi số
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-800 p-1 rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="max-h-64 overflow-y-auto bg-gray-50 p-4 space-y-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 p-4 bg-white flex gap-2">
              <input
                type="text"
                placeholder="Nhập câu hỏi..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-1"
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
