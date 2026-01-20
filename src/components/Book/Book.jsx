import { useCursor, useTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useAtom } from "jotai";
import { easing } from "maath";
import { useEffect, useMemo, useRef, useState, forwardRef } from "react";
import {
  Bone,
  BoxGeometry,
  Color,
  Float32BufferAttribute,
  MathUtils,
  MeshStandardMaterial,
  Raycaster,
  Skeleton,
  SkinnedMesh,
  SRGBColorSpace,
  Uint16BufferAttribute,
  Vector3,
} from "three";
import { degToRad } from "three/src/math/MathUtils.js";
import { bookPageAtom } from "../state/library";

const easingFactor = 0.5;
const easingFactorFold = 0.3;
const insideCurveStrength = 0.18;
const outsideCurveStrength = 0.05;
const turningCurveStrength = 0.09;

// Notebook-like page geometry
const PAGE_WIDTH = 1.4;
const PAGE_HEIGHT = 2.0;
const PAGE_DEPTH = 0.003;
const PAGE_SEGMENTS = 10;
const SEGMENT_WIDTH = PAGE_WIDTH / PAGE_SEGMENTS;

const pageGeometry = new BoxGeometry(
  PAGE_WIDTH,
  PAGE_HEIGHT,
  PAGE_DEPTH,
  PAGE_SEGMENTS,
  2
);

pageGeometry.translate(PAGE_WIDTH / 2, 0, 0);

const position = pageGeometry.attributes.position;
const vertex = new Vector3();
const skinIndexes = [];
const skinWeights = [];

for (let i = 0; i < position.count; i++) {
  vertex.fromBufferAttribute(position, i);
  const x = vertex.x;
  const skinIndex = Math.max(0, Math.floor(x / SEGMENT_WIDTH));
  let skinWeight = (x % SEGMENT_WIDTH) / SEGMENT_WIDTH;

  skinIndexes.push(skinIndex, skinIndex + 1, 0, 0);
  skinWeights.push(1 - skinWeight, skinWeight, 0, 0);
}

pageGeometry.setAttribute(
  "skinIndex",
  new Uint16BufferAttribute(skinIndexes, 4)
);
pageGeometry.setAttribute(
  "skinWeight",
  new Float32BufferAttribute(skinWeights, 4)
);

const whiteColor = new Color("white");
const emissiveColor = new Color("orange");

const pageMaterials = [
  new MeshStandardMaterial({ color: whiteColor }),
  new MeshStandardMaterial({ color: whiteColor }),
  new MeshStandardMaterial({ color: whiteColor }),
  new MeshStandardMaterial({ color: whiteColor }),
];

