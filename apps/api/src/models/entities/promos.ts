import { EntityId } from "@reduxjs/toolkit";

export interface IPromoCode {
  id: EntityId;
  promoCode: string;
  discount: number;
  isActive?: boolean;
}
