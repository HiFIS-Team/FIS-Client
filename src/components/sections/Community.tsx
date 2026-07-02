import { Media } from "@/components/ui/Media";
import { Section, Eyebrow } from "@/components/ui/Section";
import { site } from "@/data/site";

export function Community() {
  const { community } = site;
  return (
    <Section id="community">
      <div className="max-w-2xl">
        <Eyebrow>{community.eyebrow}</Eyebrow>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          {community.title}
        </h2>
        <p className="mt-4 text-lg text-neutral-600">{community.body}</p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {community.items.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-3xl border border-neutral-200 bg-white"
          >
            <Media
              src={item.image}
              alt={item.title}
              label="단체 사진"
              className="aspect-[16/10] w-full"
              sizes="(min-width: 768px) 33vw, 100vw"
              position={item.imagePosition}
            />
            <div className="p-6">
              <p className="text-xs font-semibold tracking-[0.2em] text-brand">
                {item.tag}
              </p>
              <h3 className="mt-1 text-lg font-bold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-neutral-600">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
