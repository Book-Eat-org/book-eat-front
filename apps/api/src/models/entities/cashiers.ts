import { EntityId } from "@reduxjs/toolkit";

export interface ICashier {
  id: EntityId;
  birthDate: string;
  email: string;
  firstName: string;
  middleName: string;
  phone: string;
  secondName: string;
  username: string;
}
