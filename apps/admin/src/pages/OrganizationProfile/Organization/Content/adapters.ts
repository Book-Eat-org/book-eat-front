import { IFormValues } from "./models";
import { IOrganization } from "@book-eat/api";
import { EntityId } from "@reduxjs/toolkit";

export const inputAdapter = (input: IOrganization): IFormValues => {
  const { title, logoUrl, legalInfo, imageUrl } = input ?? {};

  console.log(legalInfo);

  return {
    title,
    image: logoUrl,
    chainLogo: imageUrl,
    legalInfoName: legalInfo?.legalName,
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
  id: EntityId,
): IOrganization => {
  return {
    id,
    title: data.title,
    logoUrl: data.image,
    imageUrl: data.chainLogo,
    legalInfo: {
      legalName: data.legalInfoName,
      inn: String(data.legalInfoInn),
      ogrn: String(data.legalInfoOgrn),
      email: data.legalInfoEmail,
      phone: data.legalInfoPhone,
      legalAddress: data.legalInfoLegalAddress,
      actualAddress: data.legalInfoActualAddress,
    },
  };
};
