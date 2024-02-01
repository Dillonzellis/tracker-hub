export const items = [
  {
    id: "1",
    name: "Deku Stick",
    images: [
      "/deku-stick.png",
      "/stick-10.jpg",
      "/stick-20.jpg",
      "/stick-30.jpg",
    ],
  },
  {
    id: "2",
    name: "Fairy Ocarina",
    images: ["/fairy-ocarina.png", "/fairy-ocarina.png", "/ocarina-time.png"],
  },
] as const;

export type ItemType = (typeof items)[number];
