import React from "react";
import { motion } from "framer-motion";
import {
  Network,
  Database,
  Sparkles,
  LifeBuoy,
  Mail,
  ArrowRight,
} from "lucide-react";

const FEATURED = {
  id: 1,
  title: "Revenue System Architecture",
  tagline: "The foundation. Everything plugs in here.",
  desc: "We map your full customer journey end-to-end, identify every handoff breakpoint between teams, and design lifecycle stages that actually compound revenue instead of leaking it.",
  points: [
    "Customer journey & funnel mapping",
    "Handoff breakpoint diagnostics",
    "Cross-team lifecycle stage design",
    "Revenue-aligned team incentives",
  ],
  icon: Network,
};

const PILLARS = [
  {
    id: 2,
    title: "RevOps Infrastructure",
    desc: "CRM architecture, attribution, and workflow automation across marketing, sales, and CS.",
    points: [
      "HubSpot / Salesforce buildout",
      "Attribution & reporting systems",
      "Workflow automation across GTM",
    ],
    icon: Database,
  },
  {
    id: 3,
    title: "Product-Led Growth Systems",
    desc: "Connect product usage to revenue decisions with cohort-level visibility.",
    points: [
      "Amplitude / Mixpanel integration",
      "Feature adoption → conversion mapping",
      "Cohort orchestration & A/B frameworks",
    ],
    icon: Sparkles,
  },
  {
    id: 4,
    title: "Lifecycle & Retention",
    desc: "Onboarding → activation → expansion. Built as one continuous system, not four disconnected campaigns.",
    points: [
      "Activation & onboarding flows",
      "Health scoring models",
      "Churn prediction & intervention",
    ],
    icon: LifeBuoy,
  },
  {
    id: 5,
    title: "Email Deliverability",
    desc: "The thing most teams ignore — and quietly bleed revenue over every single month.",
    points: [
      "Domain & IP warm-up",
      "Reputation recovery",
      "List hygiene & validation",
    ],
    icon: Mail,
  },
];

const Card = ({ service, featured = false, index = 0 }) => {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      data-testid={`service-card-${service.id}`}
      className={`group relative bg-[#1A243A] hover:bg-[#243250] border border-slate-800 hover:border-blue-600/60 transition-all duration-300 ${
        featured ? "p-8 sm:p-12" : "p-8"
      }`}
    >
      {featured && (
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-blue-500 via-blue-400/60 to-transparent" />
      )}

      <div className="flex items-start justify-between mb-6">
        <div
          className={`flex items-center justify-center border transition-colors ${
            featured
              ? "w-14 h-14 bg-blue-600/15 border-blue-600/50"
              : "w-11 h-11 bg-[#0F1729] border-slate-700 group-hover:border-blue-600/50"
          }`}
        >
          <Icon
            className={`${featured ? "w-6 h-6 text-blue-300" : "w-5 h-5 text-blue-400"}`}
            strokeWidth={1.5}
          />
        </div>
        <span className="text-xs font-mono text-slate-500">
          0{service.id}
        </span>
      </div>

      <h3
        className={`font-heading font-semibold text-white tracking-tight ${
          featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
        }`}
      >
        {service.title}
      </h3>

      {service.tagline && (
        <p className="mt-2 text-sm font-medium text-blue-400 uppercase tracking-wider font-mono">
          {service.tagline}
        </p>
      )}

      <p
        className={`mt-4 text-slate-400 leading-relaxed ${
          featured ? "text-base sm:text-lg max-w-3xl" : "text-sm sm:text-base"
        }`}
      >
        {service.desc}
      </p>

      <ul
        className={`mt-6 pt-6 border-t border-slate-800 grid gap-3 ${
          featured ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1"
        }`}
      >
        {service.points.map((p, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2.5 text-sm text-slate-300"
          >
            <ArrowRight className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-1" strokeWidth={2.5} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export const Services = () => {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 sm:py-32 border-t border-slate-800"
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
              <span className="text-slate-500">end-to-end.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-lg text-slate-400 leading-relaxed">
              Five systems. One operating layer. Each one fixes a specific
              source of revenue leakage — and together they compound into
              defensible GTM infrastructure.
            </p>
          </div>
        </div>

        {/* Featured card (full-width) */}
        <div className="mb-6">
          <Card service={FEATURED} featured index={0} />
        </div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS.map((s, i) => (
            <Card key={s.id} service={s} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};
