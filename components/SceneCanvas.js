import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Effects from "./Effects";
import Ground from "./Ground";
import VillaOptim7_25102001 from "./VillaOptim7_25102001";
import MySky from "./MySky";
export default function SceneCanvas() {
  return (
    <Canvas shadows camera={{ position: [30, 10, 25], fov: 50 }}>
      <ambientLight intensity={0.1} />
      <directionalLight
        castShadow
        position={[5, 20, 5]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Suspense fallback={null}>
        <VillaOptim7_25102001 />
        <MySky />
        <Effects />
        <Ground />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
