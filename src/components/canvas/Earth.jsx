import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Preload, OrbitControls } from "@react-three/drei";
import Loader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <mesh>
      <primitive
        object={earth.scene}
        scale={2.5}
        position={0}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      camera={{
        fav: 45,
        position: [-4, 3, 3],
        far: 200,
        near: 0.1,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default EarthCanvas;
