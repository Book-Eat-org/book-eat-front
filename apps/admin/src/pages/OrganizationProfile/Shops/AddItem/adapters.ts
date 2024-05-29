import { IFormValues } from "./models";
import { prop, values } from "ramda";
import { DAYS_ITEMS } from "$constants";
import { DayOfWeek, IOrganization, IPlace, PickPartial } from "@book-eat/api";
import { EntityId } from "@reduxjs/toolkit";

export const inputAdapter = (input: IPlace): IFormValues => {
  return {
    title: input?.title,
    image: input?.logoUrl,
    address: input?.info?.address ?? "",
    phone: input?.info?.phone ?? "",
    contactName: input?.info.contactName,
    workingDays: DAYS_ITEMS.map(prop("id")),
    differentTimeDaily: false,
    isDeliveryAvailable: input?.isDeliveryAvailable,
    isInPlaceAvailable: input?.isInPlaceAvailable,
    isOutsideAvailable: input?.isOnPlaceAvailable,
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

export const ouptutAdapter = (
  data: IFormValues,
  organization: IOrganization,
  id?: EntityId,
): PickPartial<IPlace, "id"> => {
  return {
    id,
    info: { address: data.address, phone: data.phone },
    geolocation: {
      latitude: 11.222,
      longitude: 22.333,
    },
    city: {
      name: "Москва",
    },
    schedule: data.differentTimeDaily
      ? data.workingHoursDaily.map(({ dayOfWeek }) => ({
          dayOfWeek,
          timeFrom: data.workingHoursAllDays.timeFrom,
          timeTo: data.workingHoursAllDays.timeTo,
        }))
      : values(DayOfWeek).map((dayOfWeek) => ({
          dayOfWeek,
          timeFrom: data.workingHoursAllDays.timeFrom,
          timeTo: data.workingHoursAllDays.timeTo,
        })),
    title: data.title,
    isDeliveryAvailable: data.isDeliveryAvailable,
    isInPlaceAvailable: data.isInPlaceAvailable,
    isOnPlaceAvailable: data?.isOutsideAvailable,
    logoUrl: data.image!,
    organization,
  };
};
