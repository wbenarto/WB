import React, { useEffect, useRef } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "lightblue";
    ctx.className = "canvas__test";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    let particlesArray = [];
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
