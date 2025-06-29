import React from 'react';
import { Calendar, CheckCircle, Clock, Star, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Milestones: React.FC = () => {
  const milestones = [
    {
      year: '2020',
      title: 'Conceptualization',
      description: 'Conceptualization begins amid Kenya\'s changing UAS regulatory environment',
      icon: Calendar,
      status: 'completed'
    },
    {
      year: '2024',
      title: 'Company Founded',
      description: 'Company formally founded, pilot prototype development for Kilimo Anga flagship project begins',
      icon: CheckCircle,
      status: 'completed'
    },
    {
      year: '2025',
      title: 'Prototype Launch',
      description: 'Targeting pre-seed funding for Kilimo Anga prototype testing, developing partnerships in the sector',
      icon: Clock,
      status: 'current'
    },
    {
      year: '2026',
      title: 'First Demo',
      description: 'First public demo flight and funding round to enable scaling of the Kilimo Anga initiative',
      icon: Star,
      status: 'upcoming'
    },
    {
      year: '2030',
      title: 'Mainstream Adoption',
      description: 'Kipepeo platforms go mainstream across multiple industries',
      icon: TrendingUp,
      status: 'upcoming'
    }
  ];

  return (
    <section id="journey" className="py-20 bg-gradient-to-br from-gray-50 to-kipepeo-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-kipepeo-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-kipepeo-black/5 rounded-full blur-3xl" />
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
            Our Journey
          </h2>
          <p className="text-xl text-kipepeo-black/70 max-w-2xl mx-auto">
            From concept to reality - the milestones that define our path forward
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-kipepeo-green via-kipepeo-black to-kipepeo-green hidden md:block" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 md:mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline Node */}
                <motion.div
                  className={`absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${milestone.status === 'completed'
                    ? 'bg-gradient-to-br from-kipepeo-green to-kipepeo-dark-green text-white'
                    : milestone.status === 'current'
                      ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white animate-pulse-slow'
                      : 'bg-white border-4 border-gray-300 text-gray-400'
                    }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <milestone.icon className="h-8 w-8" />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className={`ml-28 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl md:text-4xl font-bold font-heading text-kipepeo-black mr-4">
                        {milestone.year}
                      </span>
                      {milestone.status === 'current' && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold font-heading text-kipepeo-black mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-kipepeo-black/70 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;