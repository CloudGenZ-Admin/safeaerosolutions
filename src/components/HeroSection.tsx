import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Shield, Award, Plane } from "lucide-react";

const badges = [
  "Active Secret Level II (Exp: 2030)",
  "CGP Approved & Registered",
  "AS9100 Rev D Lead Auditor",
  "ISO 9001:2015 Lead Auditor",
  "TCCA AME M2",
  "FAA A&P License",
  "Quality Management Certified (QMC)",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      <div className="relative z-10 container mx-auto px-6 py-24 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-primary" />
            <Award className="w-6 h-6 text-primary" />
            <Plane className="w-6 h-6 text-primary" />
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase mb-4">
            SafeAero <span className="text-gradient-gold">Solutions Inc.</span>
          </h1>
          <p className="font-heading text-lg sm:text-xl md:text-2xl tracking-[0.1em] md:tracking-[0.2em] uppercase text-foreground mb-6">
            Safeguarding Defense Compliance & Operational Excellence
          </p>

          <div className="w-24 h-[2px] bg-primary mx-auto mb-8" />

          <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-2 text-foreground/90">
            Led By Francis <span className="text-gradient-gold">Ukposidolo</span>
          </h2>
          <p className="font-heading text-sm sm:text-base tracking-[0.2em] uppercase text-muted-foreground mb-3">
            CEO & Principal Consultant | Airworthiness SME
          </p>
          <p className="text-base sm:text-lg text-primary font-medium tracking-wide mb-10 max-w-2xl mx-auto">
            Architecting precision aerospace solutions and tactical mission software compliance for Tier-1 defense primes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-4xl mx-auto mb-12"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-heading text-sm tracking-[0.2em] uppercase font-semibold hover:opacity-90 transition-opacity"
          >
            Engagement Portal
          </a>
          <a
            href="#overview"
            className="w-full sm:w-auto px-8 py-4 border border-primary text-primary font-heading text-sm tracking-[0.2em] uppercase font-semibold hover:bg-primary/10 transition-colors"
          >
            Review Credentials Matrix
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-5xl mx-auto"
        >
          {badges.map((badge) => (
            <span
              key={badge}
              className="px-3 sm:px-4 py-1.5 border border-border text-[10px] sm:text-xs font-heading tracking-widest uppercase text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16"
        >
          <a href="#about" className="inline-block">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-1.5 mx-auto hover:border-primary transition-colors">
              <motion.div
                className="w-1.5 h-1.5 bg-primary rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;