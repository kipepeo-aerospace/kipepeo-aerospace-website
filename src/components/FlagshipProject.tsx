import React from 'react';
import { Sprout, ExternalLink, BarChart3, Satellite, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const FlagshipProject: React.FC = () => {
  const features = [
    { icon: Satellite, text: 'Drone-based Photogrammetry' },
    { icon: BarChart3, text: 'Multispectral Imaging' },
    { icon: Zap, text: 'Actionable Farm Insights' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-kipepeo-black via-kipepeo-green to-kipepeo-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-kipepeo-light-green/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-32 left-16 w-4 h-4 bg-white/20 rounded-full"
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-48 right-32 w-6 h-6 bg-kipepeo-light-green/30 rounded-full"
          animate={{ y: [0, 25, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-32 left-32 w-3 h-3 bg-white/25 rounded-full"
          animate={{ y: [0, -15, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.div 
              className="inline-flex items-center justify-center mb-8"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-green-400 to-green-600 p-6 rounded-3xl shadow-2xl">
                <Sprout className="h-16 w-16 text-white" />
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Flagship Product:
              <span className="block text-kipepeo-light-green mt-2">Kilimo Anga</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
              <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-light mb-8">
                Kilimo Anga is a drone-enabled agricultural extension service offered by Kipepeo Aerospace. 
                It supports farmers with timely, field-specific crop insights derived from aerial imagery and data analysis. 
                These insights help farmers identify early signs of crop stress, variability, and potential yield loss, enabling more targeted interventions across their fields. 
              </p>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
                  >
                    <feature.icon className="h-8 w-8 text-kipepeo-light-green mx-auto mb-3" />
                    <p className="text-sm font-medium">{feature.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://kilimoanga.kipepeo.space"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-white text-kipepeo-black hover:bg-kipepeo-light-green hover:text-kipepeo-black px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Kilimo Anga</span>
              <ExternalLink className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FlagshipProject;