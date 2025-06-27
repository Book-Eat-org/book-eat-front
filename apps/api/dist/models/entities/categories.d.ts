import { EntityId } from "@reduxjs/toolkit";
export interface ICategory {
    isActive: boolean;
    title: string;
    description: string;
    id: EntityId;
    priority: number;
    products: EntityId[];
}
