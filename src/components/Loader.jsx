import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 50,
        zIndex: 10,
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
          textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
        }}
      >
        Loading 3D Model... {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
