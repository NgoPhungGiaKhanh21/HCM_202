import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Info, Podcast, Gamepad2, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  // 📌 Hàm scroll đến phần TakeQuiz
  const scrollToQuiz = () => {
    const quizSection = document.getElementById("takequiz");
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const scrollToHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const menuItems = [
    { key: "home", label: "Trang chủ", icon: Home, action: scrollToHome ,path:''},
    // 👇 mục Khái niệm không còn path nữa
    { key: "quiz", label: "Quiz ôn tập", icon: Info, action: scrollToQuiz },
    { key: "podcast", label: "Podcast", icon: Podcast, path: "/podcast" },
    { key: "game", label: "Game", icon: Gamepad2, path: "/game" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="relative w-full px-0 py-3 flex items-center justify-center">
        <div className="absolute left-6 flex items-center gap-2">
          <img src={logo} alt="logo" className="h-15 w-22" />
          <h1 className="text-lg font-bold text-blue-600">
            Chương 6: CNH - HĐH & AI
          </h1>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return item.path ? (
              <Link
                key={item.key}
                to={item.path}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            ) : (
              <button
                key={item.key}
                onClick={item.action}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Icon menu mobile */}
        <button
          className="absolute right-4 md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          onClick={() => setOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Drawer mobile */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50">
            <div className="p-4 border-b flex items-center justify-between">
              <h2 className="text-lg font-semibold">Danh mục</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col p-4">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return item.path ? (
                  <Link
                    key={item.key}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors"
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ) : (
                  <button
                    key={item.key}
                    onClick={item.action}
                    className="flex items-center gap-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors text-left"
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
