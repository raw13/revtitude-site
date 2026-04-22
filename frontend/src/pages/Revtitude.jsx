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

const Revtitude = () => {
  useEffect(() => {
    const desired = "Revtitude — Your GTM isn't broken. Your system is.";
    document.title = desired;
    // Re-assert once more in case injected scripts overwrite it after mount.
    const t = setTimeout(() => {
      if (document.title !== desired) document.title = desired;
    }, 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      data-testid="revtitude-home"
      className="min-h-screen bg-[#050505] text-white overflow-x-hidden"
    >
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <CorePOV />
        <Services />
        <HowItWorks />
        <Credibility />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Revtitude;
