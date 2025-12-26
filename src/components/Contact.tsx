"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black relative border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-primary uppercase tracking-widest text-sm font-bold mb-4">
              Visit Us
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
              Find Your Way To <br /> The Sky
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1" />
                <div>
                  <h5 className="text-white font-bold mb-1">Lounge</h5>
                  <p className="text-gray-400">New Location Address</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1" />
                <div>
                  <h5 className="text-white font-bold mb-1">Reservations</h5>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1" />
                <div>
                  <h5 className="text-white font-bold mb-1">Events & VIP</h5>
                  <p className="text-gray-400">vip@lounge.com</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-secondary p-8 rounded-lg border border-white/5">
              <h4 className="text-white font-serif mb-4 text-xl">Operating Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex justify-between">
                  <span>Wed - Thu</span>
                  <span>18:00 - 02:00</span>
                </li>
                <li className="flex justify-between text-primary font-bold">
                  <span>Fri - Sat</span>
                  <span>18:00 - 04:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sun</span>
                  <span>16:00 - 00:00</span>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div className="flex gap-6 mt-8">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-black flex items-center justify-center transition-all duration-300 text-white">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] w-full bg-secondary rounded-lg overflow-hidden border border-white/10 relative"
          >
            {/* Styled Map Overlay */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.7838538025876!2d80.3075361!3d26.4304509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47cc00346d37%3A0x8ba412583b590530!2sMedusa%20sky%20lounge!5e0!3m2!1sen!2sin!4v1766575121964!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-lg ring-1 ring-white/5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
