"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black py-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 shadow-[0_0_10px_#D4AF37]" />

      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <Link href="/" className="text-2xl font-serif text-white tracking-widest uppercase block mb-2">
            Lounge
          </Link>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Star Lounge. All rights reserved. </p>
          <a
            href="https://www.croft.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 group-hover:text-accent transition-colors"
          >
            Powered By Croft
          </a>

        </div>

        <div className="flex gap-6 text-sm text-gray-400 uppercase tracking-wide">
          <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
          {/* <Link href="#" className="hover:text-primary transition-colors">Press</Link> */}
        </div>

        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all hover:border-primary group"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
