"use client";

import { useEffect, useState } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

export function LazyVideo({ src, poster, className }: LazyVideoProps) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Delay video loading until after initial paint to prioritize LCP/FCP
    const timer = setTimeout(() => setShouldLoad(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!shouldLoad) {
    if (poster) {
      return <img src={poster} alt="" className={className} />;
    }
    return <div className={className} />;
  }

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
