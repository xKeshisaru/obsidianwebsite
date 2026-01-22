"use client";

import Link from "next/link";
import { Bean, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function Navbar() {
    const { toggleCart, cartCount } = useCart();

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
                <button
                    onClick={toggleCart}
                    className="group relative p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                    <ShoppingBag className="w-5 h-5 text-white/90" />
                    {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 bg-white text-black text-[10px] font-bold rounded-full">
                            {cartCount}
                        </span>
                    )}
                </button>
            </div>
        </nav>
    );
}
