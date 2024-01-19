export const items = [
  {
    id: "1",
    name: "Deku Stick",
    images: ["/stick.jpg", "/stick-10.jpg", "/stick-20.jpg", "/stick-30.jpg"],
  },
  {
    id: "2",
    name: "Fairy Ocarina",
    images: ["/fairy-ocarina.jpg", "/fairy-ocarina.jpg", "/ocarina-time.jpg"],
  },
] as const;

export type ItemType = (typeof items)[number];
