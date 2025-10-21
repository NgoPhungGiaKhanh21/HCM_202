"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const intents = [
  {
    patterns: ["cách mạng công nghiệp", "cmcn", "cách mạng"],
    response:
      "Có 4 cuộc cách mạng công nghiệp: lần thứ nhất (thế kỷ XVIII-XIX), lần thứ hai (thế kỷ XIX-XX), lần thứ ba (thập niên 60-cuối thế kỷ XX) và lần thứ tư (từ năm 2011).",
    keywords: [
      "Vai trò cách mạng công nghiệp",
      "Mô hình công nghiệp hóa",
      "Chuyển đổi số",
    ],
  },
  {
    patterns: ["công nghiệp hóa", "cnh", "công nghiệp"],
    response:
      "Công nghiệp hóa là quá trình chuyển đổi căn bản từ sử dụng sức lao động thủ công sang sử dụng công nghệ, phương tiện hiện đại, nhằm tạo ra năng suất lao động xã hội cao.",
    keywords: [
      "Hiện đại hóa là gì?",
      "Cách mạng công nghiệp",
      "Mô hình công nghiệp hóa",
    ],
  },
  {
    patterns: ["hiện đại hóa", "hdh", "hiện đại"],
    response:
      "Hiện đại hóa là nâng cao trình độ khoa học kỹ thuật, cải tiến phương thức quản lý, và nâng cao chất lượng cuộc sống toàn xã hội.",
    keywords: [
      "Công nghiệp hóa là gì?",
      "Cách mạng công nghiệp",
      "Chuyển đổi số",
    ],
  },
  {
    patterns: ["hội nhập kinh tế quốc tế", "hội nhập", "kinh tế quốc tế"],
    response:
      "Hội nhập kinh tế quốc tế của một quốc gia là quá trình quốc gia đó thực hiện gắn kết nền kinh tế của mình với nền kinh tế thế giới dựa trên sự chia sẻ lợi ích đồng thời tuân thủ các chuẩn mực quốc tế chung.",
    keywords: ["Tác động tích cực", "Tác động tiêu cực", "Việt Nam"],
  },
  {
    patterns: ["vai trò cách mạng công nghiệp", "vai trò cmcn"],
    response:
      "Thúc đẩy sự phát triển lực lượng sản xuất - Thúc đẩy hoàn thiện quan hệ sản xuất - Thúc đẩy đổi mới phương thức quản trị phát triển",
  },
  {
    patterns: ["mô hình công nghiệp hóa", "mô hình cnh"],
    response:
      "Cổ điển - Liên Xô (cũ) - Nhật Bản và các nước công nghiệp mới (NICs)",
  },
  {
    patterns: ["tác động tích cực", "tích cực", "lợi ích"],
    response:
      "Tạo điều kiện mở rộng thị trường, tiếp thu khoa học công nghệ - Tạo cơ hội để nâng cao nguồn nhân lực - Tạo điều kiện thúc đẩy hội nhập các lĩnh vực văn hóa, chính trị và củng cố an ninh quốc phòng.",
  },
  {
    patterns: ["tác động tiêu cực", "tiêu cực", "thách thức", "khó khăn"],
    response:
      "Cạnh tranh gay gắt - sự phụ thuộc nền kinh tế quốc gia vào thị trường - Phân phối không công bằng lợi ích và rủi ro - Các nước phát triển phải đối mặt với nguy cơ chuyển dịch cơ cấu kinh tế - Tạo ra thách thức lớn cho nhà nước - Tình trạng khủng bố buôn lậu tăng cao.",
  },
  {
    patterns: ["mác lênin", "mác", "lênin", "chủ nghĩa mác", "triết học mác"],
    response:
      "Chủ nghĩa Mác-Lênin là hệ thống lý luận khoa học và cách mạng, bao gồm triết học Mác-Lênin, kinh tế chính trị Mác-Lênin và chủ nghĩa xã hội khoa học.",
  },
  {
    patterns: ["kinh tế chính trị", "ktct"],
    response:
      "Kinh tế chính trị Mác-Lênin nghiên cứu các quan hệ xã hội giữa người với người trong quá trình sản xuất, phân phối, trao đổi và tiêu dùng của cải vật chất.",
  },
  {
    patterns: ["lực lượng sản xuất", "quan hệ sản xuất"],
    response:
      "Lực lượng sản xuất là tổng thể các yếu tố vật chất kỹ thuật của quá trình sản xuất. Quan hệ sản xuất là những quan hệ kinh tế giữa người với người trong quá trình sản xuất.",
  },
  {
    patterns: ["chuyển đổi số", "số hóa", "công nghệ thông tin"],
    response:
      "Chuyển đổi số là quá trình ứng dụng công nghệ số vào tất cả các khía cạnh của xã hội, thay đổi cách thức hoạt động của các tổ chức và cá nhân.",
  },
  {
    patterns: ["việt nam", "vn", "nước ta"],
    response:
      "Việt Nam đang thực hiện công nghiệp hóa, hiện đại hóa theo định hướng xã hội chủ nghĩa với mục tiêu 'dân giàu, nước mạnh, dân chủ, công bằng, văn minh'.",
  },
  {
    patterns: ["tri thức", "kiến thức", "học tập"],
    response:
      "Website cung cấp hệ thống tri thức về công nghiệp hóa, hiện đại hóa ở Việt Nam trong bối cảnh thích ứng với cuộc cách mạng công nghiệp lần thứ tư.",
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

// Danh sách từ khóa liên quan đến chủ đềa
const topicKeywords = [
  "công nghiệp",
  "cnh",
  "công nghiệp hóa",
  "hiện đại",
  "hdh",
  "hiện đại hóa",
  "cách mạng",
  "cmcn",
  "cách mạng công nghiệp",
  "hội nhập",
  "kinh tế",
  "quốc tế",
  "mác",
  "lênin",
  "mác lênin",
  "triết học",
  "chủ nghĩa",
  "lực lượng",
  "sản xuất",
  "quan hệ",
  "chuyển đổi",
  "số hóa",
  "công nghệ",
  "việt nam",
  "vn",
  "nước ta",
  "tri thức",
  "kiến thức",
  "học tập",
  "tích cực",
  "tiêu cực",
  "tác động",
  "lợi ích",
  "thách thức",
  "mô hình",
  "vai trò",
  "nội dung",
];

// Kiểm tra xem câu hỏi có liên quan đến chủ đề không
const isTopicRelated = (text) => {
  const lowerText = text.toLowerCase();
  return topicKeywords.some((keyword) => lowerText.includes(keyword));
};

const getIntentResponse = (input) => {
  const text = input.toLowerCase().trim();

  // Kiểm tra xem câu hỏi có liên quan đến chủ đề không
  if (!isTopicRelated(text)) {
    return {
      text: "❌ Xin lỗi, tôi chỉ có thể trả lời các câu hỏi liên quan đến:\n• Công nghiệp hóa, hiện đại hóa\n• Cách mạng công nghiệp\n• Hội nhập kinh tế quốc tế\n• Kinh tế chính trị Mác-Lênin\n• Chuyển đổi số\n\nVui lòng hỏi về các chủ đề trên nhé! 😊",
      keywords: [],
    };
  }

  let bestMatch = null;
  let bestScore = Number.POSITIVE_INFINITY;
  let bestPattern = null;

  for (const intent of intents) {
    for (const pattern of intent.patterns) {
      const normalizedPattern = pattern.toLowerCase().trim();

      // Kiểm tra match chính xác
      if (text === normalizedPattern) {
        return {
          text: intent.response,
          keywords: intent.keywords || [],
        };
      }

      // Kiểm tra text chứa pattern
      if (text.includes(normalizedPattern)) {
        const extraWords = text
          .replace(normalizedPattern, "")
          .trim()
          .split(/\s+/)
          .filter((w) => w.length > 0);

        // Loại bỏ các từ phổ biến trong câu hỏi
        const questionWords = [
          "là",
          "gì",
          "của",
          "trong",
          "với",
          "cho",
          "đến",
          "từ",
          "được",
          "đã",
          "sẽ",
        ];
        const filteredExtraWords = extraWords.filter(
          (word) => !questionWords.includes(word)
        );

        if (filteredExtraWords.length === 0 || filteredExtraWords.length <= 2) {
          return {
            text: intent.response,
            keywords: intent.keywords || [],
          };
        }

        if (extraWords.length > 0) {
          const patternHasExtraWords = extraWords.some((word) =>
            normalizedPattern.includes(word)
          );
          if (!patternHasExtraWords) {
            continue;
          }
        }

        return {
          text: `🔍 (Hiểu ý bạn hỏi về: "${pattern}")\n${intent.response}`,
          keywords: intent.keywords || [],
        };
      }

      // Kiểm tra pattern chứa text
      if (normalizedPattern.includes(text)) {
        return {
          text: `🔍 (Hiểu ý bạn hỏi về: "${pattern}")\n${intent.response}`,
          keywords: intent.keywords || [],
        };
      }

      // Fuzzy matching với Levenshtein distance
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
    return {
      text: `🤔 (Có phải bạn muốn hỏi "${bestPattern}"?)\n${bestMatch.response}`,
      keywords: bestMatch.keywords || [],
    };
  }

  return {
    text: "🤔 Tôi hiểu bạn đang hỏi về chủ đề liên quan, nhưng câu hỏi cụ thể hơn được không? Ví dụ:\n• 'Công nghiệp hóa là gì?'\n• 'Cách mạng công nghiệp lần thứ 4'\n• 'Tác động tích cực của hội nhập kinh tế'\n• 'Mác-Lênin là gì?'",
    keywords: [],
  };
};

export default function ChatBoxAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Xin chào! 🤖 Tôi có thể giúp bạn tìm hiểu về các chủ đề sau:",
      keywords: [
        "Công nghiệp hóa là gì?",
        "Hiện đại hóa là gì?",
        "Cách mạng công nghiệp",
        "Hội nhập kinh tế quốc tế",
        "Tác động tích cực",
        "Tác động tiêu cực",
        "Mác-Lênin là gì?",
        "Kinh tế chính trị",
        "Lực lượng sản xuất",
        "Việt Nam",
        "Chuyển đổi số",
      ],
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
                <div key={idx}>
                  <div
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

                  {/* Keywords */}
                  {msg.keywords && (
                    <div className="mt-2 flex flex-wrap gap-2 justify-start">
                      {msg.keywords.map((keyword, keyIdx) => (
                        <button
                          key={keyIdx}
                          onClick={() => handleKeywordClick(keyword)}
                          className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs px-3 py-1 rounded-full border border-blue-200 transition-colors duration-200"
                        >
                          {keyword}
                        </button>
                      ))}
                    </div>
                  )}
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
