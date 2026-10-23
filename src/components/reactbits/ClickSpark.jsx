import { useEffect, useRef } from "react";

export function ClickSpark({
  sparkColor = "var(--accent, #f59e0b)",
  sparkSize = 8,
  sparkRadius = 26,
  sparkCount = 9,
  duration = 440,
  children,
}) {
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = performance.now();

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = now - spark.startTime;
        if (elapsed >= duration) return false;

        const progress = elapsed / duration;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const distance = easeOut * sparkRadius;
        const opacity = 1 - progress;

        const currentX = spark.x + Math.cos(spark.angle) * distance;
        const currentY = spark.y + Math.sin(spark.angle) * distance;

        ctx.save();
        let color = sparkColor;
        if (color.startsWith("var")) {
          color = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#f59e0b";
        }
        ctx.fillStyle = color;
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.arc(currentX, currentY, (sparkSize / 2) * (1 - progress * 0.4), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        return true;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleClick = (e) => {
      const now = performance.now();
      const newSparks = [];
      for (let i = 0; i < sparkCount; i++) {
        const angle = (i / sparkCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
        newSparks.push({
          x: e.clientX,
          y: e.clientY,
          angle,
          startTime: now,
        });
      }
      sparksRef.current.push(...newSparks);
    };

    window.addEventListener("pointerdown", handleClick, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointerdown", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration]);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 99999,
        }}
      />
      {children}
    </>
  );
}
