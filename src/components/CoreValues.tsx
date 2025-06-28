import React from 'react';
import { Zap, Award, Users, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const CoreValues: React.FC = () => {
  const values = [
    {
      icon: Zap,
      title: 'Adaptability',
      description: 'Flexible solutions tailored to market needs',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Commitment to engineering leadership',
      color: 'from-kipepeo-green to-kipepeo-dark-green'
    },
    {
      icon: Users,
      title: 'User-Centricity',
      description: 'Products built with the end-user in mind',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing the boundaries of drone technology',
      color: 'from-kipepeo-black to-gray-700'
    }
  ];

  return (
    <section id="values" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50m-40 0a40 40 0 1 1 80 0a40 40 0 1 1 -80 0' stroke='%231a1a1a' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
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
            Core Values
          </h2>
          <p className="text-xl text-kipepeo-black/70 max-w-2xl mx-auto">
            The principles that guide our innovation and drive our mission forward
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full relative overflow-hidden"
                whileHover={{ y: -10 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10 text-center">
                  <motion.div 
                    className={`bg-gradient-to-br ${value.color} p-4 rounded-2xl w-20 h-20 mx-auto mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <value.icon className="h-12 w-12 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold font-heading text-kipepeo-black mb-4 group-hover:text-kipepeo-green transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-kipepeo-black/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border border-gray-200 rounded-full opacity-20" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border border-gray-200 rounded-full opacity-20" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;