import React from "react";
import { AUDIT_URL } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="border-t border-slate-800 bg-[#0F1729]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-blue-600 relative overflow-hidden flex items-center justify-center shrink-0">
                <div className="absolute inset-1 bg-[#0F1729]" />
                <div className="absolute inset-0 border border-blue-400/40 pointer-events-none" />
                <span className="relative z-10 font-heading text-[11px] font-extrabold text-white leading-none">
                  R
                </span>
              </div>
              <span className="font-heading text-lg font-semibold">
                Revtitude
              </span>
            </div>
            <p className="mt-4 text-sm text-zinc-500 max-w-sm leading-relaxed">
              GTM systems for B2B SaaS. We align marketing, sales, customer
              success & product into a single revenue engine.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-zinc-600 font-mono mb-4">
              Navigate
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#problem"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  The Problem
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#proof"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Proof
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-zinc-600 font-mono mb-4">
              Ready?
            </div>
            <a
              href={AUDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-cta-button"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 border border-blue-500 transition-colors"
            >
              Get a GTM Audit →
            </a>
            <p className="mt-3 text-xs text-zinc-600">
              hello@revtitude.com
            </p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between gap-3 text-xs text-zinc-600">
          <span>© {new Date().getFullYear()} Revtitude. All rights reserved.</span>
          <span className="font-mono">
            Built by operators. Not consultants.
          </span>
        </div>
      </div>
    </footer>
  );
};
