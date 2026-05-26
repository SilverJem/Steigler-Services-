import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldAlert, Target, Users, Cog, Eye, Globe2, Lightbulb, PenTool, Handshake, BarChart3 } from 'lucide-react';
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

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        
        {/* Original Stitch Hero Section (Light Bauhaus) */}
        <section className="py-24 px-margin-desktop max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-7"
          >
            <span className="font-label-lg text-label-lg text-primary uppercase tracking-[0.2em] mb-4 block">About Steigler Services</span>
            <h1 className="font-display-lg text-display-lg mb-8 leading-tight">Built on Expertise.<br />Driven by Results.</h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-xl">
              Nearly a decade of delivering measurable impact across consulting, engineering, and public sector advisory — across Africa, the Middle East, and Europe.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-5 relative aspect-square bg-surface-container border border-outline-variant/50 overflow-hidden"
          >
            <img
              className="w-full h-full object-cover rounded-2xl shadow-md grayscale hover:grayscale-0 transition-all duration-700"
              alt="Corporate skyscraper"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxvDO4a5AHMw_w5KS9ZKbyZNjTpdsJB2qcI9FHHBSmcMZxQCT_-YBKPWI5D_VvECFnt8A32TSch8nJehqUi1BkH277BIblDt_PXcRoVYD-KcZ6X7975cOWNldLYlHiyE1mj7X9aJy_OarfPrP1W7rMnGJmBdNeE5x8nl3pDkut9tLniq_CyZg4Hrtzj9OBAnsDA5tekXpYde2l4v-cT0sA9sgW1WjXYrNrBQC6ctDU43SQLS8IMXZDe9cxyvIj89xhrRXeVosjQVc"
            />
          </motion.div>
        </section>
  {/* Vision & Mission (Original Stitch) */}
        <section className="bg-surface-container-low rounded-2xl py-24 border-b border-outline-variant/50">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="px-margin-desktop max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-16"
          >
            <motion.div variants={staggerItem} className="border-l-4 border-primary pl-8 py-4">
              <h2 className="font-headline-lg text-headline-lg mb-6 font-bold">Our Vision</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                To be the most trusted strategic catalyst in the emerging and developed markets of Africa, the Middle East, and Europe. We envision a future where borders are conduits for shared prosperity, facilitated by world-class advisory.
              </p>
            </motion.div>
            <motion.div variants={staggerItem} className="border-l-4 border-secondary pl-8 py-4">
              <h2 className="font-headline-lg text-headline-lg mb-6 font-bold">Our Mission</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                To deliver data-driven insights and rigorous strategic frameworks that solve the most complex challenges facing modern enterprises. We are committed to transparency, excellence, and the relentless pursuit of client success.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Our Story (from new design) */}
        <section className="py-24 bg-surface-white rounded-2xl border-y border-outline-variant/50">
          <div className="max-w-max-width mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-primary">Our Story</span>
              <h2 className="font-headline-lg text-headline-lg mb-6 leading-tight">More Than Consultants.<br/>We're Your Delivery Partners.</h2>
              <div className="w-12 h-1 bg-primary mb-6 rounded-full"></div>
              <p className="font-body-md text-on-surface mb-4 leading-relaxed">
                Steigler Services was established with a clear mandate: to bridge the gap between strategic thinking and on-the-ground execution. Too often, organisations receive sophisticated recommendations that never translate into real-world impact.
              </p>
              <p className="font-body-md text-secondary mb-4 leading-relaxed">
                We built Steigler to be different. Every engagement we take on is guided by a commitment to practical, actionable outcomes — not theoretical frameworks. Our team of seasoned consultants and engineers works alongside clients from diagnosis through delivery, ensuring strategies become reality.
              </p>
              <p className="font-body-md text-secondary leading-relaxed">
                Operating across both public and private sectors, we have earned a reputation for precision, transparency, and an uncompromising focus on quality. Whether managing a complex infrastructure programme or advising a C-suite on strategic direction, we bring the same rigour and dedication to every brief.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-surface-container-low rounded-2xl p-10 border border-outline-variant/50 space-y-8"
            >
              {[
                { num: '10+', label: 'Years of Operation', desc: 'Consistently delivering across multiple sectors since our founding.' },
                { num: '150+', label: 'Projects Completed', desc: 'A proven track record of high-value, successful engagements.' },
                { num: '3', label: 'Continents Served', desc: 'Africa, the Middle East, and Europe — with growing global reach.' }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border-b border-outline-variant/50 pb-8 last:border-0 last:pb-0">
                  <div className="font-display-lg text-primary text-[48px] leading-none font-bold min-w-[120px]">{stat.num}</div>
                  <div>
                    <h4 className="font-label-lg font-bold mb-1 text-on-surface uppercase tracking-wider">{stat.label}</h4>
                    <p className="font-body-sm text-secondary">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

      
        {/* Core Values (from new design) */}
        <section className="py-24 bg-surface-white rounded-2xl border-b border-outline-variant/50">
          <div className="max-w-max-width mx-auto px-margin-desktop">
            <motion.div {...fadeIn} className="text-center mb-16">
              <span className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary mb-4 flex items-center justify-center gap-2 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-primary">What Guides Us</span>
              <h2 className="font-headline-lg text-headline-lg mb-4">Our Core Values</h2>
              <p className="font-body-md text-body-md text-secondary max-w-2xl mx-auto">
                These principles aren't aspirational statements — they're embedded in how we work every day.
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
                { num: '01', icon: ShieldAlert, title: 'Integrity', desc: 'We hold ourselves to the highest ethical standards in every interaction — with clients, partners, and regulators alike.' },
                { num: '02', icon: Target, title: 'Results-Focus', desc: 'Every strategy, plan, and recommendation is judged by a single standard: does it create measurable, lasting value?' },
                { num: '03', icon: Users, title: 'Collaboration', desc: 'We work as an extension of your team — building genuine partnerships built on trust, communication, and shared goals.' },
                { num: '04', icon: Cog, title: 'Technical Rigour', desc: 'Our methodology is evidence-based, data-informed, and structured — from initial assessment through final reporting.' },
                { num: '05', icon: Eye, title: 'Transparency', desc: 'We communicate openly and honestly throughout every project — progress, risks, and outcomes — with no surprises.' },
                { num: '06', icon: Globe2, title: 'Regional Commitment', desc: 'We invest in the markets we serve — building local knowledge and long-term relationships that go beyond each project.' },
              ].map((value) => (
                <motion.div 
                  key={value.title} 
                  variants={staggerItem}
                  className="bg-surface-white border border-outline-variant/50 p-10 md:p-16 relative shadow-md rounded-2xl group hover:border-primary transition-colors"
                >
                  <div className="absolute top-8 right-8 font-display-lg text-4xl text-outline-variant opacity-30 font-bold">{value.num}</div>
                  <div className="w-12 h-12 bg-primary-container/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors text-primary group-hover:text-white">
                    <value.icon size={24} />
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-3 font-bold text-on-surface">{value.title}</h3>
                  <p className="font-body-sm text-secondary leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Timeline A Decade of Growth (from new design) */}
        <section className="py-24 bg-surface-container-low rounded-2xl border-b border-outline-variant/50 relative overflow-hidden">
          <div className="max-w-max-width mx-auto px-margin-desktop">
            <motion.div {...fadeIn} className="text-center mb-20">
              <span className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary mb-4 flex items-center justify-center gap-2 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-primary">Our Journey</span>
              <h2 className="font-headline-lg text-headline-lg mb-4">A Decade of Growth</h2>
              <p className="font-body-md text-body-md text-secondary max-w-2xl mx-auto">
                From a focused startup to a multi-sector consultancy — our story of consistent growth.
              </p>
            </motion.div>

            {/* Vertical timeline via Tailwind */}
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-outline-variant transform md:-translate-x-1/2 rounded-full"></div>
              
              <div className="space-y-12">
                {[
                  { year: '2015', title: 'Founded', desc: 'Steigler Services established with a core team of 4 consultants focused on business management advisory in Nigeria.', align: 'left' },
                  { year: '2017', title: 'Infrastructure Division Launched', desc: 'Expanded into civil engineering and infrastructure consulting, securing first government road rehabilitation contract.', align: 'right' },
                  { year: '2019', title: 'Public Sector Growth', desc: 'Established dedicated public sector practice, advising state governments on procurement reform and asset management.', align: 'left' },
                  { year: '2021', title: 'International Expansion', desc: 'Extended operations to East Africa and began serving clients in the Middle East, reaching 3 continents.', align: 'right' },
                  { year: '2023', title: '150+ Projects Milestone', desc: 'Surpassed 150 completed engagements across business consulting, infrastructure, and strategic advisory.', align: 'left' },
                  { year: 'Today', title: 'Growing Stronger', desc: '40+ expert consultants, six service lines, and a clear vision to become the leading advisory firm across our operating regions.', align: 'right', isToday: true },
                ].map((item, idx) => (
                  <motion.div 
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`relative flex items-center ${item.align === 'left' ? 'md:flex-row-reverse' : ''} md:justify-end`}
                  >
                    {/* Center Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-[6px] md:-translate-x-1/2 shadow-[0_0_0_4px_rgba(0,166,153,0.2)] z-10"></div>
                    
                    {/* Card */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${item.align === 'left' ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                      <div className="bg-surface-white border border-outline-variant/50 p-6 md:p-8 ml-auto shadow-md rounded-2xl">
                        <span className={`inline-block font-label-md uppercase tracking-widest font-bold mb-2 ${item.isToday ? 'bg-primary text-white px-3 py-1 rounded-full' : 'text-primary'}`}>
                          {item.year}
                        </span>
                        <h4 className="font-headline-md text-lg mb-2 font-bold">{item.title}</h4>
                        <p className="font-body-sm text-secondary leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Business Philosophy (from new design) */}
        <section className="py-24 bg-surface-white rounded-2xl border-b border-outline-variant/50">
          <div className="max-w-max-width mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-primary">Business Philosophy</span>
              <h2 className="font-headline-lg text-headline-lg mb-6 leading-tight">We Don't Just Advise.<br/>We Deliver.</h2>
              <div className="w-12 h-1 bg-primary mb-6 rounded-full"></div>
              <p className="font-body-md text-on-surface mb-4 leading-relaxed">
                At Steigler, our philosophy is simple: strategy without execution is just a document. We remain engaged through the entire project lifecycle — not to protect the engagement, but because we genuinely believe that lasting impact requires presence, accountability, and follow-through.
              </p>
              <p className="font-body-md text-secondary mb-8 leading-relaxed">
                We combine the analytical depth of a top-tier management consultancy with the hands-on delivery capability of an engineering firm. This dual capability is rare — and it's what sets Steigler apart.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-2">
                <p className="font-display-md text-2xl text-primary italic leading-snug">"Our goal isn't to hand you a report — it's to hand you results."</p>
              </blockquote>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                { icon: Lightbulb, title: 'Insight-Led', desc: 'Every recommendation is grounded in rigorous research and sector-specific intelligence.' },
                { icon: PenTool, title: 'Execution-Ready', desc: 'We build solutions that can be implemented — not aspirational frameworks that gather dust.' },
                { icon: Handshake, title: 'Partnership-Minded', desc: 'Our best client relationships are long-term — built on trust, transparency, and demonstrated value.' },
                { icon: BarChart3, title: 'Data-Driven', desc: 'Decisions at every stage are informed by data — not assumptions, trends, or guesswork.' },
              ].map((item) => (
                <motion.div key={item.title} variants={staggerItem} className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/50 hover:border-primary transition-colors">
                  <item.icon size={28} className="text-primary mb-4" />
                  <h4 className="font-label-lg font-bold mb-2 text-on-surface">{item.title}</h4>
                  <p className="font-body-sm text-secondary">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

    

        {/* CTA Section */}
        <section className="py-24 px-margin-desktop max-w-max-width mx-auto text-center border-t border-outline-variant/50">
          <motion.div {...fadeIn}>
            <h2 className="font-display-lg text-display-lg mb-8">Ready to Work Together?</h2>
            <p className="font-body-lg text-body-lg text-secondary mb-12 max-w-2xl mx-auto">
              Tell us about your challenge — we'll tell you how we can help. Reach out to our partners today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="bg-primary text-white px-10 py-4 font-label-lg uppercase tracking-widest hover:bg-teal-dark transition-all flex items-center justify-center gap-2 group font-bold rounded-md shadow-md hover:shadow-lg">
                Get In Touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="border border-outline px-10 py-4 font-label-lg text-label-lg uppercase tracking-widest hover:border-primary hover:text-primary transition-all flex items-center justify-center rounded-md">
                Our Services
              </Link>
            </div>
          </motion.div>
        </section>

      </main>
      <Footer activePage="about" />
    </>
  );
}
