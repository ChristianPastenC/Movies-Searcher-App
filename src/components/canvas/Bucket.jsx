import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { useIsMobile } from '../../hooks/useIsMobile';

const Bucket = ({ isMobile }) => {
  const bucket = useGLTF('./popcorn_bucket/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor='black' />
      <pointLight intensity={1} />
      <primitive
        object={bucket.scene}
        scale={isMobile ? 8 : 10}
        position={[-1, -1.5, 0]}
        rotation={[0, 0, 0.15]}
      />
    </mesh>
  );
};

const BucketCanvas = () => {
  const { isMobile } = useIsMobile();

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
        <Bucket isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default BucketCanvas;