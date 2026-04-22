import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Diagnose",
    desc: "Identify leaks across your funnel. Audit data, workflows, and handoffs between marketing, sales, CS, and product.",
  },
  {
    n: "02",
    title: "Build",
    desc: "Implement CRM, analytics, and automation systems. Wire up attribution and cohort orchestration end-to-end.",
  },
  {
    n: "03",
    title: "Align",
    desc: "Connect teams to shared metrics. Set up workflows, handoff protocols, and a single revenue view.",
  },
  {
    n: "04",
    title: "Optimize",
    desc: "Improve conversion, retention, and expansion. Iterate with cohort insights, A/B tests, and health scores.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="process"
      data-testid="process-section"
      className="relative py-24 sm:py-32 border-t border-slate-800 bg-[#131C32]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.24em] text-blue-400 font-semibold font-mono">
              04 / How It Works
            </span>
            <h2
              data-testid="process-heading"
              className="mt-6 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-white leading-[1.05]"
            >
              From silos to systems.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-lg text-zinc-400 leading-relaxed">
              A structured engagement that moves you from diagnosis to a
              compounding revenue engine. No templated decks. No consulting
              theater.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* vertical line for mobile, horizontal for desktop */}
          <div className="hidden lg:block absolute left-0 right-0 top-[42px] h-px bg-slate-800" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-0">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                data-testid={`process-step-${i}`}
                className="relative lg:pr-8 lg:border-r lg:border-slate-800 lg:last:border-r-0 group"
              >
                <div className="flex items-center gap-4 mb-6 relative">
                  <div className="w-11 h-11 bg-[#0F1729] border border-slate-700 group-hover:border-blue-600 flex items-center justify-center font-mono text-sm text-blue-400 transition-colors relative z-10">
                    {step.n}
                  </div>
                  <div className="h-px flex-1 bg-slate-800 lg:hidden" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed pr-4">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
