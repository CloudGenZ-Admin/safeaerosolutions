import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-secondary/10" ref={ref}>
      <div className="container mx-auto px-5 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-xs sm:text-sm tracking-[0.4em] uppercase text-primary mb-3">
              SafeAero Solutions Inc.
            </h2>
            <div className="w-16 h-[2px] bg-primary mb-8 md:mb-10" />

            <h3 className="text-xl sm:text-2xl font-heading uppercase tracking-wide text-foreground mb-4">
              Executive Master Bio Summary
            </h3>
            
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-5 md:mb-6">
              Francis Ukposidolo is the CEO and Principal Consultant of SafeAero Solutions Inc., an elite aerospace and defense technical advisory firm. Offering a distinguished 49-year track record of global leadership, Mr. Ukposidolo operates as a trusted independent technical advisor bridging complex systems engineering with executive-level program governance.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-5 md:mb-6">
              He specializes in deploying authoritative Life Cycle Quality Management (LCQM) and Life Cycle Materiel Management (LCMM) frameworks that safeguard multi-million-dollar portfolios across military aviation, corporate fleets, and naval defense procurement programs.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-5 md:mb-6">
              An expert in navigating high-stakes intersecting regulatory landscapes, he facilitates flawless compliance across DND Technical Airworthiness Rules (TAR), Director of Quality Assurance (DQA) Directives, NATO AQAP standards, Transport Canada Civil Aviation (TCCA), and the FAA. His extensive, multi-platform operational footprint spans the CF-188 Hornet, CP-140 Aurora, Bombardier Global Express, Challenger Series, and Dash 8 (Q400), alongside major commercial wide-body fleets.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-8 lg:mb-0">
              As an accredited AS9100 Rev D, ISO 9001:2015, and ISO 14001 Lead Auditor for premier international certification bodies including TUV Rheinland and BSI Group, Mr. Ukposidolo holds approved registrar sector codes across 13 core disciplines—including aerospace manufacturing, metallurgy, and advanced electronics. Backed by an active Secret Level II Security Clearance and full approval under Canada's Controlled Goods Program (CGP), SafeAero Solutions Inc. stands ready for immediate deployment to conduct high-consequence 2nd/3rd-party audits, resolve critical systemic vulnerabilities (RCCA/NCR), execute Independent Verification & Validation (IV&V), and champion a resilient, non-punitive Just Culture across Tier-1 defense networks.
            </p>
          </motion.div>

          {/* Visuals & Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Column 1 (Offset down on larger screens) */}
            <div className="flex flex-col gap-6 sm:mt-12 lg:mt-8">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop" 
                alt="Aviation Aircraft" 
                className="rounded-sm object-cover h-56 sm:h-48 lg:h-56 w-full shadow-lg border border-border" 
              />
              <div className="bg-background p-6 rounded-sm border border-border shadow-sm flex-grow">
                <h4 className="font-heading text-primary uppercase text-sm mb-3">Clearance Status</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground uppercase tracking-wider font-semibold">
                  <li>• Active Secret Level II</li>
                  <li>• File No: 96249739</li>
                  <li>• Expiry: Jan 30, 2030</li>
                  <li>• CGP Fully Approved</li>
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <div className="bg-primary/10 p-6 rounded-sm border border-primary/20 h-32 sm:h-40 flex items-center justify-center text-center shadow-sm">
                 <p className="font-heading text-sm sm:text-base text-foreground uppercase tracking-widest">
                   Global Defense Standards
                 </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1000&auto=format&fit=crop" 
                alt="Aviation Team" 
                className="rounded-sm object-cover h-64 sm:h-full lg:h-80 w-full shadow-lg border border-border flex-grow" 
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;