import { IFormValues } from "./models";
import { v4 } from "uuid";
import { IOrganization } from "$models";
import { isNil } from "ramda";

const numberPattern = /\d+/g;

const digitsUuid = (value: string) =>
  typeof value === "number"
    ? value
    : Number(value.match(numberPattern)?.join("").substring(0, 6));
export const inputAdapter = (input: IOrganization): IFormValues => {
  const { title, legalContacts, actualContacts, inn, ogrnip } = input ?? {};

  return {
    title: title,
    legalContactsEmails: legalContacts?.emails ?? [{ id: v4(), value: "" }],
    legalContactsPhones: legalContacts?.emails ?? [{ id: v4(), value: "" }],
    actualContactsEmails: actualContacts?.emails ?? [{ id: v4(), value: "" }],
    actualContactsPhones: actualContacts?.phones ?? [{ id: v4(), value: "" }],
    files: [],
    inn: isNil(inn) ? inn : Number(inn),
    ogrnip: isNil(ogrnip) ? ogrnip : Number(ogrnip),
  };
};

export const outputAdapter = (
  data: IFormValues,
  id?: string,
): IOrganization => {
  return {
    title: data.title,
    id,
    image: data.image,
    actualContacts: {
      address: data.actualContactsAddress,
      emails: data.actualContactsEmails.map((item) => ({
        ...item,
        id: digitsUuid(item.id),
      })),
      phones: data.actualContactsPhones.map((item) => ({
        ...item,
        id: digitsUuid(item.id),
      })),
    },
    inn: String(data.inn),
    legalContacts: {
      address: data.legalContactsAddress,
      emails: data.legalContactsEmails.map((item) => ({
        ...item,
        id: digitsUuid(item.id),
      })),
      phones: data.legalContactsPhones.map((item) => ({
        ...item,
        id: digitsUuid(item.id),
      })),
    },
    ogrnip: String(data.ogrnip),
  };
};
