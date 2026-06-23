import { signIn } from "@/auth";

export const metadata = { title: "관리자 로그인" };

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-neutral-950 px-5">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-xl">
        <p className="text-lg font-extrabold tracking-tight text-neutral-900">
          피트니스스타 <span className="text-brand">★</span>
        </p>
        <h1 className="mt-1 text-sm font-medium text-neutral-500">
          채용 관리자
        </h1>

        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/admin" });
          }}
          className="mt-8"
        >
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-neutral-300 py-3 font-semibold text-neutral-800 transition-colors hover:bg-neutral-50"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z"
              />
            </svg>
            Google로 로그인
          </button>
        </form>

        <p className="mt-6 text-xs text-neutral-400">
          허용된 관리자 계정만 접근할 수 있습니다.
        </p>
      </div>
    </div>
  );
}
