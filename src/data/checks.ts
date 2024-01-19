export const checkList = [
  {
    checkArea: "Deku Tree",
    checks: [
      "Lobby Chest",
      "Slingshot Chest",
      "Slingshot Room",
      "Compass Chest",
      "Basement Chest",
      "Gohma",
    ],
  },
  {
    checkArea: "Kokiri Forest",
    checks: [
      "Mido Chest 1",
      "Mido Chest 2",
      "Mido Chest 3",
      "Mido Chest 4",
      "Saria",
      "Skull Kid",
      "Ocarina Game",
      "Song of Storms",
    ],
  },
] as const;

export type CheckListType = (typeof checkList)[number];
