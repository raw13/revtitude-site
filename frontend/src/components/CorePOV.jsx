import React from "react";
import { motion } from "framer-motion";

const POV_IMG =
  "https://static.prod-images.emergentagent.com/jobs/9f5b11c6-bf54-42fb-8053-3b97753d5d37/images/828b401b5ef8dd23be58dbe749efc957b3389242cd7bc19abb729c591def090c.png";

export const CorePOV = () => {
  return (
    <section
      id="approach"
      data-testid="pov-section"
      className="relative py-24 sm:py-32 border-t border-slate-800 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="text-xs uppercase tracking-[0.24em] text-blue-400 font-semibold font-mono">
              02 / Core POV
            </span>
            <h2
              data-testid="pov-heading"
              className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.02]"
            >
              Growth is not a channel problem.
              <br />
              <span className="text-blue-400">It's a systems problem.</span>
            </h2>
            <p className="mt-8 text-lg text-zinc-400 leading-relaxed max-w-2xl">
              Most SaaS companies optimize departments. We optimize the entire
              revenue system.
            </p>

            <ul className="mt-10 space-y-5">
              {[
                "Connect product usage to revenue decisions",
                "Align incentives across marketing, sales, CS & product",
                "Build systems that scale—not hacks that break",
              ].map((item, i) => (
                <li
                  key={i}
                  data-testid={`pov-principle-${i}`}
                  className="flex items-start gap-4"
                >
                  <div className="shrink-0 mt-2 w-8 h-px bg-blue-500" />
                  <span className="text-white text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <div className="absolute inset-0 border border-slate-700" />
              <div className="absolute inset-2 border border-slate-800" />
              <img
                src={POV_IMG}
                alt="Revenue system alignment"
                className="relative w-full h-full object-cover mix-blend-screen opacity-90"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#0F1729] via-[#0F1729]/80 to-transparent">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-mono">
                  Revenue System View
                </p>
                <p className="text-sm text-zinc-400 mt-1">
                  One engine. Four teams. Zero handoff loss.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
