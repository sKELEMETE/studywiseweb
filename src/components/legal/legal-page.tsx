import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedBackground } from "@/components/landing/animated-background";
import { siteConfig } from "@/lib/site";

type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <>
      <AnimatedBackground />
      <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <nav className="glass-panel flex items-center justify-between rounded-full px-3 py-3">
            <Link
              href="/"
              className="flex items-center gap-3 rounded-full px-2 py-2 outline-none transition hover:bg-white/[0.08] focus-visible:ring-2 focus-visible:ring-emerald-200"
              aria-label="Back to StudyWise home"
            >
              <Image
                src={siteConfig.iconPath}
                alt=""
                width={34}
                height={34}
                className="size-9 rounded-md border border-white/[0.15]"
              />
              <span className="text-sm font-semibold text-white">StudyWise</span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/[0.68] outline-none transition hover:bg-white/[0.08] hover:text-white focus-visible:ring-2 focus-visible:ring-emerald-200"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Home
            </Link>
          </nav>

          <article className="glass-panel mt-8 rounded-lg p-6 sm:p-10">
            <p className="text-sm font-semibold uppercase text-emerald-200/80">
              Effective {siteConfig.effectiveDate}
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-white/[0.64]">{intro}</p>

            <div className="mt-10 space-y-9">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-semibold text-white">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="leading-7 text-white/[0.62]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
