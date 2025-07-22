import React from 'react';
import { Phone, Mail, Globe, Plane, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+254 705 875103',
      href: 'tel:+254705875103'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@kipepeo.space',
      href: 'mailto:info@kipepeo.space'
    },
    {
      icon: Globe,
      title: 'Website',
      value: 'www.kipepeo.space',
      href: 'https://www.kipepeo.space'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Nairobi, Kenya',
      href: '#'
    }
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-kipepeo-black via-kipepeo-green to-kipepeo-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-kipepeo-light-green/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              className="flex items-center justify-center space-x-4 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >

              <div className="w-48 h-auto">
                <img src="/assets/kipepeologoTAGLINEWHITE.png" className="w-full h-auto" alt="Kipepeo Aerospace Logo" />
              </div>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold font-heading mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's Connect
            </motion.h2>
            <p className="text-xl text-green-200 max-w-2xl mx-auto">
              Ready to explore the future of aerospace technology in Africa? Get in touch with our team.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.a
                  href={item.href}
                  className="block bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="bg-white/20 p-4 rounded-2xl w-fit mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-green-200 group-hover:text-white transition-colors duration-300">
                    {item.value}
                  </p>
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
                Ready to Take Flight?
              </h3>
              <p className="text-lg text-green-200 mb-8 max-w-2xl mx-auto">
                Whether you're interested in our agricultural solutions, government applications, or research collaborations, we'd love to hear from you.
              </p>
              <motion.a
                href="mailto:info@kipepeo.space"
                className="inline-flex items-center space-x-3 bg-white text-kipepeo-black hover:bg-kipepeo-light-green hover:text-kipepeo-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                <span>Start a Conversation</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-white/20 pt-8 text-center"
          >
            <p className="text-green-200 text-sm mb-4">
              © 2025 Kipepeo Aerospace. All rights reserved.
            </p>
            <p className="text-green-300 text-xs max-w-2xl mx-auto">
              This website provides general information about Kipepeo Aerospace.
              For specific technical details and service agreements, please contact us directly.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;