import React from 'react';
import { Target } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1a1a' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-flex items-center justify-center mb-8"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-kipepeo-green to-kipepeo-dark-green p-4 rounded-2xl shadow-lg">
                <Target className="h-10 w-10 text-white" />
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-kipepeo-black mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              About Kipepeo Aerospace
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-kipepeo-cream to-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-200"
          >
            <p className="text-xl md:text-2xl text-kipepeo-black leading-relaxed text-center font-light">
              Kipepeo Aerospace is a Kenyan startup committed to closing the production gap in Kenya's unmanned aircraft systems (UAS) industry. Founded in 2024, we design and develop drone solutions that are{' '}
              <span className="font-semibold text-kipepeo-green">adaptable</span>,{' '}
              <span className="font-semibold text-kipepeo-green">innovative</span>, and{' '}
              <span className="font-semibold text-kipepeo-green">user-focused</span>—setting new standards of engineering excellence in Africa's aerospace sector.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-20 fill-gray-50">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default About;