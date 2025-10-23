import { useState } from "react";
import {
  CheckCircle,
  XCircle,
  Trophy,
  Clock,
  Brain,
  Target,
  Zap,
  Award,
  Star,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Play,
  BookOpen,
  TrendingUp,
  Globe,
  Factory,
} from "lucide-react";

const QUIZ_DATA = {
  title: "Chương 6: CNH-HĐH & Hội nhập Kinh tế Quốc tế",
  description:
    "Bài kiểm tra tổng hợp về Cách mạng Công nghiệp, Công nghiệp hóa - Hiện đại hóa và Hội nhập kinh tế quốc tế của Việt Nam",
};

const QUESTIONS_DATA = [
  {
    id: 1,
    question_text:
      "Theo quan điểm của chủ nghĩa Mác – Lênin, công nghiệp hoá là gì?",
    option_a: "Quá trình phát triển nông nghiệp hiện đại",
    option_b:
      "Quá trình chuyển đổi lao động thủ công sang lao động sử dụng máy móc, kỹ thuật hiện đại",
    option_c: "Quá trình phát triển du lịch và dịch vụ",
    option_d: "Quá trình tăng năng suất lao động trong thương mại",
    correct_answer: "B",
  },
  {
    id: 2,
    question_text:
      "Công nghiệp hoá, hiện đại hoá được coi là nhiệm vụ trung tâm trong thời kỳ nào ở Việt Nam?",
    option_a:
      "Thời kỳ đổi mới và phát triển kinh tế thị trường định hướng XHCN",
    option_b: "Thời kỳ chiến tranh chống Pháp",
    option_c: "Thời kỳ bao cấp",
    option_d: "Thời kỳ trước Cách mạng tháng Tám",
    correct_answer: "A",
  },
  {
    id: 3,
    question_text:
      "Mục tiêu cuối cùng của công nghiệp hoá, hiện đại hoá theo định hướng xã hội chủ nghĩa là gì?",
    option_a: "Tăng trưởng kinh tế nhanh",
    option_b:
      "Xây dựng cơ sở vật chất kỹ thuật của chủ nghĩa xã hội, nâng cao đời sống nhân dân",
    option_c: "Phát triển kinh tế tư nhân",
    option_d: "Đạt trình độ công nghiệp hoá như các nước phát triển",
    correct_answer: "B",
  },
  {
    id: 4,
    question_text:
      "Theo triết học Mác – Lênin, yếu tố nào giữ vai trò quyết định trong công nghiệp hoá, hiện đại hoá?",
    option_a: "Tài nguyên thiên nhiên",
    option_b: "Vốn đầu tư nước ngoài",
    option_c: "Con người – nguồn lực trí tuệ",
    option_d: "Khoa học công nghệ",
    correct_answer: "C",
  },
  {
    id: 5,
    question_text: "Hội nhập kinh tế quốc tế của Việt Nam được hiểu là gì?",
    option_a:
      "Việt Nam mở rộng hợp tác với các nước trên cơ sở bình đẳng, cùng có lợi",
    option_b: "Việt Nam phụ thuộc hoàn toàn vào các nền kinh tế lớn",
    option_c:
      "Việt Nam hạn chế giao thương quốc tế để bảo vệ kinh tế trong nước",
    option_d: "Việt Nam chỉ xuất khẩu hàng hóa mà không nhập khẩu",
    correct_answer: "A",
  },
  {
    id: 6,
    question_text:
      "Hội nhập kinh tế quốc tế mang lại cơ hội lớn nhất nào cho Việt Nam?",
    option_a: "Tăng cường hợp tác, tiếp cận khoa học – công nghệ tiên tiến",
    option_b: "Giảm năng suất lao động trong nước",
    option_c: "Phụ thuộc vào thị trường thế giới",
    option_d: "Mất kiểm soát chính sách kinh tế",
    correct_answer: "A",
  },
  {
    id: 7,
    question_text:
      "Thách thức lớn nhất của hội nhập kinh tế quốc tế đối với Việt Nam là gì?",
    option_a: "Cạnh tranh gay gắt và nguy cơ tụt hậu về công nghệ",
    option_b: "Mở rộng quan hệ đối ngoại",
    option_c: "Phát triển thương mại điện tử",
    option_d: "Gia tăng vốn đầu tư nước ngoài",
    correct_answer: "A",
  },
  {
    id: 8,
    question_text:
      "Trong bối cảnh toàn cầu hoá, để giữ vững độc lập tự chủ, Việt Nam cần:",
    option_a: "Đóng cửa nền kinh tế",
    option_b: "Phát huy nội lực, kết hợp ngoại lực một cách hài hoà",
    option_c: "Phụ thuộc vào viện trợ quốc tế",
    option_d: "Giảm đầu tư trong nước",
    correct_answer: "B",
  },
  {
    id: 9,
    question_text:
      "Theo quan điểm biện chứng của Mác – Lênin, mối quan hệ giữa hội nhập và tự chủ là:",
    option_a: "Đối lập, không thể dung hòa",
    option_b:
      "Có thể kết hợp hài hòa nếu biết vận dụng đúng quy luật khách quan",
    option_c: "Hội nhập luôn làm mất tự chủ",
    option_d: "Tự chủ đồng nghĩa với khép kín",
    correct_answer: "B",
  },
  {
    id: 10,
    question_text:
      "Theo bạn, trong giai đoạn hiện nay, hội nhập kinh tế quốc tế là:",
    option_a: "Chỉ là cơ hội",
    option_b: "Chỉ là thách thức",
    option_c:
      "Vừa là cơ hội, vừa là thách thức, trong đó cơ hội lớn hơn nếu biết tận dụng",
    option_d: "Không có ảnh hưởng đáng kể",
    correct_answer: "C",
  },
  // 10 câu hỏi mới dựa trên tài liệu thuyết trình Chương 6
  {
    id: 11,
    question_text:
      "Theo tài liệu thuyết trình, Cách mạng Công nghiệp (CMCN) được định nghĩa là gì?",
    option_a: "Sự thay đổi về chính trị và xã hội",
    option_b:
      "Những bước phát triển nhảy vọt về trình độ của tư liệu lao động trên cơ sở những phát minh đột phá về kỹ thuật và công nghệ",
    option_c: "Sự phát triển của nông nghiệp hiện đại",
    option_d: "Quá trình đô thị hóa",
    correct_answer: "B",
  },
  {
    id: 12,
    question_text:
      "CMCN lần thứ nhất (giữa thế kỷ XVIII – giữa XIX) có đặc điểm gì?",
    option_a: "Bắt đầu ở Pháp với sự ra đời của máy tính",
    option_b:
      "Bắt đầu ở Anh, diễn ra trước hết ở lĩnh vực dệt vải, chuyển từ lao động thủ công sang sử dụng máy móc với năng lượng nước và hơi nước",
    option_c: "Bắt đầu ở Mỹ với sự ra đời của điện năng",
    option_d: "Bắt đầu ở Đức với sự ra đời của robot",
    correct_answer: "B",
  },
  {
    id: 13,
    question_text:
      "CMCN lần thứ hai (nửa cuối thế kỷ XIX – đầu XX) có đặc điểm gì?",
    option_a: "Sử dụng máy hơi nước và lao động thủ công",
    option_b:
      "Chuyển nền sản xuất cơ khí sang nền sản xuất điện – cơ khí và sang giai đoạn tự động hóa cục bộ trong sản xuất",
    option_c: "Phát triển máy tính và Internet",
    option_d: "Sử dụng trí tuệ nhân tạo và robot",
    correct_answer: "B",
  },
  {
    id: 14,
    question_text: "CMCN lần thứ ba (từ 1960s - cuối XX) có đặc điểm gì?",
    option_a: "Sử dụng máy hơi nước và lao động thủ công",
    option_b:
      "Sự xuất hiện của ngành công nghệ thông tin, tự động hóa sản xuất",
    option_c: "Chỉ phát triển nông nghiệp",
    option_d: "Chỉ tập trung vào thương mại",
    correct_answer: "B",
  },
  {
    id: 15,
    question_text: "CMCN lần thứ tư (2011 - nay) có đặc điểm gì nổi bật?",
    option_a: "Chỉ sử dụng máy móc cơ khí",
    option_b:
      "Sự xuất hiện của các công nghệ có tính đột phá như trí tuệ nhân tạo, IoT, Big data và in 3D",
    option_c: "Chỉ phát triển nông nghiệp",
    option_d: "Chỉ tập trung vào thương mại",
    correct_answer: "B",
  },
  {
    id: 16,
    question_text: "Theo tài liệu thuyết trình, Công nghiệp hóa là gì?",
    option_a: "Quá trình phát triển du lịch",
    option_b:
      "Quá trình chuyển đổi nền sản xuất xã hội dựa trên lao động thủ công là chính sang nền sản xuất xã hội chủ yếu dựa trên lao động bằng máy móc",
    option_c: "Quá trình phát triển nông nghiệp",
    option_d: "Quá trình phát triển thương mại",
    correct_answer: "B",
  },
  {
    id: 17,
    question_text:
      "Theo tài liệu thuyết trình, Hội nhập kinh tế quốc tế là gì?",
    option_a: "Quá trình đóng cửa nền kinh tế",
    option_b:
      "Quá trình các nước tiến hành các hoạt động tăng cường việc gắn kết giữa các nền kinh tế của các quốc gia với nhau dựa trên sự chia sẻ nguồn lực và lợi ích",
    option_c: "Quá trình chỉ xuất khẩu hàng hóa",
    option_d: "Quá trình chỉ nhập khẩu hàng hóa",
    correct_answer: "B",
  },
  {
    id: 18,
    question_text:
      "Tác động tích cực của hội nhập kinh tế quốc tế đối với Việt Nam là gì?",
    option_a: "Tăng cạnh tranh gay gắt",
    option_b:
      "Tạo điều kiện mở rộng thị trường, tiếp thu khoa học – công nghệ vốn, chuyển dịch cơ cấu kinh tế trong nước",
    option_c: "Gia tăng sự phụ thuộc vào thị trường bên ngoài",
    option_d: "Dẫn đến phân phối không công bằng",
    correct_answer: "B",
  },
  {
    id: 19,
    question_text:
      "Tác động tiêu cực của hội nhập kinh tế quốc tế đối với Việt Nam là gì?",
    option_a: "Tạo cơ hội việc làm mới",
    option_b:
      "Tăng cạnh tranh gay gắt làm nhiều doanh nghiệp và ngành kinh tế gặp khó khăn",
    option_c: "Nâng cao chất lượng nguồn nhân lực",
    option_d: "Mở rộng thị trường",
    correct_answer: "B",
  },
  {
    id: 20,
    question_text:
      "Theo tài liệu thuyết trình, để nâng cao hiệu quả hội nhập kinh tế quốc tế, Việt Nam cần làm gì?",
    option_a: "Đóng cửa nền kinh tế",
    option_b:
      "Xây dựng nền kinh tế độc lập, tự chủ - không bị lệ thuộc về đường lối, chính sách và không bị chi phối bởi bất cứ điều kiện nào từ bên ngoài",
    option_c: "Chỉ tham gia một số tổ chức",
    option_d: "Phụ thuộc hoàn toàn vào nước ngoài",
    correct_answer: "B",
  },
];

export function TakeQuiz() {
  const [quiz] = useState(QUIZ_DATA);
  const [questions] = useState(QUESTIONS_DATA);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleSelectAnswer = (answer) => {
    setSelectedAnswers({ ...selectedAnswers, [currentIndex]: answer });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizStarted(false);
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const calculateScore = () => {
    return questions.reduce((total, question, index) => {
      return (
        total + (selectedAnswers[index] === question.correct_answer ? 1 : 0)
      );
    }, 0);
  };

  const currentQuestion = questions[currentIndex];
  const progress =
    questions.length > 0 ? ((currentIndex + 1) / questions.length) * 100 : 0;
  const score = calculateScore();

  const renderContent = () => {
    if (!quizStarted) {
      return (
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-3xl shadow-2xl p-12 text-center max-w-4xl border border-blue-100">
            {/* Header với icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6 shadow-lg">
                <BookOpen className="text-white" size={48} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                {quiz.title}
              </h1>
              {quiz.description && (
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                  {quiz.description}
                </p>
              )}
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-center mb-3">
                  <Target className="text-white" size={32} />
                </div>
                <p className="text-3xl font-bold">{questions.length}</p>
                <p className="text-blue-100 text-sm font-medium">Câu hỏi</p>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-center mb-3">
                  <Clock className="text-white" size={32} />
                </div>
                <p className="text-3xl font-bold">
                  {Math.ceil(questions.length * 1.5)}
                </p>
                <p className="text-green-100 text-sm font-medium">Phút</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-center mb-3">
                  <Trophy className="text-white" size={32} />
                </div>
                <p className="text-3xl font-bold">70%</p>
                <p className="text-purple-100 text-sm font-medium">Để đạt</p>
              </div>
            </div>

            {/* Topics covered */}
            <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Nội dung kiểm tra
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Factory className="text-blue-600" size={20} />
                  <span className="text-sm font-medium text-gray-700">
                    Cách mạng Công nghiệp
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <TrendingUp className="text-green-600" size={20} />
                  <span className="text-sm font-medium text-gray-700">
                    Công nghiệp hóa - HĐH
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <Globe className="text-purple-600" size={20} />
                  <span className="text-sm font-medium text-gray-700">
                    Hội nhập Kinh tế
                  </span>
                </div>
              </div>
            </div>

            {/* Start button */}
            <button
              onClick={handleStartQuiz}
              className="group relative inline-flex items-center justify-center px-12 py-4 text-xl font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Play
                className="mr-3 group-hover:scale-110 transition-transform"
                size={24}
              />
              <span className="relative z-10">Bắt đầu kiểm tra</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>

            {/* Decorative elements */}
            <div className="mt-8 flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (showResults) {
      const percentage = Math.round((score / questions.length) * 100);
      const isExcellent = percentage >= 90;
      const isGood = percentage >= 70;
      const isPass = percentage >= 50;

      return (
        <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-3xl shadow-2xl p-8 border border-blue-100">
          <div className="text-center mb-8">
            {/* Trophy icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-6 shadow-lg">
              <Trophy className="text-white" size={48} />
            </div>

            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Kết Quả Kiểm Tra
            </h2>

            {/* Score display */}
            <div className="relative inline-block mb-6">
              <div className="text-8xl font-bold mb-2">
                <span
                  className={
                    isExcellent
                      ? "text-green-600"
                      : isGood
                      ? "text-blue-600"
                      : isPass
                      ? "text-orange-600"
                      : "text-red-600"
                  }
                >
                  {score}/{questions.length}
                </span>
              </div>
              <div className="absolute -top-2 -right-2">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Star className="text-white" size={16} />
                </div>
              </div>
            </div>

            {/* Percentage and status */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 max-w-md mx-auto">
              <div className="text-3xl font-bold text-gray-800 mb-2">
                {percentage}%
              </div>
              <div className="text-lg text-gray-600 mb-4">
                {isExcellent && "Xuất sắc! 🎉"}
                {!isExcellent && isGood && "Tốt! 👍"}
                {!isGood && isPass && "Đạt yêu cầu! ✅"}
                {!isPass && "Cần cố gắng thêm! 💪"}
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div
                  className={`h-3 rounded-full transition-all duration-1000 ${
                    isExcellent
                      ? "bg-gradient-to-r from-green-400 to-green-600"
                      : isGood
                      ? "bg-gradient-to-r from-blue-400 to-blue-600"
                      : isPass
                      ? "bg-gradient-to-r from-orange-400 to-orange-600"
                      : "bg-gradient-to-r from-red-400 to-red-600"
                  }`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500">
                Bạn đã trả lời đúng {score} câu trên tổng số {questions.length}{" "}
                câu
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Xem lại đáp án
              </h3>
              <p className="text-gray-600">Chi tiết từng câu hỏi và đáp án</p>
            </div>

            {questions.map((question, index) => {
              const selected = selectedAnswers[index];
              const isCorrect = selected === question.correct_answer;

              return (
                <div
                  key={question.id}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      {isCorrect ? (
                        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="text-white" size={20} />
                        </div>
                      ) : (
                        <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
                          <XCircle className="text-white" size={20} />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-4 text-lg">
                        Câu {index + 1}: {question.question_text}
                      </h4>
                      <div className="space-y-3">
                        {["A", "B", "C", "D"].map((option) => {
                          const optionText =
                            question[`option_${option.toLowerCase()}`];
                          const isThisCorrect =
                            question.correct_answer === option;
                          const isThisSelected = selected === option;

                          return (
                            <div
                              key={option}
                              className={`p-4 rounded-xl border-2 transition-all ${
                                isThisCorrect
                                  ? "bg-gradient-to-r from-green-50 to-green-100 border-green-400 text-green-800 shadow-md"
                                  : isThisSelected
                                  ? "bg-gradient-to-r from-red-50 to-red-100 border-red-400 text-red-800 shadow-md"
                                  : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <span className="font-bold text-lg flex-shrink-0">
                                  {option}.
                                </span>
                                <span className="flex-1">{optionText}</span>
                                {isThisCorrect && (
                                  <div className="flex-shrink-0">
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-200 text-green-800">
                                      ✓ Đúng
                                    </span>
                                  </div>
                                )}
                                {isThisSelected && !isThisCorrect && (
                                  <div className="flex-shrink-0">
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-red-200 text-red-800">
                                      ✗ Sai
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleRestart}
              className="group flex-1 inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <RotateCcw
                className="mr-3 group-hover:rotate-180 transition-transform"
                size={20}
              />
              Làm lại bài kiểm tra
            </button>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex-1 inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-700 bg-white border-2 border-gray-300 rounded-2xl shadow-lg hover:shadow-xl hover:border-blue-400 hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              <Zap
                className="mr-3 group-hover:scale-110 transition-transform"
                size={20}
              />
              Lên đầu trang
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-3xl shadow-2xl p-8 border border-blue-100">
        {/* Header với progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <Brain className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {quiz.title}
                </h2>
                <p className="text-gray-600 text-sm">
                  Kiểm tra kiến thức tổng hợp
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-800">
                {currentIndex + 1}/{questions.length}
              </div>
              <div className="text-sm text-gray-500">Câu hỏi</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="relative">
            <div className="w-full bg-gray-200 rounded-full h-4 shadow-inner">
              <div
                className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 h-4 rounded-full transition-all duration-500 shadow-lg"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="absolute top-0 right-0 text-xs text-gray-500 mt-1">
              {Math.round(progress)}%
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">?</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 leading-relaxed">
                {currentQuestion.question_text}
              </h3>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {["A", "B", "C", "D"].map((option) => {
              const optionText =
                currentQuestion[`option_${option.toLowerCase()}`];
              const isSelected = selectedAnswers[currentIndex] === option;

              return (
                <button
                  key={option}
                  onClick={() => handleSelectAnswer(option)}
                  className={`group w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-[1.02] ${
                    isSelected
                      ? "border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 shadow-lg"
                      : "border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                        isSelected
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-600 group-hover:bg-blue-200 group-hover:text-blue-700"
                      }`}
                    >
                      {option}
                    </div>
                    <span className="flex-1 text-lg leading-relaxed">
                      {optionText}
                    </span>
                    {isSelected && (
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="text-white" size={16} />
                        </div>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="group inline-flex items-center px-6 py-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
          >
            <ChevronLeft
              className="mr-2 group-hover:-translate-x-1 transition-transform"
              size={20}
            />
            Câu trước
          </button>

          <div className="text-center">
            <div className="text-sm text-gray-500 mb-1">Tiến độ</div>
            <div className="text-lg font-bold text-gray-800">
              {Object.keys(selectedAnswers).length}/{questions.length} đã trả
              lời
            </div>
          </div>

          {currentIndex === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={
                Object.keys(selectedAnswers).length !== questions.length
              }
              className="group inline-flex items-center px-8 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Award
                className="mr-2 group-hover:scale-110 transition-transform"
                size={20}
              />
              Nộp bài
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!selectedAnswers[currentIndex]}
              className="group inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Câu tiếp
              <ChevronRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
          )}
        </div>

        {/* Warning message */}
        {Object.keys(selectedAnswers).length !== questions.length &&
          currentIndex === questions.length - 1 && (
            <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
                <p className="text-orange-700 font-medium">
                  Vui lòng trả lời tất cả các câu hỏi trước khi nộp bài
                </p>
              </div>
            </div>
          )}
      </div>
    );
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-10 pb-20">
      <div className="max-w-5xl mx-auto px-4">{renderContent()}</div>
    </section>
  );
}

export default TakeQuiz;
