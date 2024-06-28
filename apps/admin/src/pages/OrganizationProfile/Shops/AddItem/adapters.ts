import { IFormValues } from "./models";
import { DayOfWeek, IOrganization, IPlace, PickPartial } from "@book-eat/api";
import { EntityId } from "@reduxjs/toolkit";
import { eqProps, innerJoin, values } from "ramda";

export const inputAdapter = (input: IPlace): IFormValues => {
  return {
    title: input?.title,
    image: input?.logoUrl,
    address: input?.info?.address ?? "",
    phone: input?.info?.phone ?? "",
    schedule:
      input?.schedule ??
      values(DayOfWeek).map((day) => ({
        dayOfWeek: day,
        timeTo: "22:00",
        timeFrom: "09:00",
      })),
    contactName: input?.info.contactName,
    isDeliveryAvailable: input?.isDeliveryAvailable ?? false,
    isInPlaceAvailable: input?.isInPlaceAvailable ?? false,
    isOutsideAvailable: input?.isOnPlaceAvailable ?? false,
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
    schedule: data.schedule,
    title: data.title,
    isDeliveryAvailable: data.isDeliveryAvailable,
    isInPlaceAvailable: data.isInPlaceAvailable,
    isOnPlaceAvailable: data?.isOutsideAvailable,
    logoUrl: data.image!,
    organization,
  };
};
