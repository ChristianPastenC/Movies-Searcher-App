import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { useIsMobile } from '../../hooks/useIsMobile';

const Dog = ({ isMobile }) => {
  const shiba = useGLTF('./shiba/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={shiba.scene}
        scale={isMobile ? 2.5 : 3.5}
        position={isMobile ? [0, 0.5, 0.25] : [0, 0.25, -0.5]}
        rotation={[0, 1, 0]}
      />
    </mesh>
  );
};

const DogCanvas = () => {
  const { isMobile } = useIsMobile();

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={90}
        />
        <Dog isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default DogCanvas;