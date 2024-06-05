import { EntityId } from "@reduxjs/toolkit";
import { IAddition, ICategory, IPlace } from '..';
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
    imagesUrls: string[];
    additions: IAddition[];
    placesIds: IPlace[];
    categoriesIds: ICategory[];
    weight: number;
    ingredients: string;
    isActiveOnOrganization: boolean;
    isActiveOnPlace: boolean;
}
