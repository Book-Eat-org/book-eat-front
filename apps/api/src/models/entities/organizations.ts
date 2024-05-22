import { EntityId } from "@reduxjs/toolkit";

export interface IOrganization {
  id: EntityId;
  logoUrl?: string;
  title?: string;
  description?: string;
  legalInfo: {
    inn: string;
    ogrn: string;
    actualAddress: string;
    legalAddress: string;
    phone: string;
    email: string;
  };
}
