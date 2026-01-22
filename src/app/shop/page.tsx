import Image from "next/image";
import { RainbowButton } from "@/components/magicui/rainbow-button";

const products = [
    {
        id: 1,
        name: "Obsidian Origin I",
        price: "$45",
        desc: "Single origin, anaerobic wash. Notes of dark chocolate and smoke.",
        tag: "BEAN",
        image: "/images/shop-bean.png"
    },
    {
        id: 2,
        name: "Cold Brew Serum",
        price: "$60",
        desc: "Concentrated extraction. 12 hour drip. Pure caffeine density.",
        tag: "LIQUID",
        image: "/images/shop-serum.png"
    },
    {
        id: 3,
        name: "The Vessel",
        price: "$85",
        desc: "Double-walled borosilicate glass. Keeps cold for 24 hours.",
        tag: "GEAR",
        image: "/images/shop-vessel.png"
    }
];

export default function ShopPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <header className="mb-24 text-center">
                    <h1 className="font-serif text-5xl md:text-7xl mb-4">The Collection</h1>
                    <p className="font-sans text-white/50 tracking-widest text-xs uppercase">Limited Release • Batch 004</p>
                </header>

                <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
                    {products.map((p) => (
                        <div key={p.id} className="group cursor-pointer">
                            <div className="aspect-[3/4] bg-white/5 mb-6 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                                <div className="absolute top-4 left-4 text-[10px] font-mono border border-white/20 px-2 py-1 text-white/60 z-30">
                                    {p.tag}
                                </div>
                                <Image
                                    src={p.image}
                                    alt={p.name}
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                />
                            </div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-serif text-2xl group-hover:text-white/80 transition-colors">{p.name}</h3>
                                <span className="font-mono text-sm opacity-60">{p.price}</span>
                            </div>
                            <p className="font-sans text-white/40 text-sm leading-6 mb-6">
                                {p.desc}
                            </p>
                            <RainbowButton className="w-full h-10 text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                ADD TO CART
                            </RainbowButton>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
