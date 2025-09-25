import React from 'react';
import { Plane, Code, Wrench, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Team: React.FC = () => {
  const founders = [
    {
      name: 'Brian Lembuss',
      role: 'Founder, CEO',
      description: 'B.Sc, M.Sc Aerospace Engineering.',
      icon: Plane,
      image: '/assets/lembuss.jpg',
      expertise: ['Aircraft Systems & UAS Design', 'Hardware-Software', 'Business Development'],
      gradient: 'from-kipepeo-black to-kipepeo-green',
      email: 'mailto:lembuss@kipepeo.space',
      linkedin: 'https://www.linkedin.com/in/brian-kipchumba-lembuss-kirwa/'

    },
    {
      name: 'Brian Kihumba',
      role: 'Co-founder, COO',
      description: 'Bachelor of Laws, MBA, Business Administration.',
      image: '/assets/kimani.jpg',
      expertise: ['Business Operations & Development', 'Legal & Compliance', 'CRM & Sales Strategy'],
      gradient: 'from-kipepeo-black to-kipepeo-green',
      email: 'mailto:kihumba@kipepeo.space',
      linkedin: 'https://www.linkedin.com/in/brian-kihumba-711873a9/'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-kipepeo-cream relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-48 h-48 bg-kipepeo-green/5 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-kipepeo-black/5 rounded-full blur-2xl" />
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
            Our Innovators
          </h2>
          <p className="text-xl text-kipepeo-black/70 max-w-2xl mx-auto">
            Meet the visionary leaders driving aerospace innovation across Africa
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                whileHover={{ y: -10 }}
              >
                {/* Header Section */}
                <div className={`bg-gradient-to-br ${founder.gradient} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />

                  <div className="relative z-10 text-center">
                    <motion.div
                      className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl w-48 h-48 mx-auto mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {founder.image ? (
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      ) : (<founder.icon className="w-full h-full text-white/80" />
                      )}
                    </motion.div>

                    <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2">
                      {founder.name}
                    </h3>
                    <p className="text-lg font-semibold text-white/90 mb-4">
                      {founder.role}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <p className="text-kipepeo-black/70 leading-relaxed mb-6 text-center">
                    {founder.description}
                  </p>

                  {/* Expertise Tags */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-kipepeo-black text-center">Areas of Expertise:</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {founder.expertise.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.8 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`bg-gradient-to-r ${founder.gradient} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Icons */}
                  <div className="flex justify-center space-x-4 mt-6 pt-6 border-t border-gray-100">
                    <motion.a
                      href={founder.email}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-gray-100 hover:bg-kipepeo-green hover:text-white rounded-full transition-all duration-300"
                    >
                      <Mail className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-gray-100 hover:bg-kipepeo-green hover:text-white rounded-full transition-all duration-300"
                    >
                      <Linkedin className="h-5 w-5" />
                    </motion.a>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;