const Page = ({
  number,
  front,
  back,
  page,
  opened,
  bookClosed,
  isCover,
  coverRefs,
  pagesLength,
  ...props
}) => {
  // Load front/back only (removed roughness)
  const textures = useTexture({
    front: `textures/${front}.jpg`,
    back: `textures/${back}.jpg`,
  });
  textures.front.colorSpace = SRGBColorSpace;
  textures.back.colorSpace = SRGBColorSpace;

  const group = useRef();
  const turnedAt = useRef(0);
  const lastOpened = useRef(opened);

  const skinnedMeshRef = useRef();

  const raycasterRef = useRef(new Raycaster());
  const tmpBonePos = useRef(new Vector3());
  const tmpCoverPos = useRef(new Vector3());
  const tmpDir = useRef(new Vector3());

  const baseZRef = useRef(-number * PAGE_DEPTH + page * PAGE_DEPTH);

  useEffect(() => {
    baseZRef.current = -number * PAGE_DEPTH + page * PAGE_DEPTH;
  }, [number, page]);

  const manualSkinnedMesh = useMemo(() => {
    const bones = [];
    for (let i = 0; i <= PAGE_SEGMENTS; i++) {
      let bone = new Bone();
      bones.push(bone);
      if (i === 0) {
        bone.position.x = 0;
      } else {
        bone.position.x = SEGMENT_WIDTH;
      }
      if (i > 0) {
        bones[i - 1].add(bone);
      }
    }
    const skeleton = new Skeleton(bones);

    // Khi tạo mặt có texture, KHÔNG gán color trắng lên texture!
    const materials = [
      ...pageMaterials,
      new MeshStandardMaterial({
        map: textures.front,
        emissive: emissiveColor,
        emissiveIntensity: 0,
        // Không gán color ở đây! Nếu muốn vẫn có thể để color="white" mặc định (không ảnh hưởng)
      }),
      new MeshStandardMaterial({
        map: textures.back,
        emissive: emissiveColor,
        emissiveIntensity: 0,
        // Không gán color ở đây!
      }),
    ];
    const mesh = new SkinnedMesh(pageGeometry, materials);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    mesh.add(skeleton.bones[0]);
    mesh.bind(skeleton);
    return mesh;
  }, [textures.front, textures.back, number, pagesLength, front, back]);

  useEffect(() => {
    if (!isCover || !skinnedMeshRef.current || !coverRefs) return;
    if (number === 0 && coverRefs.first) {
      coverRefs.first.current = skinnedMeshRef.current;
    }
    if (number === pagesLength - 1 && coverRefs.last) {
      coverRefs.last.current = skinnedMeshRef.current;
    }
  }, [isCover, number, pagesLength, coverRefs]);

  const [, setPage] = useAtom(bookPageAtom);
  const [highlighted, setHighlighted] = useState(false);
  useCursor(highlighted);

  useFrame((_, delta) => {
    if (!skinnedMeshRef.current) return;

    const emissiveTarget = highlighted ? 0.22 : 0;
    if (skinnedMeshRef.current.material[4]) {
      skinnedMeshRef.current.material[4].emissiveIntensity = MathUtils.lerp(
        skinnedMeshRef.current.material[4].emissiveIntensity,
        emissiveTarget,
        0.1
      );
    }
    if (skinnedMeshRef.current.material[5]) {
      skinnedMeshRef.current.material[5].emissiveIntensity = MathUtils.lerp(
        skinnedMeshRef.current.material[5].emissiveIntensity,
        emissiveTarget,
        0.1
      );
    }

    if (lastOpened.current !== opened) {
      turnedAt.current = +new Date();
      lastOpened.current = opened;
    }
    let turningTime = Math.min(400, new Date() - turnedAt.current) / 400;
    turningTime = Math.sin(turningTime * Math.PI);

    let targetRotation = opened ? -Math.PI / 2.4 : Math.PI / 2;
    if (!bookClosed) {
      const offset = degToRad(number * 0) * -Math.sign(targetRotation);
      targetRotation += offset;
    }

    const bones = skinnedMeshRef.current.skeleton.bones;

    const spineSampleIndex = Math.max(1, Math.floor(bones.length * 0.12));
    const edgeSampleIndex = Math.min(
      bones.length - 1,
      Math.max(1, Math.floor(bones.length * 0.9))
    );
    const sampleIndices = [spineSampleIndex, edgeSampleIndex];

    baseZRef.current = -number * PAGE_DEPTH + page * PAGE_DEPTH;

    const SAFE_DISTANCE = 0.06;
    let maxPushLocalZ = 0;

    const meshWorldPos = new Vector3();
    const pushedWorldPos = new Vector3();
    const worldPush = new Vector3();

    const tryCoverCollision = (coverMesh, boneWorldPos) => {
      if (!coverMesh || coverMesh === skinnedMeshRef.current) return 0;

      coverMesh.getWorldPosition(tmpCoverPos.current);

      tmpDir.current.copy(boneWorldPos).sub(tmpCoverPos.current);
      const dist = tmpDir.current.length();
      if (dist === 0) return 0;

      if (dist < SAFE_DISTANCE) {
        const pushWorld = SAFE_DISTANCE - dist;
        tmpDir.current.normalize();
        worldPush.copy(tmpDir.current).multiplyScalar(pushWorld);

        skinnedMeshRef.current.getWorldPosition(meshWorldPos);
        pushedWorldPos.copy(meshWorldPos).add(worldPush);

        if (skinnedMeshRef.current.parent) {
          skinnedMeshRef.current.parent.worldToLocal(pushedWorldPos);
          const localDeltaZ =
            pushedWorldPos.z - skinnedMeshRef.current.position.z;
          return localDeltaZ;
        } else {
          return worldPush.z;
        }
      }
      return 0;
    };

    if (coverRefs) {
      for (let si = 0; si < sampleIndices.length; si++) {
        bones[sampleIndices[si]].getWorldPosition(tmpBonePos.current);

        const firstCover = coverRefs.first && coverRefs.first.current;
        const lastCover = coverRefs.last && coverRefs.last.current;

        if (firstCover) {
          const pushLocal = tryCoverCollision(firstCover, tmpBonePos.current);
          if (pushLocal > maxPushLocalZ) maxPushLocalZ = pushLocal;
        }
        if (lastCover) {
          const pushLocal = tryCoverCollision(lastCover, tmpBonePos.current);
          if (pushLocal > maxPushLocalZ) maxPushLocalZ = pushLocal;
        }
      }
    }

    const currentLocalZ = skinnedMeshRef.current.position.z;
    const targetLocalZ = baseZRef.current + maxPushLocalZ;
    skinnedMeshRef.current.position.z = MathUtils.lerp(
      currentLocalZ,
      targetLocalZ,
      0.7
    );

    for (let i = 0; i < bones.length; i++) {
      const target = i === 0 ? group.current : bones[i];

      let rotationAngle = 0;
      let foldRotationAngle = 0;
      let foldIntensity = 0;

      if (isCover) {
        if (i === 0) {
          rotationAngle = targetRotation;
        } else {
          rotationAngle = 0;
        }
        foldRotationAngle = 0;
        foldIntensity = 0;
      } else {
        const insideCurveIntensity = i < 8 ? Math.sin(i * 0.2 + 0.25) : 0;
        const outsideCurveIntensity = i >= 8 ? Math.cos(i * 0.3 + 0.09) : 0;
        const turningIntensity =
          Math.sin(i * Math.PI * (1 / bones.length)) * turningTime;

        foldRotationAngle = degToRad(Math.sign(targetRotation) * 2);
        foldIntensity =
          i > 8
            ? Math.sin(i * Math.PI * (1 / bones.length) - 0.5) * turningTime
            : 0;

        if (bookClosed) {
          if (i === 0) {
            rotationAngle = targetRotation;
          } else {
            rotationAngle = 0;
          }
          foldIntensity = 0;
        } else {
          const atRestBend =
            (insideCurveStrength * insideCurveIntensity -
              outsideCurveStrength * outsideCurveIntensity) *
            targetRotation;

          const turningBend =
            turningCurveStrength * turningIntensity * targetRotation;

          if (i === 0) {
            rotationAngle = targetRotation;
          } else {
            rotationAngle = atRestBend * turningTime + turningBend;
          }
        }
      }

      easing.dampAngle(
        target.rotation,
        "y",
        rotationAngle,
        easingFactor,
        delta
      );
      easing.dampAngle(
        target.rotation,
        "x",
        foldRotationAngle * foldIntensity,
        easingFactorFold,
        delta
      );
    }
  });

  // Thicker covers
  const coverScaleZ = isCover ? 2.9 : 1.0;

  // Your elastic band geometry/visibility (front/back, per cover)
  const bandX = PAGE_WIDTH * 0.85;
  const bandY = 0;
  const bandZFront = PAGE_DEPTH * 0.7;
  const bandZBack = -PAGE_DEPTH * 0.7;
  const bandSize = [0.15, PAGE_HEIGHT * 1.04, 0.005];
  const bandMaterial = useMemo(
    () => new MeshStandardMaterial({ color: "#333333" }), // no roughness
    []
  );

  return (
    <group
      {...props}
      ref={group}
      onPointerEnter={(e) => {
        e.stopPropagation();
        setHighlighted(true);
      }}
      onPointerLeave={(e) => {
        e.stopPropagation();
        setHighlighted(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (isCover && bookClosed && number === 0) {
          setPage(1);
          setHighlighted(false);
          return;
        }
        if (isCover && bookClosed && number === pagesLength - 1) {
          setPage(pagesLength - 1);
          setHighlighted(false);
          return;
        }
        setPage(opened ? number : number + 1);
        setHighlighted(false);
      }}
    >
      {/* Elastic band (front segment) — only render on front cover when closed to front */}
      {/* {isCover && number === 0 && (
        <mesh position={[bandX, bandY, bandZFront]} visible={page === 0}>
          <boxGeometry args={bandSize} />
          <primitive object={bandMaterial} attach="material" />
        </mesh>
      )} */}

      {/* Elastic band (back segment) — only render on back cover when closed to back */}
      {/* {isCover && number === pagesLength - 1 && (
        <mesh
          position={[bandX, bandY, bandZBack]}
          visible={page >= pagesLength - 1}
          rotation-y={Math.PI}
        >
          <boxGeometry args={bandSize} />
          <primitive object={bandMaterial} attach="material" />
        </mesh>
      )} */}

      {/* Page/Cover geometry */}
      <primitive
        object={manualSkinnedMesh}
        ref={skinnedMeshRef}
        position-z={-number * PAGE_DEPTH + page * PAGE_DEPTH}
        scale={isCover ? [1.01, 1.04, coverScaleZ] : [1.01, 1.04, 1.0]}
      />

      {/* "NOTEBOOK" title on the front cover
      {isCover && number === 0 && (
        <Text
          position={[
            PAGE_WIDTH * 0.5,
            PAGE_HEIGHT * 0.35,
            -number * PAGE_DEPTH + page * PAGE_DEPTH + PAGE_DEPTH * 1.52,
          ]}
          fontSize={0.22}
          color="rgba(0, 111, 238, 1)"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.008}
          outlineColor="#000000"
        >
          NOTEBOOK
        </Text>
      )} */}
    </group>
  );
};

export const Book = forwardRef(({ pages, ...props }, ref) => {
  const [page] = useAtom(bookPageAtom);
  const [delayedPage, setDelayedPage] = useState(page);

  // cover refs for collision
  const firstCoverRef = useRef(null);
  const lastCoverRef = useRef(null);
  const coverRefs = { first: firstCoverRef, last: lastCoverRef };

  useEffect(() => {
    pages.forEach((p) => {
      useTexture.preload(`textures/${p.front}.jpg`);
      useTexture.preload(`textures/${p.back}.jpg`);
    });
    useTexture.preload(`textures/ruled-paper.jpg`);
  }, [pages]);

  useEffect(() => {
    let timeout;
    const goToPage = () => {
      setDelayedPage((cur) => {
        if (page === cur) return cur;
        timeout = setTimeout(
          () => goToPage(),
          Math.abs(page - cur) > 2 ? 50 : 150
        );
        if (page > cur) return cur + 1;
        if (page < cur) return cur - 1;
      });
    };
    goToPage();
    return () => clearTimeout(timeout);
  }, [page]);

  const totalThickness = pages.length * PAGE_DEPTH;
  const spineDepth = totalThickness + PAGE_DEPTH;
  const spineCenterZ =
    delayedPage * PAGE_DEPTH - ((pages.length - 1) / 2) * PAGE_DEPTH;
  const spineOffsetX = -0.015;
  const spineWidth = 0.03;

  const spineMaterial = useMemo(() => {
    const m = new MeshStandardMaterial({
      color: "#222222",
      metalness: 0.05,
    });
    m.polygonOffset = true;
    m.polygonOffsetFactor = 1;
    m.polygonOffsetUnits = 1;
    return m;
  }, []);

  // 👇 ref được gắn trực tiếp vào group gốc của cuốn sách
  return (
    <group ref={ref} {...props} rotation-y={-Math.PI / 2}>
      {/* Spine */}
      <mesh position={[spineOffsetX, 0, spineCenterZ]} castShadow receiveShadow>
        <boxGeometry args={[spineWidth, PAGE_HEIGHT * 1.03, spineDepth]} />
        <primitive object={spineMaterial} attach="material" />
      </mesh>

      {/* Pages */}
      {pages.map((pageData, index) => (
        <Page
          key={index}
          pagesLength={pages.length}
          page={delayedPage}
          number={index}
          opened={delayedPage > index}
          bookClosed={delayedPage === 0 || delayedPage >= pages.length - 1}
          isCover={index === 0 || index === pages.length - 1}
          coverRefs={coverRefs}
          {...pageData}
        />
      ))}
    </group>
  );
});
