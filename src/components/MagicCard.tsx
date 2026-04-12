"use client";

import { useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
}

export function MagicCard({ children, className = "", tilt = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [rot, setRot] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    setMouse({ x, y });
    setActive(true);
    if (tilt) {
      setRot({
        x: (y / r.height - 0.5) * -5,
        y: (x / r.width - 0.5) * 5,
      });
    }
  };

  const onLeave = () => {
    setActive(false);
    setRot({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative overflow-hidden ${className}`}
      style={{
        transform: tilt
          ? `perspective(1400px) rotateX(${rot.x}deg) rotateY(${rot.y}deg)`
          : undefined,
        transition: "transform 0.3s cubic-bezier(0.03, 0.98, 0.52, 0.99)",
        willChange: tilt ? "transform" : undefined,
      }}
    >
      {/* Spotlight glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] transition-opacity duration-500"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(380px at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.04), transparent 55%)`,
        }}
      />
      {children}
    </div>
  );
}
