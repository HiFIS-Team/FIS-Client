import { type ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function Section({
  id,
  children,
  className = "",
  dark = false,
  reveal = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  /** 스크롤 진입 시 페이드업 (기본 on) */
  reveal?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-20 sm:py-28 ${
        dark ? "bg-neutral-950 text-white" : "bg-white text-neutral-900"
      } ${className}`}
    >
      <Container>{reveal ? <Reveal>{children}</Reveal> : children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-brand">
      {children}
    </p>
  );
}
