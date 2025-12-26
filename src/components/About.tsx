"use client";

import { motion } from "framer-motion";
import { Wine, UtensilsCrossed, Music } from "lucide-react";

const pillars = [
  {
    icon: Wine,
    title: "Signature Cocktails",
    description: "Mixology art meets premium spirits in our dedicated alchemy bar.",
  },
  {
    icon: UtensilsCrossed,
    title: "Premium Dining",
    description: "A culinary journey fusing Asian flavors with modern Mediterranean zest.",
  },
  {
    icon: Music,
    title: "Luxury Nightlife",
    description: "World-class DJs and immersive light shows that ignite the night.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-accent/5 blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h4 className="text-primary uppercase tracking-widest text-sm font-bold mb-4">
              The Legend
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              A Myth Reborn <br />
              <span className="text-white/50">Under The Starlight</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              Inspired by the captivating gaze of us, our lounge is designed to
              stop time. From the moment you step in, the outside world fades into a
              distant memory, replaced by an atmosphere of pure indulgence and electric energy.
            </p>
            <p className="text-gray-400 leading-relaxed mb-12 text-lg">
              Lounge isn't just a place to be seen—it's a sanctuary for the
              senses, where gold-dusted evenings turn into neon-soaked nights.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-primary group-hover:text-accent group-hover:border-accent/50 transition-all duration-300">
                    <pillar.icon size={24} />
                  </div>
                  <h3 className="text-white font-serif text-lg mb-2">{pillar.title}</h3>
                  <p className="text-sm text-gray-500">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-t-full rounded-b-lg transform rotate-6 scale-95 blur-sm" />
              <div className="absolute inset-0 border border-white/10 rounded-t-full rounded-b-lg overflow-hidden glass">
                {/* Placeholder for Medusa Statue/Vibe */}
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1589358524817-aaf5fd758a46?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Nightclub interior or statue
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
