import { EntityId } from "@reduxjs/toolkit";

export interface ICategory {
  enabled: boolean;
  title: string;
  grouppingsId: EntityId;
  isEdit?: boolean;
}
