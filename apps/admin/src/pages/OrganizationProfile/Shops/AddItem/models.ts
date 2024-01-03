import { IPlace } from "$models";

interface IWorkingHoursItem {
  dayOfWeek: number;
  workingTimeFrom: string;
  workingTimeTo: string;
}

export interface IFormValues {
  image?: string;
  title: string;
  address: string;
  phone: string;
  workingDays: number[];
  differentTimeDaily: boolean;
  contactName?: string;
  workingHoursAllDays: { workingTimeFrom: string; workingTimeTo: string };
  workingHoursDaily: IWorkingHoursItem[];
  placeSettings: IPlace["placeSetting"];
  additionalFields: {
    title: string;
    value: string;
    id: string;
    primary?: boolean;
  }[];
}
