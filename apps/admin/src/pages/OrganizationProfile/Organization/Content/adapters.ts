import { IFormValues } from "./models";
import { IOrganization } from "@book-eat/api";

export const inputAdapter = (input: IOrganization): IFormValues => {
  const { title, logoUrl, legalInfo } = input ?? {};

  return {
    title,
    image: logoUrl,
    legalInfoEmail: legalInfo?.email,
    legalInfoLegalAddress: legalInfo?.legalAddress,
    legalInfoPhone: legalInfo?.phone,
    legalInfoActualAddress: legalInfo?.actualAddress,
    legalInfoInn: legalInfo?.inn,
    legalInfoOgrn: legalInfo?.ogrn,
  };
};

export const outputAdapter = (
  data: IFormValues,
  id?: string,
): Partial<IOrganization> => {
  return {
    id,
    title: data.title,
    logoUrl: data.image,
    legalInfo: {
      inn: String(data.legalInfoInn),
      ogrn: String(data.legalInfoOgrn),
      email: data.legalInfoEmail,
      phone: data.legalInfoPhone,
      legalAddress: data.legalInfoLegalAddress,
      actualAddress: data.legalInfoActualAddress,
    },
  };
};
