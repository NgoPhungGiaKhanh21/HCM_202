/* eslint-disable no-undef */
import { useState, useEffect, useRef } from "react";
import { Sparkles, Heart, ArrowLeft, Bug } from "lucide-react";
import { toast } from "react-toastify";

const whispers = [
  "1. Khái niệm CMCN: Là những bước nhảy vọt về trình độ của lực lượng lao động được thực hiện trên cơ sở phát minh vĩ đại về kỹ thuật và công nghệ.",

  "2. Sơ lược về các cuộc CMCN:\n\nCMCN lần thứ nhất (1.0): Bắt đầu ở Anh với sự ra đời của máy hơi nước, ngành dệt, luyện kim, và giao thông đường sắt. → Đánh dấu sự ra đời của nền sản xuất cơ khí.\n\nCMCN lần thứ hai (2.0): Ứng dụng điện năng, động cơ đốt trong, và dây chuyền sản xuất hàng loạt. → Tạo bước nhảy vọt về năng suất và mở rộng công nghiệp sang nhiều quốc gia.\n\nCMCN lần thứ ba (3.0): Tự động hóa, máy tính, công nghệ thông tin và Internet. → Đưa thế giới vào kỷ nguyên kinh tế tri thức.\n\nCMCN lần thứ tư (4.0) (hiện nay): AI, IoT, Big Data, robot, công nghệ sinh học, và in 3D. → Làm mờ ranh giới giữa vật lý – số hóa – sinh học.",

  "3. Vai trò của CMCN đối với phát triển:\n• Thúc đẩy sự phát triển của lực lượng sản xuất\n• Thúc đẩy hoàn thiện quan hệ sản xuất\n• Thúc đẩy đổi mới phương thức quản trị phát triển",

  "4. Định nghĩa công nghiệp hóa: CNH, HĐH là quá trình đổi mới toàn diện các lĩnh vực sản xuất, kinh doanh, dịch vụ và quản lý kinh tế - xã hội, chuyển từ việc dựa vào lao động thủ công sang sử dụng công nghệ tiên tiến, máy móc hiện đại và phương pháp quản lý hiệu quả nhằm đạt được năng suất cao hơn và thúc đẩy sự phát triển bền vững.",

  "5. Các mô hình CNH tiêu biểu:\n• Mô hình CNH các nước tư bản cổ điển\n• Mô hình CNH kiểu Liên Xô (cũ)\n• Mô hình CNH của Nhật Bản và các nước công nghiệp mới (NICs)",

  "6. Khái niệm về Hội nhập kinh tế quốc tế: Hội nhập kinh tế quốc tế là quá trình một quốc gia tham gia, gắn kết nền kinh tế của mình với nền kinh tế thế giới. Việc này được thực hiện trên cơ sở lợi ích đồng thời tuân thủ các chuẩn mực chung quốc tế.",

  "7. Chiến lược Hội nhập phải Chủ động và Tích cực: Việt Nam phải tích cực, chủ động tham gia vào các liên kết kinh tế quốc tế, thực hiện đầy đủ các cam kết đã ký với các tổ chức khu vực và quốc tế (như WTO, ASEAN, APEC, và các FTA). Việc này bao gồm cả việc xây dựng chiến lược và lộ trình hội nhập phù hợp với điều kiện của mình.",

  "8. Xây dựng Nền kinh tế Độc lập, Tự chủ: Hội nhập kinh tế quốc tế phải được thực hiện đồng thời với việc xây dựng nền kinh tế độc lập, tự chủ của Việt Nam. Điều này nhằm đảm bảo phát triển bền vững, không chịu sự chi phối hoặc bất cứ điều kiện nào về đường lối, chính sách của các tổ chức kinh tế nước ngoài.",

  "9. Rủi ro về bất bình đẳng xã hội và môi trường (Tác động Tiêu cực/Thách thức): Hội nhập có thể dẫn đến phân phối lợi ích và rủi ro không công bằng giữa các nước và các nhóm trong xã hội, gây ra nguy cơ gia tăng khoảng cách giàu nghèo và làm cạn kiệt tài nguyên, ô nhiễm môi trường.",
];

