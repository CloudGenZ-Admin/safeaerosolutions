import { motion } from "framer-motion";
import { Phone, MapPin, Mail, ArrowRight, Linkedin } from "lucide-react";

const ctaItems = [
  "Stage 1 Readiness Review",
  "Defense Procurement Gateway",
  "Quality Assurance Oversight",
  "Aerospace Compliance Strategy",
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative border-t border-border/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-12"
          >
            <div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
                Partner with a Proven{" "}
                <span className="text-gradient-gold">Aerospace & Defense</span>{" "}
                Quality Leader
              </h2>
              <div className="w-16 h-[2px] bg-primary mb-8" />
              <p className="text-muted-foreground text-lg mb-6">
                Engage SafeAero Solutions Inc. for:
              </p>
              
              <div className="flex flex-wrap gap-3 mb-12">
                {ctaItems.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 border border-primary text-primary font-heading text-xs tracking-widest uppercase bg-primary/5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading uppercase tracking-widest text-sm mb-1">Direct Contact</h4>
                  <p className="text-muted-foreground">1-647-459-5384</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading uppercase tracking-widest text-sm mb-1">Email Us</h4>
                  <p className="text-muted-foreground">fsafeaero@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading uppercase tracking-widest text-sm mb-1">Location</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Ottawa, ON<br/>
                    Canada
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading uppercase tracking-widest text-sm mb-1">Network</h4>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    linkedin.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card p-8 border border-border shadow-lg"
          >
            <h3 className="font-heading text-xl uppercase mb-6 text-foreground">Secure Defense Entity Engagement Portal</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-heading uppercase tracking-widest text-muted-foreground">POC Name</label>
                  <input type="text" className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors" placeholder="Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-heading uppercase tracking-widest text-muted-foreground">Organization/Prime</label>
                  <input type="text" className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors" placeholder="Defense Corp" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-heading uppercase tracking-widest text-muted-foreground">Official Email</label>
                <input type="email" className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors" placeholder="poc@example.mil" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-heading uppercase tracking-widest text-muted-foreground">Clearance/ITAR Requirements</label>
                <input type="text" className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors" placeholder="e.g. CGP, Secret Level II..." />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-heading uppercase tracking-widest text-muted-foreground">Engagement Scope (RFP, Audit, LCMM)</label>
                <textarea rows={4} className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Detail the operational requirements and platform domain..."></textarea>
              </div>

              <button type="submit" className="w-full inline-flex justify-center items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-heading text-sm tracking-[0.2em] uppercase font-semibold hover:opacity-90 transition-opacity">
                Transmit Secure Request
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-24 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} SafeAero Solutions Inc. | Francis Ukposidolo. All rights reserved.</p>
          <p className="font-heading tracking-widest uppercase">
            Aerospace & Defense Quality Consulting
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;