import { EntityId } from "@reduxjs/toolkit";

export interface ICashier {
  id: EntityId;
  login: string;
  email?: string;
  phone: string;
}
