import { EffectComposer, Bloom, Noise, DepthOfField } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export default function Effects() {
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0.3}
        luminanceSmoothing={0.9}
        intensity={0.5}
        blendFunction={BlendFunction.ADD}
      />      
      <Noise
        premultiply // optional: blends better with other effects
        opacity={3} // adjust for subtlety
      />      
      <DepthOfField
        focusDistance={0.02} // where the camera focuses
        focalLength={0.1}   // lens focal length
        bokehScale={12}       // blur intensity
      />
    </EffectComposer>
  );
}
