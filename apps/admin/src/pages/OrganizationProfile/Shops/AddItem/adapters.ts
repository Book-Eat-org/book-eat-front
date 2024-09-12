import { IFormValues } from "./models";
import { DayOfWeek, IOrganization, IPlace, PickPartial } from "@book-eat/api";
import { EntityId } from "@reduxjs/toolkit";
import { equals, evolve, join, pipe, split, take, values } from "ramda";

const prepareTime = pipe(split(":"), take(2), join(":"));

const prepareSchedule = evolve({ timeTo: prepareTime, timeFrom: prepareTime });

export const inputAdapter = (input: IPlace): IFormValues => {
  const schedule =
    input?.schedule.map(prepareSchedule) ??
    values(DayOfWeek).map((day) => ({
      dayOfWeek: day,
      timeTo: "22:00",
      timeFrom: "09:00",
    }));

  const timesValues = schedule.reduce(
    (acc, curr) => [...acc, curr.timeTo, curr.timeFrom],
    [] as string[],
  );
  console.log(timesValues);

  const differentTimeDaily = [...new Set(timesValues)].length > 2;

  return {
    title: input?.title,
    image: input?.logoUrl,
    address: input?.info?.address ?? "",
    phone: input?.info?.phone ?? "",
    differentTimeDaily,
    schedule,
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
