import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import logo from '../assets/logo.png'
const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
 // { label: 'Projects', path: '/projects' },
];

export default function Navbar() {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [hasShadow, setHasShadow] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHasShadow(latest > 50);
  });

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 bg-surface border-b border-outline-variant transition-shadow duration-300 ${
        hasShadow ? 'shadow-sm' : ''
      }`}
    >
      <div className="flex justify-between items-center h-20 px-margin-desktop max-w-max-width mx-auto">
        <Link to="/" className="font-headline-md text-headline-md font-bold text-primary">
         <img src={logo} alt="logo" className='w-20' />
        </Link> 

        <div className="hidden md:flex space-x-8 items-center h-full">
          {navLinks.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className="relative font-label-lg text-label-lg uppercase tracking-wider transition-colors text-secondary hover:text-primary group py-2"
              >
                <span className={isActive ? 'text-primary' : ''}>{label}</span>
                {isActive ? (
                  <motion.div 
                    layoutId="navIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                ) : (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                )}
              </Link>
            );
          })}
        </div>

        <Link
          to="/contact"
          className="bg-primary text-on-primary rounded-md px-8 py-3 font-label-lg uppercase tracking-wider hover:bg-teal-dark transition-all duration-200"
        >
          Contact Us
        </Link>
      </div>
    </motion.nav>
  );
}
