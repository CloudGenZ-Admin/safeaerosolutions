import { motion } from "framer-motion";
import { Settings, Shield, Globe, PlaneTakeoff, Wrench, BarChart } from "lucide-react";

const technicalSkills = [
  {
    icon: Shield,
    title: "Standards & Compliance",
    text: "DQA Directives, LCQM, CGP Compliance, AS9100 Rev D, ISO 9001:2015, IATF 16949, ISO 14001, OHSMS, NATO AQAP, Government Quality Assurance (GQA), Transport Canada (TCCA) CARs, FAA Regulations (FARs)"
  },
  {
    icon: BarChart,
    title: "Auditing & Oversight",
    text: "Stage 1 & Stage 2 Audits, Surveillance Audits, 1st, 2nd, and 3rd Party Registrar Audits, Service Provider/Supplier Audits, Internal Auditing, Approved Code Sector Multi-Tier Audits, Process & Risk Assessments, Gap Analysis, RCCA, NCR Management"
  },
  {
    icon: PlaneTakeoff,
    title: "Defense & Aerospace Domains",
    text: "Military Fixed-Wing Aircraft, Avionics & EO/IR Payload Systems, Marine/Naval Vessels, Tactical Heavy Equipment, Fleet Life-Extension Programs"
  },
  {
    icon: Settings,
    title: "Systems & Software Tools",
    text: "DRMIS (SAP), RIDIMS, Configuration Management Systems, Engineering Change (EC) Tracking Tools"
  },
  {
    icon: Globe,
    title: "Executive Leadership",
    text: "High-Stakes Stakeholder Relations, Regulatory Liaison, Independent Verification & Validation (IV&V), Unionized Workforce Relations, Mentorship & Technical Training"
  }
];

const platforms = [
  "CF-188 Hornet", "CP-140 Aurora", "Bombardier Global Series", "Challenger Series", 
  "Dash 8 (D8/Q400)", "Learjet", "ATR 42", "Lockheed C-130 Hercules", 
  "Boeing 747/737/727", "McDonnell Douglas DC10", "Airbus A310/A320"
];

const TrustElementsSection = () => {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Trusted By Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <p className="font-heading text-sm tracking-[0.3em] text-primary uppercase mb-8">Authoritative Platforms & Operational Engagements</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-70">
            {platforms.map((platform, i) => (
              <h3 key={i} className="font-heading text-sm md:text-base font-bold uppercase tracking-widest text-muted-foreground border border-border px-4 py-2 bg-card">
                {platform}
              </h3>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills Portfolio */}
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-xl uppercase text-foreground mb-10 text-center font-semibold tracking-wide">
            Technical Skills Portfolio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 border border-border bg-card shadow-sm hover:border-primary/50 transition-colors"
                >
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground mb-3">{skill.title}</h3>
                  <div className="w-8 h-[1px] bg-primary mb-4" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{skill.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustElementsSection;