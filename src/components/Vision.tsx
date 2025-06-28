import React from 'react';
import { Eye, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Vision: React.FC = () => {
  const highlights = [
    { icon: Zap, text: 'Aerospace Engineering' },
    { icon: Globe, text: 'IoT Technologies' },
    { icon: Eye, text: 'Software Innovation' },
  ];

  return (
    <section id="vision" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-kipepeo-green/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-kipepeo-black/10 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-flex items-center justify-center mb-8"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-br from-kipepeo-black to-kipepeo-green p-4 rounded-2xl shadow-lg">
                <Eye className="h-10 w-10 text-white" />
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-kipepeo-black mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Vision
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-xl md:text-2xl text-kipepeo-black leading-relaxed font-light">
                By integrating{' '}
                <span className="font-semibold text-kipepeo-green">aerospace and software engineering</span>{' '}
                with{' '}
                <span className="font-semibold text-kipepeo-green">IoT technologies</span>, we deliver durable, cost-efficient, and easy-to-use solutions—built to redefine aerospace innovation across Kenya and the greater African region.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="bg-white p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-200">
                      <item.icon className="h-8 w-8 text-kipepeo-green mx-auto mb-3" />
                      <p className="text-sm font-medium text-kipepeo-black">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-kipepeo-black to-kipepeo-green p-8 rounded-3xl shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
                  <h3 className="text-2xl font-bold font-heading mb-4">Innovation Focus</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-kipepeo-light-green rounded-full" />
                      <span>Durable Solutions</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-kipepeo-light-green rounded-full" />
                      <span>Cost-Efficient Design</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-kipepeo-light-green rounded-full" />
                      <span>User-Friendly Interface</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-kipepeo-light-green rounded-full" />
                      <span>African-Focused Innovation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;