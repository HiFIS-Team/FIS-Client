import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Stats } from "@/components/sections/Stats";
import { Brands } from "@/components/sections/Brands";
import { Culture } from "@/components/sections/Culture";
import { JobGroups } from "@/components/sections/JobGroups";
import { Perks } from "@/components/sections/Perks";
import { Openings } from "@/components/sections/Openings";
import { ContactCTA } from "@/components/sections/ContactCTA";

// 공고를 DB에서 읽으므로 매 요청마다 최신으로 렌더링
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <Stats />
        <Brands />
        <Culture />
        <JobGroups />
        <Perks />
        <Openings />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
