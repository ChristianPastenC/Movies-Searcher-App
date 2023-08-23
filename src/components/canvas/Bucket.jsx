import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Bucket = () => {
  const bucket = useGLTF('./popcorn_bucket/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor='black' />
      <pointLight intensity={1} />
      <primitive
        object={bucket.scene}
        scale={6}
        position={[-1, -1.5, 0]}
        rotation={[0, 0, 0.15]}
      />
    </mesh>
  );
};

const BucketCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          rotateSpeed={5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Bucket />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default BucketCanvas;