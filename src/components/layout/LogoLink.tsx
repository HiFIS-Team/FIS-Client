"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

/**
 * 헤더 로고. 홈에 있을 때 누르면 라우트 변경이 없어 스크롤이 안 올라가므로
 * 직접 맨 위로 스크롤한다. 다른 페이지에서는 평범하게 홈으로 이동(ScrollToTop 처리).
 */
export function LogoLink() {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      aria-label={site.brand.name}
      className="flex items-center"
      onClick={(e) => {
        if (pathname === "/") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      {site.brand.logo ? (
        <Image
          src={site.brand.logo}
          alt={site.brand.name}
          width={180}
          height={40}
          priority
          className="h-10 w-auto object-contain"
        />
      ) : (
        <span className="text-lg font-extrabold tracking-tight text-white">
          {site.brand.name}
          <span className="ml-1 text-brand">★</span>
        </span>
      )}
    </Link>
  );
}
