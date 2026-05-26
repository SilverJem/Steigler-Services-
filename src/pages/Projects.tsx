import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Filter, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type FilterCategory = 'all' | 'infrastructure' | 'consulting' | 'public' | 'strategy' | 'valuation';

const projects = [
  {
    id: 1,
    category: 'infrastructure' as FilterCategory,
    featured: true,
    title: 'Urban Road Network Rehabilitation Programme',
    desc: 'End-to-end delivery management of a 47km urban road rehabilitation programme across three municipalities. Coordinated six contractors, government agencies, and utility companies to execute the programme 3 weeks ahead of schedule and 12% below original budget estimates.',
    region: 'Nigeria',
    status: 'Completed',
    outcomes: [
      { val: '47km', label: 'Roads Rehabilitated' },
      { val: '12%', label: 'Under Budget' },
      { val: '3wks', label: 'Ahead of Schedule' },
      { val: '6', label: 'Contractors Managed' },
    ],
    tags: ['Project Management', 'Contractor Coordination', 'Government Relations'],
  },
  {
    id: 2,
    category: 'consulting' as FilterCategory,
    title: 'Operational Efficiency Transformation — Manufacturing Firm',
    desc: 'Full operational restructuring for a mid-size manufacturing company. Identified 14 process inefficiencies, redesigned core workflows, and implemented a new performance management system.',
    region: 'Nigeria',
    status: 'Completed',
    impactLabel: 'Cost Reduction Achieved',
    impactVal: '28%',
    impactWidth: 28,
    tags: ['Process Redesign', 'Cost Optimisation', 'Change Management'],
  },
  {
    id: 3,
    category: 'public' as FilterCategory,
    title: 'Government Asset Valuation Programme',
    desc: 'Conducted comprehensive independent valuation of over 200 public assets across three states — roads, buildings, utilities, and public facilities — providing a government-grade asset register for strategic planning and financial reporting.',
    region: 'West Africa',
    status: 'Completed',
    impactLabel: 'Assets Valued',
    impactVal: '200+',
    impactWidth: 100,
    tags: ['Asset Valuation', 'Public Finance', 'Compliance'],
  },
  {
    id: 4,
    category: 'strategy' as FilterCategory,
    title: 'Market Entry Strategy — East African Logistics Sector',
    desc: 'Developed a market entry framework for an international client entering the East African logistics and supply chain sector. Included competitive mapping, regulatory assessment, risk profiling, and phased entry roadmap.',
    region: 'East Africa',
    status: 'Completed',
    impactLabel: 'Markets Analysed',
    impactVal: '4',
    impactWidth: 80,
    tags: ['Market Research', 'Regulatory Mapping', 'Risk Assessment'],
  },
  {
    id: 5,
    category: 'public' as FilterCategory,
    title: 'State Procurement Reform Programme',
    desc: 'Designed and implemented a procurement reform framework for a state ministry, aligning processes with Public Procurement Act requirements and international best practices. Reduced procurement cycle time by 40%.',
    region: 'Nigeria',
    status: 'Completed',
    impactLabel: 'Procurement Cycle Reduction',
    impactVal: '40%',
    impactWidth: 40,
    tags: ['Procurement Reform', 'Policy Development', 'Compliance'],
  },
  {
    id: 6,
    category: 'infrastructure' as FilterCategory,
    title: 'Water Treatment Facility Feasibility Study',
    desc: 'Led a comprehensive feasibility study and environmental impact assessment for a 50,000m³/day water treatment facility. Delivered technical specifications, cost models, and contractor procurement strategy.',
    region: 'Nigeria',
    status: 'Completed',
    impactLabel: 'Population to Benefit',
    impactVal: '500K+',
    impactWidth: 85,
    tags: ['Feasibility Study', 'EIA', 'Water Infrastructure'],
  },
  {
    id: 7,
    category: 'consulting' as FilterCategory,
    title: 'Financial Services Firm Restructuring',
    desc: 'Organisational restructuring and performance improvement advisory for a regional financial services company. Streamlined reporting lines, redesigned incentive structures, and delivered a 3-year growth strategy.',
    region: 'Middle East',
    status: 'Completed',
    impactLabel: 'Revenue Growth (Year 1)',
    impactVal: '18%',
    impactWidth: 18,
    tags: ['Restructuring', 'Growth Strategy', 'Incentive Design'],
  },
  {
    id: 8,
    category: 'valuation' as FilterCategory,
    title: 'Energy Company Pre-Acquisition Due Diligence',
    desc: 'Conducted comprehensive technical and financial due diligence for the acquisition of a mid-size energy company. Assessed plant condition, regulatory compliance, financial risk, and valuation gap analysis.',
    region: 'Nigeria',
    status: 'Completed',
    impactLabel: 'Deal Value Supported',
    impactVal: '₦2.4B',
    impactWidth: 95,
    tags: ['Due Diligence', 'Technical Assessment', 'Financial Modelling'],
  },
  {
    id: 9,
    category: 'infrastructure' as FilterCategory,
    title: 'Regional Bridge Rehabilitation Programme',
    desc: 'Ongoing supervision and programme management of a multi-state bridge rehabilitation programme covering 22 bridges. Providing quality assurance, contractor management, and government liaison services.',
    region: 'West Africa',
    status: 'Ongoing',
    impactLabel: 'Programme Completion',
    impactVal: '65%',
    impactWidth: 65,
    tags: ['Construction Supervision', 'Quality Assurance', 'Multi-state'],
  },
  {
    id: 10,
    category: 'strategy' as FilterCategory,
    title: 'Agribusiness Sector Strategy — State Government',
    desc: 'Developed a 10-year agribusiness development strategy for a state government, including investment attraction framework, value chain analysis, and PPP model design for priority sub-sectors.',
    region: 'Nigeria',
    status: 'Completed',
    impactLabel: 'Investment Target Identified',
    impactVal: '$150M+',
    impactWidth: 75,
    tags: ['Sector Strategy', 'Investment Attraction', 'PPP Design'],
  },
  {
    id: 11,
    category: 'public' as FilterCategory,
    title: 'Health Sector Capacity Building Programme',
    desc: 'Implemented an institutional strengthening programme for a national health ministry, covering financial management systems, HR restructuring, and performance monitoring frameworks for 60 health facilities.',
    region: 'East Africa',
    status: 'Completed',
    impactLabel: 'Facilities Improved',
    impactVal: '60',
    impactWidth: 100,
    tags: ['Institutional Strengthening', 'Health Sector', 'Capacity Building'],
  },
  {
    id: 12,
    category: 'valuation' as FilterCategory,
    title: 'Commercial Real Estate Portfolio Valuation',
    desc: 'Independent valuation of a 14-property commercial real estate portfolio for a regional investment fund seeking institutional financing. Delivered RICS-compliant reports within a 6-week engagement.',
    region: 'Middle East',
    status: 'Completed',
    impactLabel: 'Portfolio Value Assessed',
    impactVal: '14 Properties',
    impactWidth: 100,
    tags: ['Real Estate Valuation', 'RICS Compliant', 'Investment Fund'],
  },
];

