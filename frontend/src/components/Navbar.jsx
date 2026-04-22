import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AUDIT_URL } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Problem", href: "#problem" },
  { label: "Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Proof", href: "#proof" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0F1729]/70 border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          data-testid="nav-logo"
          className="flex items-center gap-2.5 group"
        >
          <div className="w-7 h-7 bg-blue-600 relative overflow-hidden flex items-center justify-center shrink-0">
            <div className="absolute inset-1 bg-[#0F1729]" />
            <div className="absolute inset-0 border border-blue-400/40 pointer-events-none" />
            <span className="relative z-10 font-heading text-[11px] font-extrabold text-white leading-none tracking-tight">
              R
            </span>
          </div>
          <span className="font-heading text-lg font-semibold tracking-tight">
            Revtitude
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={AUDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-cta-button"
            className="hidden sm:inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 border border-blue-500 transition-colors"
          >
            Get GTM Audit
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          data-testid="nav-mobile-menu"
          className="md:hidden border-t border-slate-800 bg-[#0F1729]/95 backdrop-blur-xl"
        >
          <nav className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href={AUDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white text-sm font-semibold px-4 py-2.5 text-center"
            >
              Get GTM Audit
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
