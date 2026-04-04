"use client";

import { useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { i18n } from "@/data/translations";

type Spark = { id: number; x: number; y: number; dx: number; dy: number; color: string };
type TrailDot = { id: number; x: number; y: number; color: string; idx: number };

const COLORS = ["#60a5fa", "#a78bfa", "#f472b6", "#34d399", "#fbbf24", "#fb923c"];

export function EasterEgg() {
  const { lang } = useLanguage();
  const t = i18n.egg;
  const cardRef = useRef<HTMLDivElement>(null);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const counter = useRef(0);
  const didDrag = useRef(false);

  function getPos(e: React.MouseEvent) {
    const rect = cardRef.current!.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function burstSparks(x: number, y: number, count = 14) {
    const newSparks: Spark[] = Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.6;
      const dist = 28 + Math.random() * 45;
      return {
        id: ++counter.current,
        x,
        y,
        dx: Math.cos(angle) * dist,
        dy: Math.sin(angle) * dist,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      };
    });
    setSparks(prev => [...prev, ...newSparks]);
    const ids = new Set(newSparks.map(s => s.id));
    setTimeout(() => setSparks(prev => prev.filter(s => !ids.has(s.id))), 700);
  }

  function handleMouseDown(e: React.MouseEvent) {
    e.preventDefault();
    didDrag.current = false;
    setIsDragging(true);
    const pos = getPos(e);
    setTrail([{ id: ++counter.current, ...pos, color: COLORS[0], idx: 0 }]);
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!isDragging) return;
    didDrag.current = true;
    const pos = getPos(e);
    const color = COLORS[counter.current % COLORS.length];
    const newDot: TrailDot = { id: ++counter.current, ...pos, color, idx: counter.current };

    if (Math.random() < 0.25) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 6 + Math.random() * 14;
      const mini: Spark = {
        id: ++counter.current,
        x: pos.x, y: pos.y,
        dx: Math.cos(angle) * dist,
        dy: Math.sin(angle) * dist,
        color,
      };
      setSparks(prev => [...prev, mini]);
      const id = mini.id;
      setTimeout(() => setSparks(prev => prev.filter(s => s.id !== id)), 380);
    }

    setTrail(prev => {
      const next = [...prev.slice(-50), newDot];
      return next;
    });
  }

  function handleMouseUp(e: React.MouseEvent) {
    setIsDragging(false);
    if (!didDrag.current) {
      const pos = getPos(e);
      burstSparks(pos.x, pos.y);
    }
    setTimeout(() => setTrail([]), 500);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    setIsDragging(false);
    setTimeout(() => setTrail([]), 350);
  }

  return (
    <section className="py-16 flex justify-center" aria-label="Easter egg">
      <div
        className="flex flex-col items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={cardRef}
          className="relative border-2 border-dashed rounded-2xl px-14 py-10 text-center overflow-hidden transition-all duration-500 select-none cursor-crosshair"
          style={
            isHovered
              ? {
                  borderColor: "rgba(96,165,250,0.7)",
                  boxShadow:
                    "0 0 20px rgba(59,130,246,0.4), 0 0 55px rgba(59,130,246,0.15), inset 0 0 30px rgba(59,130,246,0.05)",
                }
              : { borderColor: "rgba(63,63,70,1)" }
          }
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {/* Trail */}
          {trail.map((dot, i) => (
            <span
              key={dot.id}
              className="pointer-events-none absolute rounded-full"
              style={{
                left: dot.x - 3,
                top: dot.y - 3,
                width: 6,
                height: 6,
                background: dot.color,
                opacity: (i / trail.length) * 0.85,
                boxShadow: `0 0 6px ${dot.color}, 0 0 14px ${dot.color}`,
              }}
            />
          ))}

          {/* Sparks */}
          {sparks.map(spark => (
            <span
              key={spark.id}
              className="spark-particle"
              style={{
                left: spark.x,
                top: spark.y,
                "--dx": `${spark.dx}px`,
                "--dy": `${spark.dy}px`,
                "--color": spark.color,
              } as React.CSSProperties}
            />
          ))}

          <div className={`relative z-10 transition-transform duration-300 ${isHovered ? "scale-105" : ""}`}>
            <div className="text-3xl mb-3">⚡</div>
            <p className="text-white font-semibold text-lg mb-1">{t.title[lang]}</p>
            <p className={`text-sm transition-colors duration-300 ${isHovered ? "text-blue-400" : "text-zinc-500"}`}>
              {isHovered ? t.active[lang] : t.subtitle[lang]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
