import Link from "next/link";
import { notFound } from "next/navigation";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { OpeningForm } from "@/components/admin/OpeningForm";
import { getAdminOpening } from "@/lib/openings";
import { updateOpening } from "../../../actions";

export const dynamic = "force-dynamic";
export const metadata = { title: "공고 수정" };

export default async function EditOpeningPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const opening = await getAdminOpening(id);
  if (!opening) notFound();

  const updateAction = updateOpening.bind(null, id);

  return (
    <div className="min-h-dvh bg-neutral-50">
      <AdminHeader />
      <main className="mx-auto w-full max-w-3xl px-5 py-10">
        <Link href="/admin" className="text-sm text-neutral-500 hover:text-neutral-900">
          ← 목록
        </Link>
        <h1 className="mt-4 text-2xl font-extrabold text-neutral-900">공고 수정</h1>
        <div className="mt-8">
          <OpeningForm
            action={updateAction}
            submitLabel="수정 저장"
            defaults={{
              title: opening.title,
              group: opening.group,
              job: opening.job,
              location: opening.location,
              employment: opening.employment,
              career: opening.career,
              summary: opening.summary,
              hot: opening.hot,
              published: opening.published,
              applyUrl: opening.applyUrl,
              description: opening.description,
              appeal: opening.appeal,
              responsibilities: opening.responsibilities,
              qualifications: opening.qualifications,
              preferred: opening.preferred,
              sortOrder: opening.sortOrder,
            }}
          />
        </div>
      </main>
    </div>
  );
}
