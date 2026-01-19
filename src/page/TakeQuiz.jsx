import React, { useEffect, useRef, useState } from "react";
import { quizQuestions } from "../data/quizData";
import Header from "../components/Header";

export default function TakeQuiz() {
  // --- 1. KHAI BÁO TẤT CẢ CÁC HOOKS Ở ĐẦU (KHÔNG ĐƯỢC CHẶN BỞI RETURN) ---
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [remaining, setRemaining] = useState(30);
  const [status, setStatus] = useState("idle");
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const timerRef = useRef(null);

  // Hook 1: Random câu hỏi
  useEffect(() => {
    const shuffled = [...quizQuestions];
    shuffled.sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, 15);
    setQuestions(selectedQuestions);
  }, []);

  // Hook 2: Xử lý Timer (Phải đặt ở đây, không được đặt sau cái if loading)
  useEffect(() => {
    // Reset trạng thái mỗi khi đổi câu hỏi (currentIndex thay đổi)
    setRemaining(30);
    setIsAnswered(false);
    setSelectedOption(null);
    setStatus("idle");

    if (timerRef.current) clearInterval(timerRef.current);

    // Chỉ chạy timer khi đã có câu hỏi
    if (questions.length > 0 && !isQuizCompleted) {
      timerRef.current = setInterval(() => {
        setRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            timerRef.current = null;
            setIsAnswered(true);
            setStatus("timeout");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, questions.length, isQuizCompleted]); // Thêm dependencies an toàn

  // --- 2. CÁC BIẾN LOGIC ---
  const total = questions.length;
  const question = questions[currentIndex];

  const handleSelect = (optionId) => {
    if (isAnswered) return;

    setSelectedOption(optionId);
    setIsAnswered(true);
    setStatus("answered");

    if (optionId === question.answer) {
      setScore((prev) => prev + 1);
    }

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleNext = () => {
    if (currentIndex === total - 1) {
      setIsQuizCompleted(true);
      return;
    }

    const next = currentIndex + 1;
    setCurrentIndex(next);
    // Các state khác đã được reset trong useEffect
  };

  const getOptionClasses = (optionId) => {
    if (isAnswered) {
      if (optionId === question.answer) {
        return "border-emerald-700 bg-emerald-100/70 text-emerald-900 shadow-sm";
      }
      if (optionId === selectedOption) {
        return "border-rose-700 bg-rose-100/60 text-rose-900";
      }
      return "border-stone-200 bg-amber-50/40 text-stone-800 opacity-80";
    }
    return "border-stone-300 bg-amber-50/60 text-stone-900 hover:border-amber-600 hover:-translate-y-0.5";
  };

  // --- 3. CHECK LOADING (ĐẶT Ở ĐÂY LÀ AN TOÀN NHẤT) ---
  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-[#f6f1e7] flex items-center justify-center text-stone-600 font-bold text-xl">
        Đang trộn đề thi...
      </div>
    );
  }

  // Các biến phụ thuộc vào question (chỉ khai báo khi chắc chắn question tồn tại)
  const isCorrect = selectedOption === question.answer;
  const isTimeout = status === "timeout";
  const isLastQuestion = currentIndex === total - 1;

  // --- 4. RENDER GIAO DIỆN ---
  if (isQuizCompleted) {
    return (
      <div className="min-h-screen bg-[#f6f1e7] text-stone-900 flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-[#fcf7ee] border-4 border-[#9b2f2f] rounded-2xl p-8 text-center shadow-xl">
            <h2 className="text-3xl font-black text-amber-800 mb-4">KẾT QUẢ</h2>
            <div className="text-6xl font-bold text-[#9b2f2f] mb-2">
              {score}/{total}
            </div>
            <p className="text-stone-600 mb-8">Số câu trả lời đúng</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#9b2f2f] text-amber-100 px-6 py-3 rounded-xl font-bold uppercase hover:bg-[#7d2525] transition-colors"
            >
              Làm lại bài thi
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f1e7] text-stone-900">
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* --- CỘT TRÁI --- */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white/50 border-2 border-amber-200 rounded-xl p-4 text-center shadow-sm">
              <p className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-1">
                Số câu đúng
              </p>
              <div className="text-4xl font-black text-emerald-700">
                {score}
              </div>
            </div>

            <div className="bg-[#fcf7ee] border-2 border-[#9b2f2f]/30 rounded-xl p-4 shadow-sm">
              <p className="text-xs font-bold text-amber-800 uppercase mb-3 text-center">
                Danh sách câu hỏi
              </p>
              <div className="grid grid-cols-5 gap-2">
                {questions.map((_, idx) => {
                  const isCurrent = idx === currentIndex;
                  let gridClass =
                    "h-10 w-full rounded-lg text-sm font-bold border transition-all flex items-center justify-center ";

                  if (isCurrent) {
                    gridClass +=
                      "bg-[#9b2f2f] text-amber-100 border-[#7d2525] scale-110 shadow-md z-10";
                  } else if (idx < currentIndex) {
                    gridClass += "bg-stone-200 text-stone-500 border-stone-300";
                  } else {
                    gridClass += "bg-white text-stone-400 border-stone-200";
                  }

                  return (
                    <div key={idx} className={gridClass}>
                      {idx + 1}
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className={`w-full py-4 rounded-xl text-sm font-bold tracking-wide uppercase border-2 transition-all duration-200 shadow-md ${isAnswered
                ? "bg-[#9b2f2f] text-amber-100 border-[#7d2525] hover:bg-[#7d2525] hover:scale-105"
                : "bg-stone-200 text-stone-500 border-stone-300 cursor-not-allowed"
                }`}
            >
              {isLastQuestion ? "Hoàn thành" : "Tiếp theo →"}
            </button>
          </div>

          {/* --- CỘT PHẢI --- */}
          <div className="lg:col-span-9">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
                  Câu hỏi
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-amber-800">
                    GIẢI MẬT MÃ
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold">
                <span className="px-3 py-1 rounded-full bg-stone-900 text-amber-100 border border-stone-700">
                  {remaining}s
                </span>
              </div>
            </div>

            <div className="rounded-2xl border-4 border-[#9b2f2f] bg-[#fcf7ee] shadow-lg overflow-hidden mb-6">
              <div className="bg-[#9b2f2f] text-amber-100 px-6 py-3 flex items-center justify-between">
                <span className="text-lg font-semibold">
                  Câu hỏi {currentIndex + 1}
                </span>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-xl md:text-2xl font-semibold leading-relaxed text-[#2c1b12]">
                  {question.question}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {question.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelect(opt.id)}
                  className={`w-full text-left rounded-xl border-2 p-5 transition-all duration-200 shadow-sm hover:shadow-md ${getOptionClasses(
                    opt.id
                  )}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="h-9 w-9 rounded-lg border border-current flex items-center justify-center font-bold shrink-0">
                      {opt.id}
                    </span>
                    <span className="text-base md:text-lg leading-relaxed">
                      {opt.text}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/70 p-6 shadow-inner min-h-[120px]">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2 text-amber-900 font-semibold text-lg">
                  {isAnswered
                    ? isTimeout
                      ? "Hết giờ"
                      : isCorrect
                        ? "Chính xác!"
                        : "Sai rồi"
                    : "Hãy chọn đáp án"}
                </div>
                {isAnswered && (
                  <div className="text-sm text-stone-700">
                    Đáp án đúng:{" "}
                    <span className="font-bold text-amber-900">
                      {question.answer}
                    </span>
                  </div>
                )}
              </div>
              {isAnswered && (
                <p className="text-sm md:text-base text-stone-700 leading-relaxed animate-fadeIn">
                  {question.explanation}
                </p>
              )}
              {!isAnswered && (
                <p className="text-sm text-stone-500">
                  Bạn có 30 giây để chọn đáp án, hết giờ sẽ tự mở đáp án.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
