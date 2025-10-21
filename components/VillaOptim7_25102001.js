import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/vilaoptim-v1_25102002.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.g_VILA_1_OTIMIZATA_v6_obj.geometry}
        material={materials.Color_M04}
      />
    </group>
  )
}

useGLTF.preload('/vilaoptim-v1_25102002.glb')