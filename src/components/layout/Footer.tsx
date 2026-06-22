import Image from "next/image";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 py-12 text-neutral-400">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          {site.brand.logo ? (
            <Image
              src={site.brand.logo}
              alt={site.brand.name}
              width={220}
              height={48}
              className="h-12 w-auto object-contain"
            />
          ) : (
            <>
              <p className="text-lg font-extrabold text-white">
                {site.brand.name}
                <span className="ml-1 text-brand">★</span>
              </p>
              <p className="mt-2 text-sm">{site.brand.nameEn}</p>
            </>
          )}
        </div>

        <div className="text-sm">
          <p>
            채용 문의:{" "}
            <a
              href={`mailto:${site.brand.email}`}
              className="text-brand hover:underline"
            >
              {site.brand.email}
            </a>
          </p>
          <p className="mt-2 text-neutral-500">
            © {new Date().getFullYear()} {site.brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
