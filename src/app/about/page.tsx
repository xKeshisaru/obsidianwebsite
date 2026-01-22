import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-4xl mx-auto space-y-24">

                <section className="space-y-8 text-center">
                    <h1 className="font-serif text-5xl md:text-8xl tracking-tight leading-none text-white/90">
                        The Ritual <br /> of Void.
                    </h1>
                    <p className="font-sans text-white/50 text-sm md:text-base tracking-widest uppercase max-w-lg mx-auto leading-relaxed">
                        We do not simply brew coffee. We extract the soul of the bean through a process bordering on alchemy.
                    </p>
                </section>

                <section className="grid md:grid-cols-2 gap-12 items-center border-t border-white/10 pt-12">
                    <div className="aspect-square bg-white/5 rounded-sm relative overflow-hidden group">
                        <Image
                            src="/images/about-cryo.png"
                            alt="Cryogenic Selection"
                            fill
                            className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl text-white">Cryogenic Selection</h2>
                        <p className="font-sans text-white/60 leading-8">
                            Our beans are harvested at the peak of twilight and immediately flash-frozen to preserve volatile aromatics that are typically lost in transport.
                            This ensures that the "ghost" of the flavor profile remains intact until the moment of roast.
                        </p>
                    </div>
                </section>

                <section className="grid md:grid-cols-2 gap-12 items-center border-t border-white/10 pt-12 md:flex-row-reverse">
                    <div className="space-y-6 md:order-1">
                        <h2 className="font-serif text-3xl text-white">The Obsidian Roast</h2>
                        <p className="font-sans text-white/60 leading-8">
                            Roasted in a vacuum-sealed chamber, Obsidian beans never touch oxygen until they hit your grinder.
                            This anaerobic process creates a density and richness that standard roasting simply cannot replicate.
                        </p>
                    </div>
                    <div className="aspect-square bg-white/5 rounded-sm relative overflow-hidden md:order-2 group">
                        <Image
                            src="/images/about-roast.png"
                            alt="Obsidian Roast"
                            fill
                            className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                        />
                    </div>
                </section>

            </div>
        </main>
    );
}
