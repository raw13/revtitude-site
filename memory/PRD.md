# Revtitude — Product Requirements Document

## Original Problem Statement
Build a high-converting homepage for Revtitude, a GTM systems consultancy for B2B SaaS companies. Sections: Hero, Problem, Core POV, What We Do (5 pillars), How It Works (4 steps), Credibility (testimonials), Final CTA.

## Architecture
- **Frontend only** (static marketing site): React 19 + Tailwind + Framer Motion + react-fast-marquee
- **Backend**: untouched (template FastAPI + Mongo retained)
- **Primary CTA**: external Calendly link (configured in `src/lib/constants.js` as `AUDIT_URL`)

## Design System
- Dark editorial operator vibe — `#050505` canvas, `#2563EB` electric blue accent, white text
- Fonts: Outfit (headings) + IBM Plex Sans (body) + IBM Plex Mono (overline/technical)
- Asymmetric bento grid for services, marquee for testimonials
- No purple/teal/gradients-on-white — sharp, rectangular, operator feel

## User Persona
- B2B SaaS founders / Heads of Growth / VPs of RevOps
- Technical operators — want clarity, data, no fluff
- Primary conversion: book a GTM audit call

## Core Requirements (Static)
- [x] Sticky navbar with nav + CTA
- [x] Hero with headline, subhead, primary CTA, stats strip
- [x] Problem agitation (4 misalignment cards + outcome bar)
- [x] Core POV / wedge section with visual
- [x] Services bento grid (5 pillars, asymmetric)
- [x] 4-step process timeline
- [x] Credibility: stats + stack bar + 5 real testimonial marquee
- [x] Final CTA section
- [x] Footer
- [x] All interactive elements have data-testid
- [x] Responsive mobile menu

## Implemented (2025-12)
- Complete homepage with 7 sections + nav + footer
- Framer Motion scroll reveals, hover states, blue glow CTA
- 5 quantified real testimonials from Cristina/Ryan/Nikolai/TJ/Andrew
- External Calendly CTA (placeholder URL — user to replace in `constants.js`)

## Backlog / Next
- **P1**: Replace placeholder Calendly URL in `/app/frontend/src/lib/constants.js` (`AUDIT_URL`)
- **P2**: Add real company logo strip (currently wordmarks)
- **P2**: Case study / deep-dive pages for each testimonial
- **P2**: Blog or resource section
- **P3**: Lead capture form as fallback if calendly blocked
- **P3**: Analytics event tracking on CTA clicks
