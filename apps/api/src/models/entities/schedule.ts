interface ITime {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

export interface ISchedule {
  dayOfWeek: string;
  timeFrom: ITime;
  timeTo: ITime;
}
