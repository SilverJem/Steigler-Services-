import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Clock, Globe, ExternalLink, ArrowRight, 
  ChartPie, Compass, Projector, HardHat, Search, Landmark,
  Handshake, CheckCircle, ChevronDown, Plus, Minus, Send
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" as const }
};

const faqs = [
  {
    q: 'How long does a typical engagement take?',
    a: "Engagement length depends entirely on scope. Quick advisory assignments can be completed in 2–4 weeks. Comprehensive consulting projects typically run 3–6 months, while large infrastructure programmes can span 12–24 months or more. We tailor every engagement to your specific needs."
  },
  {
    q: 'Do you work with both public and private sector clients?',
    a: "Yes — this dual capability is one of Steigler's core strengths. We understand the distinct requirements, governance frameworks, and stakeholder dynamics of both sectors, and we apply that knowledge to every engagement."
  },
  {
    q: 'What regions do you operate in?',
    a: "Our primary markets are across Africa (with deep expertise in West and East Africa) and the Middle East. We also support clients with operations in Europe. Our team combines strong local knowledge with international experience."
  },
  {
    q: 'How do you price your services?',
    a: "We offer flexible fee structures including fixed-fee, time-and-materials, and retainer models — depending on the nature of the engagement. We provide clear, transparent proposals with no hidden costs. Pricing is discussed during the initial discovery call."
  },
  {
    q: 'What makes Steigler different from larger consulting firms?',
    a: "We combine deep technical and strategic expertise with the agility of a focused firm. You work directly with senior consultants — not junior analysts. And crucially, we stay engaged through execution, not just strategy, ensuring your outcomes are actually delivered."
  },
  {
    q: 'Can you handle sole-source or competitive bid engagements?',
    a: "Yes. We regularly participate in both competitive tender processes and sole-source advisory mandates. Our team is experienced in public procurement processes, expression of interest responses, and technical proposal preparation."
  },
];

