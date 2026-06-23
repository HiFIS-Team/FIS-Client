import { NextResponse } from "next/server";

/** 파일 처리를 위해 Node 런타임에서 실행 */
export const runtime = "nodejs";

/**
 * 지원서 접수 API.
 * 프론트의 ApplyForm에서 multipart/form-data 로 POST 합니다.
 *
 * 현재는 받은 내용을 검증 후 로그로만 남깁니다.
 * 실제 운영 시 아래 TODO 3가지를 채우면 됩니다.
 */
export async function POST(request: Request) {
  try {
    const form = await request.formData();

    const openingId = String(form.get("openingId") ?? "");
    const openingTitle = String(form.get("openingTitle") ?? "");
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const agreedTerms = String(form.get("agreedTerms") ?? "");

    // 서버측 기본 검증
    if (!name || !email || !phone) {
      return NextResponse.json(
        { ok: false, error: "필수 항목이 누락되었습니다." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "올바른 이메일 형식이 아닙니다." },
        { status: 400 }
      );
    }

    // 첨부 파일 (documents) + 문서명(documentNames) 매칭
    const fileEntries = form.getAll("documents").filter(
      (f): f is File => f instanceof File
    );
    const docNames = form.getAll("documentNames").map((v) => String(v));
    const files = fileEntries.map((file, i) => ({
      label: docNames[i] ?? "첨부파일",
      name: file.name,
      size: file.size,
      type: file.type,
      file, // 실제 저장 시 사용
    }));

    const application = {
      openingId,
      openingTitle,
      name,
      email,
      phone,
      agreedTerms: agreedTerms.split(",").filter(Boolean),
      files: files.map((f) => ({ label: f.label, name: f.name, size: f.size })),
      submittedAt: new Date().toISOString(),
    };

    // 접수 로그 (개발 확인용)
    console.log("[지원 접수]", application);

    // TODO 1) 파일 스토리지 업로드 (S3 / Supabase Storage / Vercel Blob)
    //   - files[].file 을 업로드하고 URL 확보
    // TODO 2) DB에 지원 기록 저장 (application + 파일 URL)
    // TODO 3) 카카오톡 알림 발송 (담당자에게 새 지원 알림)

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[지원 접수 오류]", err);
    return NextResponse.json(
      { ok: false, error: "처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
