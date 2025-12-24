"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    date: "OCT 24",
    day: "Friday",
    title: "Neon Horizon: Opening Night",
    time: "22:00 - 04:00",
    description: "Experience the grand unveiling of Medusa Sky Lounge with international DJ sets.",
  },
  {
    date: "OCT 25",
    day: "Saturday",
    title: "Golden Hour Sunset Sessions",
    time: "18:00 - 02:00",
    description: "Sip on signature cocktails as the sun sets, followed by live jazz and deep house.",
  },
  {
    date: "OCT 31",
    day: "Friday",
    title: "Medusa's Masquerade",
    time: "21:00 - Late",
    description: "An exclusive Halloween gala. Masks required. Mystery guaranteed.",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 bg-secondary relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute -top-1/2 left-0 w-full h-full bg-gradient-radial from-primary/5 to-transparent blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Upcoming Nights
          </h2>
          <p className="text-gray-400">Curated experiences for the elite</p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group flex flex-col md:flex-row items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden glass-hover cursor-pointer"
            >
              {/* Date Box */}
              <div className="w-full md:w-32 bg-primary/10 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                <span className="text-2xl font-bold uppercase tracking-wider">
                  {event.date.split(" ")[1]}
                </span>
                <span className="text-sm uppercase tracking-wide opacity-80">
                  {event.date.split(" ")[0]}
                </span>
              </div>

              {/* Details */}
              <div className="flex-1 p-6 text-center md:text-left">
                <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{event.description}</p>
                <div className="flex flex-col md:flex-row gap-4 text-sm text-gray-500 justify-center md:justify-start">
                  <span className="flex items-center gap-2">
                    <Clock size={16} /> {event.time}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={16} /> {event.day}
                  </span>
                </div>
              </div>

              {/* Action */}
              <div className="p-6">
                <button className="px-6 py-2 border border-white/20 text-white rounded-full hover:bg-white hover:text-black transition-all text-sm uppercase font-bold text-nowrap">
                  Book VIP
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
