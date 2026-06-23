import { site } from "@/data/site";

const EMPLOYMENTS = ["정규직", "계약직", "인턴", "파트타임"];
const CAREERS = ["신입", "경력", "경력무관"];

type Defaults = {
  title?: string;
  group?: string;
  job?: string;
  location?: string;
  address?: string | null;
  employment?: string;
  career?: string;
  summary?: string;
  hot?: boolean;
  published?: boolean;
  applyUrl?: string | null;
  description?: string | null;
  appeal?: string[];
  responsibilities?: string[];
  qualifications?: string[];
  preferred?: string[];
  sortOrder?: number;
};

const label = "block text-sm font-semibold text-neutral-700";
const hint = "font-normal text-neutral-400";
const field =
  "mt-1.5 w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

function SectionCard({
  title,
  desc,
  children,
}: {
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-6">
      <h2 className="text-base font-bold text-neutral-900">{title}</h2>
      {desc && <p className="mt-0.5 text-sm text-neutral-500">{desc}</p>}
      <div className="mt-5 space-y-5">{children}</div>
    </section>
  );
}

export function OpeningForm({
  action,
  defaults = {},
  submitLabel,
}: {
  action: (formData: FormData) => void;
  defaults?: Defaults;
  submitLabel: string;
}) {
  const groups = site.jobGroups.items;
  return (
    <form action={action} className="space-y-6">
      {/* 기본 정보 */}
      <SectionCard title="기본 정보">
        <div>
          <label className={label}>제목 *</label>
          <input
            name="title"
            required
            defaultValue={defaults.title}
            className={field}
            placeholder="예) 브랜드 디자이너 (BX)"
          />
        </div>
        <div>
          <label className={label}>한 줄 요약 *</label>
          <input
            name="summary"
            required
            defaultValue={defaults.summary}
            className={field}
            placeholder="카드에 보이는 짧은 소개"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={label}>직군 *</label>
            <select name="group" defaultValue={defaults.group ?? "office"} className={`${field} admin-select`}>
              {groups.map((g) => (
                <option key={g.key} value={g.key}>
                  {g.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={label}>직무 *</label>
            <input name="job" required defaultValue={defaults.job} className={field} placeholder="예) 디자인" />
          </div>
          <div>
            <label className={label}>근무지 *</label>
            <input name="location" required defaultValue={defaults.location} className={field} placeholder="예) 서울 본사" />
          </div>
          <div className="sm:col-span-2">
            <label className={label}>
              지도 주소 <span className={hint}>(선택 · 비우면 대표 주소)</span>
            </label>
            <input name="address" defaultValue={defaults.address ?? ""} className={field} placeholder="예) 서울특별시 강남구 테헤란로 123" />
          </div>
          <div>
            <label className={label}>고용형태 *</label>
            <select name="employment" defaultValue={defaults.employment ?? "정규직"} className={`${field} admin-select`}>
              {EMPLOYMENTS.map((e) => (
                <option key={e} value={e}>{e}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={label}>경력 *</label>
            <select name="career" defaultValue={defaults.career ?? "경력무관"} className={`${field} admin-select`}>
              {CAREERS.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={label}>정렬 순서 <span className={hint}>(작을수록 위)</span></label>
            <input name="sortOrder" type="number" defaultValue={defaults.sortOrder ?? 0} className={field} />
          </div>
        </div>
      </SectionCard>

      {/* 상세 내용 */}
      <SectionCard title="상세 내용" desc="공고 상세 페이지에 표시됩니다. 비우면 해당 섹션은 숨겨집니다.">
        <div>
          <label className={label}>포지션 소개</label>
          <textarea name="description" rows={3} defaultValue={defaults.description ?? ""} className={field} />
        </div>
        {(
          [
            ["appeal", "포지션의 매력"],
            ["responsibilities", "핵심 업무"],
            ["qualifications", "자격 요건"],
            ["preferred", "우대 사항"],
          ] as const
        ).map(([name, ko]) => (
          <div key={name}>
            <label className={label}>
              {ko} <span className={hint}>(줄바꿈으로 항목 구분)</span>
            </label>
            <textarea
              name={name}
              rows={4}
              defaultValue={(defaults[name] ?? []).join("\n")}
              className={field}
            />
          </div>
        ))}
      </SectionCard>

      {/* 옵션 */}
      <SectionCard title="옵션">
        <div>
          <label className={label}>외부 지원 링크 <span className={hint}>(선택)</span></label>
          <input name="applyUrl" defaultValue={defaults.applyUrl ?? ""} className={field} placeholder="비우면 내부 지원 폼 사용" />
        </div>
        <div className="flex flex-wrap gap-3">
          <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm text-neutral-700 has-checked:border-brand has-checked:bg-brand/5">
            <input type="checkbox" name="hot" defaultChecked={defaults.hot} className="h-4 w-4 accent-[var(--color-brand)]" />
            🔥 HOT 표시
          </label>
          <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm text-neutral-700 has-checked:border-brand has-checked:bg-brand/5">
            <input type="checkbox" name="published" defaultChecked={defaults.published ?? true} className="h-4 w-4 accent-[var(--color-brand)]" />
            공개(게시)
          </label>
        </div>
      </SectionCard>

      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-full bg-brand px-8 py-3 font-bold text-neutral-950 transition-transform hover:scale-[1.02]"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
