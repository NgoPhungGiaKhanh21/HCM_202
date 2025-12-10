import { Environment, Float, OrbitControls } from "@react-three/drei";

// Wrap children so we can inject <Book ...> from BookSection
export const Experience = ({ children }) => {
  return (
    <>
      <Float
        rotation-x={-Math.PI / 4}
        floatIntensity={1}
        speed={0}
        rotationIntensity={2}
      >
        {children}
      </Float>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[2, 5, 2]}
        intensity={0.85}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <Environment preset="city" intensity={0.25} />

      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};
