import { IFormValues } from "./models";
import { pick, prop } from "ramda";
import { DAYS_ITEMS, DAYS_ITEMS_API } from "$constants";
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
      deliveryAvailable: input?.isDeliveryAvailable,
      onPlaceAvailable: input?.isInPlaceAvailable,
      toOutsideAvailable: true,
    },
    workingHoursDaily:
      input?.schedule?.map((item) => ({
        dayOfWeek: item.dayOfWeek,
        timeTo: item.timeTo,
        timeFrom: item.timeFrom,
      })) ??
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
    geolocation: {
      latitude: 11.222,
      longitude: 22.333,
    },
    isDeliveryAvailable: true,
    isInPlaceAvailable: false,
    city: {
      name: "Москва",
    },
    schedule: data.differentTimeDaily
      ? data.workingHoursDaily.map(({ dayOfWeek }) => ({
          dayOfWeek: DAYS_ITEMS_API[String(dayOfWeek)],
          timeFrom: data.workingHoursAllDays.timeFrom,
          timeTo: data.workingHoursAllDays.timeTo,
        }))
      : DAYS_ITEMS.map(({ id }) => ({
          dayOfWeek: DAYS_ITEMS_API[String(id)],
          timeFrom: data.workingHoursAllDays.timeFrom,
          timeTo: data.workingHoursAllDays.timeTo,
        })),
    title: data.title,
    isDeliveryAvailable: data.placeSettings["deliveryAvailable"] ?? true,
    isInPlaceAvailable: data.placeSettings["onPlaceAvailable"] ?? true,
    logoUrl: data.image,
  };
};
