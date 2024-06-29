import { EntityId } from "@reduxjs/toolkit";

export interface IFormValues {
  name: string;
  phone: string;
  password: string;
  confirmPassword: string;
  place?: EntityId;
  email: string;
  birthDate: string;
  username: string;
}
