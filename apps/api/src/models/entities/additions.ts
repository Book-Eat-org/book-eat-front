import { EntityId } from "@reduxjs/toolkit";

export interface IAddition {
  enabled: boolean;
  title: string;
  price: number;
  id: EntityId;
}
