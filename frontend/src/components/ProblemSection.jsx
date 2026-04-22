import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Clock, Users } from "lucide-react";

const LEAKS = [
  {
    icon: Users,
    headline: "Marketing is hitting MQL targets.",
    contrast: "But sales ignores the leads.",
  },
  {
    icon: TrendingDown,
    headline: "Sales is closing deals.",
    contrast: "But churn kicks in within 90 days.",
  },
  {
    icon: AlertTriangle,
    headline: "CS is firefighting.",
    contrast: "With no visibility into sales context.",
  },
  {
    icon: Clock,
    headline: "Product is shipping features.",
    contrast: "But no one knows what drives revenue.",
  },
];

export const ProblemSection = () => {
  return (
    <section
      id="problem"
      data-testid="problem-section"
      className="relative py-24 sm:py-32 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-[0.24em] text-blue-400 font-semibold font-mono">
                01 / The Problem
              </span>
            </div>
            <h2
              data-testid="problem-heading"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.02]"
            >
              Everything looks fine.
              <br />
              <span className="text-zinc-500">Until you zoom out.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg text-zinc-400 leading-relaxed">
              Each team hits their numbers in isolation. But the revenue
              engine—the thing that actually compounds—was never built. You see
              it in the gaps: leads that die, deals that churn, features that
              never sell.
            </p>
            <div className="mt-8 p-5 border-l-2 border-blue-600 bg-[#1A243A]">
              <p className="text-white font-medium">
                Everyone is working.{" "}
                <span className="text-blue-400">No one is aligned.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Grid of leaks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-800 border border-slate-800">
          {LEAKS.map((leak, i) => {
            const Icon = leak.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-testid={`problem-leak-${i}`}
                className="group bg-[#1A243A] hover:bg-[#243250] p-8 sm:p-10 transition-colors relative"
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon className="w-6 h-6 text-blue-500 shrink-0 mt-1" strokeWidth={1.5} />
                  <span className="text-xs font-mono text-zinc-600">
                    0{i + 1}
                  </span>
                </div>
                <p className="mt-6 font-heading text-xl sm:text-2xl font-medium text-white leading-snug">
                  {leak.headline}
                </p>
                <p className="mt-3 text-base text-zinc-500 leading-relaxed">
                  {leak.contrast}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Outcome bar */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Revenue leakage across the lifecycle",
            "Longer time-to-value",
            "Lower retention & expansion",
          ].map((outcome, i) => (
            <div
              key={i}
              data-testid={`problem-outcome-${i}`}
              className="flex items-center gap-3 text-sm text-zinc-400"
            >
              <span className="text-blue-500 font-mono">→</span>
              <span className="font-medium">{outcome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
