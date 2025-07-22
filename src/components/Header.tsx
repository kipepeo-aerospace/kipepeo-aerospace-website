import React, { useState, useEffect } from 'react';
import { Plane, ExternalLink, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Vision', id: 'vision' },
    { label: 'Values', id: 'values' },
    { label: 'Journey', id: 'journey' },
    { label: 'Team', id: 'team' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-6 py-4" >
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div>
                <img src="/assets/kipepeologoREMASTERED.png" className="h-20 w-50" alt="Kipepeo Aerospace Logo" />
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors duration-300 hover:scale-105 transform ${isScrolled
                    ? 'text-kipepeo-black hover:text-kipepeo-green'
                    : 'text-white hover:text-kipepeo-light-green'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <motion.a
                href="https://kilimoanga.kipepeo.space"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${isScrolled
                  ? 'bg-kipepeo-green hover:bg-kipepeo-dark-green text-white'
                  : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Visit Kilimo Anga</span>
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${isScrolled ? 'text-kipepeo-black' : 'text-white'
                }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-kipepeo-black hover:text-kipepeo-green font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://kilimoanga.kipepeo.space"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-kipepeo-green text-white px-6 py-3 rounded-full font-semibold w-fit"
              >
                <span>Visit Kilimo Anga</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/TAI_Top.png')",
            /* backgroundImage: `url('https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`*/
          }}
        />
        <div className="absolute inset-0 bg-hero-pattern" />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-16 h-16 bg-kipepeo-light-green/20 rounded-full"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-12 h-12 bg-white/15 rounded-full"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Engineering Excellence for
              <motion.span
                className="block text-kipepeo-light-green"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Africa's Skies
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl lg:text-3xl mb-12 text-green-100 max-w-3xl mx-auto font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Building Drone Technology to Deliver Smarter, Sustainable Solutions .
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.a
                href="https://kilimoanga.kipepeo.space"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-kipepeo-green hover:bg-kipepeo-dark-green text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Visit Kilimo Anga</span>
                <ExternalLink className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center space-x-2 border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </header>
    </>
  );
};

export default Header;