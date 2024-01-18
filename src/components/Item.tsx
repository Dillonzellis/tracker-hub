"use client";

import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ItemType } from "@/lib/items";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface ItemProps {
  item: ItemType;
}

export const Item = ({ item: { id, name, images } }: ItemProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [imageIndex, setImageIndex] = useLocalStorage(`imageIndex-${id}`, 0);

  const toggleItem = () => {
    const nextIndex = (imageIndex + 1) % images.length;
    setImageIndex(nextIndex);
  };

  const isActive = imageIndex > 0;

  return isMounted ? (
    <div
      className={cn("opacity-50 cursor-pointer", { "opacity-100": isActive })}
      onClick={toggleItem}
    >
      {name}
      {images && (
        <Image
          src={images[imageIndex]}
          alt={name}
          className="rounded-md"
          width={100}
          height={100}
        />
      )}
    </div>
  ) : (
    <p>loading...</p>
  );
};
