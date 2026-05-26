import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ChartPie, Compass, Projector, Landmark, 
  HardHat, CircleDollarSign, FileText, Search, Flag, CheckCheck, 
  Car, Building2, GraduationCap, Droplets, Zap, Home, TreePine, Coins
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.5, ease: "easeOut" as const }
};

const tabs = [
  { id: 'business', icon: ChartPie, label: 'Business Consulting' },
  { id: 'strategy', icon: Compass, label: 'Strategic Advisory' },
  { id: 'pm', icon: Projector, label: 'Project Management' },
  { id: 'public', icon: Landmark, label: 'Public Sector' },
  { id: 'infra', icon: HardHat, label: 'Infrastructure' },
  { id: 'valuation', icon: CircleDollarSign, label: 'Asset Valuation' },
];

export default function Services() {
  const { hash } = useLocation();
  const [activeTab, setActiveTab] = useState('business');

  // Handle direct links to specific tabs via URL hash
  useEffect(() => {
    if (hash) {
      const tabId = hash.replace('#', '');
      if (tabs.some(t => t.id === tabId)) {
        setActiveTab(tabId);
        // Scroll slightly down to the content area
        setTimeout(() => {
          const element = document.getElementById('services-content');
          if (element) {
            window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [hash]);

  const renderServiceContent = () => {
    switch (activeTab) {
      case 'business':
        return (
          <motion.div key="business" {...fadeIn} className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <div className="font-display-lg text-6xl text-outline-variant font-bold opacity-30 mb-2">01</div>
              <span className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary mb-4 block">Practice Area</span>
              <h2 className="font-headline-lg text-headline-lg mb-6 leading-tight">Business &amp; Management Consulting</h2>
              <div className="w-12 h-1 bg-primary mb-6 rounded-full"></div>
              <p className="font-body-md text-on-surface mb-4 leading-relaxed font-bold">
                Organisations facing growth pressure, structural inefficiency, or competitive disruption need more than generic advice — they need a partner who can diagnose the root cause and engineer a tailored solution that sticks.
              </p>
              <p className="font-body-md text-secondary mb-8 leading-relaxed">
                Our Business &amp; Management Consulting practice works across industries to identify operational gaps, redesign workflows, and build the management systems needed to sustain performance improvements long after our engagement ends.
              </p>
              <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/50">
                <h4 className="font-headline-sm font-bold mb-4">What We Deliver</h4>
                <ul className="space-y-3">
                  {['Organisational health diagnostics & gap analysis', 'Business process redesign & optimisation', 'Performance management frameworks', 'Operational cost reduction programmes', 'Change management & capability building', 'Financial modelling & business planning'].map(item => (
                    <li key={item} className="flex items-start gap-3 text-secondary font-body-sm">
                      <ArrowRight size={18} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-surface-white rounded-2xl p-8 border border-outline-variant/50 shadow-md">
                <h4 className="font-headline-md font-bold mb-6">Key Outcomes</h4>
                <div className="space-y-6">
                  {[
                    { label: 'Operational Efficiency Gain', val: 'Up to 35%', width: 85 },
                    { label: 'Cost Reduction Achieved', val: 'Avg. 22%', width: 70 },
                    { label: 'Client Retention Rate', val: '94%', width: 94 }
                  ].map(metric => (
                    <div key={metric.label}>
                      <div className="flex justify-between font-label-sm uppercase tracking-wider mb-2 font-bold">
                        <span>{metric.label}</span>
                        <span className="text-primary">{metric.val}</span>
                      </div>
                      <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-teal-dark rounded-full" style={{ width: `${metric.width}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary-container/10 p-8 border border-primary/20 text-center rounded-md">
                <p className="font-body-md font-bold mb-4">Need operational improvements that actually stick?</p>
                <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-label-md uppercase tracking-widest hover:bg-teal-dark rounded-md shadow-md hover:shadow-lg transition-colors font-bold">
                  Discuss Your Challenge <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        );
      case 'strategy':
        return (
          <motion.div key="strategy" {...fadeIn} className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <div className="font-display-lg text-6xl text-outline-variant font-bold opacity-30 mb-2">02</div>
              <span className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary mb-4 block">Practice Area</span>
              <h2 className="font-headline-lg text-headline-lg mb-6 leading-tight">Strategic Advisory</h2>
              <div className="w-12 h-1 bg-primary mb-6 rounded-full"></div>
              <p className="font-body-md text-on-surface mb-4 leading-relaxed font-bold">
                High-stakes decisions deserve high-quality intelligence. Our Strategic Advisory practice supports boards, executive teams, and government leaders with the insight and analytical framework needed to make confident, well-informed choices.
              </p>
              <p className="font-body-md text-secondary mb-8 leading-relaxed">
                From market entry and competitive strategy to portfolio rationalisation and transformation roadmaps, we provide the strategic clarity that drives bold, decisive action.
              </p>
              <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/50">
                <h4 className="font-headline-sm font-bold mb-4">What We Deliver</h4>
                <ul className="space-y-3">
                  {['Market entry strategy & feasibility analysis', 'Competitive intelligence & positioning', 'Corporate strategy development', 'Portfolio review & rationalisation', 'Transformation planning & roadmapping', 'Executive advisory & board support'].map(item => (
                    <li key={item} className="flex items-start gap-3 text-secondary font-body-sm">
                      <ArrowRight size={18} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary text-white p-6 flex flex-col items-center justify-center text-center aspect-square gap-3 font-bold rounded-md">
                  <Compass size={32} />
                  <span>Direction Setting</span>
                </div>
                <div className="bg-on-surface text-white p-6 flex flex-col items-center justify-center text-center aspect-square gap-3 font-bold rounded-md">
                  <Search size={32} />
                  <span>Market Intelligence</span>
                </div>
                <div className="bg-surface-container text-on-surface p-6 flex flex-col items-center justify-center text-center aspect-square gap-3 font-bold rounded-md">
                  <ChartPie size={32} />
                  <span>Scenario Planning</span>
                </div>
                <div className="border-2 border-primary text-primary p-6 flex flex-col items-center justify-center text-center aspect-square gap-3 font-bold rounded-md">
                  <Flag size={32} />
                  <span>Execution Roadmap</span>
                </div>
              </div>
              <div className="bg-primary-container/10 p-8 border border-primary/20 text-center rounded-md">
                <p className="font-body-md font-bold mb-4">Looking for strategic clarity on a complex decision?</p>
                <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-label-md uppercase tracking-widest hover:bg-teal-dark rounded-md shadow-md hover:shadow-lg transition-colors font-bold ">
                  Speak with an Advisor <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        );
      case 'pm':
        return (
          <motion.div key="pm" {...fadeIn} className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <div className="font-display-lg text-6xl text-outline-variant font-bold opacity-30 mb-2">03</div>
              <span className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary mb-4 block">Practice Area</span>
              <h2 className="font-headline-lg text-headline-lg mb-6 leading-tight">Project &amp; Programme Management</h2>
              <div className="w-12 h-1 bg-primary mb-6 rounded-full"></div>
              <p className="font-body-md text-on-surface mb-4 leading-relaxed font-bold">
                Complex projects fail not because of bad strategy, but because of poor execution. Our Project &amp; Programme Management practice provides the experienced leadership and structured governance needed to keep large, multi-stakeholder initiatives on track.
              </p>
              <p className="font-body-md text-secondary mb-8 leading-relaxed">
                We bring internationally recognised frameworks adapted to local contexts, ensuring every project benefits from global best practice without sacrificing agility.
              </p>
              <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/50">
                <h4 className="font-headline-sm font-bold mb-4">What We Deliver</h4>
                <ul className="space-y-3">
                  {['End-to-end project planning & scheduling', 'Risk management & mitigation planning', 'Procurement & contract management', 'Stakeholder reporting & governance', 'Budget control & cost management', 'Quality assurance & delivery oversight'].map(item => (
                    <li key={item} className="flex items-start gap-3 text-secondary font-body-sm">
                      <ArrowRight size={18} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-surface-white rounded-2xl p-8 border border-outline-variant/50 space-y-12 ">
                {[
                  { icon: FileText, title: 'Initiation', desc: 'Scope definition, charter, stakeholder mapping' },
                  { icon: Compass, title: 'Planning', desc: 'WBS, scheduling, risk & resource planning' },
                  { icon: HardHat, title: 'Execution', desc: 'Delivery oversight, quality control, reporting' },
                  { icon: CheckCheck, title: 'Closure', desc: 'Handover, lessons learned, impact review' }
                ].map((phase, idx) => (
                  <div key={phase.title} className="flex gap-4 relative">
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary-container/20 border border-primary/30 flex items-center justify-center text-primary">
                        <phase.icon size={20} />
                      </div>
                      {idx < 3 && <div className="w-0.5 h-full bg-outline-variant absolute top-12 -bottom-6"></div>}
                    </div>
                    <div className="pb-6">
                      <h5 className="font-headline-sm font-bold mb-1">{phase.title}</h5>
                      <p className="font-body-sm text-secondary">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-primary-container/10 p-8 border border-primary/20 text-center rounded-md">
                <p className="font-body-md font-bold mb-4">Managing a complex programme that needs expert oversight?</p>
                <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-label-md uppercase tracking-widest hover:bg-teal-dark rounded-md shadow-md hover:shadow-lg transition-colors font-bold">
                  Get Expert Support <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        );
      case 'public':
        return (
          <motion.div key="public" {...fadeIn} className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <div className="font-display-lg text-6xl text-outline-variant font-bold opacity-30 mb-2">04</div>
              <span className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary mb-4 block">Practice Area</span>
              <h2 className="font-headline-lg text-headline-lg mb-6 leading-tight">Public Sector Consulting</h2>
              <div className="w-12 h-1 bg-primary mb-6 rounded-full"></div>
              <p className="font-body-md text-on-surface mb-4 leading-relaxed font-bold">
                Effective government requires more than policy intent — it demands capable execution, transparent processes, and systems that can sustain delivery over the long term. Our Public Sector practice bridges the gap between policy and performance.
              </p>
              <p className="font-body-md text-secondary mb-8 leading-relaxed">
                We work directly with ministries, departments, agencies, and parastatals to strengthen institutional capacity, improve public finance management, and design implementation frameworks that meet international standards.
              </p>
              <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/50">
                <h4 className="font-headline-sm font-bold mb-4">What We Deliver</h4>
                <ul className="space-y-3">
                  {['Government advisory & policy implementation', 'Public procurement reform & compliance', 'Public finance management support', 'Institutional strengthening programmes', 'Development programme management', 'Regulatory framework development'].map(item => (
                    <li key={item} className="flex items-start gap-3 text-secondary font-body-sm">
                      <ArrowRight size={18} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Car, label: 'Transport' },
                  { icon: Building2, label: 'Healthcare' },
                  { icon: GraduationCap, label: 'Education' },
                  { icon: Droplets, label: 'Water & Utilities' },
                  { icon: Zap, label: 'Energy' },
                  { icon: Home, label: 'Housing' },
                  { icon: TreePine, label: 'Environment' },
                  { icon: Coins, label: 'Public Finance' }
                ].map(sector => (
                  <div key={sector.label} className="bg-surface-white rounded-2xl border border-outline-variant/50 p-4 flex items-center gap-3 hover:border-primary transition-colors text-secondary hover:text-primary font-bold">
                    <sector.icon size={20} />
                    <span className="text-sm">{sector.label}</span>
                  </div>
                ))}
              </div>
              <div className="bg-primary-container/10 p-8 border border-primary/20 text-center rounded-md">
                <p className="font-body-md font-bold mb-4">Working with government institutions or development programmes?</p>
                <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-label-md uppercase tracking-widest hover:bg-teal-dark rounded-md shadow-md hover:shadow-lg transition-colors font-bold">
                  Talk to Our Team <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        );
      case 'infra':
        return (
          <motion.div key="infra" {...fadeIn} className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <div className="font-display-lg text-6xl text-outline-variant font-bold opacity-30 mb-2">05</div>
              <span className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary mb-4 block">Practice Area</span>
              <h2 className="font-headline-lg text-headline-lg mb-6 leading-tight">Infrastructure &amp; Civil Engineering</h2>
              <div className="w-12 h-1 bg-primary mb-6 rounded-full"></div>
              <p className="font-body-md text-on-surface mb-4 leading-relaxed font-bold">
                Infrastructure delivery is among the most complex, high-stakes work in the consulting world. It demands both engineering rigour and programme management discipline — a combination Steigler uniquely provides.
              </p>
              <p className="font-body-md text-secondary mb-8 leading-relaxed">
                From feasibility through construction oversight to final commissioning, our infrastructure team manages every phase with precision — ensuring projects are delivered on time, to specification, and within budget.
              </p>
              <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/50">
                <h4 className="font-headline-sm font-bold mb-4">What We Deliver</h4>
                <ul className="space-y-3">
                  {['Feasibility studies & environmental assessments', 'Design review & technical oversight', 'Construction supervision & quality control', 'Road, bridge & drainage engineering', 'Utilities & water infrastructure', 'Site safety management & compliance'].map(item => (
                    <li key={item} className="flex items-start gap-3 text-secondary font-body-sm">
                      <ArrowRight size={18} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <div className="grid grid-cols-1 gap-4">
                {[
                  { num: '200km+', label: 'Road Infrastructure Managed' },
                  { num: '30+', label: 'Infrastructure Projects Delivered' },
                  { num: '100%', label: 'Compliance Rate' }
                ].map(stat => (
                  <div key={stat.label} className="bg-surface-white border border-outline-variant/50 p-8 rounded-md text-center">
                    <div className="font-display-lg text-5xl font-bold mb-2 text-primary">{stat.num}</div>
                    <div className="font-label-md uppercase tracking-widest text-on-surface">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-primary-container/10 p-12  rounded-md border border-primary/20 text-center">
                <p className="font-body-md font-bold mb-4">Planning or overseeing a major infrastructure programme?</p>
                <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-label-md uppercase tracking-widest hover:bg-teal-dark rounded-md shadow-md hover:shadow-lg transition-colors font-bold">
                  Contact Our Engineers <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        );
      case 'valuation':
        return (
          <motion.div key="valuation" {...fadeIn} className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <div className="font-display-lg text-6xl text-outline-variant font-bold opacity-30 mb-2">06</div>
              <span className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary mb-4 block">Practice Area</span>
              <h2 className="font-headline-lg text-headline-lg mb-6 leading-tight">Asset Valuation &amp; Due Diligence</h2>
              <div className="w-12 h-1 bg-primary mb-6 rounded-full"></div>
              <p className="font-body-md text-on-surface mb-4 leading-relaxed font-bold">
                Sound investment decisions and accurate financial reporting demand independent, credible asset valuations. Our Asset Valuation &amp; Due Diligence practice provides rigorous assessments that withstand regulatory scrutiny and stakeholder challenge.
              </p>
              <p className="font-body-md text-secondary mb-8 leading-relaxed">
                We combine technical engineering assessment with financial analysis to deliver comprehensive valuations — for property, infrastructure, plant and machinery, and public sector asset registers.
              </p>
              <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/50">
                <h4 className="font-headline-sm font-bold mb-4">What We Deliver</h4>
                <ul className="space-y-3">
                  {['Independent asset valuation reports', 'Due diligence for M&A transactions', 'Infrastructure & property assessment', 'Public sector asset register development', 'Condition surveys & technical audits', 'Risk assessment & impairment testing'].map(item => (
                    <li key={item} className="flex items-start gap-3 text-secondary font-body-sm">
                      <ArrowRight size={18} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-surface-white rounded-2xl p-8 border border-outline-variant/50 shadow-md">
                <h4 className="font-headline-md font-bold mb-6">Scale of Delivery</h4>
                <div className="space-y-6">
                  {[
                    { label: 'Assets Valued', val: '200+', width: 90 },
                    { label: 'Accuracy Rate', val: '99.2%', width: 99 },
                    { label: 'Regulatory Compliance', val: '100%', width: 100 }
                  ].map(metric => (
                    <div key={metric.label}>
                      <div className="flex justify-between font-label-sm uppercase tracking-wider mb-2 font-bold">
                        <span>{metric.label}</span>
                        <span className="text-primary">{metric.val}</span>
                      </div>
                      <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-teal-dark rounded-full" style={{ width: `${metric.width}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary-container/10 p-8 border border-primary/20 text-center rounded-md">
                <p className="font-body-md font-bold mb-4">Need an independent, credible asset assessment?</p>
                <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-label-md uppercase tracking-widest hover:bg-teal-dark rounded-md shadow-md hover:shadow-lg transition-colors font-bold">
                  Request a Valuation <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        
        {/* Original Stitch Hero Section (Light Bauhaus) with New Text */}
        <section className="py-24 px-margin-desktop max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-7"
          >
            <span className="font-label-lg text-label-lg text-primary uppercase tracking-[0.2em] mb-4 block">Our Services</span>
            <h1 className="font-display-lg text-display-lg mb-8 leading-tight">End-to-End Solutions<br />Across Every Challenge</h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-xl">
              Six core practice areas. One unified commitment: delivering outcomes that create real, lasting value for your organisation.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-5 relative aspect-square bg-surface-container border border-outline-variant/50 overflow-hidden"
          >
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Consultants working"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw1LXrAWpiaF5cv9VqBoFIhZKAQh3STCS2w_1zWj4Mi1McmhCDNiVp0nXMOrXLLy8SEb934qjJ-oRpy543nNMYNrGW5kizdfaQtYFW5Z6kSog5djsHrXBjbmygY1WliWjBD2KlfXX390UWF7ScrB-Z2_iTUqcJRieexJq-Y_FWMiEESD2EwzT35AUS0mS8fZtJIRl2ExQIFGEZviz7qqQuBVa0Ekzbz2I4FM6IH_zYk1tq9sKWaFHutblqaXgLziV1UVVB_pkRugE"
            />
          </motion.div>
        </section>

        {/* Tab Navigation Sticky Strip */}
        <section className="sticky  hide-scrollbar top-20 z-40 bg-surface-white border-y border-outline-variant/50 shadow-md overflow-x-auto">
          <div className="w-screen mx-auto px-margin-desktop min-w-max">
            <div className="flex justify-between items-stretch">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-6 font-label-md font-bold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
                    activeTab === tab.id 
                    ? 'border-primary text-primary bg-primary-container/10' 
                    : 'border-transparent text-secondary hover:text-primary hover:bg-surface-container'
                  }`}
                >
                  <tab.icon size={18} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Tab Content Area */}
        <section id="services-content" className="py-24 bg-surface-white min-h-[600px]">
          <div className="max-w-max-width mx-auto px-margin-desktop">
            <AnimatePresence mode="wait">
              {renderServiceContent()}
            </AnimatePresence>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-margin-desktop max-w-max-width mx-auto text-center border-t border-outline-variant/50">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display-lg text-display-lg mb-8">Have a Project in Mind?</h2>
            <p className="font-body-lg text-body-lg text-secondary mb-12 max-w-2xl mx-auto">
              Share your challenge — we'll tell you how Steigler can help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="/contact" className="bg-primary text-on-primary px-10 py-4 font-label-lg text-label-lg uppercase tracking-widest hover:bg-teal-dark rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
                Start a Conversation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/projects" className="border border-outline px-10 py-4 font-label-lg text-label-lg uppercase tracking-widest hover:border-primary hover:text-primary transition-all flex items-center justify-center rounded-md">
                View Our Work
              </a>
            </div>
          </motion.div>
        </section>

      </main>
      <Footer activePage="services" />
    </>
  );
}
