import { DayOfWeek } from "@book-eat/api";

export const DAYS_ITEMS = [
  { id: DayOfWeek.Monday, name: "Пн" },
  { id: DayOfWeek.Tuesday, name: "Вт" },
  { id: DayOfWeek.Wednesday, name: "Ср" },
  { id: DayOfWeek.Thursday, name: "Чт" },
  { id: DayOfWeek.Friday, name: "Пт" },
  { id: DayOfWeek.Saturday, name: "Сб" },
  { id: DayOfWeek.Sunday, name: "Вс" },
];

export const DAYS_ITEMS_API = {
  1: "Понедельник",
  2: "Вторник",
  3: "Среда",
  4: "Четверг",
  5: "Пятница",
  6: "Суббота",
  7: "Воскресенье",
};
