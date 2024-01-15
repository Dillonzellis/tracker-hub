import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Item } from "@/components/Item";
import { items } from "@/lib/items";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <MaxWidthWrapper>
        <div className="pt-20">
          <div className="text-3xl text-center">Tracker</div>
          <div className="flex gap-4 pt-12 justify-center">
            {items.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
