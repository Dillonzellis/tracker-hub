import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";

export const Navbar = () => {
  return (
    <MaxWidthWrapper>
      <nav className="py-4 space-x-4 text-white">
        <Button asChild variant="link" className="text-white">
          <Link href="/">Tracker</Link>
        </Button>
        <Button asChild variant="link" className="text-white">
          <Link href="/map">Map</Link>
        </Button>
      </nav>
    </MaxWidthWrapper>
  );
};
