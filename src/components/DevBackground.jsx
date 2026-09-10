import { useEffect, useRef } from "react";

export default function DevBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    const colors = ["rgba(168, 85, 247,", "rgba(34, 211, 238,", "rgba(52, 211, 153,"];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.min(70, Math.floor((canvas.width * canvas.height) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    }

    function step() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + "0.6)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = p.color + `${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(step);
    }

    resize();
    step();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="dev-bg" aria-hidden="true">
      <div className="dev-bg-glow dev-bg-glow-1" />
      <div className="dev-bg-glow dev-bg-glow-2" />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}