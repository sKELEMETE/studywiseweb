"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function FeaturesSection() {
  return (
    <section id="features" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase text-emerald-200/80">
            Core feature
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            AI Summaries
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/[0.62] sm:text-xl">
            Turn long study materials into fast, clean summaries designed for
            active learning.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-12">
          <motion.article
            className="glass-panel group mx-auto grid max-w-5xl gap-8 rounded-lg p-6 transition duration-300 hover:border-emerald-200/[0.35] hover:shadow-[0_0_95px_rgba(0,245,160,0.16)] sm:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:p-10"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            <div className="flex flex-col justify-between gap-10">
              <div>
                <span className="grid size-14 place-items-center rounded-md bg-emerald-300 text-black shadow-[0_0_48px_rgba(0,245,160,0.34)]">
                  <BrainCircuit className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mt-7 text-3xl font-semibold text-white sm:text-4xl">
                  Dense notes become clean recall material.
                </h3>
              </div>
              <div className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.06] p-4">
                <Sparkles className="size-5 shrink-0 text-emerald-200" aria-hidden="true" />
                <p className="text-sm leading-6 text-white/[0.64]">
                  Built for the jump from reading to remembering.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-black/[0.22] p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">
                  Generated summary
                </p>
                <p className="text-xs text-emerald-100">StudyWise AI</p>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  ["Concept map", "Groups related ideas into a clear study path."],
                  ["Exam cues", "Highlights terms, definitions, and likely prompts."],
                  ["Recall ready", "Converts passive notes into questions and checks."],
                ].map(([label, text]) => (
                  <div
                    key={label}
                    className="rounded-md border border-white/10 bg-white/[0.055] p-4 transition duration-300 group-hover:border-emerald-200/20"
                  >
                    <p className="text-sm font-semibold text-emerald-100">
                      {label}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/[0.58]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        </Reveal>
      </div>
    </section>
  );
}
