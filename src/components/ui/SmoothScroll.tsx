"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/** Lenis smooth scrolling. Skipped entirely when the visitor prefers reduced motion. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.1, anchors: { offset: -80 }, autoRaf: true });
    return () => lenis.destroy();
  }, []);

  return null;
}
