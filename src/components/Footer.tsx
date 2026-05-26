import { Link } from 'react-router-dom';
import { Share2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  activePage?: string;
}

export default function Footer({ activePage }: FooterProps) {
  const isActive = (page: string) =>
    activePage?.toLowerCase() === page.toLowerCase()
      ? 'text-primary underline'
      : 'text-on-secondary-container hover:text-primary transition-colors';

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter py-20 px-margin-desktop max-w-max-width mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5"
        >
          <div className="font-headline-md text-headline-md text-on-surface mb-6">Steigler Services</div>
          <p className="font-body-md text-body-md text-secondary max-w-sm mb-8">
            Defining the standard for high-end corporate consulting and engineering through a commitment to Bauhaus principles and data-driven excellence.
          </p>
          <div className="flex space-x-4">
            <a className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all group" href="#">
              <Share2 size={18} className="text-secondary group-hover:text-on-primary transition-colors" />
            </a>
            <a className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all group" href="#">
              <Globe size={18} className="text-secondary group-hover:text-on-primary transition-colors" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-2"
        >
          <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-primary mb-6">Company</h4>
          <ul className="space-y-4">
            <li><Link className={`font-body-md text-body-md ${isActive('home')}`} to="/">Home</Link></li>
            <li><Link className={`font-body-md text-body-md ${isActive('about')}`} to="/about">About Us</Link></li>
            <li><Link className={`font-body-md text-body-md ${isActive('services')}`} to="/services">Services</Link></li>
            <li><Link className={`font-body-md text-body-md ${isActive('projects')}`} to="/projects">Projects</Link></li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-2"
        >
          <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-primary mb-6">Legal</h4>
          <ul className="space-y-4">
            <li><a className="font-body-md text-body-md text-on-secondary-container hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="font-body-md text-body-md text-on-secondary-container hover:text-primary transition-colors" href="#">Terms of Service</a></li>
            <li><a className="font-body-md text-body-md text-on-secondary-container hover:text-primary transition-colors" href="#">Careers</a></li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-3"
        >
          <h4 className="font-label-lg text-label-lg uppercase tracking-wider text-primary mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="font-body-md text-body-md text-on-secondary-container">
info@steiglerservices.com.ng</li>
            <li className="font-body-md text-body-md text-on-secondary-container">+2349153637388</li>
            <li className="font-body-md text-body-md text-on-secondary-container">Plot 819, Suite FF7, Global Plaza, Along SunCity/ Sunnyvale expressway, Kaura district, Abuja</li>
          </ul>
        </motion.div>
      </div>

      <div className="max-w-max-width mx-auto px-margin-desktop py-8 border-t border-outline-variant flex justify-between items-center font-caption text-caption text-secondary">
        <span>© 2024 Steigler Services. All rights reserved.</span>
        <div className="flex gap-8">
          <a className="hover:text-primary transition-colors" href="#">Sitemap</a>
          <a className="hover:text-primary transition-colors" href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
