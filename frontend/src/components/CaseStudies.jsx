import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, AlertOctagon, Wrench, ArrowUpRight } from "lucide-react";
import { AUDIT_URL } from "@/lib/constants";

const CASE_STUDIES = [
  {
    id: 1,
    category: "Fintech",
    client: "SyndicationPro",
    headline: "43% → 60%+ MQL→SQL. Pipeline 3x. +$2.8M ARR.",
    context:
      "Fintech company with a broken funnel, poor conversions, and no visibility into revenue performance.",
    broken: [
      "MQL → SQL stuck at 17%",
      "Pipeline 70% below target",
      "No attribution, no unified data",
      "High churn from weak onboarding",
    ],
    built: [
      "Unified marketing, sales & CS into one operating system",
      "Fixed lead qualification + outbound workflows",
      "Built onboarding + account health tracking",
      "Introduced full-funnel attribution + ROAS tracking",
    ],
    outcome: [
      { k: "MQL → SQL", v: "17% → 60%+" },
      { k: "SQL → SQO", v: "70%+" },
      { k: "Pipeline", v: "3× growth" },
      { k: "Churn", v: "↓ 13%" },
      { k: "Upsell revenue", v: "+127%" },
      { k: "ARR", v: "+$2.8M" },
    ],
  },
  {
    id: 2,
    category: "MedTech SaaS",
    client: "Noterro",
    headline: "Trial → Paid: 17% → 28%. Retention up. Revenue compounding.",
    context:
      "MedTech SaaS with strong acquisition but weak trial conversion and a broken onboarding experience.",
    broken: [
      "No centralized data across teams",
      "Trial → paid stuck at 17%",
      "Poor onboarding (40% conversion)",
      "No structured lifecycle follow-ups",
    ],
    built: [
      "Mapped and rebuilt the full trial journey",
      "Segmented users for targeted engagement",
      "Built onboarding + follow-up systems",
      "Launched retrial + reactivation flows",
      "Unified reporting across the funnel",
    ],
    outcome: [
      { k: "Trial → Paid", v: "17% → 28%" },
      { k: "Retrials", v: "3 → 20/mo" },
      { k: "Churn", v: "2% → 1.4%" },
      { k: "MRR growth", v: "18% → 61% YoY" },
      { k: "Email engagement", v: "30% → 39.8%" },
    ],
  },
  {
    id: 3,
    category: "B2B SaaS",
    client: "Digideck",
    headline:
      "From high no-shows to 100% show rate. 92% of demos turned into pipeline.",
    context:
      "B2B SaaS company generating demos — but losing most of them before the call even happened.",
    broken: [
      "High no-show rates wasting pipeline",
      "Disconnected systems (marketing vs sales)",
      "Manual, inconsistent follow-ups",
      "Prospects showing up cold → weak conversions",
    ],
    built: [
      "Built a pre-demo education system (email + SMS)",
      "Synced marketing + sales data into one flow",
      "Automated lead movement based on buying signals",
      "Standardized follow-ups without removing SDR control",
    ],
    outcome: [
      { k: "Demo show rate", v: "~65% → 100%" },
      { k: "Demo → pipeline", v: "92%" },
      { k: "Sales cycle", v: "Collapsed" },
      { k: "Follow-ups", v: "Fully systemized" },
    ],
  },
];

const CaseStudyCard = ({ study, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      data-testid={`case-study-${study.id}`}
      className="relative bg-[#1A243A] border border-slate-800 hover:border-blue-600/40 transition-all duration-300"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-blue-500/80 via-blue-400/30 to-transparent" />

      <div className="p-8 sm:p-10 lg:p-12">
        {/* Top meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-flex items-center px-2.5 py-1 bg-blue-600/10 border border-blue-600/30 text-[11px] font-mono text-blue-400 uppercase tracking-[0.18em]">
            Case Study 0{study.id}
          </span>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
            {study.category}
          </span>
          <span className="text-slate-600">·</span>
          <span className="font-heading text-sm font-semibold text-white tracking-tight">
            {study.client}
          </span>
        </div>

        {/* Headline */}
        <h3
          data-testid={`case-study-${study.id}-headline`}
          className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter text-white leading-[1.1] max-w-4xl"
        >
          {study.headline}
        </h3>

        {/* Context */}
        <p className="mt-5 text-base text-slate-400 leading-relaxed max-w-3xl">
          {study.context}
        </p>

        {/* 3-col body */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Broken */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <AlertOctagon className="w-4 h-4 text-red-400" strokeWidth={1.8} />
              <h4 className="text-xs font-mono uppercase tracking-[0.18em] text-slate-400">
                What was broken
              </h4>
            </div>
            <ul className="space-y-2.5">
              {study.broken.map((p, i) => (
                <li
                  key={i}
                  className="text-sm text-slate-300 flex items-start gap-2"
                >
                  <span className="text-red-400/60 mt-1.5 w-1 h-1 shrink-0 bg-red-400/60" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Built */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-4 h-4 text-blue-400" strokeWidth={1.8} />
              <h4 className="text-xs font-mono uppercase tracking-[0.18em] text-slate-400">
                What we built
              </h4>
            </div>
            <ul className="space-y-2.5">
              {study.built.map((p, i) => (
                <li
                  key={i}
                  className="text-sm text-slate-300 flex items-start gap-2"
                >
                  <span className="text-blue-400 mt-1.5 w-1 h-1 shrink-0 bg-blue-400" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-emerald-400" strokeWidth={1.8} />
              <h4 className="text-xs font-mono uppercase tracking-[0.18em] text-slate-400">
                Outcome
              </h4>
            </div>
            <div className="grid grid-cols-1 gap-px bg-slate-800 border border-slate-800">
              {study.outcome.map((o, i) => (
                <div key={i} className="bg-[#131C32] px-4 py-3 flex items-baseline justify-between gap-3">
                  <span className="text-xs text-slate-400 uppercase tracking-wider">
                    {o.k}
                  </span>
                  <span className="font-heading text-sm font-semibold text-white tracking-tight text-right">
                    {o.v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export const CaseStudies = () => {
  return (
    <section
      id="case-studies"
      data-testid="case-studies-section"
      className="relative py-24 sm:py-32 border-t border-slate-800"
    >
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.24em] text-blue-400 font-semibold font-mono">
              06 / Case Studies
            </span>
            <h2
              data-testid="case-studies-heading"
              className="mt-6 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-white leading-[1.05]"
            >
              Receipts, not promises.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-lg text-slate-400 leading-relaxed">
              Three revenue systems we built. Three sets of numbers that
              compounded. Same playbook, different verticals.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-8">
          {CASE_STUDIES.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-12 border-t border-slate-800"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <p className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tighter text-white leading-[1.1]">
                We didn't fix the sales team.
                <br />
                <span className="text-blue-400">
                  We fixed the system prospects move through.
                </span>
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a
                href={AUDIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="case-studies-cta-button"
                className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 border border-blue-500 transition-all blue-glow"
              >
                Build mine next
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
