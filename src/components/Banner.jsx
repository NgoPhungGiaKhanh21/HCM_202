// components/Banner.jsx
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

// Quote của Bác Hồ
const HO_CHI_MINH_QUOTES = [
  {
    quote: "Không có gì quý hơn độc lập, tự do.",
    source: "Hồ Chí Minh"
  },
  {
    quote: "Học để làm việc, làm người, làm cán bộ. Học để phụng sự đoàn thể, giai cấp và nhân dân.",
    source: "Hồ Chí Minh"
  },
  {
    quote: "Một năm khởi đầu từ mùa xuân. Một đời khởi đầu từ tuổi trẻ. Tuổi trẻ là mùa xuân của xã hội.",
    source: "Hồ Chí Minh"
  },
  {
  quote: "Tự lực, tự cường, từng bước vượt khó khăn.",
  source: "Hồ Chí Minh"
},
{
  quote: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.",
  source: "Hồ Chí Minh"
}
];

export const Banner = () => {
  const SLIDES = useMemo(
    () => [
      "textures/banner01.jpg",
      "textures/banner02.jpg",
      "textures/banner03.jpg",
      "textures/banner04.jpg",
      "textures/banner05.jpg",
    ],
    []
  );

  const [current, setCurrent] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const intervalRef = useRef(null);
  const AUTOPLAY_MS = 6000;

  const goTo = useCallback(
    (index) => {
      const next = ((index % SLIDES.length) + SLIDES.length) % SLIDES.length;
      setCurrent(next);
    },
    [SLIDES.length]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (SLIDES.length <= 1) return;

    const start = () => {
      if (intervalRef.current != null) return;
      intervalRef.current = window.setInterval(() => {
        setCurrent((c) => (c + 1) % SLIDES.length);
      }, AUTOPLAY_MS);
    };

    const stop = () => {
      if (intervalRef.current != null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    if (!isHover) start();

    return () => stop();
  }, [SLIDES.length, isHover]);

  return (
    <section
      id="banner"
      className="mt-[69px] relative w-full bg-gradient-to-b "
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.4'%3E%3Cpath d='M30 5l5.09 10.26L46 16.27l-8 7.79 1.89 11.02L30 29.77l-9.89 5.31L22 24.06l-8-7.79 10.91-1.01L30 5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-20">
        {/* Main Banner Slider */}
        <div
          className="relative w-full aspect-[16/7] overflow-hidden rounded-2xl shadow-2xl ring-2 ring-yellow-500/30"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {/* Slides */}
          <div
            className="flex h-full w-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {SLIDES.map((src, idx) => (
              <div className="relative w-full h-full flex-shrink-0" key={idx}>
                <img
                  src={src}
                  alt={`Tư tưởng Hồ Chí Minh - Slide ${idx + 1}`}
                  className="h-full w-full object-cover"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-transparent to-red-900/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-transparent to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-2xl px-8 md:px-16">
                    {/* Yellow star decoration */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="mb-4"
                    >
                      <svg viewBox="0 0 24 24" className="w-12 h-12 text-yellow-400 drop-shadow-lg" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </motion.div>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                      Học tập và làm theo
                      <span className="block text-yellow-400">Tư tưởng Hồ Chí Minh</span>
                    </h1>
                    
                    {/* Quote */}
                    <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg border-l-4 border-yellow-400">
                      <p className="text-lg md:text-xl text-white italic">
                        "{HO_CHI_MINH_QUOTES[idx]?.quote || HO_CHI_MINH_QUOTES[0].quote}"
                      </p>
                      <p className="mt-2 text-yellow-400 font-semibold">
                        — {HO_CHI_MINH_QUOTES[idx]?.source || HO_CHI_MINH_QUOTES[0].source}
                      </p>
                    </div>
                    
                    {/* <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-yellow-500 px-6 py-3 font-semibold text-red-900 hover:bg-yellow-400 transition shadow-lg">
                      Khám phá ngay
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 1 1-1.414-1.414L13.586 11H4a1 1 0 1 1 0-2h9.586l-3.293-3.293a1 1 0 0 1 0-1.414Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          {SLIDES.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-yellow-500/80 p-2 text-red-900 hover:bg-yellow-400 transition shadow-lg"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 15.707a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414l5-5A1 1 0 1 1 12.707 5.293L8.414 9.586l4.293 4.293a1 1 0 0 1 0 1.414Z" clipRule="evenodd"/>
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-yellow-500/80 p-2 text-red-900 hover:bg-yellow-400 transition shadow-lg"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 4.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5A1 1 0 0 1 7.293 14.293L11.586 10 7.293 5.707a1 1 0 0 1 0-1.414Z" clipRule="evenodd"/>
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Dots indicator */}
        {SLIDES.length > 1 && (
          <div className="mt-6 flex justify-center gap-3">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current 
                    ? "w-8 bg-yellow-400" 
                    : "w-2 bg-yellow-400/40 hover:bg-yellow-400/60"
                }`}
              />
            ))}
          </div>
        )}

        {/* Stats section */}
        {/* <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "134+", label: "Năm di sản" },
            { number: "1000+", label: "Bài viết" },
            { number: "500+", label: "Câu nói" },
            { number: "∞", label: "Giá trị trường tồn" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-yellow-500/20">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">{stat.number}</div>
              <div className="text-sm text-yellow-100/80 mt-1">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Banner;