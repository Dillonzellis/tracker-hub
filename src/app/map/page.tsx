import { CheckContainer } from "@/components/CheckContainer";
import Image from "next/image";

interface CheckProps {
  name: string;
  x: string;
  y: string;
}

const CheckSquare = ({ name, x, y }: CheckProps) => {
  return (
    <div className="absolute" style={{ left: x, top: y }}>
      <div
        className="h-4 w-4 bg-green-500 border rounded-sm border-black"
        aria-label={name}
      ></div>
    </div>
  );
};

export default function Page() {
  return (
    <div className="min-h-screen bg-black justify-center items-center flex flex-col">
      <h1 className="text-white pb-4 text-2xl">Map Checks</h1>
      <div className="relative">
        <Image src="/hyrule-map.jpg" alt="Map" width={1024} height={1024} />
        <CheckSquare name="Deku Tree" x="88%" y="55%" />
      </div>
      <div className="py-16">
        <CheckContainer />
      </div>
    </div>
  );
}
