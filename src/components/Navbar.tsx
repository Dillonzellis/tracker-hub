import { Button } from "./ui/button";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

export const Navbar = () => {
  return (
    <MaxWidthWrapper>
      <nav className="space-x-4 py-4 text-white">
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
