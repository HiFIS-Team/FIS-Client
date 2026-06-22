import Link from "next/link";
import type { Opening } from "@/lib/types";

export function OpeningCard({ opening }: { opening: Opening }) {
  return (
    <Link
      href={`/openings/${opening.id}`}
      className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-lg"
    >
      <div>
        <div className="mb-3 flex items-center gap-2">
          {opening.hot && (
            <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-bold text-brand">
              🔥 HOT
            </span>
          )}
          <span className="text-xs font-medium text-neutral-500">
            {opening.job}
          </span>
        </div>
        <h3 className="text-lg font-bold text-neutral-900 group-hover:text-brand">
          {opening.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-neutral-600">
          {opening.summary}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {[opening.location, opening.employment, opening.career].map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
