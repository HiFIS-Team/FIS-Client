import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Stats } from "@/components/sections/Stats";
import { Brands } from "@/components/sections/Brands";
import { Culture } from "@/components/sections/Culture";
import { JobGroups } from "@/components/sections/JobGroups";
import { Openings } from "@/components/sections/Openings";
import { ContactCTA } from "@/components/sections/ContactCTA";

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
        <Openings />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
