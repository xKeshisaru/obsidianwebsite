"use client";

import { useState, useEffect } from "react";

export const usePreloadImages = (frameCount: number) => {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];

    const loadImages = async () => {
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        // Construct filename: frame_000_delay-0.042s.jpg
        // Note: The files have variable delays in names, but the index is 000-191.
        // I need to know the EXACT filenames or use a consistent naming pattern.
        // The file list showed: frame_000_delay-0.042s.jpg, frame_001_delay-0.041s.jpg...
        // The delay varies. This makes simple string construction hard unless I have a manifest or normalized names.
        // CRITICAL: The files have variable suffixes. I can't guess them.
        // Workaround: I should probably RENAME the files to frame_000.jpg, frame_001.jpg etc. for easier loading.
        // OR: Generate a manifest.json of filenames.
        
        // I will Pause writing this file to Rename the files first.
      }
    };
  });
  
  return { images, progress, isLoading };
};
