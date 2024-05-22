import { EntityId } from "@reduxjs/toolkit";

export interface IFormValues {
  name: string;
  phone: string;
  place?: EntityId;
}
