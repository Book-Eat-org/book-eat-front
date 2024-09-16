import { EntityId } from "@reduxjs/toolkit";
export interface IProduct {
    id: EntityId;
    slug: string;
    sku: string;
    title: string;
    description: string;
    price: number;
    discount: number;
    amount: number;
    quantity: number;
    isRecommend: boolean;
    mainImageUrl: string;
    imagesUrls: string[];
    additionsIds: EntityId[];
    placesIds: EntityId[];
    categoriesIds: EntityId[];
    weight: number;
    ingredients: string;
    isActiveOnOrganization: boolean;
    isActiveOnPlace: boolean;
}
