import { DayOfWeek } from "@book-eat/api";

interface IWorkingHoursItem {
  dayOfWeek: DayOfWeek;
  timeFrom: string;
  timeTo: string;
}

export interface IFormValues {
  image?: string;
  title: string;
  address: string;
  phone: string;
  differentTimeDaily: boolean;
  contactName?: string;
  schedule: IWorkingHoursItem[];
  isDeliveryAvailable: boolean;
  isInPlaceAvailable: boolean;
  isOutsideAvailable: boolean;
  additionalFields: {
    title: string;
    value: string;
    id: string;
    primary?: boolean;
  }[];
}
