import Link from "next/link";
import { auth, signOut } from "@/auth";

export async function AdminHeader() {
  const session = await auth();
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-5">
        <Link href="/admin" className="font-extrabold tracking-tight text-neutral-900">
          채용 관리자 <span className="text-brand">★</span>
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/" className="text-neutral-500 hover:text-neutral-900">
            사이트 보기
          </Link>
          {session?.user?.email && (
            <span className="hidden text-neutral-400 sm:inline">
              {session.user.email}
            </span>
          )}
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/admin/login" });
            }}
          >
            <button className="rounded-full border border-neutral-300 px-3 py-1.5 font-medium text-neutral-700 hover:bg-neutral-50">
              로그아웃
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
