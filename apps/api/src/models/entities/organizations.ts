import { EntityId } from "@reduxjs/toolkit";

export interface IOrganization {
  id: EntityId;
  logoUrl?: string;
  imageUrl?: string;
  title?: string;
  description?: string;
  legalInfo: {
    legalName: string;
    inn: string;
    ogrn: string;
    actualAddress: string;
    legalAddress: string;
    phone: string;
    email: string;
  };
}
