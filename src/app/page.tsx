"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Bean, ArrowDown } from "lucide-react";

import { usePreloadImages } from "@/hooks/usePreloadImages";
import CoffeeCanvas from "@/components/CoffeeCanvas";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

// Separate component for the actual experience to ensure refs are hydrated when useScroll runs
function RitualView({ images }: { images: HTMLImageElement[] }) {
  // Ref for the hero scroll container
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });

  // Fade out the hero text as we scroll down the animation
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <main className="bg-black min-h-screen text-white selection:bg-white/20">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 p-6 mix-blend-difference flex justify-between items-center pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <Bean className="w-6 h-6" />
          <span className="font-serif tracking-widest font-bold">OBSIDIAN</span>
        </div>
        <button className="text-xs font-sans tracking-[0.2em] border-b border-white/0 hover:border-white transition-all pointer-events-auto">
          PRE-ORDER
        </button>
      </nav>

      {/* Scroll-Driven Hero Container (300vh) */}
      <div ref={heroRef} className="relative h-[300vh] z-10">

        {/* Sticky Viewport */}
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">

          {/* The Canvas (Controlled by Hero Scroll) */}
          <div className="absolute inset-0 z-0">
            <CoffeeCanvas
              images={images}
              scrollYProgress={scrollYProgress}
            />
          </div>

          {/* Hero Content Overlay (Text) */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="text-center mix-blend-difference">
              <h1 className="font-serif text-6xl md:text-9xl tracking-tighter mb-4 text-white">
                OBSIDIAN
              </h1>
              <p className="font-sans text-xs md:text-sm tracking-[0.5em] uppercase text-white/80">
                The Architecture of Flavor
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-12 animate-bounce"
            >
              <ArrowDown className="text-white/50 w-6 h-6" />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Editorial Content (Flows after Hero) */}
      <div className="relative z-20 bg-black min-h-screen border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
        <div className="py-32 container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
                Precision <br /> meets <span className="italic text-white/50">Passion</span>.
              </h2>
              <p className="font-sans text-white/60 text-lg leading-relaxed mb-12">
                Every batch of Obsidian Brew starts at the molecular level.
                We don't just roast coffee; we engineer a sensory experience
                that defies conventional extraction methods.
              </p>
              <Features />
            </div>
          </div>
        </div>

        <Testimonials />
        <CTA />

        <footer className="py-12 border-t border-white/5 text-center text-white/20 text-xs font-mono">
          © 2026 OBSIDIAN BREW. DESIGNED FOR THE VOID.
        </footer>
      </div>

    </main>
  );
}

export default function Home() {
  const { images, progress, isLoading } = usePreloadImages(177); // Updated frame count
  const [hasEntered, setHasEntered] = useState(false);

  if (!hasEntered) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
        <div className="font-serif text-4xl mb-8 tracking-widest animate-pulse">
          OBSIDIAN
        </div>

        <div className="w-64 h-[1px] bg-white/20 overflow-hidden mb-4">
          <motion.div
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        <div className="font-mono text-xs text-white/50 mb-12">
          Brewing... {progress}%
        </div>

        <AnimatePresence>
          {progress > 95 && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              onClick={() => setHasEntered(true)}
              className="px-8 py-3 border border-white/20 hover:bg-white hover:text-black transition-colors duration-500 font-sans tracking-widest text-sm uppercase"
            >
              Enter Ritual
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return <RitualView images={images} />;
}
