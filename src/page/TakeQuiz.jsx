import React, { useEffect, useMemo, useRef, useState } from "react";
import { quizQuestions } from "../data/quizData";
import Header from "../components/Header";

export default function TakeQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [remaining, setRemaining] = useState(30);
  const [status, setStatus] = useState("idle"); // idle | answered | timeout
  const timerRef = useRef(null);

  const total = quizQuestions.length;
  const question = quizQuestions[currentIndex];

  const progressText = useMemo(
    () => `${currentIndex + 1}/${total}`,
    [currentIndex, total]
  );

  const handleSelect = (optionId) => {
    if (isAnswered) return;
    setSelectedOption(optionId);
    setIsAnswered(true);
    setStatus("answered");
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleNext = () => {
    const next = (currentIndex + 1) % total;
    setCurrentIndex(next);
    setSelectedOption(null);
    setIsAnswered(false);
    setRemaining(30);
    setStatus("idle");
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

  const isCorrect = selectedOption === question.answer;
  const isTimeout = status === "timeout";

  useEffect(() => {
    // reset timer on question change
    setRemaining(30);
    setIsAnswered(false);
    setSelectedOption(null);
    setStatus("idle");

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

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

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-[#f6f1e7] text-stone-900">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
              Câu hỏi
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-amber-800">
                GIẢI MẬT MÃ
              </span>
              <span className="text-sm text-stone-600">Chủ đề 1975-1981</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm font-semibold">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
              {progressText}
            </span>
            <span className="text-stone-500">câu</span>
            <span className="px-3 py-1 rounded-full bg-stone-900 text-amber-100 border border-stone-700">
              {remaining}s
            </span>
          </div>
        </div>

        {/* Question Card */}
        <div className="rounded-2xl border-4 border-[#9b2f2f] bg-[#fcf7ee] shadow-lg overflow-hidden mb-6">
          <div className="bg-[#9b2f2f] text-amber-100 px-6 py-3 flex items-center justify-between">
            <span className="text-lg font-semibold">Câu hỏi</span>
            <span className="text-sm opacity-80">Thời kỳ quá độ lên CNXH</span>
          </div>
          <div className="p-6 md:p-8">
            <p className="text-xl md:text-2xl font-semibold leading-relaxed text-[#2c1b12]">
              {question.question}
            </p>
          </div>
        </div>

        {/* Options */}
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
                <span className="h-9 w-9 rounded-lg border border-current flex items-center justify-center font-bold">
                  {opt.id}
                </span>
                <span className="text-base md:text-lg leading-relaxed">
                  {opt.text}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Feedback */}
        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/70 p-6 shadow-inner mb-8">
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
            <p className="text-sm md:text-base text-stone-700 leading-relaxed">
              {question.explanation}
            </p>
          )}
          {!isAnswered && (
            <p className="text-sm text-stone-500">
              Bạn có 30 giây để chọn đáp án, hết giờ sẽ tự mở đáp án.
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end">
          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className={`px-5 py-3 rounded-xl text-sm font-semibold tracking-wide uppercase border-2 transition-all duration-200 ${
              isAnswered
                ? "bg-[#9b2f2f] text-amber-100 border-[#7d2525] hover:bg-[#7d2525]"
                : "bg-stone-200 text-stone-500 border-stone-300 cursor-not-allowed"
            }`}
          >
            Tiếp theo →
          </button>
        </div>
      </div>
    </div>
  );
}
