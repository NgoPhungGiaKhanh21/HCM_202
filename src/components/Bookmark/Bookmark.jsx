import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { useAtom } from "jotai";
import { easing } from "maath";
import { useTexture } from "@react-three/drei";
import { bookmarkFaceAtom } from "./UI";
import * as THREE from "three";
import { BOOK_LIBRARY, currentBookAtom } from "../state/library";

export const Bookmark = (props) => {
  const meshRef = useRef();
  const [bookIndex] = useAtom(currentBookAtom);
  const [face] = useAtom(bookmarkFaceAtom); // 0 = front, 1 = back

  const current = BOOK_LIBRARY[bookIndex] || BOOK_LIBRARY[0];
  const { front, back } = current.bookmark || {
    front: "bookmark3",
    back: "bookmark2",
  };

  // Preload to avoid flicker
  useEffect(() => {
    useTexture.preload(`textures/${front}.jpg`);
    useTexture.preload(`textures/${back}.jpg`);
  }, [front, back]);

  const textures = useTexture({
    front: `textures/${front}.jpg`,
    back: `textures/${back}.jpg`,
  });

  // Không cần flipY = false cho ảnh tĩnh; để mặc định là true.
  // Sửa hiện tượng lật gương theo trục X:
  [textures.front, textures.back].forEach((t) => {
    t.wrapS = THREE.RepeatWrapping;
    t.center.set(0.5, 0.5);
    t.repeat.x = 1; // lật theo trục X để chữ không bị mirror
  });

  useFrame((_, delta) => {
    const targetRotation = face === 1 ? Math.PI : 0;
    easing.dampE(meshRef.current.rotation, [0, targetRotation, 0], 0.3, delta);
  });

  return (
    // Bỏ xoay 180° theo trục X để tránh đảo chiều tổng thể
    <group {...props}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <boxGeometry args={[0.6, 1.8, 0.005]} />
        <meshStandardMaterial attach="material-0" color="#dddddd" />
        <meshStandardMaterial attach="material-1" color="#dddddd" />
        <meshStandardMaterial attach="material-2" color="#dddddd" />
        <meshStandardMaterial attach="material-3" color="#dddddd" />
        <meshStandardMaterial attach="material-4" map={textures.front} />
        <meshStandardMaterial attach="material-5" map={textures.back} />
      </mesh>
    </group>
  );
};