function Game() {
  const [fireflies, setFireflies] = useState([]);
  const [currentWhisper, setCurrentWhisper] = useState("");
  const [showWhisper, setShowWhisper] = useState(false);
  const [isForestBright, setIsForestBright] = useState(false);
  const [clickParticles, setClickParticles] = useState([]);
  const [stars, setStars] = useState([]);
  const [trees, setTrees] = useState([]);
  const [floatingFireflies, setFloatingFireflies] = useState([]);
  const [whisperIndex, setWhisperIndex] = useState(0); // 📝 Theo dõi thứ tự whisper
  const canvasRef = useRef(null);
  const particleIdRef = useRef(0);
  const audioRef = useRef(null); // 🔊 Thêm ref để điều khiển nhạc

  useEffect(() => {
    const starArray = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 60,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    }));
    setStars(starArray);
  }, []);

  // 🐝 Animation đom đóm
  useEffect(() => {
    if (fireflies.length === 0) return;

    const animate = () => {
      setFireflies((prev) =>
        prev.map((f) => {
          let x = f.x + f.vx;
          let y = f.y + f.vy;
          let vx = f.vx;
          let vy = f.vy;

          if (x < 5) vx = Math.abs(vx) * 0.7;
          if (x > 95) vx = -Math.abs(vx) * 0.7;
          if (y < 5) vy = Math.abs(vy) * 0.7;
          if (y > 95) vy = -Math.abs(vy) * 0.7;

          if (Math.random() < 0.02) {
            vx += (Math.random() - 0.5) * 0.02;
            vy += (Math.random() - 0.5) * 0.02;
          }

          const speed = Math.sqrt(vx * vx + vy * vy);
          if (speed > 0.12) {
            vx *= 0.96;
            vy *= 0.96;
          }

          vx *= 0.995;
          vy *= 0.995;

          return {
            ...f,
            x,
            y,
            vx,
            vy,
            glowPhase: (f.glowPhase + 0.03) % (Math.PI * 2),
            brightness: 0.6 + Math.sin(f.glowPhase) * 0.4,
          };
        })
      );

      setClickParticles((prev) =>
        prev.map((p) => ({ ...p, life: p.life - 1 })).filter((p) => p.life > 0)
      );

      requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [fireflies.length]);

  // 🌲 Khi rừng sáng — phát nhạc & tạo cảnh
  useEffect(() => {
    if (fireflies.length >= 10 && !isForestBright) {
      setIsForestBright(true);
      setCurrentWhisper(
        "Cậu đã thắp sáng cả khu rừng rồi! Chúc mừng cậu thành 1 phần trong Đóm Family 🌲✨"
      );
      setShowWhisper(true);

      // 🔊 Phát nhạc
      if (!audioRef.current) {
        audioRef.current = new Audio("/audio/sa1.mp3");
        audioRef.current.volume = 0.6;
        audioRef.current.loop = true;
      }
      audioRef.current.play().catch(() => {});

      // 🌳 Sinh cây
      const treeArray = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        width: Math.random() * 60 + 40,
        height: Math.random() * 120 + 120,
        delay: i * 0.15,
        opacity: 0,
      }));
      setTrees(treeArray);

      setTimeout(() => {
        setTrees((prev) => prev.map((tree) => ({ ...tree, opacity: 0.8 })));
      }, 100);

      setTimeout(() => {
        const newFlies = Array.from({ length: 25 }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 6,
          duration: Math.random() * 3 + 4,
          delay: Math.random() * 2,
        }));
        setFloatingFireflies(newFlies);
      }, 1500);
    }
  }, [fireflies.length, isForestBright]);

  // 🩵 Click thả đom đóm
  const handleCanvasClick = (e) => {
    if (fireflies.length >= 10) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const angle = Math.random() * Math.PI * 2;
    const speed = 0.005 + Math.random() * 0.003;

    const newFirefly = {
      id: Date.now(),
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      brightness: 1,
      size: Math.random() * 6 + 10,
      glowPhase: Math.random() * Math.PI * 2,
    };

    setFireflies((prev) => [...prev, newFirefly]);

    const particles = Array.from({ length: 8 }, () => ({
      id: particleIdRef.current++,
      x,
      y,
      life: 30,
    }));
    setClickParticles((prev) => [...prev, ...particles]);

    // 📝 Hiển thị whisper theo thứ tự
    const whisper = whispers[whisperIndex % whispers.length];
    setCurrentWhisper(whisper);
    setShowWhisper(true);
    setWhisperIndex((prev) => prev + 1); // Tăng index cho lần click tiếp theo
    setTimeout(() => setShowWhisper(false), 100000);
  };

  // 🌌 Reset rừng
  const resetForest = () => {
    setFireflies([]);
    setIsForestBright(false);
    setShowWhisper(false);
    setCurrentWhisper("");
    setClickParticles([]);
    setFloatingFireflies([]);
    setTrees([]);
    setWhisperIndex(0); // 🔄 Reset về whisper đầu tiên

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const getBackgroundGradient = () => {
    if (isForestBright) return "from-blue-900 via-blue-800 to-cyan-900";
    const progress = fireflies.length / 10;
    const darkness = Math.max(0, 1 - progress);
    return darkness > 0.7
      ? "from-slate-900 via-slate-800 to-slate-900"
      : darkness > 0.4
      ? "from-slate-800 via-blue-950 to-slate-800"
      : "from-blue-950 via-blue-900 to-slate-800";
  };

  // 🌈 UI
  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      <button
        onClick={() => toast.error("Hoc tiepp di nhaa!")}
        className="absolute top-6 left-6 z-30 text-white/60 hover:text-white transition-colors duration-300"
        aria-label="Quay lại"
      >
        <ArrowLeft className="w-7 h-7" />
      </button>
      <div
        className={`absolute inset-0 bg-gradient-to-br ${getBackgroundGradient()} transition-all duration-[2500ms]`}
      />

      {/* 🌟 Sao */}
      {stars.map((star, idx) => (
        <div
          key={idx}
          className="absolute rounded-full bg-white animate-pulse pointer-events-none"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
            opacity: isForestBright ? 0.9 : 0.3,
          }}
        />
      ))}

      {/* 🌲 Cây + đom đóm bay */}
      {isForestBright && (
        <>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-green-900/40 to-transparent pointer-events-none transition-opacity duration-2000" />
          {trees.map((tree) => (
            <div
              key={tree.id}
              className="absolute bottom-0 transition-all duration-1000 ease-out pointer-events-none"
              style={{
                left: `${tree.x}%`,
                width: `${tree.width}px`,
                height: `${tree.height}px`,
                opacity: tree.opacity,
                transitionDelay: `${tree.delay}s`,
                transform:
                  tree.opacity > 0 ? "translateY(0)" : "translateY(50px)",
              }}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-green-900 via-green-800 to-green-700 rounded-t-full" />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-green-800 to-green-600 rounded-t-full blur-sm opacity-50" />
              </div>
            </div>
          ))}
          {floatingFireflies.map((f) => (
            <div
              key={f.id}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: `${f.x}%`,
                top: `${f.y}%`,
                width: `${f.size}px`,
                height: `${f.size}px`,
                animation: `floatFirefly ${f.duration}s infinite ease-in-out`,
                animationDelay: `${f.delay}s`,
              }}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-yellow-300 rounded-full blur-md opacity-70" />
                <div className="absolute inset-0 bg-yellow-200 rounded-full" />
              </div>
            </div>
          ))}
        </>
      )}

      {/* 💡 Đom đóm + particle */}
      <div
        ref={canvasRef}
        onClick={handleCanvasClick}
        className={`absolute inset-0 ${
          fireflies.length < 10 ? "cursor-pointer" : "cursor-default"
        }`}
      >
        {fireflies.map((f) => (
          <div
            key={f.id}
            className="absolute pointer-events-none"
            style={{
              left: `${f.x}%`,
              top: `${f.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="relative"
              style={{ width: `${f.size}px`, height: `${f.size}px` }}
            >
              <div
                className="absolute inset-0 rounded-full bg-yellow-300 blur-md"
                style={{
                  opacity: f.brightness * 0.7,
                  boxShadow: `0 0 ${f.size * 2.5}px ${
                    f.size * 1.2
                  }px rgba(250,204,21,${f.brightness * 0.5})`,
                }}
              />
              <div
                className="absolute inset-0 rounded-full bg-yellow-100"
                style={{ opacity: f.brightness }}
              />
            </div>
          </div>
        ))}

        {clickParticles.map((p) => (
          <div
            key={p.id}
            className="absolute pointer-events-none"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              opacity: p.life / 30,
              transform: `translate(-50%, -50%) scale(${
                1 + (30 - p.life) / 30
              })`,
            }}
          >
            <Sparkles className="w-4 h-4 text-yellow-300" />
          </div>
        ))}
      </div>

      {/* ❤️ Whisper */}
      <div
        className={`absolute top-1/4 left-1/2 transform -translate-x-1/2 transition-all duration-1000 max-w-2xl px-6 z-10 ${
          showWhisper ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl px-8 py-6 shadow-2xl border border-white/30 max-h-96 overflow-y-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Heart className="w-5 h-5 text-pink-300 animate-pulse" />
            <Sparkles className="w-4 h-4 text-yellow-300" />
          </div>
          <p className="text-lg md:text-xl text-white text-center font-light leading-relaxed tracking-wide whitespace-pre-line">
            {currentWhisper}
          </p>
        </div>
      </div>

      {/* 🌸 Reset */}
      {isForestBright && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-[fadeIn_1s_ease-out]">
          <button
            onClick={resetForest}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-4 rounded-full font-light text-lg shadow-2xl hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 border-2 border-white/30"
          >
            Bắt đầu hành trình mới
          </button>
        </div>
      )}

      {/* 🌙 Màn mở đầu */}
      {!isForestBright && fireflies.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center space-y-6 px-6">
            <div className="text-8xl mb-4 animate-pulse">🌙</div>
            <h1 className="text-5xl md:text-6xl font-light text-white tracking-wide">
              Đom Đóm Trong Tim
            </h1>
            <p className="text-xl text-white/70 font-light max-w-md mx-auto">
              Chạm để thắp sáng hy vọng trong đêm tối
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes floatFirefly {
          0%, 100% { transform: translate(0, 0); opacity: 0.7; }
          25% { transform: translate(15px, -20px); opacity: 1; }
          50% { transform: translate(30px, -10px); opacity: 0.8; }
          75% { transform: translate(15px, 5px); opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}

export default Game;