const filters: { id: FilterCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'consulting', label: 'Business Consulting' },
  { id: 'public', label: 'Public Sector' },
  { id: 'strategy', label: 'Strategic Advisory' },
  { id: 'valuation', label: 'Asset Valuation' },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const visible = projects.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  );

  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* Hero Section (Stitch Light Hero) */}
        <section className="py-24 px-margin-desktop max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-8"
          >
            <span className="font-label-lg text-label-lg text-primary uppercase tracking-[0.2em] mb-4 block">Our Portfolio</span>
            <h1 className="font-display-lg text-display-lg mb-8 leading-tight">Proven Delivery.<br />Real-World Impact.</h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
              A selection of engagements that demonstrate the depth of our expertise and our unwavering commitment to measurable outcomes.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-4 grid grid-cols-2 gap-4"
          >
            {[
              { val: '150+', label: 'Projects Completed' },
              { val: '10+', label: 'Years Delivering' },
              { val: '12+', label: 'Sectors Covered' },
              { val: '98%', label: 'Client Satisfaction' },
            ].map(stat => (
              <div key={stat.label} className="bg-surface-container rounded-2xl border border-outline-variant/50 p-5 text-center">
                <div className="font-display-lg text-primary text-2xl font-bold mb-1">{stat.val}</div>
                <div className="font-label-sm text-secondary uppercase tracking-wider text-xs">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Pill Filter Bar */}
        <section className="sticky top-20 z-40 bg-surface-white rounded-2xl/95 backdrop-blur-md border-y border-outline-variant/50 shadow-md">
          <div className="w-screen mx-auto px-margin-desktop py-4">
            <div className="flex items-center gap-4 overflow-x-auto ">
              <div className="flex items-center gap-2 text-secondary font-label-md uppercase tracking-wider shrink-0">
                <Filter size={16} />
                Filter by:
              </div>
              <div className="flex gap-2 flex-nowrap hide-scrollbar overflow-scroll ">
                {filters.map(f => (
                  <button
                    key={f.id}
                    onClick={() => setActiveFilter(f.id)}
                    className={`px-5 py-2 rounded-full font-label-md font-bold uppercase tracking-wider text-sm transition-all whitespace-nowrap ${
                      activeFilter === f.id
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-surface-container text-secondary hover:bg-surface-container-high hover:text-primary border border-outline-variant/50'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Masonry Grid */}
        <section className="py-16 min-h-[600px]">
          <div className="max-w-max-width mx-auto px-margin-desktop">
            <AnimatePresence mode="wait">
              {visible.length > 0 ? (
                <motion.div
                  key={activeFilter}
                  variants={staggerContainer}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0 }}
                  className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
                  style={{ columnFill: 'balance' }}
                >
                  {visible.map((p) => (
                    <motion.article 
                      key={p.id} 
                      variants={staggerItem}
                      className="break-inside-avoid rounded-2xl bg-surface-white rounded-2xl border border-outline-variant/50 hover:border-primary transition-all group hover:shadow-lg"
                    >
                      {/* Card Header */}
                      <div className="p-6 pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="bg-primary-container/20 text-primary px-3 py-1 rounded-full font-label-sm uppercase tracking-wider font-bold text-xs">
                              {p.category === 'consulting' ? 'Business Consulting' :
                               p.category === 'public' ? 'Public Sector' :
                               p.category === 'strategy' ? 'Strategic Advisory' :
                               p.category === 'valuation' ? 'Asset Valuation' : 'Infrastructure'}
                            </span>
                            <span className="flex items-center gap-1 text-secondary font-label-sm text-xs">
                              <MapPin size={12} /> {p.region}
                            </span>
                          </div>
                          <span className={`font-label-sm text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                            p.status === 'Completed' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-amber-100 text-amber-700'
                          }`}>
                            {p.status}
                          </span>
                        </div>

                        <h3 className="font-headline-md text-lg mb-3 font-bold leading-tight group-hover:text-primary transition-colors">{p.title}</h3>
                        <p className="font-body-sm text-secondary leading-relaxed mb-4">{p.desc}</p>
                      </div>

                      {/* Featured card outcomes */}
                      {p.featured && p.outcomes && (
                        <div className="px-6 pb-4 grid grid-cols-2 gap-3">
                          {p.outcomes.map(o => (
                            <div key={o.label} className="bg-surface-container-low rounded-2xl p-3 text-center border border-outline-variant/50">
                              <div className="font-headline-md text-primary font-bold">{o.val}</div>
                              <div className="font-label-sm text-secondary uppercase tracking-wider text-xs">{o.label}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Impact bar */}
                      {p.impactLabel && (
                        <div className="px-6 pb-4">
                          <div className="flex items-center justify-between font-label-sm uppercase tracking-wider mb-2 text-xs">
                            <span className="text-secondary">{p.impactLabel}</span>
                            <span className="font-bold text-primary">{p.impactVal}</span>
                          </div>
                          <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-primary to-teal-dark rounded-full transition-all duration-700"
                              style={{ width: `${Math.min(p.impactWidth, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      )}

                      {/* Tags */}
                      <div className="px-6 pb-6 flex flex-wrap gap-2">
                        {p.tags.map(tag => (
                          <span key={tag} className="bg-surface-container text-secondary px-3 py-1 rounded-sm font-label-sm text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <Search size={48} className="text-outline-variant mb-4" />
                  <p className="font-body-md text-secondary">No projects found in this category.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 page-hero border-t border-outline-variant/50">
          <div className="max-w-max-width mx-auto px-margin-desktop relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-display-lg text-display-lg mb-6 text-white">Have a Similar Challenge?</h2>
              <p className="font-body-lg text-white/70 mb-10 max-w-2xl mx-auto">
                Let's discuss how Steigler Services can deliver results for your project.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/contact" className="bg-primary text-white px-10 py-4 font-label-lg uppercase tracking-widest hover:bg-teal-dark rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group font-bold">
                  Start a Conversation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/services" className="border-2 border-white text-white px-10 py-4 font-label-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center font-bold">
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer activePage="projects" />
    </>
  );
}
