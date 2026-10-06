import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Shield, Plane, Settings, Lock, FileCheck } from "lucide-react";

const certifications = [
  {
    icon: Lock,
    title: "Security Clearance: Active Secret Level II",
    summary: "Authorized to architect, lead, and safeguard highly classified, ITAR-adjacent aerospace and defense initiatives.",
    details: [
      "File No: 96249739",
      "Expiry: Jan 30, 2030",
      "Immediate readiness for DND / NATO highly classified environments."
    ],
  },
  {
    icon: FileCheck,
    title: "Canada's Controlled Goods Program (CGP)",
    summary: "Fully Approved & Registered.",
    details: [
      "Fully registered and authorized to examine, possess, or transfer controlled goods.",
      "Management of tactical data and military components under CGP mandates.",
      "Compliance verification of ITAR data sanitization protocols."
    ],
  },
  {
    icon: Shield,
    title: "AS9100 Rev D & ISO 9001:2015 Lead Auditor",
    summary: "Accredited 3rd-party aerospace registrar assessor.",
    details: [
      "Delivers expert Stage 1 (Readiness), Stage 2 (Certification), and Surveillance Audits.",
      "Executes audits for global bodies including TUV Rheinland and BSI Group.",
      "Evaluates risk-based thinking in aerospace supply chains.",
    ],
  },
  {
    icon: Settings,
    title: "Quality Management Certified (QMC) & IATF 16949",
    summary: "Extensive qualifications in complex manufacturing supply chain quality systems.",
    details: [
      "Multi-Standard Compliance Assessments.",
      "Defect prevention systems and RCCA / NCR Management.",
      "Also holds ISO 14001 (Environmental) auditing experience."
    ],
  },
  {
    icon: Plane,
    title: "TCCA AME M2 & FAA A&P License",
    summary: "Transport Canada Civil Aviation & Federal Aviation Administration maintenance credentials.",
    details: [
      "Maintenance and release authority on multi-engine commercial and tactical aircraft.",
      "Deep operational footprint on heavy commercial jets and military fixed-wing.",
      "Seamless liaison between civil (CARs/FARs) and military (TAR) regulations."
    ],
  },
  {
    icon: Plane,
    title: "Aircraft Certification Authority (ACA) Endorsed",
    summary: "Authorized specific platform endorsements across high-performance aircraft.",
    details: [
      "Endorsed across Dash 8 (D8).",
      "Endorsed across CRJ Series.",
      "Endorsed across Learjet variants.",
      "Endorsed across Challenger CL-850 platforms."
    ],
  }
];

const CertCard = ({
  cert,
  index,
}: {
  cert: (typeof certifications)[0];
  index: number;
}) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = cert.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={() => setExpanded(!expanded)}
      className="group cursor-pointer border border-border bg-card/80 backdrop-blur-sm p-5 md:p-6 rounded-xl hover:border-primary/60 hover:shadow-lg transition-all duration-300 h-fit"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 flex-1">
          <div className="p-2 md:p-2.5 bg-primary/10 rounded-lg shrink-0 transition-colors group-hover:bg-primary/20">
            <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-heading text-sm md:text-base font-semibold tracking-wide uppercase mb-2 group-hover:text-primary transition-colors pr-2">
              {cert.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {cert.summary}
            </p>
            
            <AnimatePresence>
              {expanded && (
                <motion.ul
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="space-y-2 overflow-hidden"
                >
                  {cert.details.map((d, i) => (
                    <li
                      key={i}
                      className="text-sm text-foreground/80 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0 shadow-[0_0_5px_rgba(212,175,55,0.8)]" />
                      <span className="leading-snug">{d}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CertificationsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="font-heading text-xs md:text-sm tracking-[0.4em] uppercase text-primary mb-3">
            Corporate Profile & Executive Credentials
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 items-start">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-xs text-muted-foreground mt-10 flex items-center justify-center gap-2"
        >
          <span className="animate-pulse w-2 h-2 rounded-full bg-primary"></span>
          Click any credential to expand validation details
        </motion.p>
      </div>
    </section>
  );
};

export default CertificationsSection;