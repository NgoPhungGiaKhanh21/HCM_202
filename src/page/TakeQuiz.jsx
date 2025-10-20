import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const QUIZ_DATA = {
  title: "Kiến thức tổng hợp",
  description: "Bài kiểm tra kiến thức tổng hợp về nhiều lĩnh vực",
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
          <div className="bg-white rounded-xl shadow-lg p-12 text-center max-w-2xl">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {quiz.title}
            </h1>
            {quiz.description && (
              <p className="text-gray-600 text-lg mb-8">{quiz.description}</p>
            )}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">
                    {questions.length}
                  </p>
                  <p className="text-gray-600 mt-1">Câu hỏi</p>
                </div>
                <div className="h-16 w-px bg-gray-300"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">
                    {questions.length * 2}
                  </p>
                  <p className="text-gray-600 mt-1">Phút</p>
                </div>
              </div>
            </div>
            <button
              onClick={handleStartQuiz}
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-xl shadow-md hover:shadow-lg"
            >
              Bắt đầu
            </button>
          </div>
        </div>
      );
    }

    if (showResults) {
      return (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Kết Quả</h2>
            <div className="text-6xl font-bold mb-4">
              <span
                className={
                  score >= questions.length * 0.7
                    ? "text-green-600"
                    : "text-orange-600"
                }
              >
                {score}/{questions.length}
              </span>
            </div>
            <p className="text-xl text-gray-600">
              Bạn đã trả lời đúng {score} câu trên tổng số {questions.length}{" "}
              câu
            </p>
            <p className="text-lg text-gray-500 mt-2">
              Điểm: {Math.round((score / questions.length) * 100)}%
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Xem lại đáp án:
            </h3>
            {questions.map((question, index) => {
              const selected = selectedAnswers[index];
              const isCorrect = selected === question.correct_answer;

              return (
                <div key={question.id} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start gap-3 mb-4">
                    {isCorrect ? (
                      <CheckCircle
                        className="text-green-600 flex-shrink-0 mt-1"
                        size={24}
                      />
                    ) : (
                      <XCircle
                        className="text-red-600 flex-shrink-0 mt-1"
                        size={24}
                      />
                    )}
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Câu {index + 1}: {question.question_text}
                      </h4>
                      <div className="space-y-2">
                        {["A", "B", "C", "D"].map((option) => {
                          const optionText =
                            question[`option_${option.toLowerCase()}`];
                          const isThisCorrect =
                            question.correct_answer === option;
                          const isThisSelected = selected === option;

                          return (
                            <div
                              key={option}
                              className={`p-3 rounded-lg border-2 ${
                                isThisCorrect
                                  ? "bg-green-100 border-green-500 text-green-800"
                                  : isThisSelected
                                  ? "bg-red-100 border-red-500 text-red-800"
                                  : "bg-white border-gray-200 text-gray-700"
                              }`}
                            >
                              <span className="font-semibold">{option}.</span>{" "}
                              {optionText}
                              {isThisCorrect && (
                                <span className="ml-2 text-sm font-semibold">
                                  (Đáp án đúng)
                                </span>
                              )}
                              {isThisSelected && !isThisCorrect && (
                                <span className="ml-2 text-sm font-semibold">
                                  (Bạn đã chọn)
                                </span>
                              )}
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

          <button
            onClick={handleRestart}
            className="w-full mt-8 bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
          >
            Làm lại
          </button>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{quiz.title}</h2>
            <span className="text-gray-600 font-medium">
              Câu {currentIndex + 1}/{questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            {currentQuestion.question_text}
          </h3>
          <div className="space-y-3">
            {["A", "B", "C", "D"].map((option) => {
              const optionText =
                currentQuestion[`option_${option.toLowerCase()}`];
              const isSelected = selectedAnswers[currentIndex] === option;

              return (
                <button
                  key={option}
                  onClick={() => handleSelectAnswer(option)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    isSelected
                      ? "border-blue-600 bg-blue-50 text-blue-800"
                      : "border-gray-300 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50"
                  }`}
                >
                  <span className="font-semibold">{option}.</span> {optionText}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="px-6 py-3 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Câu trước
          </button>
          {currentIndex === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={
                Object.keys(selectedAnswers).length !== questions.length
              }
              className="px-8 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              Nộp bài
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!selectedAnswers[currentIndex]}
              className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Câu tiếp
            </button>
          )}
        </div>

        {Object.keys(selectedAnswers).length !== questions.length &&
          currentIndex === questions.length - 1 && (
            <p className="text-center text-sm text-orange-600 mt-4">
              Vui lòng trả lời tất cả các câu hỏi trước khi nộp bài
            </p>
          )}
      </div>
    );
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-cyan-50 pt-10">
      <div className="max-w-4xl mx-auto">{renderContent()}</div>
    </section>
  );
}

export default TakeQuiz;
