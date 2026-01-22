"use client";

import { useEffect, useRef, useState } from "react";
import { useTransform, useSpring, useMotionValueEvent } from "framer-motion";

interface CoffeeCanvasProps {
    images: HTMLImageElement[];
    scrollYProgress: any;
}

export default function CoffeeCanvas({ images, scrollYProgress }: CoffeeCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Map scroll 0-1 to frame index 0-(length-1)
    const maxFrame = images.length - 1;
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, maxFrame]);

    // Snappy spring physics for responsive scrubbing
    const smoothFrameIndex = useSpring(frameIndex, {
        stiffness: 300,
        damping: 30,
        restDelta: 0.001
    });

    const [currentIndex, setCurrentIndex] = useState(0);

    useMotionValueEvent(smoothFrameIndex, "change", (latest) => {
        setCurrentIndex(Math.round(latest));
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const render = () => {
            const img = images[currentIndex];
            if (!img) return;

            const parent = canvas.parentElement;
            if (!parent) return;

            const width = parent.clientWidth;
            const height = parent.clientHeight;

            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.clearRect(0, 0, width, height);

            const imgRatio = img.width / img.height;
            const canvasRatio = width / height;

            let renderWidth, renderHeight, offsetX, offsetY;

            if (canvasRatio > imgRatio) {
                renderHeight = height;
                renderWidth = height * imgRatio;
                offsetX = (width - renderWidth) / 2;
                offsetY = 0;
            } else {
                renderWidth = width;
                renderHeight = width / imgRatio;
                offsetX = 0;
                offsetY = (height - renderHeight) / 2;
            }

            ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
        };

        const rAF = requestAnimationFrame(render);
        return () => cancelAnimationFrame(rAF);

    }, [currentIndex, images]);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full object-contain"
            aria-label="Interactive 3D view of Obsidian Brew iced coffee"
        />
    );
}
