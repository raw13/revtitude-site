import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AUDIT_URL } from "@/lib/constants";

export const FinalCTA = () => {
  return (
    <section
      id="audit"
      data-testid="final-cta-section"
      className="relative py-28 sm:py-40 border-t border-slate-800 overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern radial-fade opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="text-xs uppercase tracking-[0.24em] text-blue-400 font-semibold font-mono">
            06 / Your next step
          </span>
          <h2
            data-testid="final-cta-heading"
            className="mt-6 font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter text-white leading-[0.95]"
          >
            Want to know where your
            <br />
            <span className="text-gradient-blue">revenue is leaking?</span>
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-2xl">
            Get a breakdown of your GTM system—what's broken, what's
            misaligned, and what to fix first. No pitch decks. Actionable, in
            your context.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <a
              href={AUDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="final-cta-button"
              className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg border border-blue-500 transition-all blue-glow"
            >
              Get my GTM Audit
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="flex items-center gap-3 text-sm text-zinc-500">
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 bg-blue-600/20 border border-blue-600/40 rounded-full"
                  />
                ))}
              </div>
              <span>Free · 30 min · Operator-to-operator</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
