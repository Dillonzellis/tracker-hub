"use client";

import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ItemType } from "@/lib/items";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Skeleton } from "./ui/skeleton";

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
    <>
      <div className="space-y-2 opacity-50">
        <Skeleton className="w-24 h-24 rounded-md" />
      </div>
    </>
  );
};
