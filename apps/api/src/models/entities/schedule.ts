export enum DayOfWeek {
  Monday = "Понедельник",
  Tuesday = "Вторник",
  Wednesday = "Среда",
  Thursday = "Четверг",
  Friday = "Пятница",
  Saturday = "Суббота",
  Sunday = "Воскресенье",
}
export interface ISchedule {
  dayOfWeek: DayOfWeek;
  timeFrom: string;
  timeTo: string;
}
