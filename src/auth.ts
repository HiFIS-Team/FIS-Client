import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

/** 관리자 허용 이메일 (.env의 ADMIN_EMAILS, 쉼표 구분) */
const adminEmails = (process.env.ADMIN_EMAILS ?? "")
  .split(",")
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean);

function isAdmin(email?: string | null) {
  return !!email && adminEmails.includes(email.toLowerCase());
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    // 허용 이메일만 로그인 가능
    signIn({ user }) {
      return isAdmin(user.email);
    },
    // /admin 보호 (로그인 페이지는 예외)
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname.startsWith("/admin/login")) return true;
      if (pathname.startsWith("/admin")) return isAdmin(auth?.user?.email);
      return true;
    },
  },
});
