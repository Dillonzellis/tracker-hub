"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ItemProps {
  id: string;
  name: string;
  imageUrl?: string;
}

export const Item = ({ id, name }: ItemProps) => {
  const [isActive, setIsActive] = useState(() => {
    const saved = localStorage.getItem("itemActive_" + id);
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("itemActive_" + id, JSON.stringify(isActive));
  }, [isActive, id]);

  const toggleItem = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={cn("opacity-50 cursor-pointer", {
        "opacity-100": isActive,
      })}
      onClick={toggleItem}
    >
      {name}
      <Image src="/stick.jpg" alt={name} width={100} height={100} />
    </div>
  );
};
