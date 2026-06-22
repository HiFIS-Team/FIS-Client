"use client";

import { useState } from "react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { OpeningCard } from "@/components/ui/OpeningCard";
import { openings } from "@/data/openings";
import { site } from "@/data/site";
import type { JobGroupKey } from "@/lib/types";

type FilterKey = "all" | JobGroupKey;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "전체" },
  ...site.jobGroups.items.map((g) => ({ key: g.key, label: g.name })),
];

export function Openings() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const filtered =
    filter === "all"
      ? openings
      : openings.filter((o) => o.group === filter);

  return (
    <Section id="openings">
      <div className="text-center">
        <Eyebrow>OPEN POSITIONS</Eyebrow>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          채용 중인 공고
        </h2>
      </div>

      {/* 필터 */}
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => {
          const active = filter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                active
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* 공고 그리드 */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((opening) => (
          <OpeningCard key={opening.id} opening={opening} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-neutral-500">
          해당 직군의 공고가 없습니다.
        </p>
      )}
    </Section>
  );
}
