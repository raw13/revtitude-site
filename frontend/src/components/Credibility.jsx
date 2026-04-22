import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

const CREDIBILITY_STATS = [
  { k: "6+", v: "Years in Growth & RevOps" },
  { k: "40+", v: "SaaS systems built" },
  { k: "5★", v: "Operator-led, not consultants" },
];

const LOGO_MARKERS = [
  "HubSpot",
  "Salesforce",
  "Amplitude",
  "Mixpanel",
  "Segment",
  "Customer.io",
];

export const Credibility = () => {
  return (
    <section
      id="proof"
      data-testid="credibility-section"
      className="relative py-24 sm:py-32 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.24em] text-blue-400 font-semibold font-mono">
              05 / Credibility
            </span>
            <h2
              data-testid="credibility-heading"
              className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.02]"
            >
              Built by operators,
              <br />
              <span className="text-zinc-500">not consultants.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-lg text-zinc-400 leading-relaxed">
              Six-plus years building revenue systems inside B2B SaaS companies.
              Deep expertise in HubSpot, outbound, lifecycle, and retention.
              Every deliverable is something we've shipped before—in production,
              under real pressure.
            </p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900 mb-12">
          {CREDIBILITY_STATS.map((s, i) => (
            <div key={i} className="bg-[#0a0a0a] p-8 sm:p-10">
              <div className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight">
                {s.k}
              </div>
              <div className="text-sm text-zinc-500 mt-2 uppercase tracking-wider font-mono">
                {s.v}
              </div>
            </div>
          ))}
        </div>

        {/* Tools / stack bar */}
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4 pb-12 mb-12 border-b border-zinc-900">
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-mono">
            Stack we live in
          </span>
          {LOGO_MARKERS.map((l, i) => (
            <span
              key={i}
              className="text-zinc-400 font-heading text-lg font-medium tracking-tight"
            >
              {l}
            </span>
          ))}
        </div>

        {/* Testimonial marquee */}
        <div className="marquee-fade">
          <Marquee
            gradient={false}
            speed={35}
            pauseOnHover
            className="overflow-hidden"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.article
                key={i}
                data-testid={`testimonial-card-${i}`}
                className="mx-4 w-[420px] sm:w-[480px] shrink-0 bg-[#0a0a0a] hover:bg-[#111111] border border-zinc-900 hover:border-zinc-700 p-8 transition-all flex flex-col min-h-[360px]"
              >
                <Quote
                  className="w-6 h-6 text-blue-500 mb-4"
                  strokeWidth={1.5}
                />
                <div className="inline-flex self-start items-center px-2 py-1 mb-4 bg-blue-600/10 border border-blue-600/30">
                  <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider">
                    {t.metric}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed flex-1">
                  "{t.quote}"
                </p>
                <div className="mt-6 pt-5 border-t border-zinc-900 flex items-center gap-3">
                  <div className="w-11 h-11 overflow-hidden border border-zinc-800 shrink-0">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {t.name}
                    </div>
                    <div className="text-xs text-zinc-500">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
