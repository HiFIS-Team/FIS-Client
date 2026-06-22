import { Media } from "@/components/ui/Media";
import { Section, Eyebrow } from "@/components/ui/Section";
import { site } from "@/data/site";

export function Brands() {
  const { brands } = site;
  return (
    <Section id="brands">
      <div className="max-w-2xl">
        <Eyebrow>{brands.eyebrow}</Eyebrow>
        <h2 className="whitespace-pre-line text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          {brands.title}
        </h2>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {brands.items.map((brand) => (
          <article
            key={brand.name}
            className="overflow-hidden rounded-3xl border border-neutral-200 bg-white"
          >
            <Media
              src={brand.image}
              alt={brand.name}
              label={`${brand.name} 이미지`}
              className="aspect-[16/10] w-full"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="p-7">
              <h3 className="text-2xl font-extrabold tracking-tight">
                {brand.name}
              </h3>
              <p className="mt-1 font-semibold text-brand">{brand.tagline}</p>
              <p className="mt-3 text-neutral-600">{brand.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
