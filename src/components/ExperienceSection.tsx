import { motion } from "framer-motion";

const experiences = [
  {
    company: "Department of National Defence (DND) | Ottawa, ON",
    role: "Director of Quality Assurance | Life Cycle Management Specialist (Consultant)",
    date: "Mar 2020 – September 2026",
    summary: "Provided comprehensive LCQM, LCMM, aircraft maintenance management, systems engineering, configuration management, and high-level quality assurance support for military platforms, avionics suites, and high-value defense procurement components. Led strict oversight frameworks to satisfy DQA mandates across aircraft systems, marine assets, and auxiliary heavy equipment. Served as the primary DQA representative on quality airworthiness and seaworthiness regulation compliance for new-build marine vessels and major aircraft modifications.",
    bullets: [
      "CP-140 Aurora Fleet: Spearheaded the LCMM/LCQM framework, on-aircraft maintenance plans, and quality engineering initiatives for the CP-140 maritime patrol platform, successfully preserving technical airworthiness for its multi-million dollar avionics and Electro-Optical/Infrared (EO/IR) payload systems.",
      "CF-188 Hornet (F-18 Program): Directed critical reviews of aircraft maintenance requirements, engineering changes (ECs), fleet modifications, and quality assurance artifacts to preserve technical airworthiness and ensure operational baseline readiness.",
      "Engineering Change Control: Conducted complex engineering studies and technical trade analyses on fleet maintenance logs, operational deficiency data, and technical documentation to isolate systemic engineering problems and clear high-priority Engineering Changes (ECs).",
      "Technical Authoring & Baseline Controls: Authored and systematically updated aircraft repair manuals, engineering data packages, and operational technical profiles for complex overhaul and life-extension tasks. Drafted complex technical specifications and engineering drawings to embed safety-critical configuration controls across production lines.",
      "Procurement Documentation: Authored comprehensive statements of requirement (SOR), precise performance specifications, procurement purchase descriptions, and formal Statements of Work (SOW) governing the contract production, depot overhaul, and logistical transit of safety-critical military aviation assets.",
      "Supply Chain Traceability: Reviewed, audited, and optimized technical data configurations and lifecycle materiel logs within asset management software (DRMIS/SAP and RIDIMS) to guarantee perfect traceability of critical supply chain allocations and investigate systemic technical deficiencies."
    ]
  },
  {
    company: "Confidential Aerospace & Corporate Fleet Operator | Ottawa, ON",
    role: "Quality Assurance (QA) Line Manager — Global Express Series",
    date: "December 2018 – December 2019",
    summary: "Held ultimate operational responsibility for ensuring that all flight-line maintenance, complex troubleshooting, and pre-flight certifications complied flawlessly with Transport Canada Civil Aviation (TCCA) Canadian Aviation Regulations (CARs). Managed a team of six specialized inspectors, acting as the primary legal shield for airworthiness across ultra-long-range business aircraft where safety, electronic complexity, and premium cabin standards are paramount.",
    bullets: [
      "Regulatory Ownership: Served as the definitive point of accountability to Transport Canada for all flight-line airworthiness declarations under CAR 571 and 573; acted as primary liaison for programmatic and unannounced TCCA regulatory audits.",
      "Maintenance Release Authority: Oversee the final execution of all Maintenance Releases (Return-to-Service), ensuring that complex troubleshooting, flight-line snag rectifications, and component swaps were legally airworthy.",
      "Inspector Team Leadership: Led and mentored a team of six QC inspectors, orchestrating shift deployments to support continuous flight-line operations. Recommended inspectors for delegated Aircraft Certification Authority (ACA) based on rigorous competency assessments.",
      "Configuration & Deferral Control: Monitored and validated all Minimum Equipment List (MEL) deferrals executed on the line, ensuring that no ultra-long-range mission was dispatched with an illegal or expired restriction.",
      "Platform-Specific Technical Focus: Provided rigorous oversight of software loading and calibration logs for Global Flight Control Computers (Vision Flight Deck / Pro Line Fusion), environmental control systems (ECS up to 51,000 ft), composite wing structures, and powerplant parameter validation (Rolls-Royce BR710/BR725/Passport) utilizing TCCA Form One and FAA Form 8130-3 certificates of conformity."
    ]
  },
  {
    company: "Global Aerospace Registrars & Certification Bodies (SafeAero Solutions Inc.) | International / Remote",
    role: "Lead Aerospace Quality Registrar Auditor & QMS Consultant",
    date: "2017 – 2019",
    summary: "Engaged as an accredited 3rd-party aerospace registrar assessor and project certification body consultant under strict industry sector regulations. Audited Tier-1 defense manufacturers, systems integrators, and critical sub-tier suppliers globally on behalf of premier certification bodies, including TUV Rheinland and BSI Group. Provided advanced 2nd-party quality assurance consulting, gap analyses, and strategic migration support to help complex aerospace organizations achieve and sustain compliance.",
    bullets: [
      "Approved Registrar Sector Codes: Fully qualified and authorized across global industry sector codes: 4, 5, 12, 14, 17/2, 18, 19, 21, 22, 23, 24, 29/2, and 34 spanning aerospace manufacturing, advanced metallurgy, electronics engineering, machinery, and defense-adjacent infrastructure.",
      "Multi-Standard Compliance Assessments: Planned, directed, and executed comprehensive audits validating complete conformity across AS9100 Rev D, ISO 9001:2015, and ISO 14001 (Environmental Management Systems) frameworks.",
      "QMS Lifecycle Certification: Authored formal audit readiness baselines, conducted Stage 1 readiness reviews, managed on-site Stage 2 certification evaluations, and executed periodic Surveillance Audits to ensure ongoing systemic compliance.",
      "Transition & Maintenance Consulting: Guided major aerospace and defense supplier facilities through successful standard revisions and transitions, restructuring legacy quality manuals, establishing risk registers, and embedding robust internal continuous improvement mechanisms.",
      "Gap Analyses & System Diagnostics: Spearheaded technical corporate gap analyses and quality system reviews, pinpointing underlying organizational risk exposures and presenting evidence-based findings to executive stakeholder leadership."
    ]
  },
  {
    company: "First Air | Ottawa, ON",
    role: "Quality Assurance (QA) Oversight Manager / Lead Inspector",
    date: "April 2014 – September 2017",
    summary: "Established and enforced absolute regulatory compliance, acting as the primary defense against airworthiness deviations during extensive ATR 42 Heavy Maintenance Visits (HMV / C & D Checks) and complex structural/avionics modifications. Operated with independent authority directly under Transport Canada guidelines to ensure all major structural repairs, supplemental type certificate (STC) modifications, and system overhauls fully complied with CAR 571 / 573.",
    bullets: [
      "TCCA Liaison & Release Enforcement: Acted as primary technical point of contact for Transport Canada airworthiness inspectors during heavy maintenance reviews; reviewed, audited, and authorized TCCA Form One releases and major modification logs.",
      "Heavy Maintenance Surveillance: Conducted progressive \"buy-back\" inspections on critical ATR 42 structural areas, including high-stress fuselage frames, composite sandwich panels, and wing-to-fuselage attachments.",
      "STC & Engineering Order Auditing: Performed rigorous pre-closing audits on complex structural modifications, cabin reconfigurations, and avionics flight deck upgrades to ensure precise adherence to Engineering Drawings and STCs.",
      "Specialized NDT & Tooling Audits: Verified that all specialized NDT inspections (Eddy Current, Ultrasound, X-ray) targeting corrosion or fatigue cracking were executed by certified technicians and recorded flawlessly. Audited safety-critical tooling traceabilities across hangar operations.",
      "MRB Coordination: Led Material Review Board (MRB) meetings with Production and Engineering teams to establish TCCA-approved corrective action plans and technical dispositions directly with ATR and Pratt & Whitney Canada when modifications fell outside standard AMM/SRM boundaries.",
      "Work Package Finalization: Audited and compiled dense heavy maintenance work packages, configuration logs, and engineering release paperwork to ensure perfect traceability before final airworthiness certification and hangar exit."
    ]
  },
  {
    company: "Bombardier Aerospace | Dorval, QC",
    role: "Quality Control (QC) Preflight Testing Engineer / Inspector – Challenger Series",
    date: "2012 – 2014",
    summary: "Served as the final technical authority on safety and airworthiness before clearing Challenger and regional jet derivatives for ground test runs, functional test flights, and customer delivery. Bridged high-end commercial corporate aviation with specialized tactical military transport configurations under dual civil/defense regulatory oversight.",
    bullets: [
      "Preflight Operational Testing: Witnessed and validated full-scale functional tests on advanced flight deck architectures (Rockwell Collins Pro Line 4 / 21 / Fusion), Flight Management Systems (FMS), Automatic Flight Control Systems (AFCS), and dual-channel Fly-By-Wire stall protection/rudder limiter networks.",
      "Mechanical & Hydraulic Verification: Supervised and signed off functional testing for landing gear extension/retraction mechanisms, high-pressure anti-skid braking systems, split-loop hydraulic networks (3,000 PSI), and bleed-air environmental control systems (ECS).",
      "Powerplant Sign-Off: Monitored and verified Auxiliary Power Unit (APU) and General Electric CF34 engine test runs. Validated post-installation borescope metrics, reviewed vibration analysis data, and inspected parameters under maximum thrust configurations.",
      "Definitive \"Buy-Back\" Walkarounds: Executed final exterior physical walkarounds to verify skin rivet flushness, composite panel delamination boundaries, and structural fastener integrity. Conducted zonal closeout inspections of hidden bays and internal panels to enforce zero-tolerance for Foreign Object Debris (FOD).",
      "Dual-Registry Airworthiness Auditing: Audited complex mechanical work packages, Engineering Orders (EOs), STCs, and structural repair logs against the AMM. Authored, administered, and signed final Maintenance Releases under delegated Repair Station or TAA authority for civil (TCCA/FAA) and military configurations (e.g., DND CC-144)."
    ]
  },
  {
    company: "United Nations Tactical MEDEVAC Operations | Congo, Kinshasa (International Deployment)",
    role: "Line Maintenance Engineer / Accountable Base Manager",
    date: "2010 – 2011",
    summary: "Held dual-tier accountability, combining elite hands-on technical troubleshooting with absolute regulatory and operational ownership of a critical United Nations Medical Evacuation (MEDEVAC) line base. Maintained 100% technical dispatch reliability for life-saving Challenger and Learjet fleets under high-pressure, austere, and remote environmental conditions.",
    bullets: [
      "On-Site Accountable Authority: Served as the primary on-site technical manager responsible to Transport Canada (CAR 573 AMO), the FAA (Part 145), and UN Aviation Safety Section (UNASS) auditors for base airworthiness and compliance.",
      "Emergency Dispatch Control: Handled technical readiness and line technician tracking to enforce a zero-failure target for emergency MEDEVAC scramble times and rapid AOG (Aircraft On Ground) asset recovery.",
      "Austere SMS Execution: Maintained the station's Safety Management System (SMS) in volatile environments, conducting comprehensive risk assessments for operating out of non-standard, unpaved, or heavy-dust airfields.",
      "Tactical Return-to-Service (RTS): Actively troubleshot, inspected, and executed line maintenance on Bombardier Learjet Series (LJ-35 / LJ-45 / LJ-60 / LJ-75) and Challenger aircraft, issuing definitive RTS sign-offs for daily pre-flight checks and deferred defect clearances.",
      "MEDEVAC System Integration: Supervised and certified the structural installation, mechanical rigging, and electrical interfacing of specialized LifePort / Spectrum Aeromed Medical Interiors (intensive care modules, incubator mounts, high-capacity oxygen delivery arrays). Verified electrical load isolation to prevent cockpit electromagnetic interference (EMI).",
      "Austere Logistical Management: Managed and secured highly tailored base line stores and fly-away kits to ensure parts traceability and continuous availability of critical spares in remote field locations."
    ]
  },
  {
    company: "Bombardier Aerospace | Toronto / Montreal (Mirabel & Dorval), QC & ON",
    role: "QC Preflight Testing Engineer & Aircraft Maintenance Engineer (AME) / Inspector",
    date: "1999 – 2003",
    summary: "Served as the final airworthiness authority, certifying safety, structural integrity, and regulatory compliance before clearing high-performance business jets, commercial regional aircraft, and specialized military transport platforms for ground test runs, functional test flights, and final customer delivery. Managed quality assurance across a diverse fleet spanning ultra-long-range fly-by-wire jets to rugged commuter turboprops under TCCA (CAR 571/573), FAA (Part 145), and DND (TAA TAM) frameworks.",
    bullets: [
      "Multi-Platform Operational Testing: Witnessed, inspected, and signed off full-scale systems testing across multiple advanced cockpit architectures (Bombardier Vision/Global Vision, Rockwell Collins Pro Line 4 / 21 / Fusion, Thales). Validated dual-channel Fly-By-Wire stall protection, automatic flight control systems (AFCS), and flight data recorder (FDR) parameter streams.",
      "Mechanical & Fluids Validation: Supervised and certified functional testing on complex split-loop hydraulic networks (3,000 PSI), landing gear extension/retraction mechanisms, high-energy multi-disc braking/anti-skid frameworks, bleed-air ducting, and environmental control systems (ECS).",
      "Powerplant & Propulsion Release: Monitored and evaluated technical parameters for engine and APU flight-readiness test runs. Validated post-installation borescope metrics, reviewed engine trim sheets, and signed off operations across Rolls-Royce BR710/BR725, General Electric CF34 (all variants), and Pratt & Whitney PW100/PW150 series powerplants.",
      "Definitive Preflight Walkarounds: Executed meticulous physical exterior checks, verifying skin rivet flushness, complex composite panel cross-sections (CFRP wing skins, tail cones), radome structural locks, and flight control hinge gap tolerances.",
      "Zonal Closeout & FOD Mitigation: Enforced a zero-tolerance mandate for Foreign Object Debris (FOD) through exhaustive closeout visual scans of internal wing boxes, unsealed fuel cells, and dense avionics racks prior to final panel securement.",
      "Airworthiness Documentation & Release: Audited large-scale heavy maintenance packages (C/D checks), Engineering Orders (EOs), and STCs to ensure 100% adherence to the AMM. Administered and signed the final Maintenance Release (Return-to-Service) under delegated Approved Maintenance Organization (AMO) or military TAA authority.",
      "MRB Liaison & Mechanics Supervision: Inspected structural, mechanical, and hydraulic installations performed by aircraft mechanics to verify adherence to design prints and standards. Logged technical deviations and coordinated directly with Production Engineering and the Material Review Board (MRB) to authorize approved salvage or repair actions."
    ]
  },
  {
    company: "FLS Aerospace (UK) & Marshall of Cambridge Aerospace Ltd. | United Kingdom",
    role: "Aircraft Maintenance Engineer (AME) / Mechanic – Heavy Maintenance & Major Modifications",
    date: "1990 – 1999",
    summary: "Executed heavy aircraft maintenance (D-Checks/HMV), structural overhauls, and extensive component retrofits across a massive line-up of long-haul commercial transport and tactical military aircraft under international aviation safety authority guidelines.",
    bullets: [
      "Multi-Platform Heavy Overhauls: Disassembled, repaired, overhauled, and reassembled primary structures, airframes, and powerplants across wide-body and narrow-body fleets including the Airbus A320/A330/A350, Boeing 737 Series (Classic/NG), Boeing 747-400, McDonnell Douglas DC-10 / MD-11, and Lockheed Martin C-130H Hercules.",
      "Systems Troubleshooting & Repair: Troubleshot complex structural anomalies, multi-loop hydraulic networks, pneumatic channels, and flight control mechanical linkages to isolate and adjust systems according to blueprints, technical manuals, and rigid performance standards.",
      "Modifications & Engine Integration: Installed and modified high-bypass turbofans and turboprop engines, fuel routing arrays, and mechanical systems during extensive fleet life-extension and cabin reconfiguration programs.",
      "Logistics & Traceability Tracking: Maintained detailed technical repair records, inspection worksheets, and certification logs. Ordered and monitored critical line inventories of safety-critical parts and aviation supplies to satisfy strict configuration controls."
    ]
  },
  {
    company: "Nigeria Airways | International (KLM Training School Affiliate)",
    role: "Aircraft Maintenance Apprentice / Line Maintenance Engineer (AME)",
    date: "1977 – 1989",
    summary: "Executed rapid-response flight-line troubleshooting, scheduled overnight checks, and rapid-turnaround defect rectifications on analog, mechanical, and early-generation electronic commercial jet liners. Maintained uncompromising safety configurations under strict TCCA / FAA-equivalent line-station oversight to secure maximum fleet availability.",
    bullets: [
      "Scheduled A-Check Inspections: Completed structured, task-carded inspections within short overnight intervals; conducted detailed visual checks on fuselage skin surfaces, engine cowlings, and landing gear wheels/brakes for leakage or micro-fractures.",
      "Fluid & Consumables Servicing: Replenished and topped off core operational fluids, including mechanical oil reservoirs, high-pressure split-loop hydraulic lines, starter gearboxes, and integrated drive generators (IDGs). Changed out critical high-velocity wear parts like ECS cabin air filters and high-stress main tire assemblies.",
      "Flight-Line Snag Rectification: Troubleshot acute faults reported by cockpit crews during short transit windows. Successfully isolated and swapped out malfunctioning Line Replaceable Units (LRUs), flight deck radios, navigation instrumentation, fuel boost pumps, and emergency control valves.",
      "MEL Control Implementation: Exercised strict procedural application of the Minimum Equipment List (MEL), safely capping, securing, or isolating non-safety-critical technical defects to drive zero flight delays while preserving legal airworthiness baselines.",
      "Platform-Specific Line Operations: Managed a diverse tech generation spectrum: Airbus A310 (EFIS, trim-tank fuel transfers), Boeing 737 Classic (mechanical control-cable riggings, CFM56 modules), Boeing 727 Vintage Tri-Jet (hydromechanical networks, pneumatic bleed air, triple JT8D powerplants)."
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-heading text-sm tracking-[0.4em] uppercase text-primary mb-3">
            Professional & Consulting Experience
          </h2>
          <div className="w-16 h-[2px] bg-primary mb-8" />
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="border border-border bg-card p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-foreground">
                  {exp.company}
                </h3>
                <span className="font-mono text-sm text-primary font-semibold shrink-0">
                  {exp.date}
                </span>
              </div>
              
              <h4 className="font-heading text-sm uppercase tracking-widest text-muted-foreground mb-4">
                {exp.role}
              </h4>
              
              <p className="text-foreground/80 leading-relaxed mb-6">
                {exp.summary}
              </p>
              
              <ul className="space-y-3">
                {exp.bullets.map((bullet, index) => {
                  const parts = bullet.split(": ");
                  return (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {parts.length > 1 ? (
                          <>
                            <strong className="text-foreground">{parts[0]}: </strong>
                            {parts.slice(1).join(": ")}
                          </>
                        ) : (
                          bullet
                        )}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;