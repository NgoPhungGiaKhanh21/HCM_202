"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const intents = [
  // Cách mạng Công nghiệp
  {
    patterns: ["cách mạng công nghiệp", "cmcn", "cách mạng", "định nghĩa cmcn"],
    response:
      "CMCN là những bước phát triển nhảy vọt về trình độ của tư liệu lao động trên cơ sở những phát minh đột phá về kỹ thuật và công nghệ trong quá trình phát triển của nhân loại, kéo theo sự thay đổi căn bản về trình độ phân công lao động xã hội và tạo bước phát triển năng suất lao động cao hơn hẳn.",
  },
  {
    patterns: ["cmcn lần thứ nhất", "cách mạng công nghiệp 1.0", "cmcn 1"],
    response:
      "CMCN lần thứ nhất (giữa thế kỷ XVIII – giữa XIX): Bắt đầu ở Anh, diễn ra trước hết ở lĩnh vực dệt vải. Chuyển từ lao động thủ công sang lao động sử dụng máy móc, thực hiện cơ giới hóa sản xuất bằng việc sử dụng năng lượng nước và hơi nước. Các phát minh quan trọng: thoi bay, xe kéo sợi, máy dệt Edmund, máy hơi nước, lò luyện gang, tàu hỏa, tàu thủy.",
  },
  {
    patterns: ["cmcn lần thứ hai", "cách mạng công nghiệp 2.0", "cmcn 2"],
    response:
      "CMCN lần thứ hai (nửa cuối thế kỷ XIX – đầu XX): Chuyển nền sản xuất cơ khí sang nền sản xuất điện – cơ khí và sang giai đoạn tự động hóa cục bộ trong sản xuất. Các phát minh quan trọng: điện, xăng dầu, động cơ đốt trong, công nghệ luyện thép Bessemer, ô tô, điện thoại, sản xuất theo dây chuyền.",
  },
  {
    patterns: ["cmcn lần thứ ba", "cách mạng công nghiệp 3.0", "cmcn 3"],
    response:
      "CMCN lần thứ ba (từ 1960s - cuối XX): Sự xuất hiện của ngành công nghệ thông tin, tự động hóa sản xuất. Các phát minh quan trọng: hệ thống mạng, máy tính cá nhân, thiết bị điện tử sử dụng công nghệ số và robot công nghiệp.",
  },
  {
    patterns: ["cmcn lần thứ tư", "cách mạng công nghiệp 4.0", "cmcn 4"],
    response:
      "CMCN lần thứ tư (2011 - nay): Sự xuất hiện của các công nghệ có tính đột phá như trí tuệ nhân tạo, IoT, Big data và in 3D. Làm mờ ranh giới giữa vật lý – số hóa – sinh học.",
  },
  {
    patterns: [
      "vai trò cách mạng công nghiệp",
      "vai trò cmcn",
      "tác động cmcn",
    ],
    response:
      "Vai trò của CMCN đối với phát triển:\n• Thúc đẩy sự phát triển của lực lượng sản xuất: hiện đại hóa máy móc, nâng cao chất lượng lao động và chuyển dịch cơ cấu kinh tế theo hướng hiệu quả, hội nhập.\n• Thúc đẩy hoàn thiện quan hệ sản xuất: xuất hiện nhiều hình thức sở hữu và quản lý mới.\n• Thúc đẩy đổi mới phương thức quản trị phát triển: hình thành chính phủ điện tử, doanh nghiệp số hóa.",
  },

  // Công nghiệp hóa - Hiện đại hóa
  {
    patterns: ["công nghiệp hóa", "cnh", "định nghĩa công nghiệp hóa"],
    response:
      "Công nghiệp hóa là quá trình chuyển đổi nền sản xuất xã hội dựa trên lao động thủ công là chính sang nền sản xuất xã hội chủ yếu dựa trên lao động bằng máy móc nhằm tạo ra năng suất lao động xã hội cao.",
  },
  {
    patterns: ["hiện đại hóa", "hdh", "định nghĩa hiện đại hóa"],
    response:
      "Hiện đại hóa là nâng cao trình độ khoa học kỹ thuật, cải tiến phương thức quản lý, và nâng cao chất lượng cuộc sống toàn xã hội.",
  },
  {
    patterns: ["mô hình công nghiệp hóa", "mô hình cnh", "các mô hình cnh"],
    response:
      "Các mô hình CNH tiêu biểu:\n\n1. Mô hình CNH các nước tư bản cổ điển:\n• Đi từ Công nghiệp nhẹ (dệt) → Công nghiệp nặng\n• Chủ thể: Hoàn toàn là Tư nhân\n• Nguồn vốn: Tích lũy thông qua bóc lột lao động làm thuê và xâm chiếm thuộc địa\n• Thời gian: Kéo dài khoảng 60 – 80 năm\n\n2. Mô hình CNH kiểu Liên Xô (cũ):\n• Chiến lược: Ưu tiên tuyệt đối Công nghiệp nặng\n• Cơ chế: Điều hành bằng Kế hoạch hóa tập trung\n• Hệ quả: Dẫn đến khủng hoảng và sụp đổ\n\n3. Mô hình CNH của Nhật Bản và các nước công nghiệp mới (NICs):\n• Chiến lược: CNH theo chiều sâu, tập trung đẩy mạnh xuất khẩu\n• Chủ thể: Nhà nước tạo môi trường thuận lợi\n• Thời gian: Hoàn thành trong khoảng 20-30 năm",
  },
  {
    patterns: [
      "đặc điểm cnh hđh việt nam",
      "cnh hđh việt nam",
      "đặc điểm việt nam",
    ],
    response:
      "Đặc điểm CNH - HĐH ở Việt Nam:\n• Theo định hướng XHCN 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh'\n• Gắn với phát triển kinh tế tri thức\n• Trong điều kiện kinh tế thị trường định hướng xã hội chủ nghĩa\n• Bối cảnh toàn cầu hóa kinh tế, VN đang tích cực, chủ động hội nhập\n\nNội dung cốt lõi:\n• Tạo lập những điều kiện để có thể thực hiện chuyển đổi từ nền sản xuất – xã hội lạc hậu sang nền sản xuất – xã hội tiến bộ\n• Thực hiện các nhiệm vụ để chuyển đổi nền sản xuất – xã hội lạc hậu sang nền sản xuất – xã hội hiện đại",
  },

  // Hội nhập Kinh tế Quốc tế
  {
    patterns: [
      "hội nhập kinh tế quốc tế",
      "hội nhập",
      "kinh tế quốc tế",
      "định nghĩa hội nhập",
    ],
    response:
      "Hội nhập kinh tế quốc tế là quá trình các nước tiến hành các hoạt động tăng cường việc gắn kết giữa các nền kinh tế của các quốc gia với nhau dựa trên sự chia sẻ nguồn lực và lợi ích trên cơ sở tuân thủ các luật chơi chung trong khuôn khổ các định chế hoặc các tổ chức quốc tế.",
  },
  {
    patterns: [
      "tính tất yếu của hội nhập kinh tế quốc tế",
      "tính tất yếu hội nhập",
      "sự cần thiết hội nhập",
    ],
    response:
      "Tính tất yếu khách quan của hội nhập kinh tế quốc tế:\n• Thứ nhất, do xu thế khách quan trong bối cảnh toàn cầu hóa kinh tế\n• Thứ hai, hội nhập kinh tế quốc tế là phương thức phát triển phổ biến của các nước, nhất là các nước đang và kém phát triển trong điều kiện hiện nay\n\nNội dung hội nhập kinh tế quốc tế:\n• Chuẩn bị đầy đủ các điều kiện để thực hiện hội nhập thành công\n• Thực hiện đa dạng các hình thức, các mức độ hội nhập kinh tế quốc tế",
  },
  {
    patterns: ["tác động tích cực", "tích cực", "lợi ích", "cơ hội hội nhập"],
    response:
      "Tác động tích cực của hội nhập kinh tế quốc tế:\n• Tạo điều kiện mở rộng thị trường, tiếp thu khoa học – công nghệ vốn, chuyển dịch cơ cấu kinh tế trong nước\n• Tạo cơ hội để nâng cao chất lượng nguồn nhân lực\n• Tạo điều kiện thúc đẩy hội nhập của các lĩnh vực văn hóa, chính trị, củng cố an ninh – quốc phòng\n• Mở rộng thị trường và thúc đẩy đầu tư\n• Thúc đẩy chuyển dịch cơ cấu kinh tế và hiện đại hóa\n• Nâng cao chất lượng nguồn nhân lực và vị thế quốc tế",
  },
  {
    patterns: [
      "tác động tiêu cực",
      "tiêu cực",
      "thách thức",
      "khó khăn",
      "rủi ro hội nhập",
    ],
    response:
      "Tác động tiêu cực của hội nhập kinh tế quốc tế:\n• Tăng cạnh tranh làm nhiều doanh nghiệp và ngành kinh tế gặp khó khăn trong quá trình phát triển\n• Gia tăng sự phụ thuộc của nền kinh tế quốc gia vào thị trường bên ngoài\n• Dẫn đến phân phối không công bằng, làm tăng khoảng cách giàu nghèo\n• Đối mặt với nguy cơ chuyển dịch cơ cấu, dễ trở thành bãi rác công nghiệp và công nghiệp thấp\n• Cạnh tranh gay gắt và nguy cơ phá sản\n• Nguy cơ phụ thuộc và tụt hậu\n• Thách thức về kinh tế vĩ mô và an ninh xã hội",
  },
  {
    patterns: [
      "phương hướng nâng cao hội nhập",
      "giải pháp hội nhập",
      "nâng cao hiệu quả hội nhập",
    ],
    response:
      "Phương hướng nâng cao HNKTQT trong phát triển của Việt Nam:\n\n1. Nhận thức sâu sắc về thời cơ và thách thức do hội nhập kinh tế quốc tế mang lại\n2. Xây dựng chiến lược và lộ trình hội nhập kinh tế phù hợp\n3. Tích cực, chủ động tham gia vào các liên kết kinh tế quốc tế và thực hiện đầy đủ các cam kết\n4. Hoàn thiện thể chế kinh tế và pháp luật\n5. Nâng cao năng lực cạnh tranh quốc tế của nền kinh tế\n6. Xây dựng nền kinh tế độc lập, tự chủ của Việt Nam",
  },
  {
    patterns: [
      "hội nhập cơ hội hay thách thức",
      "cơ hội thách thức",
      "so sánh cơ hội thách thức",
    ],
    response:
      "Hội nhập kinh tế quốc tế: cơ hội hay thách thức lớn hơn?\n\nTrong bối cảnh Việt Nam đang phát triển và là nước đi sau, HNKTQT mang lại cơ hội lớn để rút ngắn khoảng cách về trình độ phát triển so với các nước khác. Tuy nhiên, để tận dụng được cơ hội này, Việt Nam phải đối mặt với thách thức rất gay gắt là nâng cao năng lực cạnh tranh quốc tế và hoàn thiện thể chế kinh tế.\n\nNếu Việt Nam thực hiện HNKTQT một cách chủ động, có chọn lọc, với chiến lược phù hợp và kiểm soát được các rủi ro, thì cơ hội phát triển sẽ vượt trội hơn thách thức, đưa đất nước tiến lên. Ngược lại, nếu không nâng cao năng lực nội tại và bị động, các thách thức sẽ trở nên lớn hơn, dẫn đến nguy cơ tụt hậu và mất ổn định.",
  },

  // Mác-Lênin và Kinh tế chính trị
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

  // Chuyển đổi số và Công nghệ
  {
    patterns: ["chuyển đổi số", "số hóa", "công nghệ thông tin"],
    response:
      "Chuyển đổi số là quá trình ứng dụng công nghệ số vào tất cả các khía cạnh của xã hội, thay đổi cách thức hoạt động của các tổ chức và cá nhân.",
  },

  // Việt Nam
  {
    patterns: ["việt nam", "vn", "nước ta"],
    response:
      "Việt Nam đang thực hiện công nghiệp hóa, hiện đại hóa theo định hướng xã hội chủ nghĩa với mục tiêu 'dân giàu, nước mạnh, dân chủ, công bằng, văn minh'.",
  },

  // Chào hỏi
  {
    patterns: ["hello", "xin chào", "chào", "hi"],
    response:
      "Xin chào! 🤖 Tôi có thể giúp bạn tìm hiểu về các chủ đề liên quan đến Công nghiệp hóa, Hiện đại hóa và Hội nhập kinh tế quốc tế. Bạn muốn hỏi gì?",
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

// Danh sách từ khóa liên quan đến chủ đề
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
  "tính tất yếu",
  "tác động hội nhập kinh tế quốc tế",
];

