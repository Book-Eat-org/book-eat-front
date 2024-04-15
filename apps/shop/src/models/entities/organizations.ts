import { EntityId } from "@reduxjs/toolkit";

export interface IOrganization {
  id: EntityId;
  description: string;
  title: string;
  logoUrl: string;
}
