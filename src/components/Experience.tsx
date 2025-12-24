"use client";

import { motion } from "framer-motion";
import { Disc, Martini, Utensils, Star, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    title: "Live DJ & Dance",
    description: "International residents spinning Deep House, Afro-Beats & Techno.",
    icon: Disc,
    image: "https://images.unsplash.com/photo-1584521347191-dcdebb7fbac5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Exclusive Bar",
    description: "Rare spirits and signature molecular cocktails crafted by experts.",
    icon: Martini,
    image: "https://images.unsplash.com/photo-1615472847561-b745cf6a2fec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Fine Dining",
    description: "A gastronomic adventure featuring sushi, wagyu, and caviar.",
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "VIP Sky Lounge",
    description: "Private tables with panoramic city views and dedicated service.",
    icon: Star,
    image: "https://images.unsplash.com/photo-1558368417-57d31049c609?q=80&w=1122&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            The Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto shadow-[0_0_15px_#D4AF37]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative h-[400px] overflow-hidden rounded-xl border border-white/10 glass cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end h-full">
                <div className="mb-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-4 group-hover:translate-y-0 text-right">
                  <ArrowUpRight className="text-primary inline-block" size={24} />
                </div>
                
                <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={20} />
                </div>
                
                <h3 className="text-xl font-serif text-white mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </p>
              </div>

              {/* Hover Glow Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
