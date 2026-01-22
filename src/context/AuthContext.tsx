"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface User {
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string) => Promise<void>;
    register: (name: string, email: string) => Promise<void>;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Check local storage on mount
        const storedUser = localStorage.getItem("obsidian_user");
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                console.error("Failed to parse user", e);
            }
        }
        setIsLoading(false);
    }, []);

    const login = async (email: string) => {
        // Mock API call
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                const mockUser = { name: "Agent", email }; // Default name for login
                setUser(mockUser);
                localStorage.setItem("obsidian_user", JSON.stringify(mockUser));
                resolve();
            }, 1000);
        });
    };

    const register = async (name: string, email: string) => {
        // Mock API call
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                const newUser = { name, email };
                setUser(newUser);
                localStorage.setItem("obsidian_user", JSON.stringify(newUser));
                resolve();
            }, 1000);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("obsidian_user");
        router.push("/");
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
