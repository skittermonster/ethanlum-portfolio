// loader.jsx
import React from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",       // spacing instead of marginTop
    pointerEvents: "none"
  };

  const textStyle = {
    fontSize: 14,
    color: "#F1F1F1",
    fontWeight: 800,
  };

  return (
    <Html as="div" style={overlayStyle}>
      <span className="canvas-loader" />
      <p style={textStyle}>{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default CanvasLoader;
