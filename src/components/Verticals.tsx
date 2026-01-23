
import React from 'react';
import { motion } from 'framer-motion';

type Vertical = {
  title: string;
  description: string;
  image: string; // path or URL
};

const verticals: Vertical[] = [
  {
    title: 'Agriculture',
    description: 'Crop intelligence and precision input deployment.',
    image: '/assets/kipepeo-agri.png',
  },
  {
    title: 'Conservation',
    description: 'Monitoring, tracking, and environmental data capture.',
    image: '/assets/kipepeo-conservation.png',
  },
  {
    title: 'Infrastructure',
    description: 'Mapping, inspection, and asset monitoring.',
    image: '/assets/kipepeo-infrastructure.png',
  },
  {
    title: 'Security',
    description: 'Situational awareness and perimeter monitoring.',
    image: '/assets/kipepeo-security.png',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 * i },
  }),
};

const Verticals: React.FC = () => {
  return (
    <section id="verticals" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1a1a' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
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
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-kipepeo-black mb-4">
                Who We Serve
                </h2>
                <p className="text-xl text-kipepeo-black/70 max-w-2xl mx-auto">
                Delivering specialized drone solutions across key sectors in Africa
                </p>
            </motion.div>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {verticals.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="group rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative h-48">
                  <img
                    src={v.image}
                    alt={v.title}
                    className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-xl font-semibold">{v.title}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">
                    {v.description}
                  </p>

                  {/* subtle indicator (optional) */}
                  <div className="mt-5 h-1 w-10 bg-kipepeo-green rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Separator (matches your About style) */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-20 fill-white">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Verticals;
