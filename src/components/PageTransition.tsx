"use client";

import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

/**
 * 경로가 바뀔 때마다 key가 바뀌어 페이드 인 애니메이션이 재생됩니다.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}
