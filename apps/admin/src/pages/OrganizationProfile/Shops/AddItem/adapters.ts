import { IFormValues } from "./models";
import { keys, pick, prop, whereEq } from "ramda";
import { DAYS_ITEMS } from "$constants";
import { v4 } from "uuid";
import { OrdersIssuingMode } from "$enums";
import { IPlace } from "$models";

export const inputAdapter = (input: IPlace): IFormValues => {
  const { extraContacts } = input ?? {};

  const additionalFields = extraContacts
    ? extraContacts.map(({ title, value }) => ({ title, value, id: v4() }))
    : [];

  return {
    title: input?.title,
    image: input?.photo,
    address: input?.address,
    phone: input?.phone,
    contactName: input?.contactName,
    workingDays:
      input?.workingTime?.map(prop("dayOfWeek")) ?? DAYS_ITEMS.map(prop("id")),
    differentTimeDaily: input?.workingTime
      ? !input?.workingTime?.every(
          whereEq({
            workingTimeFrom: input?.workingTime[0].workingTimeFrom,
            workingTimeTo: input?.workingTime[0].workingTimeTo,
          }),
        )
      : false,
    placeSettings: input.placeSetting,
    workingHoursDaily:
      input?.workingTime ??
      DAYS_ITEMS.map(({ id }) => ({
        dayOfWeek: id,
        workingTimeFrom: "09:00",
        workingTimeTo: "22:00",
      })),
    workingHoursAllDays: {
      workingTimeFrom: "09:00",
      workingTimeTo: "22:00",
    },
    additionalFields,
  };
};

export const ouptutAdapter = (data: IFormValues): IPlace => {
  return {
    address: data.address,
    phone: data.phone,
    workingTime: data.differentTimeDaily
      ? data.workingHoursDaily
      : DAYS_ITEMS.map(({ id }) => ({
          dayOfWeek: id,
          workingTimeFrom: data.workingHoursAllDays.workingTimeFrom,
          workingTimeTo: data.workingHoursAllDays.workingTimeTo,
        })),
    title: data.title,
    placeId: undefined,
    placeSetting: data.placeSettings,
    photo: data.image,
    extraContacts: data.additionalFields.map(pick(["title", "value"])),
    enabled: true,
    contactName: data.contactName,
    orgId: undefined,
  };
};
