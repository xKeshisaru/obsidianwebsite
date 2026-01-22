"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import Link from "next/link";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { register } = useAuth();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await register(name, email);
        router.push("/account");
    };

    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
            <div className="w-full max-w-sm space-y-8">
                <div className="text-center space-y-2">
                    <h1 className="font-serif text-4xl">The Initiation</h1>
                    <p className="font-sans text-xs tracking-widest text-white/50 uppercase">
                        Join the inner circle
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="font-mono text-xs text-white/70 block">CODENAME</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:outline-none focus:border-white/50 transition-colors"
                            placeholder="Agent X"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="font-mono text-xs text-white/70 block">EMAIL</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:outline-none focus:border-white/50 transition-colors"
                            placeholder="initiate@obsidian.com"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="font-mono text-xs text-white/70 block">PASSWORD</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:outline-none focus:border-white/50 transition-colors"
                            placeholder="••••••••"
                        />
                    </div>

                    <RainbowButton className="w-full py-4 uppercase tracking-widest text-xs">
                        {isLoading ? "Initiating..." : "Begin Ritual"}
                    </RainbowButton>
                </form>

                <div className="text-center">
                    <Link href="/login" className="font-mono text-xs text-white/40 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
                        Already initiated? Enter Void
                    </Link>
                </div>
            </div>
        </main>
    );
}
