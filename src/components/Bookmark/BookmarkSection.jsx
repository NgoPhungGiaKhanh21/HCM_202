// components/Bookmark/BookmarkSection.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, Html } from "@react-three/drei";
import { Experience } from "./Experience";
import { UI } from "./UI";

const BookmarkSection = () => {
  return (
    <section
      id="bookmark-section"
      className="w-full h-full flex flex-col bg-gradient-to-b from-yellow-600 via-yellow-500 to-yellow-600 text-white overflow-hidden"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-700 to-red-600"></div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.3) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Header */}
      <header className="shrink-0 py-6 flex flex-col items-center justify-center relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">📑</span>
          <h1 className="text-2xl lg:text-3xl font-bold text-red-900">
            Bookmark 3D
          </h1>
          <span className="text-2xl">📑</span>
        </div>
        <p className="text-red-800/80 text-sm">
          Đánh dấu những trang quan trọng
        </p>
      </header>

      {/* Canvas */}
      <div className="relative w-full flex-1 min-h-0 overflow-hidden">
        {/* Decorative frame */}
        <div className="absolute inset-4 border-2 border-red-600/30 rounded-xl pointer-events-none z-10"></div>

        <Canvas
          shadows
          style={{ width: "100%", height: "100%" }}
          camera={{
            position: [1, 1, 3],
            fov: 45,
          }}
        >
          <Suspense fallback={null}>
            <Experience />
            <Html fullscreen>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <UI showMarquee={false} />
              </div>
            </Html>
          </Suspense>
        </Canvas>
        <Loader />
      </div>

      {/* Bottom hint */}
      <div className="shrink-0 py-3 text-center">
        <p className="text-red-900/60 text-xs">
          🔖 Xoay để xem chi tiết bookmark
        </p>
      </div>
    </section>
  );
};

export default BookmarkSection;
