import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const OverviewSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="overview" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-sm tracking-[0.4em] uppercase text-primary mb-3">
            Executive Summary
          </h2>
          <div className="w-16 h-[2px] bg-primary mb-10" />

          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6 font-medium">
            Chief Quality Assurance Executive, Lead Registrar Auditor, and Airworthiness Subject Matter Expert (SME) offering a distinguished <span className="text-primary font-semibold">49-year track record</span> of strategic aerospace, marine, and defense leadership bridging hands-on regulatory engineering with executive procurement auditing (AS9100 Rev D, ISO 9001:2015, IATF 16949).
          </p>

          <p className="text-base leading-relaxed text-muted-foreground mb-6">
            Proven success as an elite Department of National Defence (DND) Consultant specializing in Life Cycle Quality Management (LCQM) and Life Cycle Materiel Management (LCMM) frameworks across multi-domain defense systems including military aircraft, marine vessels, and tactical heavy equipment.
          </p>

          <p className="text-base leading-relaxed text-muted-foreground mb-6">
            Highly effective at driving strict Technical Airworthiness Authority (TAA) and Director of Quality Assurance (DQA) compliance while mitigating high-stakes supply chain risks for critical Canadian Armed Forces (CAF) assets (CF-188 Hornet, CP-140 Aurora) and civil business/regional fleets (Bombardier Global Series, ATR 42, Challenger Series).
          </p>

          <p className="text-base leading-relaxed text-muted-foreground mb-6">
            Deep operational footprint spans military, commercial, and heavy defense platforms including the Lockheed C-130 Hercules, Boeing 747/737/727, McDonnell Douglas DC10, Airbus A310/A320, and corporate platforms. 
          </p>

          <div className="bg-secondary/20 p-6 border-l-4 border-primary mt-8">
            <p className="text-base leading-relaxed text-foreground font-semibold">
              Backed by an active Secret Level II clearance and CGP approval, providing immediate readiness to architect, lead, and safeguard highly classified, ITAR-adjacent aerospace and defense initiatives.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewSection;