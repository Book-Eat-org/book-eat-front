import { EntityId } from "@reduxjs/toolkit";
import { IAddition } from "./additions.ts";

export interface IMenu {
  id: EntityId;
  slug: string;
  sku: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  quantity: number;
  isRecommend: boolean;
  mainImageUrl: string;
  imagesUrls: string[];
  additions: IAddition[];
  weight: number;
  ingredients: string;
  isActiveOnOrganization: boolean;
  isActiveOnPlace: boolean;
}
