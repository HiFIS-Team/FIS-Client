import Link from "next/link";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { OpeningForm } from "@/components/admin/OpeningForm";
import { createOpening } from "../../actions";

export const metadata = { title: "새 공고" };

export default function NewOpeningPage() {
  return (
    <div className="min-h-dvh bg-neutral-50">
      <AdminHeader />
      <main className="mx-auto w-full max-w-3xl px-5 py-10">
        <Link href="/admin" className="text-sm text-neutral-500 hover:text-neutral-900">
          ← 목록
        </Link>
        <h1 className="mt-4 text-2xl font-extrabold text-neutral-900">새 공고 작성</h1>
        <div className="mt-8 rounded-xl border border-neutral-200 bg-white p-6">
          <OpeningForm action={createOpening} submitLabel="공고 등록" />
        </div>
      </main>
    </div>
  );
}
