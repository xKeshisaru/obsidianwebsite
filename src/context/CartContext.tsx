"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface CartItem {
    id: number;
    name: string;
    price: string;
    image: string;
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    isOpen: boolean;
    toggleCart: () => void;
    addToCart: (product: Omit<CartItem, "quantity">) => void;
    removeFromCart: (id: number) => void;
    cartCount: number;
    cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Load from LocalStorage on mount
    useEffect(() => {
        setIsMounted(true);
        const saved = localStorage.getItem("obsidian_cart");
        if (saved) {
            try {
                setItems(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    // Save to LocalStorage on change
    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("obsidian_cart", JSON.stringify(items));
        }
    }, [items, isMounted]);

    const toggleCart = () => setIsOpen((prev) => !prev);

    const addToCart = (product: Omit<CartItem, "quantity">) => {
        setItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setIsOpen(true); // Open cart when adding
    };

    const removeFromCart = (id: number) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

    const cartTotal = items.reduce((acc, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return acc + price * item.quantity;
    }, 0);

    return (
        <CartContext.Provider
            value={{
                items,
                isOpen,
                toggleCart,
                addToCart,
                removeFromCart,
                cartCount,
                cartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
