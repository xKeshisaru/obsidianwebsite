"use client";

import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function CartDrawer() {
    const { items, isOpen, toggleCart, removeFromCart, cartTotal } = useCart();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-black border-l border-white/10 z-[70] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 flex justify-between items-center border-b border-white/5">
                            <h2 className="font-serif text-2xl tracking-wide">Your Ritual</h2>
                            <button
                                onClick={toggleCart}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-white/70" />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-8">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-white/30 space-y-4">
                                    <p className="font-sans text-sm tracking-widest uppercase">
                                        The void is empty.
                                    </p>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="relative w-24 h-24 bg-white/5 flex-shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-serif text-lg">{item.name}</h3>
                                                <p className="font-mono text-sm text-white/50">{item.price}</p>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <div className="text-sm font-mono text-white/40">
                                                    Qty: {item.quantity}
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-xs text-red-400 hover:text-red-300 transition-colors uppercase tracking-wider"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-white/10 bg-white/5">
                            <div className="flex justify-between items-end mb-6">
                                <span className="font-sans text-xs tracking-widest uppercase text-white/50">Total</span>
                                <span className="font-serif text-3xl">${cartTotal.toFixed(2)}</span>
                            </div>
                            <button className="w-full py-4 bg-white text-black font-sans font-bold tracking-[0.2em] uppercase hover:bg-white/90 transition-colors">
                                Checkout
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
