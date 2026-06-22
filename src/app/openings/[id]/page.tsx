import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { openings, getOpening } from "@/data/openings";
import { site } from "@/data/site";

// 모든 공고 상세 페이지를 미리 생성
export function generateStaticParams() {
  return openings.map((o) => ({ id: o.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const opening = getOpening(id);
  if (!opening) return { title: "공고를 찾을 수 없습니다" };
  return {
    title: `${opening.title} | ${site.brand.name} 채용`,
    description: opening.summary,
  };
}

/** 제목 + 항목 리스트 블록 (내용 없으면 렌더링 안 함) */
function DetailList({ title, items }: { title: string; items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-neutral-900">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-neutral-700">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function OpeningDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const opening = getOpening(id);
  if (!opening) notFound();

  const applyHref =
    opening.applyUrl ??
    `mailto:${site.brand.email}?subject=[지원] ${opening.title}`;

  return (
    <>
      <Header />
      <main>
        {/* 상단 헤더 밴드 */}
        <section className="bg-neutral-950 pt-16 pb-14 text-white">
          <Container>
            <Link
              href="/#openings"
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              ← 전체 공고
            </Link>
            <div className="mt-5 flex items-center gap-2">
              {opening.hot && (
                <span className="rounded-full bg-brand/15 px-2.5 py-0.5 text-xs font-bold text-brand">
                  🔥 HOT
                </span>
              )}
              <span className="text-sm text-neutral-400">{opening.job}</span>
            </div>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              {opening.title}
            </h1>
            <div className="mt-5 flex flex-wrap gap-2">
              {[opening.location, opening.employment, opening.career].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-white/10 px-3 py-1 text-sm text-neutral-200"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </Container>
        </section>

        {/* 본문 */}
        <Container className="max-w-3xl py-16">
          {opening.description && (
            <p className="text-lg leading-relaxed text-neutral-700">
              {opening.description}
            </p>
          )}

          <DetailList title="주요 업무" items={opening.responsibilities} />
          <DetailList title="자격 요건" items={opening.qualifications} />
          <DetailList title="우대 사항" items={opening.preferred} />

          {/* 지원 CTA */}
          <div className="mt-14 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-center">
            <p className="text-lg font-bold text-neutral-900">
              이 포지션에 지원하시겠어요?
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              아래 버튼을 누르면 지원 안내로 연결됩니다.
            </p>
            <a
              href={applyHref}
              target={opening.applyUrl ? "_blank" : undefined}
              rel={opening.applyUrl ? "noopener noreferrer" : undefined}
              className="mt-6 inline-block rounded-full bg-brand px-8 py-3.5 text-base font-bold text-neutral-950 transition-transform hover:scale-105"
            >
              지원하기
            </a>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
