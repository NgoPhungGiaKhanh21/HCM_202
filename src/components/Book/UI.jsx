import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { BOOK_LIBRARY, bookPageAtom, currentBookAtom } from "../state/library";

export const UI = ({ showMarquee = true }) => {
  const [bookIndex, setBookIndex] = useAtom(currentBookAtom);
  const [page, setPage] = useAtom(bookPageAtom);
  const pages = BOOK_LIBRARY[bookIndex].pages;
  const title = BOOK_LIBRARY[bookIndex].title;

  // Ref để kiểm soát trạng thái chuyển sách
  const isSwitchingBook = useRef(false);

  useEffect(() => {
    if (showMarquee) return;
    if (isSwitchingBook.current) {
      isSwitchingBook.current = false;
      return; // KHÔNG phát flip khi chuyển sách
    }
    const audio = new Audio("");
    audio.play();
  }, [page, showMarquee]);

  const prevBook = () => {
    isSwitchingBook.current = true;
    const next = (bookIndex - 1 + BOOK_LIBRARY.length) % BOOK_LIBRARY.length;
    setBookIndex(next);
    setPage(0);
  };
  const nextBook = () => {
    isSwitchingBook.current = true;
    const next = (bookIndex + 1) % BOOK_LIBRARY.length;
    setBookIndex(next);
    setPage(0);
  };

  const Controls = (
    <main className="pointer-events-none select-none z-10 absolute inset-0 flex justify-between flex-col">
      <div className="pointer-events-auto mt-8 flex items-center justify-center gap-4">
        {/* <button
          className="px-4 py-2 rounded-full bg-white/70 text-black hover:bg-white transition"
          onClick={prevBook}
        >
          ← Prev book
        </button>
        <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
        <button
          className="px-4 py-2 rounded-full bg-white/70 text-black hover:bg-white transition"
          onClick={nextBook}
        >
          Next book →
        </button> */}
      </div>

      <div className="w-full overflow-auto pointer-events-auto flex justify-center">
        <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
          {pages.map((_, index) => (
            <button
              key={index}
              className={`border-transparent hover:border-blue-500 transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${
                index === page
                  ? "bg-blue-100 text-black"
                  : "bg-white/30 text-black"
              }`}
              onClick={() => setPage(index)}
            >
              {index === 0 ? "Cover" : `Page ${index}`}
            </button>
          ))}
          <button
            className={`border-transparent hover:border-blue-500 transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${
              page === pages.length
                ? "bg-blue-100 text-black"
                : "bg-white/30 text-black"
            }`}
            onClick={() => setPage(pages.length)}
          >
            Back Cover
          </button>
        </div>
      </div>
    </main>
  );

  const Marquee = (
    <div className="fixed inset-0 z-0 flex items-center -rotate-2 select-none pointer-events-none">
      <div className="relative">
        <div className="bg-white/0 animate-horizontal-scroll flex items-center gap-8 w-max px-8">
          <h1 className="shrink-0 text-blue-900 text-10xl font-black">
            Business Notebook
          </h1>
          <h2 className="shrink-0 text-blue-700 text-8xl italic font-light">
            Professional Notes
          </h2>
          <h2 className="shrink-0 text-blue-800 text-12xl font-bold">
            Organize Ideas
          </h2>
          <h2 className="shrink-0 text-blue-600 text-9xl font-medium">
            Productivity
          </h2>
          <h2 className="shrink-0 text-blue-700 text-9xl font-extralight italic">
            Plan
          </h2>
          <h2 className="shrink-0 text-blue-800 text-13xl font-bold">
            Achieve
          </h2>
          <h2 className="shrink-0 text-blue-600 text-13xl font-bold italic">
            Goals
          </h2>
        </div>
        <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
          <h1 className="shrink-0 text-blue-900 text-10xl font-black">
            Business Notebook
          </h1>
          <h2 className="shrink-0 text-blue-700 text-8xl italic font-light">
            Professional Notes
          </h2>
          <h2 className="shrink-0 text-blue-800 text-12xl font-bold">
            Organize Ideas
          </h2>
          <h2 className="shrink-0 text-blue-600 text-9xl font-medium">
            Productivity
          </h2>
          <h2 className="shrink-0 text-blue-700 text-9xl font-extralight italic">
            Plan
          </h2>
          <h2 className="shrink-0 text-blue-800 text-13xl font-bold">
            Achieve
          </h2>
          <h2 className="shrink-0 text-blue-600 text-13xl font-bold italic">
            Goals
          </h2>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {!showMarquee && Controls}
      {showMarquee && Marquee}
    </>
  );
};
