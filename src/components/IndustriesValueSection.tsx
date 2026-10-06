import { motion } from "framer-motion";
import { CheckCircle, ShieldAlert, Crosshair, Cpu, Wrench, Factory, Globe } from "lucide-react";

const sectors = [
  { icon: Factory, name: "Advanced Metallurgy & Chemicals (4, 5, 17/2, 18)" },
  { icon: Wrench, name: "Aerospace/Defense Manufacturing (12, 14, 19)" },
  { icon: Cpu, name: "Avionics & Optical Systems (21, 22)" },
  { icon: Globe, name: "Logistics, Repair & Engineering (23, 24, 29/2, 34)" },
];

const methodologyPhases = [
  {
    title: "Phase I: Stage 1 Documentation Review & Readiness Assessment",
    items: [
      "Evaluate the maturity of the organization's Quality Management System (QMS) prior to on-site testing.",
      "Contextual verification of the Quality Manual, Context of the Organization (Clause 4), and Leadership commitment matrices (Clause 5).",
      "Map core processes against regulatory frameworks (TCCA CARs 571/573, FAA Part 145, DND TAR).",
      "Output: Comprehensive Gap Analysis Report highlighting operational shortfalls or documentation deficiencies."
    ]
  },
  {
    title: "Phase II: Stage 2 On-Site Certification Audits",
    items: [
      "Deep-dive physical verification of execution depth, process repeatability, and product realization (Clause 8).",
      "Deploy process-based auditing utilizing the PEAR (Process Effectiveness Assessment Report) framework.",
      "Trace raw material intake through advanced metallurgy treatments up to final functional flight testing parameters.",
      "Output: Documented, evidence-based audit log classifying Major/Minor Non-Conformances and OFIs."
    ]
  },
  {
    title: "Phase III: Surveillance Audits & CAPA Lifecycle Management",
    items: [
      "Verify continuous QMS health, systemic maturation, and sustainable continuous improvement loops.",
      "Targeted focus on high-risk manufacturing nodes and engineering change control mechanisms.",
      "Mandate exhaustive Root Cause Corrective Action (RCCA) lifecycle: Immediate Containment, Root Cause Analysis (5-Why/Fishbone).",
      "Implementation of engineered workflow solutions and Verification of Effectiveness after 90 days."
    ]
  },
  {
    title: "Phase IV: 2nd-Party Supplier & Service Provider Audits",
    items: [
      "Shield Tier-1 primes from sub-tier supply chain contamination, material tracing failure, or counter-intelligence vulnerabilities.",
      "Comprehensive sub-contractor profiling focusing on tool calibration traceability and raw material batch tracing.",
      "Verification of counterfeit part mitigation programs and Controlled Goods/ITAR data sanitization protocols."
    ]
  }
];

const IndustriesValueSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-heading text-sm tracking-[0.4em] uppercase text-primary mb-3">
            TECHNICAL PROPOSAL ADDENDUM: AUDIT METHODOLOGY
          </h2>
          <div className="w-16 h-[2px] bg-primary mb-6" />
          <p className="text-sm font-mono text-muted-foreground mb-10">Document Ref: SAS-EAM-2026-REV2 | Principal Assessor: Francis Ukposidolo</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {sectors.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="border border-border bg-card p-5 text-center hover:border-primary/50 transition-colors duration-300"
                >
                  <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  <p className="text-xs font-heading tracking-wide uppercase text-muted-foreground">
                    {ind.name}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-xl uppercase text-foreground mb-3 font-semibold tracking-wide">
            End-to-End Certification Lifecycle Architecture
          </h2>
          <div className="w-16 h-[2px] bg-primary mb-8" />

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {methodologyPhases.map((phase, i) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 border border-border bg-card"
              >
                <h3 className="text-primary font-heading text-sm uppercase tracking-wider mb-4 font-bold">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-sm text-foreground/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <h2 className="font-heading text-xl uppercase text-foreground mb-3 font-semibold tracking-wide">
            High-Consequence Technical Specializations
          </h2>
          <div className="w-16 h-[2px] bg-primary mb-8" />
          
          <div className="space-y-6 max-w-4xl">
             <div className="p-5 border-l-2 border-primary bg-background shadow-sm">
                <h4 className="font-heading text-sm text-primary uppercase mb-2">Avionics, Optronics & Software Configurations (Sectors 21/22)</h4>
                <p className="text-sm text-muted-foreground">Direct compliance auditing of software loading logs, wire harness shield continuity tests, resistance metrics, and Flight Data Recorder (FDR) parameter streams.</p>
             </div>
             <div className="p-5 border-l-2 border-primary bg-background shadow-sm">
                <h4 className="font-heading text-sm text-primary uppercase mb-2">Advanced Structures & Metallurgy Closeouts (Sectors 4/14/18)</h4>
                <p className="text-sm text-muted-foreground">Auditing of Nondestructive Testing (NDT) records (Eddy Current, Ultrasound, Industrial X-Ray). Rigorous closeout and visual "buy-back" protocols for unsealed fuel cells, composite wing boxes (CFRP), and structural flight control surfaces to ensure absolute Foreign Object Debris (FOD) mitigation.</p>
             </div>
             <div className="p-5 border-l-2 border-primary bg-background shadow-sm">
                <h4 className="font-heading text-sm text-primary uppercase mb-2">Defense Asset Procurement & Change Control (Sectors 12/34)</h4>
                <p className="text-sm text-muted-foreground">Auditing of Technical Failure Reports (TFR) and Engineering Changes (ECs) against technical baseline data within federal management suites (DRMIS/SAP and RIDIMS).</p>
             </div>
             <div className="p-5 border-l-2 border-primary bg-background shadow-sm">
                <h4 className="font-heading text-sm text-primary uppercase mb-2">Operational Principles: Culture & Independence</h4>
                <p className="text-sm text-muted-foreground">SafeAero Solutions Inc. maintains strict structural separation from production quotas. We champion a non-punitive Just Culture—engineering errors are treated as systemic indicators requiring workflow redesign, while willful procedural violations are isolated. Authorized to provide senior-level technical advice and directly challenge non-compliant operational baselines to preserve absolute structural airworthiness and contract integrity.</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesValueSection;