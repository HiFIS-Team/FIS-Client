"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/** 사진이 없을 때 슬라이드별로 보여줄 그라데이션 (전환이 보이도록 색을 다르게) */
const PLACEHOLDER_GRADIENTS = [
  "from-neutral-700 via-neutral-800 to-neutral-950",
  "from-orange-900 via-neutral-800 to-neutral-950",
  "from-red-900 via-neutral-800 to-neutral-950",
  "from-zinc-700 via-neutral-800 to-neutral-950",
];

export function HeroSlideshow({
  images,
  interval = 5000,
}: {
  images: string[];
  interval?: number;
}) {
  // 비어있으면 placeholder 슬라이드 3장으로 대체
  const slides = images.length > 0 ? images : ["", "", ""];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      interval
    );
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className="absolute inset-0 -z-10">
      {slides.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {src ? (
            <Image
              src={src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <div
              className={`h-full w-full bg-gradient-to-br ${
                PLACEHOLDER_GRADIENTS[i % PLACEHOLDER_GRADIENTS.length]
              }`}
            />
          )}
        </div>
      ))}

      {/* 슬라이드 인디케이터 */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`${i + 1}번째 슬라이드`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
