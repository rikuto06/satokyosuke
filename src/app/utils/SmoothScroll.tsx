'use client';
import { useEffect } from 'react';

// Lenisインスタンスをグローバルに保存
let lenisInstance: any = null;

export const getLenis = () => lenisInstance;

export default function SmoothScroll() {
  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import('@studio-freight/lenis')).default;
      
      lenisInstance = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
      });

      function raf(time: number) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      if (lenisInstance) {
        lenisInstance.destroy();
        lenisInstance = null;
      }
    };
  }, []);

  return null;
}