import { IFormValues } from "./models";
import { pick, prop, whereEq } from "ramda";
import { DAYS_ITEMS } from "$constants";
import { v4 } from "uuid";
import { IPlace } from "$models";

export const inputAdapter = (input: IPlace): IFormValues => {
  const { extraContacts } = input ?? {};

  const additionalFields = extraContacts
    ? extraContacts.map(({ title, value }) => ({ title, value, id: v4() }))
    : [];

  return {
    title: input?.title,
    image: input?.logoUrl,
    address: input?.address,
    phone: input?.phone,
    contactName: input?.contactName,
    workingDays:
      input?.workingTime?.map(prop("dayOfWeek")) ?? DAYS_ITEMS.map(prop("id")),
    differentTimeDaily: input?.workingTime
      ? !input?.workingTime?.every(
          whereEq({
            timeFrom: input?.workingTime[0].timeFrom,
            timeTo: input?.workingTime[0].timeTo,
          }),
        )
      : false,
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
    additionalFields,
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
