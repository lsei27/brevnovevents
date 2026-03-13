"use client";

import { useState } from "react";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  if (isLoaded) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    );
  }

  return (
    <button type="button" onClick={() => setIsLoaded(true)} className="group absolute inset-0 flex items-center justify-center" aria-label={`Přehrát video: ${title}`}>
      <img src={thumbnailUrl} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-brand-black/30 transition-colors group-hover:bg-brand-black/10" />
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-brand-red transition-transform group-hover:scale-110 md:h-20 md:w-20">
        <svg className="ml-1 h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
      </div>
    </button>
  );
}
