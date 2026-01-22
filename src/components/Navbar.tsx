"use client";

import Link from "next/link";
import { Bean } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-40 p-6 mix-blend-difference flex justify-between items-center pointer-events-none text-white">
            <Link href="/" className="flex items-center gap-2 pointer-events-auto">
                <Bean className="w-6 h-6" />
                <span className="font-serif tracking-widest font-bold">OBSIDIAN</span>
            </Link>

            <div className="flex items-center gap-8 pointer-events-auto">
                <Link href="/shop" className="text-xs font-sans tracking-[0.2em] border-b border-white/0 hover:border-white transition-all">
                    SHOP
                </Link>
                <Link href="/about" className="text-xs font-sans tracking-[0.2em] border-b border-white/0 hover:border-white transition-all">
                    RITUAL
                </Link>
                <Link href="/contact" className="text-xs font-sans tracking-[0.2em] border-b border-white/0 hover:border-white transition-all hidden md:block">
                    CONCIERGE
                </Link>
            </div>
        </nav>
    );
}
