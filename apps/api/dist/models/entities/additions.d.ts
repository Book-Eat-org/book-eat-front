import { EntityId } from "@reduxjs/toolkit";
export interface IAddition {
    id: EntityId;
    title: string;
    price: number;
    isActive: boolean;
    weight: number;
    measure?: string;
    categoryId?: EntityId;
}
