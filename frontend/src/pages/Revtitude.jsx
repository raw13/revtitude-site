import React, { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { CorePOV } from "@/components/CorePOV";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Credibility } from "@/components/Credibility";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { InlineCTA } from "@/components/InlineCTA";

const Revtitude = () => {
  useEffect(() => {
    const desired = "Revtitude — Your GTM isn't broken. Your system is.";
    document.title = desired;
    const t = setTimeout(() => {
      if (document.title !== desired) document.title = desired;
    }, 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      data-testid="revtitude-home"
      className="min-h-screen bg-[#0F1729] text-white overflow-x-hidden"
    >
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />

        <InlineCTA
          kicker="Mid-funnel audit"
          headline="Think your team has one of these leaks?"
          sub="We'll pinpoint exactly which one is costing you the most — and what to fix first. Free 30-min call with an operator, not a consultant."
          ctaLabel="Book Your GTM Audit"
          testId="cta-after-problem"
          variant="default"
        />

        <CorePOV />
        <Services />

        <InlineCTA
          kicker="Architect your engine"
          headline="Which of these five systems is holding you back?"
          sub="Most SaaS teams are strong in 2 and silently bleeding revenue in the other 3. Let's find out where you actually stand."
          ctaLabel="Talk to Rahul"
          testId="cta-after-services"
          variant="subtle"
        />

        <HowItWorks />
        <Credibility />

        <InlineCTA
          kicker="Real results, real operators"
          headline="Want numbers like these on your team?"
          sub="Book a 30-minute audit and walk away with a clear map of where your revenue is leaking and what to prioritize first."
          ctaLabel="Book a Call"
          testId="cta-after-proof"
          variant="default"
        />

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Revtitude;
