"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { ItemType } from "@/lib/items";

interface ItemProps {
  item: ItemType;
}

export const Item = ({ item: { id, name, images } }: ItemProps) => {
  const [imageIndex, setImageIndex] = useState(() => {
    const saved = localStorage.getItem("itemActive_" + id);
    return saved !== null ? JSON.parse(saved) : 0;
  });

  useEffect(() => {
    const saved = localStorage.getItem("itemActive_" + id);
    if (saved !== null) {
      console.log("saved", saved);
      setImageIndex(JSON.parse(saved));
    }
  }, [id]);

  useEffect(() => {
    localStorage.setItem("itemActive_" + id, JSON.stringify(imageIndex));
  }, [imageIndex, id]);

  const toggleItem = () => {
    const nextIndex = (imageIndex + 1) % images.length;
    setImageIndex(nextIndex);
  };

  const isActive = imageIndex > 0;

  return (
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
  );
};
