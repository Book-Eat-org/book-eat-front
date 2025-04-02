import { DayOfWeek, ISchedule } from "@book-eat/api";

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

export const formatSchedule = (schedule: ISchedule[]): string[] => {
  const parseTime = (time: string): string => {
    const parts = time.split(":");
    return `${parts[0]}:${parts[1]}`;
  };

  const groupedSchedule = schedule.reduce((acc, item) => {
    const timeFrom = parseTime(item.timeFrom);
    const timeTo = parseTime(item.timeTo);
    const key = `${timeFrom} - ${timeTo}`;

    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item.dayOfWeek);
    
    return acc;
  }, {} as { [key: string]: DayOfWeek[] });

  const entries = Object.entries(groupedSchedule).map(([time, days]) => {
    const sortedDays = days.sort((a, b) => daysOfWeek.indexOf(a) - daysOfWeek.indexOf(b));

    const formattedDays = sortedDays.reduce((acc, day, index, array) => {
      if (index === 0) {
        return shortDaysOfWeek[day];
      }

      if (daysOfWeek.indexOf(day) === daysOfWeek.indexOf(array[index - 1]) + 1) {
        if (index === array.length - 1) {
          return `${acc}-${shortDaysOfWeek[day]}`;
        }
        return acc;
      } else {
        if (acc.includes("-")) {
          return `${acc}, ${shortDaysOfWeek[day]}`;
        } else {
          return `${acc}, ${shortDaysOfWeek[day]}`;
        }
      }
    }, "");

    return {
      firstDayIndex: daysOfWeek.indexOf(sortedDays[0]),
      formattedString: `${formattedDays}: ${time}`
    };
  });

  return entries
    .sort((a, b) => a.firstDayIndex - b.firstDayIndex)
    .map((entry) => entry.formattedString);
};