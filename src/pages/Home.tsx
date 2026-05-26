import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lightbulb, ArrowRight, HardHat, Network, Landmark, Search, CheckCircle, ChevronRight, Briefcase } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" as const }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Original Stitch Hero Section (Light, Bauhaus) */}
        <section className="py-24 px-margin-desktop max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-7"
          >
            <span className="font-label-lg text-label-lg text-primary uppercase tracking-[0.2em] mb-4 block">Trusted by Public & Private Sector Clients</span>
            <h1 className="font-display-lg text-display-lg mb-8 leading-tight">Delivering High-Impact <span className="text-primary">Solutions</span> That Drive Real Results.</h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-xl mb-12">
              Steigler Services combines strategic expertise with engineering precision to solve complex challenges across business, infrastructure, and public sector environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="bg-primary text-on-primary px-10 py-4 font-label-lg uppercase tracking-widest hover:bg-teal-dark transition-all text-center flex items-center justify-center gap-2 group rounded-2xl">
                Our Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="border border-outline text-on-surface px-10 py-4 font-label-lg uppercase tracking-widest hover:border-primary hover:text-primary transition-all text-center rounded-2xl">
                Learn More
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-5 relative aspect-square bg-surface-container border border-outline-variant/50 overflow-hidden rounded-2xl"
          >
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Corporate skyscraper"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxvDO4a5AHMw_w5KS9ZKbyZNjTpdsJB2qcI9FHHBSmcMZxQCT_-YBKPWI5D_VvECFnt8A32TSch8nJehqUi1BkH277BIblDt_PXcRoVYD-KcZ6X7975cOWNldLYlHiyE1mj7X9aJy_OarfPrP1W7rMnGJmBdNeE5x8nl3pDkut9tLniq_CyZg4Hrtzj9OBAnsDA5tekXpYde2l4v-cT0sA9sgW1WjXYrNrBQC6ctDU43SQLS8IMXZDe9cxyvIj89xhrRXeVosjQVc"
            />
          </motion.div>
        </section>

        {/* Who We Are (About Preview exactly from new design) */}
        <section className="py-24 bg-surface-white rounded-2xl border-y border-outline-variant/50">
          <div className="max-w-max-width mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Progress bars visual */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-10 bg-surface-white border rounded-2xl border-outline-variant/50 shadow-lg"
            >
              <div className="absolute -top-6 -right-6 bg-surface-white border border-outline-variant/50 p-4 flex items-center gap-2 font-label-md uppercase tracking-wider text-primary shadow-md rounded-2xl">
                <Lightbulb size={20} />
                Proven Track Record
              </div>
              <div className="w-16 h-1 bg-primary mb-8"></div>
              <div className="space-y-8">
                {[
                  { label: 'Problem Solving', value: 100 },
                  { label: 'Project Monitoring', value: 95 },
                  { label: 'Stakeholder Alignment', value: 92 },
                  { label: 'On-time Delivery', value: 90 },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="flex justify-between font-label-md uppercase tracking-wide mb-2 text-on-surface font-bold">
                      <span>{label}</span>
                      <span className="text-primary">{value}%</span>
                    </div>
                    <div className="metric-bar h-2 bg-surface-container rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${value}%` }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="metric-fill h-full bg-gradient-to-r from-primary to-teal-dark rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Content right */}
            <motion.div {...fadeIn} className="flex flex-col justify-center">
              <span className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-primary">Who We Are</span>
              <h2 className="font-headline-lg text-headline-lg mb-6 leading-tight">Where Strategy Meets<br/>Engineering Precision</h2>
              <div className="w-12 h-1 bg-primary mb-6 rounded-full"></div>
              <p className="font-body-md text-body-md text-on-surface mb-4">
                Steigler Services is a results-driven consulting and engineering firm with nearly a decade of delivering measurable outcomes for both public institutions and private enterprises.
              </p>
              <p className="font-body-md text-body-md text-secondary mb-8">
                We combine deep business intelligence with technical rigor — from strategic advisory to civil infrastructure — ensuring every engagement delivers lasting value, transparency, and compliance with the highest standards.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /><span className="font-body-sm">Actionable, practical solutions</span></div>
                <div className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /><span className="font-body-sm">Full transparency & compliance</span></div>
                <div className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /><span className="font-body-sm">Local and international standards</span></div>
                <div className="flex items-center gap-3"><CheckCircle size={18} className="text-primary" /><span className="font-body-sm">Strong stakeholder coordination</span></div>
              </div>

              <Link to="/about" className="border-2 border-primary text-primary px-8 py-3 font-label-lg uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all w-max flex items-center gap-2 group font-bold rounded-2xl">
                Our Story
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Our Core Services Area (6 cards from new design) */}
        <section className="py-24 bg-surface-container-low rounded-2xl border-b border-outline-variant/50">
          <div className="max-w-max-width mx-auto px-margin-desktop">
            <motion.div {...fadeIn} className="text-center mb-16">
              <span className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary mb-4 flex items-center justify-center gap-2 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-primary">What We Do</span>
              <h2 className="font-headline-lg text-headline-lg mb-4">Our Core Service Areas</h2>
              <p className="font-body-md text-body-md text-secondary max-w-2xl mx-auto">
                End-to-end consulting and engineering solutions tailored to your sector's unique demands.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                { icon: Briefcase, title: 'Business & Management Consulting', desc: 'Operational efficiency audits, organisational restructuring, and performance improvement strategies for sustainable growth.', link: 'business' },
                { icon: Lightbulb, title: 'Strategic Advisory', desc: 'Market entry strategies, competitive positioning, and executive advisory to guide high-stakes decisions with clarity.', link: 'strategy' },
                { icon: Network, title: 'Project & Programme Management', desc: 'End-to-end oversight of complex, multi-stakeholder projects — from planning and procurement to execution and closeout.', link: 'pm' },
                { icon: Landmark, title: 'Public Sector Consulting', desc: 'Government advisory, policy implementation support, and public finance management aligned with regulatory frameworks.', link: 'public' },
                { icon: HardHat, title: 'Infrastructure & Civil Engineering', desc: 'Feasibility studies, design oversight, and delivery management for roads, utilities, and large-scale civil infrastructure.', link: 'infra' },
                { icon: Search, title: 'Asset Valuation & Due Diligence', desc: 'Independent asset assessments, risk evaluation, and due diligence reporting for informed investment decisions.', link: 'valuation' },
              ].map(({ icon: Icon, title, desc, link }) => (
                <motion.div 
                  key={title} 
                  variants={staggerItem}
                  whileHover={{ y: -5 }}
                  className="bg-surface-white rounded-2xl p-10 border border-outline-variant/50 shadow-md hover:shadow-lg hover:border-primary transition-all group flex flex-col h-full"
                >
                  <div className="w-14 h-14 bg-primary-container/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <Icon size={24} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-4 font-bold">{title}</h3>
                  <p className="font-body-md text-body-md text-secondary mb-8 flex-grow leading-relaxed">{desc}</p>
                  <Link to={`/services#${link}`} className="text-primary font-label-lg font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={16} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div {...fadeIn} className="mt-16 text-center">
              <Link to="/services" className="border-2 border-primary text-primary px-10 py-4 font-label-lg uppercase tracking-widest hover:bg-primary hover:text-white transition-all inline-block font-bold rounded-2xl">
                View All Services
              </Link>
            </motion.div>
          </div>
        </section>

        {/* How We Deliver (Methodology) */}
        <section className="py-24 bg-surface-white rounded-2xl border-b border-outline-variant/50">
          <div className="max-w-max-width mx-auto px-margin-desktop">
            <motion.div {...fadeIn} className="text-center mb-20">
              <span className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary mb-4 flex items-center justify-center gap-2 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-primary">Our Approach</span>
              <h2 className="font-headline-lg text-headline-lg mb-4">How We Deliver Results</h2>
              <p className="font-body-md text-body-md text-secondary max-w-2xl mx-auto">
                A rigorous, structured methodology that ensures every project is delivered on time, within scope, and with measurable impact.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-4 relative"
            >
              {[
                { num: '01', title: 'Assess', desc: "Deep-dive diagnostic of your organisation's current state — identifying gaps, risks, and opportunities with precision." },
                { num: '02', title: 'Strategise', desc: "Develop tailored, evidence-based roadmaps that align with your goals, constraints, and stakeholder expectations." },
                { num: '03', title: 'Execute', desc: "Hands-on project delivery with rigorous quality controls, transparent reporting, and proactive risk management." },
                { num: '04', title: 'Monitor', desc: "Continuous performance tracking and post-delivery reviews ensuring outcomes are sustained and improvements embedded." },
              ].map((step, idx) => (
                <div key={step.num} className="flex flex-row lg:flex-col items-center lg:items-center text-left lg:text-center w-full lg:w-1/4 gap-6 lg:gap-4 group">
                  <motion.div variants={staggerItem} className="flex-shrink-0 lg:mb-4 relative">
                    <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center text-primary font-bold text-xl group-hover:bg-primary group-hover:text-white transition-colors border border-outline-variant/50">
                      {step.num}
                    </div>
                  </motion.div>
                  <motion.div variants={staggerItem}>
                    <h3 className="font-headline-md text-headline-md mb-2 font-bold">{step.title}</h3>
                    <p className="font-body-sm text-secondary leading-relaxed">{step.desc}</p>
                  </motion.div>
                  {/* Chevron connector for desktop */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-8 right-[-12px] transform translate-x-full text-outline-variant">
                      <ChevronRight size={24} />
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Work / Featured Projects Grid */}
        <section className="py-24 bg-surface-container-low rounded-2xl border-b border-outline-variant/50">
          <div className="max-w-max-width mx-auto px-margin-desktop">
            <motion.div {...fadeIn} className="mb-16">
              <span className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-primary">Our Work</span>
              <h2 className="font-headline-lg text-headline-lg mb-4">Featured Projects</h2>
              <p className="font-body-md text-body-md text-secondary max-w-2xl">
                A selection of engagements that demonstrate our depth of expertise and commitment to impact.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Large Featured Project */}
              <motion.div variants={staggerItem} className="lg:col-span-7 bg-surface-white rounded-2xl border border-outline-variant/50 p-10 hover:border-primary shadow-md hover:shadow-lg transition-all flex flex-col justify-between">
                <div>
                  <div className="inline-block bg-primary-container/20 text-primary px-4 py-1 rounded-full font-label-md uppercase tracking-wider mb-6 font-bold">
                    Infrastructure
                  </div>
                  <h3 className="font-headline-lg text-[32px] leading-tight mb-4 font-bold">Urban Road Network Rehabilitation</h3>
                  <p className="font-body-md text-secondary mb-8 leading-relaxed max-w-xl">
                    Managed end-to-end delivery of a 47km urban road rehabilitation programme, coordinating six contractors and government stakeholders to deliver ahead of schedule.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-10 border-t border-outline-variant/50 pt-8">
                    <div>
                      <div className="font-headline-md text-primary font-bold">47km</div>
                      <div className="font-label-sm text-secondary uppercase tracking-wider">Roads Rehab</div>
                    </div>
                    <div>
                      <div className="font-headline-md text-primary font-bold">12%</div>
                      <div className="font-label-sm text-secondary uppercase tracking-wider">Under Budget</div>
                    </div>
                    <div>
                      <div className="font-headline-md text-primary font-bold">6</div>
                      <div className="font-label-sm text-secondary uppercase tracking-wider">Contractors</div>
                    </div>
                  </div>
                </div>
                <Link to="/projects" className="text-primary font-label-lg font-bold flex items-center gap-2 group w-max">
                  View Case Study <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Smaller Featured Projects */}
              <div className="lg:col-span-5 grid grid-rows-3 gap-8">
                <motion.div variants={staggerItem} className="rounded-2xl bg-surface-white rounded-2xl border border-outline-variant/50 p-6 hover:border-primary shadow-md hover:shadow-md transition-all flex flex-col justify-between h-full group">
                  <div>
                    <div className="inline-block bg-primary-container/20 text-primary px-3 py-1 rounded-full font-label-sm uppercase tracking-wider mb-3 font-bold">Business Consulting</div>
                    <h4 className="font-headline-md text-lg mb-2 font-bold">Operational Efficiency Transformation</h4>
                    <p className="font-body-sm text-secondary line-clamp-2 mb-4">Delivered a comprehensive operational restructuring for a mid-size manufacturing firm, reducing overheads by 28% within 18 months.</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-primary font-bold bg-primary-container/10 px-3 py-1 rounded">28% Cost Reduction</div>
                    <Link to="/projects" className="text-outline hover:text-primary transition-colors"><ArrowRight size={20}/></Link>
                  </div>
                </motion.div>

                <motion.div variants={staggerItem} className=" rounded-2xl bg-surface-white rounded-2xl border border-outline-variant/50 p-6 hover:border-primary shadow-md hover:shadow-md transition-all flex flex-col justify-between h-full group">
                  <div>
                    <div className="inline-block bg-primary-container/20 text-primary px-3 py-1 rounded-full font-label-sm uppercase tracking-wider mb-3 font-bold">Public Sector</div>
                    <h4 className="font-headline-md text-lg mb-2 font-bold">Government Asset Valuation Programme</h4>
                    <p className="font-body-sm text-secondary line-clamp-2 mb-4">Conducted independent valuation of over 200 public assets across three states, providing a foundation for strategic planning.</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-primary font-bold bg-primary-container/10 px-3 py-1 rounded">200+ Assets Valued</div>
                    <Link to="/projects" className="text-outline hover:text-primary transition-colors"><ArrowRight size={20}/></Link>
                  </div>
                </motion.div>

                <motion.div variants={staggerItem} className="rounded-2xl bg-surface-white rounded-2xl border border-outline-variant/50 p-6 hover:border-primary shadow-md hover:shadow-md transition-all flex flex-col justify-between h-full group">
                  <div>
                    <div className="inline-block bg-primary-container/20 text-primary px-3 py-1 rounded-full font-label-sm uppercase tracking-wider mb-3 font-bold">Strategic Advisory</div>
                    <h4 className="font-headline-md text-lg mb-2 font-bold">Market Entry Strategy — East Africa</h4>
                    <p className="font-body-sm text-secondary line-clamp-2 mb-4">Developed a comprehensive market entry framework for an international client entering the East African logistics sector.</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-primary font-bold bg-primary-container/10 px-3 py-1 rounded">4 Markets Analysed</div>
                    <Link to="/projects" className="text-outline hover:text-primary transition-colors"><ArrowRight size={20}/></Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="mt-16 text-center">
              <Link to="/projects" className="border-2 rounded-md border-primary text-primary px-10 py-4 font-label-lg uppercase tracking-widest hover:bg-primary hover:text-white transition-all inline-block font-bold ">
                All Projects
              </Link>
            </motion.div>
          </div>
        </section>

        {/* By The Numbers (Kept from new design) */}
        <section className="py-24 bg-surface-white border-b border-outline-variant/50">
          <div className="max-w-max-width mx-auto px-margin-desktop relative z-10 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <motion.div {...fadeIn} className="md:col-span-5">
              <span className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-primary">By The Numbers</span>
              <h2 className="font-display-lg text-headline-lg  mb-6 leading-tight">A Track Record<br/>Worth Trusting</h2>
              <p className="font-body-md text-body-md text-secondary  mb-10 max-w-md">
                Over a decade of consistent performance across sectors and geographies — these numbers reflect our commitment to excellence.
              </p>
              <Link to="/about" className="border-2 rounded-md border-primary text-primary px-8 py-3 font-label-lg uppercase tracking-widest hover:bg-white hover:text-primary transition-all w-max flex items-center gap-2 font-bold">
                About Us
              </Link>
            </motion.div>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="md:col-span-7 grid grid-cols-2 gap-y-12 gap-x-8"
            >
              {[
                { val: '10+', label: 'Years in Operation' },
                { val: '150+', label: 'Projects Completed' },
                { val: '98%', label: 'Client Satisfaction Rate' },
                { val: '40+', label: 'Expert Consultants' },
                { val: '3', label: 'Continents Served' },
                { val: '12+', label: 'Sectors Covered' },
              ].map(({ val, label }) => (
                <motion.div key={label} variants={staggerItem}>
                  <div className="font-display-lg text-primary text-center text-[48px] leading-none mb-2 font-bold">{val}</div>
                  <div className="font-label-md text-secondary text-center uppercase tracking-widest">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      </main>
      <Footer activePage="home" />
    </>
  );
}
