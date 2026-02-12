export type GiftOption = {
  id: string;
  label?: string;
  image?: string;
};

export const gifts: GiftOption[] = [
  { id: "sushi", label: "Суші сет" },
  { id: "flowers", label: "Букет квітів" },
  { id: "phone", label: "Поповнення на телефон" },
  { id: "breakfast", label: "Сніданок в ліжко" },
  { id: "choco", label: "Шоколадка" },
  { id: "adult", image: "/smile18.webp" },
  { id: "shawarma", label: "Шаурма" },
  { id: "money", label: "200 гривень" },
  { id: "book", label: "Книга" },
  { id: "massage", label: "Масаж" },
];


