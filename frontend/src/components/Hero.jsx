import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { AUDIT_URL } from "@/lib/constants";

const HERO_BG =
  "https://static.prod-images.emergentagent.com/jobs/9f5b11c6-bf54-42fb-8053-3b97753d5d37/images/e9c232e4b159876f6ba93d4956b686ff77ac2e9cac6ae3398fb131879dad44ea.png";

export const Hero = () => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 grid-pattern radial-fade opacity-60" />
      {/* Dark fade */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0F1729]/40 via-[#0F1729]/70 to-[#0F1729]" />
      {/* Blue glow accent */}
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px w-10 bg-blue-500" />
          <span
            data-testid="hero-overline"
            className="text-xs sm:text-sm uppercase tracking-[0.24em] text-blue-400 font-semibold font-mono"
          >
            GTM Systems for B2B SaaS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          data-testid="hero-headline"
          className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter text-white max-w-5xl leading-[0.95]"
        >
          Your GTM isn't broken.
          <br />
          <span className="text-gradient-blue">Your system is.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          data-testid="hero-subheadline"
          className="mt-8 text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-2xl"
        >
          Revtitude helps B2B SaaS companies align marketing, sales, customer
          success, and product into a single revenue engine—so you stop leaking
          revenue across the funnel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <a
            href={AUDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-cta-button"
            className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-4 border border-blue-500 transition-all blue-glow"
          >
            Get a GTM System Audit
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#problem"
            data-testid="hero-secondary-link"
            className="inline-flex items-center gap-2 text-zinc-300 hover:text-white font-medium px-5 py-4 border border-slate-700 hover:border-zinc-600 transition-colors"
          >
            See how it works
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          data-testid="hero-stats"
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-800 border border-slate-800 max-w-4xl"
        >
          {[
            { k: "$1–10M", v: "ARR journey" },
            { k: "92%", v: "demo → opp lift" },
            { k: "15→28%", v: "trial → paid" },
            { k: "35%", v: "MoM growth" },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-[#1A243A] p-5 sm:p-6"
              data-testid={`hero-stat-${i}`}
            >
              <div className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {s.k}
              </div>
              <div className="text-xs uppercase tracking-wider text-zinc-500 mt-1 font-mono">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
