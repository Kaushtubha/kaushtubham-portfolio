"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let rx = 0, ry = 0;
    let frame: number;

    const onMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      dot.style.left = x + "px";
      dot.style.top  = y + "px";

      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      const animate = () => {
        rx = lerp(rx, x, 0.13);
        ry = lerp(ry, y, 0.13);
        ring.style.left = rx + "px";
        ring.style.top  = ry + "px";
        frame = requestAnimationFrame(animate);
      };
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(animate);
    };

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring${hovered ? " hovered" : ""}`} />
    </>
  );
}