const serviceLinks = [
  { icon: ChartPie, label: 'Business Consulting', to: '/services#business' },
  { icon: Compass, label: 'Strategic Advisory', to: '/services#strategy' },
  { icon: Projector, label: 'Project Management', to: '/services#pm' },
  { icon: HardHat, label: 'Infrastructure', to: '/services#infra' },
  { icon: Search, label: 'Asset Valuation', to: '/services#valuation' },
  { icon: Landmark, label: 'Public Sector', to: '/services#public' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

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
            className="md:col-span-8"
          >
            <span className="font-label-lg text-label-lg text-primary uppercase tracking-[0.2em] mb-4 block">Get In Touch</span>
            <h1 className="font-display-lg text-display-lg mb-8 leading-tight">Let's Start a<br />Conversation</h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-xl">
              Tell us about your challenge. Whether it's a quick question or a complex programme — we're ready to listen and respond.
            </p>
          </motion.div>
        </section>

        {/* Contact Main — Form + Info (from new design) */}
        <section className="py-16 bg-surface-white rounded-2xl border-y border-outline-variant/50">
          <div className="max-w-max-width mx-auto px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* Form Side */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-7"
              >
                <div className="bg-surface-white border border-outline-variant/50 p-8 md:p-12 shadow-md rounded-2xl">
                  <h3 className="font-headline-lg text-headline-lg mb-2 font-bold">Send Us a Message</h3>
                  <p className="font-body-md text-secondary mb-8">We typically respond within 24 business hours.</p>

                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-start gap-4 bg-green-50 border border-green-200 p-6 rounded"
                      >
                        <CheckCircle size={24} className="text-green-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-headline-sm text-green-800">Message received!</strong>
                          <p className="font-body-sm text-green-700 mt-1">We'll get back to you within 24 business hours.</p>
                          <button
                            onClick={() => setSubmitted(false)}
                            className="mt-4 text-primary font-label-md uppercase tracking-wider hover:underline"
                          >
                            Send Another Message
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isSubmitting ? 0.5 : 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-6"
                        onSubmit={handleSubmit}
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label className="font-label-md uppercase tracking-wider mb-2 block text-on-surface font-bold" htmlFor="firstName">
                              First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text" id="firstName" name="firstName" placeholder="John" required
                              className="w-full bg-surface-container-low border border-outline-variant/50 px-4 py-3 font-body-md rounded-xl focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="font-label-md uppercase tracking-wider mb-2 block text-on-surface font-bold" htmlFor="lastName">
                              Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text" id="lastName" name="lastName" placeholder="Doe" required
                              className="w-full bg-surface-container-low border border-outline-variant/50 px-4 py-3 font-body-md rounded-xl focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="font-label-md uppercase tracking-wider mb-2 block text-on-surface font-bold" htmlFor="email">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email" id="email" name="email" placeholder="john.doe@company.com" required
                            className="w-full bg-surface-container-low border border-outline-variant/50 px-4 py-3 font-body-md rounded-xl focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="font-label-md uppercase tracking-wider mb-2 block text-on-surface font-bold" htmlFor="organisation">
                            Organisation / Company
                          </label>
                          <input
                            type="text" id="organisation" name="organisation" placeholder="Your organisation name"
                            className="w-full bg-surface-container-low border border-outline-variant/50 px-4 py-3 font-body-md rounded-xl focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="font-label-md uppercase tracking-wider mb-2 block text-on-surface font-bold" htmlFor="service">
                            Service Area of Interest
                          </label>
                          <div className="relative">
                            <select
                              id="service" name="service"
                              className="w-full bg-surface-container-low border border-outline-variant/50 px-4 py-3 font-body-md rounded-xl focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-colors appearance-none cursor-pointer"
                            >
                              <option value="" disabled selected>Select a service area...</option>
                              <option value="business">Business &amp; Management Consulting</option>
                              <option value="strategy">Strategic Advisory</option>
                              <option value="pm">Project &amp; Programme Management</option>
                              <option value="public">Public Sector Consulting</option>
                              <option value="infra">Infrastructure &amp; Civil Engineering</option>
                              <option value="valuation">Asset Valuation &amp; Due Diligence</option>
                              <option value="other">Other / Not Sure</option>
                            </select>
                            <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary pointer-events-none" />
                          </div>
                        </div>

                        <div>
                          <label className="font-label-md uppercase tracking-wider mb-2 block text-on-surface font-bold" htmlFor="message">
                            Your Message <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="message" name="message" rows={5} required
                            placeholder="Briefly describe your challenge or what you'd like to discuss..."
                            className="w-full bg-surface-container-low border border-outline-variant/50 px-4 py-3 font-body-md rounded-xl focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-colors resize-none"
                          ></textarea>
                        </div>

                        <div className="flex items-start gap-3">
                          <input type="checkbox" id="consent" name="consent" required className="mt-1 accent-primary" />
                          <label htmlFor="consent" className="font-body-sm text-secondary cursor-pointer">
                            I agree to Steigler Services processing my data to respond to this enquiry.
                          </label>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-primary text-white py-4 font-label-lg uppercase tracking-widest hover:bg-teal-dark rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group font-bold disabled:opacity-50"
                        >
                          <Send size={18} />
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Info Side */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5 space-y-8"
              >
                {/* Direct Contact */}
                <div className="rounded-2xl bg-surface-white rounded-2xl border border-outline-variant/50 p-8">
                  <h4 className="font-headline-md font-bold mb-6">Direct Contact</h4>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-container/20 rounded-full flex items-center justify-center shrink-0">
                        <Mail size={18} className="text-primary" />
                      </div>
                      <div>
                        <span className="font-label-sm text-secondary uppercase tracking-wider block mb-1">Email</span>
                        <a href="mailto:info@steiglerservices.com.ng" className="font-body-md text-primary hover:underline font-bold">
                          info@steiglerservices.com.ng
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-container/20 rounded-full flex items-center justify-center shrink-0">
                        <Clock size={18} className="text-primary" />
                      </div>
                      <div>
                        <span className="font-label-sm text-secondary uppercase tracking-wider block mb-1">Office Hours</span>
                        <span className="font-body-md">Monday – Friday<br />8:00 AM – 6:00 PM (WAT)</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-container/20 rounded-full flex items-center justify-center shrink-0">
                        <Globe size={18} className="text-primary" />
                      </div>
                      <div>
                        <span className="font-label-sm text-secondary uppercase tracking-wider block mb-1">Operating Regions</span>
                        <span className="font-body-md">Africa · Middle East · Europe</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="rounded-2xl bg-surface-white rounded-2xl border border-outline-variant/50 p-8">
                  <h4 className="font-headline-md font-bold mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a href="#" className="flex-1 bg-surface-container border border-outline-variant/50 p-4 flex items-center justify-center gap-2 rounded-xl hover:border-primary hover:text-primary transition-colors text-secondary font-bold">
                      <ExternalLink size={20} /> LinkedIn
                    </a>
                    <a href="#" className="flex-1 bg-surface-container border border-outline-variant/50 p-4 flex items-center justify-center gap-2 rounded-xl hover:border-primary hover:text-primary transition-colors text-secondary font-bold">
                      <ExternalLink size={20} /> Twitter / X
                    </a>
                  </div>
                </div>

                {/* Commitment */}
                <div className=" rounded-2xl bg-primary-container/10 border border-primary/20 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Handshake size={24} className="text-primary" />
                    <h4 className="font-headline-md font-bold">Our Commitment</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Respond within 24 business hours',
                      'Assigned a senior consultant directly',
                      'Free initial discovery call',
                      'No obligation — just a conversation',
                    ].map(item => (
                      <li key={item} className="flex items-start gap-3 font-body-sm text-on-surface">
                        <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Service Links */}
                <div className="rounded-2xl bg-surface-white rounded-2xl border border-outline-variant/50 p-8">
                  <h4 className="font-headline-md font-bold mb-4">How Can We Help?</h4>
                  <div className="space-y-2">
                    {serviceLinks.map(link => (
                      <Link
                        key={link.label}
                        to={link.to}
                        className="flex items-center justify-between p-3 hover:bg-surface-container rounded-xl transition-colors group"
                      >
                        <div className="flex items-center gap-3 text-secondary group-hover:text-primary font-bold">
                          <link.icon size={18} />
                          <span className="font-body-sm">{link.label}</span>
                        </div>
                        <ArrowRight size={16} className="text-outline group-hover:text-primary transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-surface-container-low rounded-2xl border-b border-outline-variant/50">
          <div className="max-w-max-width mx-auto px-margin-desktop">
            <motion.div {...fadeIn} className="text-center mb-16">
              <span className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary mb-4 flex items-center justify-center gap-2 before:content-[''] before:block before:w-6 before:h-0.5 before:bg-primary">Common Questions</span>
              <h2 className="font-headline-lg text-headline-lg">Frequently Asked Questions</h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-surface-white border border-outline-variant/50 overflow-hidden rounded-2xl"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-container transition-colors"
                  >
                    <span className="font-headline-sm font-bold pr-4">{faq.q}</span>
                    <div className="shrink-0 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary">
                      {openFaq === idx ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-outline-variant/50 pt-4">
                          <p className="font-body-md text-secondary leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer activePage="contact" />
    </>
  );
}