// Danh sách gợi ý mặc định cho mọi câu trả lời
const defaultKeywords = [
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
  "Tính tất yếu của hội nhập kinh tế quốc tế",
  "Tác động của hội nhập kinh tế",
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
      keywords: defaultKeywords, // Luôn hiển thị gợi ý mặc định
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
          keywords: defaultKeywords, // Luôn hiển thị gợi ý mặc định
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
            keywords: defaultKeywords, // Luôn hiển thị gợi ý mặc định
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
          keywords: defaultKeywords, // Luôn hiển thị gợi ý mặc định
        };
      }

      // Kiểm tra pattern chứa text
      if (normalizedPattern.includes(text)) {
        return {
          text: `🔍 (Hiểu ý bạn hỏi về: "${pattern}")\n${intent.response}`,
          keywords: defaultKeywords, // Luôn hiển thị gợi ý mặc định
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
      keywords: defaultKeywords, // Luôn hiển thị gợi ý mặc định
    };
  }

  return {
    text: "🤔 Tôi hiểu bạn đang hỏi về chủ đề liên quan, nhưng câu hỏi cụ thể hơn được không? Ví dụ:\n• 'Công nghiệp hóa là gì?'\n• 'Cách mạng công nghiệp lần thứ 4'\n• 'Tác động tích cực của hội nhập kinh tế'\n• 'Mác-Lênin là gì?'",
    keywords: defaultKeywords, // Luôn hiển thị gợi ý mặc định
  };
};

export default function ChatBoxAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Xin chào! 🤖 Tôi có thể giúp bạn tìm hiểu về các chủ đề sau:",
      keywords: defaultKeywords, // Sử dụng gợi ý mặc định
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
