'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  className?: string;
}

export function Avatar({ src, alt = 'Avatar', className }: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={cn('relative overflow-hidden rounded-full bg-gray-200', className)}>
      {src && !imageError ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          unoptimized
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="h-full w-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400 text-xs">No Image</span>
        </div>
      )}
    </div>
  );
}

