import { EntityId } from "@reduxjs/toolkit";

export interface IAddition {
  id: EntityId;
  title: string;
  price: number;
  isActive: boolean;
  weight: number;
  categoryId?: EntityId;
}
