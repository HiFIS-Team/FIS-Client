import { HeroSlideshow } from "@/components/ui/HeroSlideshow";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function Hero() {
  const { hero } = site;
  return (
    <section id="top" className="relative isolate min-h-[68vh] overflow-hidden bg-neutral-950 text-white">
      {/* 배경 슬라이드쇼 (자동 전환) */}
      <HeroSlideshow images={hero.images} interval={hero.interval} />
      {/* 가독성을 위한 어둡게 처리 */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40" />

      <Container className="flex min-h-[68vh] flex-col justify-center py-24">
        <Reveal>
          <span className="inline-block w-fit rounded-full border border-brand/50 bg-brand/10 px-4 py-1.5 text-sm font-semibold text-brand">
            {hero.badge}
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            {hero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-xl text-lg text-neutral-300">
            {hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={hero.primaryCta.href}
              className="rounded-full bg-brand px-7 py-3.5 text-base font-bold text-neutral-950 transition-transform hover:scale-105"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="rounded-full border border-white/30 px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
