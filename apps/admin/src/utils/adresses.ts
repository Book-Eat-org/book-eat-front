import { AddressIdentifiers } from "$enums";
import { complement, includes, isEmpty, isNil } from "ramda";

const prepareValue = (array: string[] = [], value: AddressIdentifiers) => {
  const result = array?.find(includes(value))?.replace(value, "");
  const trimmed = result?.trim();

  if (isEmpty(trimmed)) {
    return undefined;
  }

  return trimmed;
};

export const addressInputAdapter = (value?: string) => {
  const list = value?.split(",") ?? [];

  const [city, street, house, ...rest] = list;

  const floor = prepareValue(rest, AddressIdentifiers.Floor);
  const apartments = prepareValue(rest, AddressIdentifiers.Apartments);
  const intercom = prepareValue(rest, AddressIdentifiers.Intercom);
  const entrance = prepareValue(rest, AddressIdentifiers.Entrance);

  return {
    address: [city, street, house].filter(complement(isNil)).join(),
    floor,
    apartments,
    intercom,
    entrance,
  };
};
