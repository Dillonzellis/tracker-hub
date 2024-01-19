"use client";

import { useState } from "react";

import { HTMLAttributes } from "react";
import { checkList } from "@/data/checks";
import type { CheckListType } from "@/data/checks";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

type CheckStatus = Record<string, "possible" | "impossible" | "complete">;

type SingleCheckVariants = VariantProps<typeof SingleCheckVariants>;

// FIX: wtf is this onCheckClick? wut
type SingleCheckProps = SingleCheckVariants &
  HTMLAttributes<HTMLDivElement> & {
    onCheckClick?: (check: string) => void;
  };

const SingleCheckVariants = cva(
  "text-sm cursor-pointer text-muted-foreground",
  {
    variants: {
      status: {
        possible: "text-green-500",
        impossible: "text-red-500",
        complete: "text-muted-foreground",
      },
    },
  },
);

// FIX: fix onCheck nonsense
const SingleCheck = ({
  children,
  className,
  status,
  onCheckClick,
  ...props
}: SingleCheckProps) => {
  const [checkStatus, setCheckStatus] = useState<CheckStatus>({});

  // FIX: ...prev doing what?
  const handleCheck = (check: string) => {
    setCheckStatus((prev) => ({
      ...prev,
      [check]: prev[check] === "complete" ? "possible" : "complete",
    }));
  };
  return (
    <div
      className={cn(SingleCheckVariants({ status }), className)}
      {...props}
      onClick={
        onCheckClick ? () => onCheckClick(children as string) : undefined
      }
    >
      {children}
    </div>
  );
};

const Check = ({ checkArea, checks }: CheckListType) => {
  return (
    <div>
      <div className="text-xl">{checkArea}</div>
      <ul>
        {checks.map((check) => (
          <SingleCheck>{check}</SingleCheck>
        ))}
      </ul>
    </div>
  );
};

export const CheckContainer = () => {
  return (
    <div className="flex flex-col text-white">
      {checkList.map((item, index) => (
        <Check key={index} {...item} />
      ))}
    </div>
  );
};
