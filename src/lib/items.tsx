export const items = [
  {
    id: "1",
    name: "Deku Stick",
    images: ["/stick.jpg", "/stick.jpg", "/fairy-ocarina.jpg"],
  },
  {
    id: "2",
    name: "Fairy Ocarina",
    images: ["/fairy-ocarina.jpg", "/fairy-ocarina.jpg"],
  },
] as const;

export type ItemType = (typeof items)[number];
