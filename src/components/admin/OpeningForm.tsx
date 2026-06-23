import { site } from "@/data/site";

const EMPLOYMENTS = ["정규직", "계약직", "인턴", "파트타임"];
const CAREERS = ["신입", "경력", "경력무관"];

type Defaults = {
  title?: string;
  group?: string;
  job?: string;
  location?: string;
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
const input =
  "mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:border-brand focus:outline-none";

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
      <div>
        <label className={label}>제목 *</label>
        <input
          name="title"
          required
          defaultValue={defaults.title}
          className={input}
          placeholder="예) 브랜드 디자이너 (BX)"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label}>직군 *</label>
          <select name="group" defaultValue={defaults.group ?? "office"} className={input}>
            {groups.map((g) => (
              <option key={g.key} value={g.key}>
                {g.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={label}>직무 *</label>
          <input name="job" required defaultValue={defaults.job} className={input} placeholder="예) 디자인" />
        </div>
        <div>
          <label className={label}>근무지 *</label>
          <input name="location" required defaultValue={defaults.location} className={input} placeholder="예) 서울 본사" />
        </div>
        <div>
          <label className={label}>고용형태 *</label>
          <select name="employment" defaultValue={defaults.employment ?? "정규직"} className={input}>
            {EMPLOYMENTS.map((e) => (
              <option key={e} value={e}>{e}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label}>경력 *</label>
          <select name="career" defaultValue={defaults.career ?? "경력무관"} className={input}>
            {CAREERS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label}>정렬 순서 (작을수록 위)</label>
          <input name="sortOrder" type="number" defaultValue={defaults.sortOrder ?? 0} className={input} />
        </div>
      </div>

      <div>
        <label className={label}>한 줄 요약 *</label>
        <input name="summary" required defaultValue={defaults.summary} className={input} placeholder="카드에 보이는 짧은 소개" />
      </div>

      <div>
        <label className={label}>포지션 소개</label>
        <textarea name="description" rows={3} defaultValue={defaults.description ?? ""} className={input} />
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
          <label className={label}>{ko} <span className="font-normal text-neutral-400">(줄바꿈으로 항목 구분)</span></label>
          <textarea
            name={name}
            rows={4}
            defaultValue={(defaults[name] ?? []).join("\n")}
            className={input}
          />
        </div>
      ))}

      <div>
        <label className={label}>외부 지원 링크 (선택)</label>
        <input name="applyUrl" defaultValue={defaults.applyUrl ?? ""} className={input} placeholder="비우면 내부 지원 폼 사용" />
      </div>

      <div className="flex gap-6">
        <label className="flex items-center gap-2 text-sm text-neutral-700">
          <input type="checkbox" name="hot" defaultChecked={defaults.hot} className="h-4 w-4 accent-[var(--color-brand)]" />
          🔥 HOT 표시
        </label>
        <label className="flex items-center gap-2 text-sm text-neutral-700">
          <input type="checkbox" name="published" defaultChecked={defaults.published ?? true} className="h-4 w-4 accent-[var(--color-brand)]" />
          공개(게시)
        </label>
      </div>

      <button
        type="submit"
        className="rounded-full bg-brand px-8 py-3 font-bold text-neutral-950 transition-transform hover:scale-[1.02]"
      >
        {submitLabel}
      </button>
    </form>
  );
}
