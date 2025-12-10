import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as THREE from "three";
import gsap from "gsap";
import Header from "./Header";

export default function Notebook3D() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);

  const mountRef = useRef(null);
  const videoRef = useRef(null);
  const pagesRef = useRef([]);
  const sceneRef = useRef(null);
  const pageIndexRef = useRef(0);

  const colors = {
    primary: "#C60C30",
    secondary: "#FFD700",
    dark: "#1a1a1a",
    gold: "#DAA520",
    cream: "#FFF8DC",
  };

  const pagesData = [
    {
      id: 1,
      type: "cover",
      content: "LỊCH SỬ\nĐẢNG VIỆT NAM",
      sub: "1930 - Ngày truyền thống",
      color: colors.primary,
    },
    {
      id: 2,
      type: "image",
      content:
        "https://via.placeholder.com/600x800/C60C30/FFD700?text=Thành+lập+Đảng",
    },
    {
      id: 3,
      type: "content",
      content:
        "SỰ KIỆN LỊCH SỬ\n\n• 3/2/1930: Thành lập Đảng Cộng sản Việt Nam\n• 1945: Cách mạng Tháng Tám\n• 2/9/1945: Độc lập",
    },
    {
      id: 4,
      type: "image",
      content:
        "https://via.placeholder.com/600x800/C60C30/FFD700?text=Kháng+Chiến",
    },
    {
      id: 5,
      type: "content",
      content:
        "KHÁNG CHIẾN CHỐNG PHÁP\n\n• 1946-1954: Kháng chiến 9 năm\n• 7/5/1954: Chiến thắng Điện Biên Phủ\n• Độc lập toàn quốc",
    },
    {
      id: 6,
      type: "back",
      content: "VINH QUANG\nVIỆT NAM",
      color: colors.primary,
    },
  ];

  const drawStar = (ctx, cx, cy, spikes, outerRadius, innerRadius) => {
    let rot = (Math.PI / 2) * 3;
    let step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      ctx.lineTo(
        cx + Math.cos(rot) * outerRadius,
        cy + Math.sin(rot) * outerRadius
      );
      rot += step;
      ctx.lineTo(
        cx + Math.cos(rot) * innerRadius,
        cy + Math.sin(rot) * innerRadius
      );
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fill();
  };

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 0);

    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(5, 10, 7);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    scene.add(dirLight);

    const pageWidth = 2.4;
    const pageHeight = 3.2;
    const pageThickness = 0.05;
    const geometry = new THREE.BoxGeometry(
      pageWidth,
      pageHeight,
      pageThickness
    );

    pagesRef.current = [];
    let bookGroup = new THREE.Group();
    scene.add(bookGroup);

    pagesData.forEach((data, index) => {
      const canvas = document.createElement("canvas");
      canvas.width = 1024;
      canvas.height = 1400;
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = data.color || colors.cream;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = colors.secondary;
      ctx.lineWidth = 15;
      ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

      ctx.strokeStyle = colors.gold;
      ctx.lineWidth = 3;
      ctx.strokeRect(35, 35, canvas.width - 70, canvas.height - 70);

      ctx.fillStyle =
        data.type === "cover" || data.type === "back"
          ? colors.cream
          : colors.dark;
      ctx.textAlign = "center";

      if (data.type === "cover") {
        ctx.font = "bold 100px 'Times New Roman'";
        ctx.fillText(data.content.split("\n")[0], canvas.width / 2, 400);
        ctx.font = "80px 'Times New Roman'";
        ctx.fillText(data.content.split("\n")[1] || "", canvas.width / 2, 550);
        ctx.font = "italic 45px Arial";
        ctx.fillStyle = colors.secondary;
        ctx.fillText(data.sub || "", canvas.width / 2, 1200);
        ctx.fillStyle = colors.secondary;
        drawStar(ctx, canvas.width / 2, 150, 5, 80, 40);
      } else if (data.type === "image") {
        ctx.fillStyle = colors.secondary;
        ctx.fillRect(100, 200, canvas.width - 200, canvas.height - 400);
        ctx.fillStyle = colors.dark;
        ctx.font = "50px Arial";
        ctx.fillText("[ HÌNH ẢNH ]", canvas.width / 2, canvas.height / 2);
      } else if (data.type === "content") {
        ctx.fillStyle = colors.primary;
        ctx.font = "bold 60px 'Times New Roman'";
        ctx.fillText(data.content.split("\n")[0], canvas.width / 2, 250);

        ctx.fillStyle = colors.dark;
        ctx.font = "40px Arial";
        ctx.textAlign = "left";
        const lines = data.content.split("\n").slice(2);
        let y = 400;
        lines.forEach((line) => {
          ctx.fillText(line, 100, y);
          y += 80;
        });

        ctx.textAlign = "center";
        ctx.fillStyle = colors.secondary;
        ctx.font = "bold 30px Arial";
        ctx.fillText(`★ ${index + 1} ★`, canvas.width / 2, canvas.height - 60);
      } else if (data.type === "back") {
        ctx.fillStyle = colors.cream;
        ctx.font = "bold 90px 'Times New Roman'";
        ctx.fillText(data.content.split("\n")[0], canvas.width / 2, 500);
        ctx.font = "80px 'Times New Roman'";
        ctx.fillText(data.content.split("\n")[1] || "", canvas.width / 2, 700);
        drawStar(ctx, canvas.width / 2, 1100, 5, 60, 30);
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;

      const matParams = { roughness: 0.4, metalness: 0.05 };
      const materials = [
        new THREE.MeshStandardMaterial({ color: 0xffffff, ...matParams }),
        new THREE.MeshStandardMaterial({ color: 0xffffff, ...matParams }),
        new THREE.MeshStandardMaterial({ color: 0xffffff, ...matParams }),
        new THREE.MeshStandardMaterial({ color: 0xffffff, ...matParams }),
        new THREE.MeshStandardMaterial({ map: texture, ...matParams }),
        new THREE.MeshStandardMaterial({ map: texture, ...matParams }),
      ];

      const group = new THREE.Group();
      const mesh = new THREE.Mesh(geometry, materials);

      mesh.position.x = pageWidth / 2;
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      group.add(mesh);
      group.position.z = -index * 0.02;
      group.userData = { id: index, baseZ: -index * 0.02 };

      bookGroup.add(group);
      pagesRef.current.push(group);
    });

    const spineGeo = new THREE.BoxGeometry(
      0.4,
      pageHeight + 0.2,
      0.2 + pagesData.length * 0.02
    );
    const spineMat = new THREE.MeshStandardMaterial({
      color: parseInt(colors.primary.replace("#", "0x"), 16),
      metalness: 0.2,
      roughness: 0.5,
    });
    const spine = new THREE.Mesh(spineGeo, spineMat);
    spine.position.set(-0.2, 0, -(pagesData.length * 0.02) / 2);
    spine.castShadow = true;
    bookGroup.add(spine);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onDocumentClick = (event) => {
      if (isFlipping) return;

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(bookGroup.children, true);

      if (intersects.length > 0) {
        if (event.clientX < window.innerWidth / 2) {
          if (pageIndexRef.current > 0) flipToPrev();
        } else {
          if (pageIndexRef.current < pagesRef.current.length - 1) flipToNext();
        }
      }
    };

    renderer.domElement.addEventListener("click", onDocumentClick);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("click", onDocumentClick);
      if (
        mountRef.current &&
        renderer.domElement.parentNode === mountRef.current
      ) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const flipToNext = () => {
    if (isFlipping || pageIndexRef.current >= pagesRef.current.length - 1)
      return;

    setIsFlipping(true);
    const index = pageIndexRef.current;
    const pageGroup = pagesRef.current[index];

    gsap.to(pageGroup.rotation, {
      y: -Math.PI,
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: () => {
        setIsFlipping(false);
        pageIndexRef.current += 1;
        setCurrentPage(pageIndexRef.current + 1);
      },
    });

    gsap
      .timeline()
      .to(pageGroup.position, { z: 1, duration: 0.6, ease: "power1.out" })
      .to(pageGroup.position, {
        z: pageGroup.userData.baseZ + pagesData.length * 0.02,
        duration: 0.6,
        ease: "power1.in",
      });
  };

  const flipToPrev = () => {
    if (isFlipping || pageIndexRef.current <= 0) return;

    setIsFlipping(true);
    const index = pageIndexRef.current - 1;
    const pageGroup = pagesRef.current[index];

    gsap.to(pageGroup.rotation, {
      y: 0,
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: () => {
        setIsFlipping(false);
        pageIndexRef.current -= 1;
        setCurrentPage(pageIndexRef.current + 1);
      },
    });

    gsap
      .timeline()
      .to(pageGroup.position, { z: 1, duration: 0.6, ease: "power1.out" })
      .to(pageGroup.position, {
        z: pageGroup.userData.baseZ,
        duration: 0.6,
        ease: "power1.in",
      });
  };

  return (
    <>
      <Header />
      <div className="w-full h-screen relative overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/audio/VN1.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-5 pointer-events-none"></div>

        <div ref={mountRef} className="w-full h-full relative z-10" />

        <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center gap-8 z-50 pointer-events-none">
          <button
            onClick={flipToPrev}
            disabled={currentPage <= 1 || isFlipping}
            className={`pointer-events-auto p-4 rounded-full transition-all shadow-lg backdrop-blur-md border-2 ${
              currentPage <= 1 || isFlipping
                ? "opacity-30 cursor-not-allowed bg-gray-400/20 border-gray-500"
                : "bg-red-600/80 border-yellow-400 hover:bg-red-700 hover:scale-110 text-yellow-300 hover:text-white cursor-pointer"
            }`}
          >
            <ChevronLeft size={32} />
          </button>

          <span className="text-yellow-300 font-bold text-xl bg-red-900/70 px-6 py-3 rounded-lg backdrop-blur border-2 border-yellow-400">
            {currentPage} / {pagesData.length}
          </span>

          <button
            onClick={flipToNext}
            disabled={currentPage >= pagesData.length || isFlipping}
            className={`pointer-events-auto p-4 rounded-full transition-all shadow-lg backdrop-blur-md border-2 ${
              currentPage >= pagesData.length || isFlipping
                ? "opacity-30 cursor-not-allowed bg-gray-400/20 border-gray-500"
                : "bg-red-600/80 border-yellow-400 hover:bg-red-700 hover:scale-110 text-yellow-300 hover:text-white cursor-pointer"
            }`}
          >
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center z-40">
          <div className="text-6xl text-yellow-300 mb-2">★</div>
          <h1 className="text-5xl font-bold text-yellow-300 drop-shadow-lg tracking-wider">
            LỊCH SỬ ĐẢNG VIỆT NAM
          </h1>
          <div className="flex gap-4 justify-center mt-3">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-yellow-400"></div>
            <div className="text-yellow-400">★</div>
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>
        </div>
      </div>
    </>
  );
}
