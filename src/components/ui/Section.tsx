import { type ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  id,
  children,
  className = "",
  dark = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-20 sm:py-28 ${
        dark ? "bg-neutral-950 text-white" : "bg-white text-neutral-900"
      } ${className}`}
    >
      <Container>{children}</Container>
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
