import { IPlace, IPlaceSettings } from "$models";

interface IWorkingHoursItem {
  dayOfWeek: number;
  timeFrom: string;
  timeTo: string;
}

export interface IFormValues {
  image?: string;
  title: string;
  address: string;
  phone: string;
  workingDays: number[];
  differentTimeDaily: boolean;
  contactName?: string;
  workingHoursAllDays: { timeFrom: string; timeTo: string };
  workingHoursDaily: IWorkingHoursItem[];
  placeSettings: IPlaceSettings;
  additionalFields: {
    title: string;
    value: string;
    id: string;
    primary?: boolean;
  }[];
}
