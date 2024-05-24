export declare enum DayOfWeek {
    Monday = "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A",
    Tuesday = "\u0412\u0442\u043E\u0440\u043D\u0438\u043A",
    Wednesday = "\u0421\u0440\u0435\u0434\u0430",
    Thursday = "\u0427\u0435\u0442\u0432\u0435\u0440\u0433",
    Friday = "\u041F\u044F\u0442\u043D\u0438\u0446\u0430",
    Saturday = "\u0421\u0443\u0431\u0431\u043E\u0442\u0430",
    Sunday = "\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435"
}
export interface ISchedule {
    dayOfWeek: DayOfWeek;
    timeFrom: string;
    timeTo: string;
}
