import React from 'react';
import { Wheat, Shield, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const TargetSectors: React.FC = () => {
  const sectors = [
    {
      icon: Wheat,
      title: 'Agriculture Sector',
      description: 'UAS for data collection and precision farming',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      features: ['Crop Monitoring', 'Soil Health Analysis', 'Yield Prediction']
    },
    {
      icon: Shield,
      title: 'Government Institutions',
      description: 'Customized drones for surveillance, border control, and disaster response',
      color: 'from-kipepeo-black to-kipepeo-green',
      bgColor: 'bg-gray-50',
      features: ['Border Security', 'Disaster Response', 'Infrastructure Monitoring']
    },
    {
      icon: GraduationCap,
      title: 'Research & Academia',
      description: 'Collaborative UAS research, prototyping, and aerospace education',
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50',
      features: ['Research Projects', 'Educational Programs', 'Prototype Development']
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1a1a' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-kipepeo-black mb-4">
            Who We Serve
          </h2>
          <p className="text-xl text-kipepeo-black/70 max-w-2xl mx-auto">
            Delivering specialized drone solutions across key sectors in Africa
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full"
                whileHover={{ y: -10 }}
              >
                {/* Header Section */}
                <div className={`${sector.bgColor} p-8 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16" />
                  <div className="relative z-10">
                    <motion.div
                      className={`bg-gradient-to-br ${sector.color} p-4 rounded-2xl w-16 h-16 mb-6 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <sector.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold font-heading text-kipepeo-black mb-3">
                      {sector.title}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <p className="text-kipepeo-black/70 leading-relaxed mb-6">
                    {sector.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-kipepeo-black mb-3">Key Applications:</h4>
                    {sector.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${sector.color}`} />
                        <span className="text-kipepeo-black/80 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetSectors;