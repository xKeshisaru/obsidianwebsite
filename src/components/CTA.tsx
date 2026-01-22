import { RainbowButton } from "@/components/magicui/rainbow-button";

export default function CTA() {
    return (
        <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 bg-black pb-24">
            <h2 className="font-serif text-4xl md:text-7xl mb-8 tracking-tight">
                Join the Obsidian Ritual.
            </h2>

            <RainbowButton className="px-12 py-4 h-auto text-lg tracking-widest uppercase font-bold text-white selection:bg-transparent">
                Order Now
            </RainbowButton>

            <p className="mt-8 text-white/40 font-sans text-sm tracking-wide">
                Next-day delivery in select metropolitan areas.
            </p>
        </section>
    );
}
