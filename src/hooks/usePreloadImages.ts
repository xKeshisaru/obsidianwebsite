"use client";

import { useState, useEffect } from "react";

export const usePreloadImages = (frameCount: number) => {
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let loadedCount = 0;
        const imgArray: HTMLImageElement[] = new Array(frameCount).fill(null);
        let isMounted = true;

        const loadImages = async () => {
            const promises = [];
            // User manually reduced frames to 177. Loading all derived frames.
            const step = 1;

            for (let i = 0; i < frameCount; i += step) {
                const promise = new Promise<void>((resolve) => {
                    const img = new Image();
                    const fileName = `${i.toString().padStart(3, "0")}.jpg`;
                    img.src = `/sequence/${fileName}`;

                    img.onload = () => {
                        if (!isMounted) return;
                        imgArray[i] = img;
                        loadedCount++;
                        setProgress(Math.round((loadedCount / frameCount) * 100));
                        resolve();
                    };

                    img.onerror = () => {
                        console.warn(`Failed to load image: ${fileName}`);
                        resolve();
                    };
                });
                promises.push(promise);
            }

            await Promise.all(promises);

            if (isMounted) {
                setImages(imgArray);
                setIsLoading(false);
            }
        };

        loadImages();

        return () => {
            isMounted = false;
        };
    }, [frameCount]);

    return { images, progress, isLoading };
};
