"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function FireworksOnLoad({
  durationMs = 2000,
  startDelayMs = 0,
  particleCount = 25, // ← больше частиц
  intervalMs = 60, // ← чаще залпы
}: {
  durationMs?: number;
  startDelayMs?: number;
  particleCount?: number;
  intervalMs?: number;
}) {
  useEffect(() => {
    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;
    if (reduced) return;

    const timer = window.setTimeout(() => {
      const end = Date.now() + durationMs;

      const interval = window.setInterval(() => {
        const timeLeft = end - Date.now();
        if (timeLeft <= 0) {
          window.clearInterval(interval);
          return;
        }

        // Лево / право
        confetti({
          particleCount,
          spread: 90,
          startVelocity: 50,
          ticks: 220,
          origin: { x: 0.2, y: 0.7 },
        });

        confetti({
          particleCount,
          spread: 90,
          startVelocity: 50,
          ticks: 220,
          origin: { x: 0.8, y: 0.7 },
        });

        // Дополнительный залп сверху по центру (круто выглядит)
        confetti({
          particleCount: Math.round(particleCount * 0.8),
          spread: 120,
          startVelocity: 55,
          ticks: 240,
          origin: { x: 0.5, y: 0.3 },
        });
      }, intervalMs);
    }, startDelayMs);

    return () => window.clearTimeout(timer);
  }, [durationMs, startDelayMs, particleCount, intervalMs]);

  return null;
}
