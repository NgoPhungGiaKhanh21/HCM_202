import React, { Suspense, useEffect, forwardRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, Html, useTexture } from "@react-three/drei";
import { Experience } from "./Experience";
import { UI } from "./UI";
import { useAtom } from "jotai";
import { Book } from "./Book";
import { BOOK_LIBRARY, currentBookAtom } from "../state/library";
import BookmarkSection from "../Bookmark/BookmarkSection";

const BookSection = forwardRef((props, ref) => {
  const [bookIndex] = useAtom(currentBookAtom);
  const pages = BOOK_LIBRARY[bookIndex].pages;

  useEffect(() => {
    pages.forEach((p) => {
      useTexture.preload(`textures/${p.front}.jpg`);
      useTexture.preload(`textures/${p.back}.jpg`);
    });
    useTexture.preload(`textures/book-cover-roughness.jpg`);
    useTexture.preload(`textures/ruled-paper.jpg`);
  }, [pages]);

  return (
    <section
      id="book-section"
      className="fixed inset-0 w-screen h-screen flex bg-gradient-to-b from-red-900 via-red-800 to-red-900 text-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>

      {/* Main Book Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="shrink-0 py-4 flex flex-col items-center justify-center relative z-10">
          <div className="flex items-center gap-3 mb-1">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-yellow-400"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <h1 className="text-xl lg:text-2xl font-bold text-yellow-400">
              Sổ Tay 3D Tương Tác
            </h1>
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-yellow-400"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <p className="text-yellow-100/80 text-xs">
            Lật trang để khám phá nội dung
          </p>
        </header>

        <div className="relative w-full flex-1 min-h-0 overflow-hidden">
          <Canvas
            shadows
            gl={{ logarithmicDepthBuffer: true }}
            style={{ width: "100%", height: "100%" }}
            camera={{
              position: [
                -0.5,
                1,
                typeof window !== "undefined" && window.innerWidth > 800
                  ? 4
                  : 9,
              ],
              fov: 45,
              near: 0.2,
              far: 50,
            }}
          >
            <Suspense fallback={null}>
              <Experience>
                <Book ref={ref} position={[0, 0.25, 0]} pages={pages} />
              </Experience>

              <Html fullscreen>
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 pointer-events-none">
                  <div className="pointer-events-auto">
                    <UI showMarquee={false} />
                  </div>
                </div>
              </Html>
            </Suspense>
          </Canvas>
          <Loader />
        </div>

        <div className="shrink-0 py-2 text-center">
          <p className="text-yellow-200/60 text-xs">
            💡 Nhấp vào trang hoặc sử dụng nút điều hướng để lật sách
          </p>
        </div>
      </div>

      {/* Bookmark Sidebar */}
      <div className="w-96 lg:w-[450px] shrink-0 border-l-4 border-yellow-400/40">
        <BookmarkSection />
      </div>
    </section>
  );
});

export default BookSection;
