import {
  Wallet,
  ShieldCheck,
  CalendarDays,
  GraduationCap,
  Dumbbell,
  Trophy,
  Gift,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { site } from "@/data/site";

const ICONS: Record<string, LucideIcon> = {
  wallet: Wallet,
  shield: ShieldCheck,
  calendar: CalendarDays,
  graduation: GraduationCap,
  dumbbell: Dumbbell,
  trophy: Trophy,
  gift: Gift,
  trending: TrendingUp,
};

export function Perks() {
  const { perks } = site;
  return (
    <Section dark>
      <div className="max-w-2xl">
        <Eyebrow>{perks.eyebrow}</Eyebrow>
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          {perks.title}
        </h2>
        <p className="mt-4 text-lg text-neutral-300">{perks.body}</p>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {perks.items.map((perk) => {
          const Icon = ICONS[perk.icon];
          return (
            <div
              key={perk.label}
              className="group flex flex-col gap-4 rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 ring-1 ring-white/10 transition-all hover:-translate-y-1 hover:ring-brand/40"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-brand/15 text-brand transition-colors group-hover:bg-brand/25">
                {Icon ? <Icon className="size-6" strokeWidth={2} /> : null}
              </span>
              <span className="font-semibold text-white">{perk.label}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
