import type { JobGroupKey } from "@/lib/types";

/**
 * 사이트 전체 문구/콘텐츠.
 * 사진은 image 필드에 "/images/파일명.jpg" 형태로 넣으면 됩니다.
 * 비워두면(""), 자동으로 플레이스홀더가 표시됩니다.
 */

export const site = {
  brand: {
    name: "피트니스스타",
    nameEn: "FITNESS STAR",
    /** 채용 문의 메일 */
    email: "recruit@fitnessstar.co.kr",
    /** 헤더 로고 이미지 (없으면 텍스트 로고) */
    logo: "",
  },

  nav: [
    { label: "브랜드", href: "#brands" },
    { label: "조직문화", href: "#culture" },
    { label: "직군 소개", href: "#groups" },
    { label: "채용 공고", href: "#openings" },
  ],

  hero: {
    badge: "2026 핵심 인재 채용",
    title: ["운동의 가치를 전하는", "팀에 합류하세요"],
    subtitle: "피트니스스타는 대한민국 피트니스 시장을 혁신하는 브랜드입니다.",
    primaryCta: { label: "채용 공고 보기", href: "#openings" },
    secondaryCta: { label: "브랜드 알아보기", href: "#brands" },
    image: "", // /images/hero.jpg
  },

  mission: {
    eyebrow: "WHY WE EXIST",
    title: "피트니스 시장,\n우리가 바꿉니다.",
    body: "여전히 많은 사람들이 운동을 어렵고 부담스럽게 느낍니다.\n피트니스스타는 누구나 즐겁게 운동하고, 꾸준히 성장할 수 있는\n새로운 운동 경험을 만들어 시장의 기준을 다시 씁니다.",
    image: "", // /images/mission.jpg
  },

  stats: {
    eyebrow: "BY THE NUMBERS",
    title: "숫자로 보는 피트니스스타",
    items: [
      { value: "100+", label: "전국 지점" },
      { value: "30만+", label: "누적 회원" },
      { value: "8년", label: "지속 성장" },
      { value: "98%", label: "회원 재등록률" },
    ],
  },

  brands: {
    eyebrow: "OUR BRANDS",
    title: "피트니스를 혁신하는\n대표 브랜드",
    items: [
      {
        name: "STAR GYM",
        tagline: "누구나 한 번 더 운동하게 만드는 공간",
        description:
          "들고, 뛰고, 회복하는 운동의 본질에 집중한 프리미엄 피트니스 공간입니다.",
        image: "", // /images/brand-gym.jpg
      },
      {
        name: "TEAM STAR",
        tagline: "커뮤니티 기반 그룹 트레이닝",
        description:
          "함께 땀 흘리는 즐거움과 매일의 성취감을 결합한 팀 트레이닝 브랜드입니다.",
        image: "", // /images/brand-team.jpg
      },
    ],
  },

  culture: {
    eyebrow: "OUR CULTURE",
    title: "우리가 일하는 방식",
    body: "최고의 동료와 함께, 빠르게 실행하고 성장합니다.",
    values: [
      {
        title: "고객에게 미친다",
        description: "모든 의사결정의 기준은 회원의 경험입니다.",
      },
      {
        title: "빠르게 실행한다",
        description: "완벽한 계획보다 빠른 실행과 학습을 택합니다.",
      },
      {
        title: "함께 승리한다",
        description: "개인의 성과가 아닌 팀의 성공을 추구합니다.",
      },
    ],
    image: "", // /images/culture.jpg
  },

  jobGroups: {
    eyebrow: "JOB GROUPS",
    title: "당신의 자리를 찾아보세요",
    items: [
      {
        key: "office" as JobGroupKey,
        name: "오피스 직군",
        description:
          "기획·마케팅·디자인·경영지원 등 본사에서 브랜드와 사업의 성장을 이끕니다.",
        image: "", // /images/group-office.jpg
      },
      {
        key: "field" as JobGroupKey,
        name: "현장 관리자",
        description:
          "지점 운영과 공간개발을 통해 현장의 고객 경험과 성과를 만듭니다.",
        image: "", // /images/group-field.jpg
      },
      {
        key: "coach" as JobGroupKey,
        name: "코치 · 크루",
        description:
          "수업과 현장 응대로 회원의 건강에 직접 기여하며 빠르게 성장합니다.",
        image: "", // /images/group-coach.jpg
      },
    ],
  },

  contact: {
    eyebrow: "GET IN TOUCH",
    title: "어떤 포지션이 맞을지\n고민되시나요?",
    body: "궁금한 점이나 추천이 필요하다면 언제든 채용팀에 문의해 주세요.",
  },
} as const;

export type Site = typeof site;
