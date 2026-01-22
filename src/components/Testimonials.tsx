export default function Testimonials() {
    return (
        <section className="py-24 px-6 md:px-12 bg-black relative overflow-hidden">
            {/* Subtle background gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 pointer-events-none" />

            <div className="max-w-4xl mx-auto space-y-20 relative z-10">
                <blockquote className="text-center space-y-6">
                    <p className="font-serif text-3xl md:text-5xl leading-tight text-white/90">
                        &ldquo;The most visually and palatably stunning coffee experience on the market.&rdquo;
                    </p>
                    <cite className="block font-sans text-xs tracking-[0.2em] uppercase text-white/40 not-italic">
                        — Vogue Gastronomy
                    </cite>
                </blockquote>

                <blockquote className="text-center space-y-6">
                    <p className="font-serif text-3xl md:text-5xl leading-tight text-white/90">
                        &ldquo;It&rsquo;s not just coffee; it&rsquo;s an engineering marvel in a glass.&rdquo;
                    </p>
                    <cite className="block font-sans text-xs tracking-[0.2em] uppercase text-white/40 not-italic">
                        — The New York Sommelier
                    </cite>
                </blockquote>
            </div>
        </section>
    );
}
