import Link from "next/link";
import { site } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="#top" className="text-lg font-extrabold tracking-tight text-white">
          {site.brand.name}
          <span className="ml-1 text-brand">★</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#openings"
          className="rounded-full bg-brand px-4 py-2 text-sm font-bold text-neutral-950 transition-transform hover:scale-105"
        >
          지원하기
        </a>
      </div>
    </header>
  );
}
