import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Item } from "@/components/Item";
import { items } from "@/data/items";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <MaxWidthWrapper>
        <div className="pt-20">
          <div className="text-center text-3xl">Tracker</div>
          <div className="flex justify-center gap-4 pt-12">
            {items.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
