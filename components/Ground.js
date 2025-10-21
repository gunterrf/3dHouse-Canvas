import { Plane } from "@react-three/drei";

export default function Ground() {
  return (
    <Plane
      args={[1000, 1000]} // Large size to simulate infinity
      rotation={[-Math.PI / 2, 0, 0]} // Rotate to lie flat
      position={[0, 0, 0]}
      receiveShadow
    >
      <meshStandardMaterial color="#00b7ffff" />
    </Plane>
  );
}
