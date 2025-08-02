"use client";

import { useState } from "react";

interface PlaceholderImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export function PlaceholderImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: PlaceholderImageProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div
        className={`bg-gray-200 dark:bg-gray-700 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 dark:text-gray-400 text-sm">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setImageError(true)}
      loading={priority ? "eager" : "lazy"}
    />
  );
}