"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MoveRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Menu", href: "#menu" },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-black/80 backdrop-blur-md border-white/10" : "bg-transparent"
      )}
    >
      <div className="container mx-auto md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10 group">
          <h1 className="text-2xl md:text-3xl font-serif text-white tracking-widest uppercase">
            Star <span className="text-primary group-hover:text-accent transition-colors">Lounge</span>
          </h1>
          <div className="h-[2px] w-0 group-hover:w-full bg-primary transition-all duration-300 absolute -bottom-1 left-0 shadow-[0_0_10px_#D4AF37]" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-white/80 hover:text-primary transition-colors hover:scale-105 transform duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 px-6 py-2 bg-primary text-black font-bold uppercase tracking-wide hover:bg-accent transition-all duration-300 shadow-[0_0_20px_-5px_#D4AF37] hover:shadow-[0_0_20px_-5px_#00F0FF]" onClick={() => window.location.href = "#contact"}>
            <span>Contact</span>
            <MoveRight size={18} />
          </button>

          <button
            className="md:hidden text-white hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 md:hidden flex flex-col items-center py-10 gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl uppercase tracking-widest text-white/90 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="mt-4 flex items-center gap-2 px-8 py-3 bg-primary text-black font-bold uppercase tracking-wide hover:bg-accent transition-all" onClick={() => window.location.href = "#contact"}>
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
