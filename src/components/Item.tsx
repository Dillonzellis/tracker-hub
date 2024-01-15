"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ItemProps {
  id: string;
  name: string;
  imageUrl?: string;
}

export const Item = ({ id, name, imageUrl }: ItemProps) => {
  const [isActive, setIsActive] = useState(false);

  // Load the state from localStorage after the component has mounted
  useEffect(() => {
    const saved = localStorage.getItem("itemActive_" + id);
    if (saved !== null) {
      setIsActive(JSON.parse(saved));
    }
  }, [id]);

  // Save the state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("itemActive_" + id, JSON.stringify(isActive));
  }, [isActive, id]);

  const toggleItem = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={cn("opacity-50 cursor-pointer", { "opacity-100": isActive })}
      onClick={toggleItem}
    >
      {name}
      {imageUrl && <Image src={imageUrl} alt={name} width={100} height={100} />}
    </div>
  );
};
