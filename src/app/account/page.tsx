"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { RainbowButton } from "@/components/magicui/rainbow-button";

export default function AccountPage() {
    const { user, logout, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !user) {
            router.push("/login");
        }
    }, [user, isLoading, router]);

    if (isLoading || !user) return null;

    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-4xl mx-auto space-y-12">
                <header className="flex justify-between items-end border-b border-white/10 pb-8">
                    <div>
                        <h1 className="font-serif text-4xl mb-2">Welcome, {user.name}</h1>
                        <p className="font-sans text-xs tracking-widest text-white/50 uppercase">
                            Member ID: OBS-7734-X
                        </p>
                    </div>
                    <button
                        onClick={logout}
                        className="font-mono text-xs text-white/40 hover:text-red-400 transition-colors uppercase tracking-widest"
                    >
                        Logout
                    </button>
                </header>

                <section className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white/5 p-8 border border-white/10 rounded-sm space-y-4">
                        <h2 className="font-serif text-xl border-b border-white/10 pb-4">Subscription Status</h2>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="font-mono text-sm">ACTIVE • THE OBSIDIAN TIER</span>
                        </div>
                        <p className="text-white/40 text-sm leading-6">
                            Next shipment arriving in 12 days.
                            <br />
                            Selection: Single Origin - Ethiopia Yirgacheffe (Anaerobic)
                        </p>
                        <div className="pt-4">
                            <RainbowButton className="text-[10px] h-8 px-6 uppercase tracking-widest">
                                Manage
                            </RainbowButton>
                        </div>
                    </div>

                    <div className="bg-white/5 p-8 border border-white/10 rounded-sm space-y-4 opacity-50 cursor-not-allowed">
                        <h2 className="font-serif text-xl border-b border-white/10 pb-4">Loyalty Vault</h2>
                        <p className="font-mono text-4xl">750 <span className="text-sm text-white/30">PTS</span></p>
                        <p className="text-white/40 text-sm">Unlock 'The Void' dark roast at 1000 PTS.</p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="font-serif text-2xl">Order History</h2>
                    <div className="space-y-px bg-white/10 border border-white/10">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex justify-between items-center p-6 bg-black hover:bg-white/5 transition-colors cursor-pointer group">
                                <div className="space-y-1">
                                    <p className="font-mono text-xs text-white/50">ORDER #882{i}</p>
                                    <p className="font-serif">Obsidian Origin I x 2</p>
                                </div>
                                <div className="text-right space-y-1">
                                    <p className="font-mono text-xs text-green-400">SHIPPED</p>
                                    <p className="font-mono text-sm text-white/60">$90.00</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
