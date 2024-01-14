"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface ItemProps {
  id: string;
  name: string;
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
      className={cn("border-2 p-4 opacity-50 cursor-pointer", {
        "opacity-100": isActive,
      })}
      onClick={toggleItem}
    >
      {name}
    </div>
  );
};
