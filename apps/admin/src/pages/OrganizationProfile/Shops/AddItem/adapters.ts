import { IFormValues } from "./models";
import { pick, prop } from "ramda";
import { DAYS_ITEMS } from "$constants";
import { IPlace } from "@book-eat/api";

export const inputAdapter = (input: IPlace): IFormValues => {
  return {
    title: input?.title,
    image: input?.logoUrl,
    address: input?.address,
    phone: input?.phone,
    contactName: input?.contactName,
    workingDays: DAYS_ITEMS.map(prop("id")),
    differentTimeDaily: false,
    placeSettings: {
      deliveryAvailable: input.isDeliveryAvailable,
      onPlaceAvailable: input.isInPlaceAvailable,
      toOutsideAvailable: true,
    },
    workingHoursDaily:
      input?.workingTime ??
      DAYS_ITEMS.map(({ id }) => ({
        dayOfWeek: id,
        timeFrom: "09:00",
        timeTo: "22:00",
      })),
    workingHoursAllDays: {
      timeFrom: "09:00",
      timeTo: "22:00",
    },
  };
};

export const ouptutAdapter = (data: IFormValues): Omit<IPlace, "placeId"> => {
  return {
    address: data.address,
    phone: data.phone,
    workingTime: data.differentTimeDaily
      ? data.workingHoursDaily
      : DAYS_ITEMS.map(({ id }) => ({
          dayOfWeek: id,
          timeFrom: data.workingHoursAllDays.timeFrom,
          timeTo: data.workingHoursAllDays.timeTo,
        })),
    title: data.title,
    isDeliveryAvailable: data.placeSettings["deliveryAvailable"],
    isInPlaceAvailable: data.placeSettings["onPlaceAvailable"],
    logoUrl: data.image,
    extraContacts: data.additionalFields.map(pick(["title", "value"])),
    enabled: true,
  };
};
