import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const capabilities = [
  {
    category: "Life Cycle Quality Management (LCQM)",
    items: [
      "Strategic quality engineering.",
      "Material condition monitoring.",
      "Reliability management spanning marine, aircraft, and heavy equipment assets under strict DQA mandates.",
    ],
  },
  {
    category: "Controlled Goods & ITAR Compliance",
    items: [
      "Fully registered and authorized under Canada's Controlled Goods Program (CGP).",
      "Authorized to examine, possess, or transfer controlled goods.",
      "Management of tactical data and military components.",
    ],
  },
  {
    category: "Defense Lifecycle Materiel Management (LCMM)",
    items: [
      "Expert execution of engineering change controls.",
      "Structural maintenance optimization.",
      "Baseline modification validation & systems engineering (SE).",
      "Configuration management (CM) & long-term lifecycle planning.",
    ],
  },
  {
    category: "Global Registrar Auditing",
    items: [
      "Qualified 3rd-party aerospace registrar assessor.",
      "Approved strict industry codes: 4, 5, 12, 14, 17/2, 18, 19, 21, 22, 23, 24, 29/2, and 34.",
      "Delivers Stage 1, Stage 2, and Surveillance Audits under AS9100 Rev D, ISO 9001:2015, ISO 14001, and IATF 16949.",
    ],
  },
  {
    category: "Airworthiness & Regulatory Navigation",
    items: [
      "Seamless liaison capabilities.",
      "DND Technical Airworthiness Rules (TAR).",
      "NATO standards (AQAP).",
      "Transport Canada Civil Aviation (TCCA CARs 571/573) and FAA FARs.",
    ],
  },
  {
    category: "Risk & Supply Chain Assurance",
    items: [
      "Investigating Unsatisfactory Condition Reports (UCR) & Technical Failure Reports (TFR).",
      "Clearing Engineering Changes (ECs).",
      "Mapping complex baseline data within DRMIS (SAP) and RIDIMS.",
    ],
  },
  {
    category: "Senior Technical Advisory",
    items: [
      "Operates independently in a high-level consulting capacity.",
      "Providing technical advice & leading cross-functional teams.",
      "Navigating unionized environments.",
      "Confidently challenging processes to maximize safety and efficiency.",
    ],
  },
];

const CoreServicesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-sm tracking-[0.4em] uppercase text-primary mb-3">
            Core Capabilities
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto mb-8" />
          <p className="text-foreground/80 leading-relaxed text-lg">
            SafeAero Solutions provides highly specialized capabilities tailored specifically for Tier-1 defense prime contractors, aerospace registrars, and government entities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {capabilities.map((service, i) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border bg-secondary/20 p-8 hover:border-primary/50 transition-colors h-full"
            >
              <h3 className="font-heading text-sm font-semibold tracking-wide uppercase text-primary mb-6 h-10">
                {service.category}
              </h3>
              <ul className="space-y-4">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-5 h-5 text-primary/60 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;