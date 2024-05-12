import { EntityId } from "@reduxjs/toolkit";
import { IAddition } from "$models";

export interface IProduct {
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
  addImagesUrls: string[];
  additions: IAddition[];
  recommend: string;
}
