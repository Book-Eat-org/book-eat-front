import { IOrder } from "@book-eat/api";

export const ORDER_DATA: IOrder = {
  id: "daads",
  comment: "Тест коммент",
  products: [
    { id: "ecc6a3e0-1eed-44eb-bab4-e975a18743e9", amount: 2 },
    { id: "6209c582-fa12-4621-8dcc-2fbee389f07c", amount: 4 },
  ],
  organization: { id: "e1df5c03-446f-4075-ab4a-aa7f30d4fa7d" },
};
