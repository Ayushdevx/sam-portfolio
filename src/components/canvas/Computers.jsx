import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const [modelError, setModelError] = useState(false);
  
  try {
    const computer = useGLTF("./desktop_pc/scene.gltf");
    
    return (
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={1} />
        <spotLight
          visible
          position={[-20, 50, 10]}
          angle={0.12}
          intensity={1}
          penumbra={1}
          castShadow
          shadow-mapSize={1024}
        />
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.65 : 0.75}
          position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    );
  } catch (error) {
    console.error("Failed to load 3D model:", error);
    return null;
  }
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [canvasError, setCanvasError] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    
    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (canvasError) {
    return (
      <div className="w-full h-full flex items-center justify-center opacity-30">
        <div className="text-center text-white">
          <div className="w-32 h-32 mx-auto mb-4 border-2 border-electric-purple rounded-lg flex items-center justify-center">
            <span className="text-electric-purple text-4xl">💻</span>
          </div>
          <p className="text-sm">3D Model Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      onError={(error) => {
        console.error("Canvas error:", error);
        setCanvasError(true);
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
