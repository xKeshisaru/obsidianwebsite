import { Mountain, Flame, ThermometerSnowflake } from "lucide-react";

const features = [
    {
        icon: Mountain,
        title: "Ethically Sourced",
        description: "High-altitude beans harvested from single-origin estates, supporting sustainable farming practices.",
    },
    {
        icon: Flame,
        title: "Precision Roasted",
        description: "Small-batch roasting monitored at a molecular level to unlock distinct flavor profiles.",
    },
    {
        icon: ThermometerSnowflake,
        title: "Temperature Controlled",
        description: "Delivered in vacuum-sealed chilled glass to preserve the pristine state of extraction.",
    },
];

export default function Features() {
    return (
        <section className="py-32 px-6 md:px-12 border-t border-white/5 bg-black">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
                {features.map((feature, index) => (
                    <div key={index} className="group space-y-6 text-center md:text-left">
                        <div className="w-16 h-16 mx-auto md:mx-0 flex items-center justify-center rounded-full border border-white/10 text-white/50 group-hover:bg-white group-hover:text-black group-hover:border-transparent transition-all duration-500 scale-90 group-hover:scale-100">
                            <feature.icon strokeWidth={1} className="w-6 h-6" />
                        </div>
                        <h3 className="font-serif text-3xl text-white tracking-wide">{feature.title}</h3>
                        <p className="font-sans text-white/50 text-sm leading-8 tracking-wide">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
