import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Item } from "@/components/Item";

const items = [
  { id: "1", name: "Item 1", imageUrl: "/stick.jpg" },
  { id: "2", name: "Item 2" },
  { id: "3", name: "Item 3" },
  { id: "4", name: "Item 4" },
  { id: "5", name: "Item 5" },
  { id: "6", name: "Item 6" },
];

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
