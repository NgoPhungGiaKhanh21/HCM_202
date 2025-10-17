import React, { useState } from "react";
import { Input, Button, Card, List } from "antd";
import { MessageCircle, X } from "lucide-react";

const intents = [
  {
    patterns: ["vai trò của ai", "ai giúp gì", "lợi ích của trí tuệ nhân tạo"],
    response:
      "AI giúp Việt Nam nâng cao năng suất, tối ưu hóa quy trình sản xuất và phát triển kinh tế số.",
  },
  {
    patterns: ["thách thức", "khó khăn", "trở ngại"],
    response:
      "Thách thức lớn nhất là thiếu nhân lực chất lượng cao và hạ tầng công nghệ chưa đồng bộ.",
  },
  {
    patterns: ["hội nhập", "kinh tế quốc tế"],
    response:
      "Hội nhập kinh tế quốc tế giúp Việt Nam mở rộng thị trường và tiếp thu công nghệ mới để phát triển nhanh hơn.",
  },
  {
    patterns: ["bước nhảy", "phát triển", "công nghiệp hóa mới"],
    response:
      "AI và chuyển đổi số có thể trở thành 'bước nhảy công nghiệp hóa mới' nếu được đầu tư đúng hướng và phát triển nguồn nhân lực mạnh.",
  },
  {
    patterns: ["công nghiệp hóa", "hiện đại hóa", "chuyển đổi số là gì"],
    response:
      "Công nghiệp hóa là chuyển từ nền nông nghiệp sang công nghiệp, hiện đại hóa là ứng dụng khoa học kỹ thuật, còn chuyển đổi số là tích hợp công nghệ vào mọi lĩnh vực.",
  },
];

const getIntentResponse = (input) => {
  const text = input.toLowerCase();
  for (const intent of intents) {
    for (const pattern of intent.patterns) {
      if (text.includes(pattern)) return intent.response;
    }
  }
  return "Mình chưa hiểu ý bạn 😅. Hãy hỏi về AI, chuyển đổi số hoặc công nghiệp hóa nhé!";
};

export default function ChatBoxAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Xin chào 🤖! Hỏi mình về AI, chuyển đổi số, hay công nghiệp hóa nhé!",
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
      {/* Nút nổi góc phải */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Hộp chat khi mở */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96">
          <Card
            title={
              <div className="flex justify-between items-center">
                <span>AI Chat – CNH, HĐH & Chuyển đổi số</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-red-500"
                >
                  <X size={18} />
                </button>
              </div>
            }
            className="shadow-2xl rounded-2xl overflow-hidden"
          >
            <div className="max-h-64 overflow-y-auto mb-3">
              <List
                dataSource={messages}
                renderItem={(msg) => (
                  <List.Item
                    style={{
                      justifyContent:
                        msg.sender === "user" ? "flex-end" : "flex-start",
                      border: "none",
                      padding: "4px 0",
                    }}
                  >
                    <div
                      style={{
                        background:
                          msg.sender === "user" ? "#1677ff" : "#f3f4f6",
                        color: msg.sender === "user" ? "white" : "black",
                        padding: "6px 10px",
                        borderRadius: 10,
                        maxWidth: "70%",
                        fontSize: 14,
                      }}
                    >
                      {msg.text}
                    </div>
                  </List.Item>
                )}
              />
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Nhập câu hỏi..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onPressEnter={handleSend}
              />
              <Button type="primary" onClick={handleSend}>
                Gửi
              </Button>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}
