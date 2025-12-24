"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const menuItems = [
  {
    category: "Signature Cocktails",
    items: [
      { name: "The Medusa Gaze", price: "$24", desc: "Gin, Elderflower, Cucumber, Gold Dust" },
      { name: "Neon Nights", price: "$22", desc: "Vodka, Blue Curaçao, Lemon, Dry Ice" },
      { name: "Golden Touch", price: "$28", desc: "Whiskey, Honey, Saffron, Edible Gold" },
    ],
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop",
  },
  {
    category: "Exquisite Dining",
    items: [
      { name: "Wagyu Sliders", price: "$35", desc: "Truffle Mayo, Brioche, Gold Flake" },
      { name: "Tuna Tartare", price: "$28", desc: "Avocado, Sesame, Soy Ginger Glaze" },
      { name: "Lobster Ravioli", price: "$42", desc: "Saffron Cream, Chives, Caviar" },
    ],
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=600&auto=format&fit=crop",
  },
];

export default function MenuPreview() {
  return (
    <section id="menu" className="py-24 bg-secondary relative">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-primary uppercase tracking-widest text-sm font-bold mb-2">
              Taste the Extraordinary
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              Menu Highlights
            </h2>
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-black transition-all uppercase tracking-widest text-sm font-bold"
          >
            View Full Menu
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {menuItems.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative h-[500px] overflow-hidden rounded-lg"
            >
              {/* Background Image */}
              <Image
                src={category.image}
                alt={category.category}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-serif text-white mb-8 border-b border-primary/30 pb-4 inline-block self-start">
                  {category.category}
                </h3>
                
                <div className="space-y-6">
                  {category.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                      className="flex justify-between items-start group/item"
                    >
                      <div>
                        <h4 className="text-xl text-white font-medium group-hover/item:text-primary transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                      </div>
                      <span className="text-primary font-serif text-lg">{item.price}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <button className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-black transition-all uppercase tracking-widest text-sm font-bold">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
