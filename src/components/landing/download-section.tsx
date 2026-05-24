import Link from "next/link";
import { ShieldCheck, Smartphone } from "lucide-react";
import { DownloadButton } from "@/components/ui/download-button";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

export function DownloadSection() {
  return (
    <section id="download" className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-20 mx-auto h-64 max-w-4xl bg-[radial-gradient(ellipse,rgba(0,245,160,0.18),transparent_68%)] blur-3xl"
      />
      <Reveal className="relative mx-auto max-w-5xl">
        <div className="glass-panel rounded-lg p-6 text-center sm:p-10 lg:p-14">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <p className="text-sm font-semibold uppercase text-emerald-200/80">
              APK download
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              Install StudyWise on Android.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/[0.62]">
              Download the latest APK and start turning study materials into
              active learning tools.
            </p>

            <div className="mt-10 flex w-full justify-center">
              <DownloadButton />
            </div>

            <div className="mt-8 grid w-full max-w-xl gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4 text-left">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="size-5 text-emerald-200" aria-hidden="true" />
                  <p className="text-sm font-semibold text-white">Version</p>
                </div>
                <p className="mt-2 text-2xl font-semibold text-white">
                  {siteConfig.version}
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.06] p-4 text-left">
                <div className="flex items-center gap-3">
                  <Smartphone className="size-5 text-emerald-200" aria-hidden="true" />
                  <p className="text-sm font-semibold text-white">Platform</p>
                </div>
                <p className="mt-2 text-2xl font-semibold text-white">
                  Android support
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/[0.52]">
              <Link
                href="/privacy-policy"
                className="rounded-full px-3 py-2 outline-none transition hover:bg-white/[0.08] hover:text-white focus-visible:ring-2 focus-visible:ring-emerald-200"
              >
                Privacy Policy
              </Link>
              <span aria-hidden="true" className="size-1 rounded-full bg-white/[0.24]" />
              <Link
                href="/terms"
                className="rounded-full px-3 py-2 outline-none transition hover:bg-white/[0.08] hover:text-white focus-visible:ring-2 focus-visible:ring-emerald-200"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
