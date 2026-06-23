export { auth as middleware } from "@/auth";

// /admin 경로만 인증 검사 (authorized 콜백에서 로그인 페이지는 예외 처리)
export const config = {
  matcher: ["/admin/:path*"],
};
