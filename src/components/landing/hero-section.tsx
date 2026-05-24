"use client";

import { motion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  CheckCircle2,
  FileText,
  ImageIcon,
  Layers3,
  Sparkles,
} from "lucide-react";
import { DownloadButton } from "@/components/ui/download-button";

const floatTransition = {
  duration: 5.8,
  repeat: Infinity,
  repeatType: "mirror" as const,
  ease: "easeInOut" as const,
};

export function HeroSection() {
  return (
<section className="relative overflow-hidden px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-30 lg:px-8">      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
          initial={{ opacity: 0, y: 32, filter: "blur(14px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass-panel mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-emerald-100">
            <Sparkles className="size-4" aria-hidden="true" />
            AI-powered Android study companion
          </div>

          <h1 className="max-w-5xl text-balance text-5xl font-semibold leading-[0.98] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Study smarter not copy paste to{" "}
            <span className="emerald-text">AI!</span>
          </h1>

          <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-white/[0.68] sm:text-xl sm:leading-9">
            Upload PDFs, images, or notes and let AI generate summaries and
            active learning tools instantly.
          </p>

          <div className="mt-10 flex w-full justify-center">
            <DownloadButton size="hero" />
          </div>
        </motion.div>

        <div className="relative mx-auto mt-14 h-[720px] max-w-6xl sm:h-[620px] lg:h-[590px]">
          <motion.div
            className="glass-panel absolute left-1/2 top-0 w-[min(92vw,560px)] rounded-lg p-5 text-left [translate:-50%_0] sm:p-6"
            initial={{ opacity: 0, y: 42, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-md bg-emerald-300 text-black shadow-[0_0_30px_rgba(0,245,160,0.24)]">
                  <Bot className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    AI Summary Preview
                  </p>
                  <p className="text-xs text-white/[0.52]">Generated instantly</p>
                </div>
              </div>
              <span className="rounded-full border border-emerald-200/[0.25] bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">
                Ready
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-xs uppercase text-white/[0.42]">
                  Chapter focus
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-white">
                  Photosynthesis, memory hooks, and exam-ready notes
                </h2>
              </div>
              <div className="space-y-3">
                {[
                  "Chlorophyll captures light energy inside the thylakoid membrane.",
                  "Carbon fixation converts atmospheric CO2 into stored glucose.",
                  "Active recall prompt: explain why light intensity changes output.",
                ].map((line) => (
                  <div key={line} className="flex gap-3 rounded-md bg-white/[0.06] p-3">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-emerald-200"
                      aria-hidden="true"
                    />
                    <p className="text-sm leading-6 text-white/[0.72]">{line}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass-panel absolute left-1/2 top-[392px] w-[min(84vw,330px)] rounded-lg p-5 text-left [translate:-50%_0] sm:left-0 sm:top-32 sm:[translate:0_0]"
            initial={{ opacity: 0, y: 34, rotate: -2 }}
            animate={{ opacity: 1, y: [0, -14, 0], rotate: -2 }}
            transition={{ ...floatTransition, delay: 0.55 }}
          >
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-md bg-white/10 text-emerald-100">
                <Layers3 className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Flashcard 01</p>
                <p className="text-xs text-white/[0.45]">Active recall</p>
              </div>
            </div>
            <p className="mt-5 text-xl font-semibold text-white">
              What makes a summary useful for studying?
            </p>
            <div className="mt-4 rounded-md border border-white/10 bg-black/[0.24] p-3 text-sm leading-6 text-white/[0.64]">
              It turns source material into cues, explanations, and retrieval
              prompts.
            </div>
          </motion.div>

          <motion.div
            className="glass-panel absolute left-1/2 top-[548px] w-[min(84vw,330px)] rounded-lg p-5 text-left [translate:-50%_0] sm:left-auto sm:right-0 sm:top-52 sm:[translate:0_0]"
            initial={{ opacity: 0, y: 34, rotate: 2 }}
            animate={{ opacity: 1, y: [0, 16, 0], rotate: 2 }}
            transition={{ ...floatTransition, delay: 0.9 }}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-md bg-white/10 text-emerald-100">
                  <BrainCircuit className="size-5" aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold text-white">
                  Learning stack
                </p>
              </div>
              <span className="text-xs text-emerald-100">4 cards</span>
            </div>
            <div className="mt-5 grid gap-3">
              {["Key ideas", "Definitions", "Practice prompts"].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-white/70"
                >
                  <span>{item}</span>
                  <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(0,245,160,0.8)]" />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass-panel absolute bottom-3 left-1/2 flex w-[min(88vw,430px)] items-center justify-between gap-4 rounded-lg p-4 [translate:-50%_0]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ ...floatTransition, delay: 1.15, duration: 6.4 }}
          >
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-md bg-emerald-300/[0.15] text-emerald-100">
                <FileText className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">PDF notes</p>
                <p className="text-xs text-white/[0.48]">14 pages compressed</p>
              </div>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-md bg-cyan-300/10 text-cyan-100">
                <ImageIcon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Image OCR</p>
                <p className="text-xs text-white/[0.48]">Clean extraction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
