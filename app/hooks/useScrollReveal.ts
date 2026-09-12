"use client";
import { useEffect, useRef, RefObject } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? "0px 0px -40px 0px",
      }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
}

export function useScrollRevealAll(selector: string, container?: Element | null) {
  useEffect(() => {
    const root = container ?? document;
    const els = root.querySelectorAll<HTMLElement>(selector);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, container]);
}

export function useParallax(speed: number = 0.3) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frameId: number;

    const onScroll = () => {
      frameId = requestAnimationFrame(() => {
        if (!el) return;
        const rect = el.parentElement?.getBoundingClientRect();
        if (!rect) return;
        const progress = -rect.top * speed;
        el.style.transform = `translateY(${progress}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frameId);
    };
  }, [speed]);

  return ref;
}
