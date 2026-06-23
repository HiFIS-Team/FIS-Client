import { Section, Eyebrow } from "@/components/ui/Section";
import { OpeningsFilter } from "@/components/sections/OpeningsFilter";
import { getOpenings } from "@/lib/openings";

export async function Openings() {
  const openings = await getOpenings();

  return (
    <Section id="openings">
      <div className="text-center">
        <Eyebrow>OPEN POSITIONS</Eyebrow>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          채용 중인 공고
        </h2>
      </div>
      <OpeningsFilter openings={openings} />
    </Section>
  );
}
