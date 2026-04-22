import React from "react";
import { motion } from "framer-motion";
import {
  Network,
  Database,
  Sparkles,
  LifeBuoy,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  {
    id: 1,
    title: "Revenue System Architecture",
    desc: "Map your full customer journey, identify handoff breakpoints, and design lifecycle stages across teams.",
    points: [
      "Journey & funnel mapping",
      "Handoff diagnostics",
      "Lifecycle stage design",
    ],
    icon: Network,
    span: "md:col-span-8 md:row-span-2",
    featured: true,
  },
  {
    id: 2,
    title: "RevOps Infrastructure",
    desc: "CRM architecture, attribution, reporting & workflow automation across GTM.",
    points: ["HubSpot / Salesforce", "Attribution & reporting", "Workflow automation"],
    icon: Database,
    span: "md:col-span-4",
  },
  {
    id: 3,
    title: "Product-Led Growth",
    desc: "Connect product usage to revenue—Amplitude, Mixpanel, cohorts, and A/B testing.",
    points: ["Amplitude / Mixpanel", "Feature adoption tracking", "Cohort orchestration"],
    icon: Sparkles,
    span: "md:col-span-4",
  },
  {
    id: 4,
    title: "Lifecycle & Retention",
    desc: "Onboarding → activation → expansion. Health scoring, churn prediction, interventions.",
    points: ["Activation systems", "Health scoring models", "Churn intervention"],
    icon: LifeBuoy,
    span: "md:col-span-4",
  },
  {
    id: 5,
    title: "Email Deliverability",
    desc: "Domain & IP setup, reputation recovery, list hygiene—the thing most teams ignore and quietly bleed revenue over.",
    points: ["Domain & IP setup", "Reputation recovery", "List hygiene & validation"],
    icon: Mail,
    span: "md:col-span-8",
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 sm:py-32 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.24em] text-blue-400 font-semibold font-mono">
              03 / What We Do
            </span>
            <h2
              data-testid="services-heading"
              className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.02]"
            >
              We build your revenue engine
              <br />
              <span className="text-zinc-500">end-to-end.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-lg text-zinc-400 leading-relaxed">
              Five systems. One operating layer. Each one fixes a specific
              source of revenue leakage—and together they compound into
              defensible GTM infrastructure.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-zinc-900 border border-zinc-900">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-testid={`service-card-${s.id}`}
                className={`${s.span} col-span-1 group bg-[#0a0a0a] hover:bg-[#111111] p-8 sm:p-10 transition-all relative overflow-hidden ${
                  s.featured ? "md:min-h-[380px]" : "md:min-h-[260px]"
                }`}
              >
                {s.featured && (
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-blue-600 via-blue-500/50 to-transparent" />
                )}
                <div className="flex items-start justify-between h-full flex-col gap-8">
                  <div className="w-full">
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-11 h-11 flex items-center justify-center border border-zinc-800 ${
                          s.featured
                            ? "bg-blue-600/10 border-blue-600/40"
                            : "bg-[#050505]"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${s.featured ? "text-blue-400" : "text-zinc-300"}`}
                          strokeWidth={1.5}
                        />
                      </div>
                      <span className="text-xs font-mono text-zinc-600">
                        0{s.id}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-lg">
                      {s.desc}
                    </p>
                  </div>

                  <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4 border-t border-zinc-900">
                    {s.points.map((p, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-zinc-500"
                      >
                        <span className="w-1 h-1 bg-blue-500 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex items-center gap-3 text-sm text-zinc-500">
          <ArrowUpRight className="w-4 h-4 text-blue-500" />
          <span>
            Most teams ignore email deliverability. You lose revenue because of
            it.
          </span>
        </div>
      </div>
    </section>
  );
};
