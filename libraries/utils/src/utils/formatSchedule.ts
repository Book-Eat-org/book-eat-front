import { DayOfWeek, ISchedule } from "@book-eat/api";

export const formatSchedule = (schedule: ISchedule[]): string[] => {
  const daysOfWeek = Object.values(DayOfWeek);
  const shortDaysOfWeek: { [key in DayOfWeek]: string } = {
    [DayOfWeek.Monday]: "Пн",
    [DayOfWeek.Tuesday]: "Вт",
    [DayOfWeek.Wednesday]: "Ср",
    [DayOfWeek.Thursday]: "Чт",
    [DayOfWeek.Friday]: "Пт",
    [DayOfWeek.Saturday]: "Сб",
    [DayOfWeek.Sunday]: "Вс",
  };

  // Функция для парсинга времени
  function parseTime(time: string): string {
    const parts = time.split(":");
    return `${parts[0]}:${parts[1]}`;
  }

  // Группируем по времени работы
  const groupedSchedule: { [key: string]: DayOfWeek[] } = {};
  schedule.forEach((item) => {
    const timeFrom = parseTime(item.timeFrom);
    const timeTo = parseTime(item.timeTo);
    const key = `${timeFrom} - ${timeTo}`;
    if (!groupedSchedule[key]) {
      groupedSchedule[key] = [];
    }
    groupedSchedule[key].push(item.dayOfWeek);
  });

  // Форматируем вывод
  const formattedSchedule: string[] = [];
  Object.entries(groupedSchedule).forEach(([time, days]) => {
    // Сортируем дни недели для корректного формата
    days.sort((a, b) => daysOfWeek.indexOf(a) - daysOfWeek.indexOf(b));

    // Формируем строки для вывода
    let formattedDays = "";
    let currentDay = days[0];
    let count = 1;
    for (let i = 1; i < days.length; i++) {
      if (daysOfWeek.indexOf(days[i]) === daysOfWeek.indexOf(days[i - 1]) + 1) {
        count++;
      } else {
        if (count > 1) {
          formattedDays += `${shortDaysOfWeek[currentDay]}-${shortDaysOfWeek[days[i - 1]]}, `;
        } else {
          formattedDays += `${shortDaysOfWeek[currentDay]}, `;
        }
        currentDay = days[i];
        count = 1;
      }
    }
    // Добавляем последний день
    if (count > 1) {
      formattedDays += `${shortDaysOfWeek[currentDay]}-${shortDaysOfWeek[days[days.length - 1]]}`;
    } else {
      formattedDays += `${shortDaysOfWeek[currentDay]}`;
    }

    formattedSchedule.push(`${formattedDays}: ${time}`);
  });

  return formattedSchedule;
}