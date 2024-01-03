import { EntityId } from "@reduxjs/toolkit";

export interface IMenu {
  enabled: boolean;
  title: string;
  guid: EntityId;
  previewImage?: string;
  price?: number;
  quantity?: number;
  measure: string | number;
  description: string;
  ingredients?: string;
  group_id: EntityId[];
  inStock: number[];
  isEdit?: boolean;
  isNew?: boolean;
  discount?: number;
  additionIds?: string[];
  placeId?: EntityId;
}
