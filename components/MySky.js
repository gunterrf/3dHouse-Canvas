import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/sky_25102001.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials.Material}
      />
    </group>
  )
}

useGLTF.preload('/sky_25102001.glb')