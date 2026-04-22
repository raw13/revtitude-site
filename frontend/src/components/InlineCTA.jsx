import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AUDIT_URL } from "@/lib/constants";

export const InlineCTA = ({
  kicker = "Stop leaking revenue",
  headline = "Ready to see where your funnel is actually broken?",
  sub = "A free 30-minute GTM system audit. No pitch. Just a clear breakdown of what's misaligned and what to fix first.",
  ctaLabel = "Book a Call",
  testId = "inline-cta",
  variant = "default", // default | subtle
}) => {
  const isSubtle = variant === "subtle";
  return (
    <section
      data-testid={`${testId}-section`}
      className={`relative py-16 sm:py-20 border-t border-slate-800 overflow-hidden ${
        isSubtle ? "bg-[#131C32]" : "bg-gradient-to-br from-[#0F1729] via-[#151F3A] to-[#0F1729]"
      }`}
    >
      {!isSubtle && (
        <>
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative max-w-7xl mx-auto px-6 sm:px-8"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-blue-500" />
              <span className="text-xs uppercase tracking-[0.24em] text-blue-400 font-semibold font-mono">
                {kicker}
              </span>
            </div>
            <h3 className="font-heading text-3xl sm:text-4xl font-bold tracking-tighter text-white leading-[1.05]">
              {headline}
            </h3>
            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
              {sub}
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={AUDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`${testId}-button`}
              className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 border border-blue-500 transition-all blue-glow whitespace-nowrap"
            >
              {ctaLabel}
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
