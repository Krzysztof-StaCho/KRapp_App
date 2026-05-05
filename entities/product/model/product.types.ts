import { v4 as uuid } from "uuid";

export type ProductId = string;
export const createProductId = () => `prod_${uuid()}`;

export enum Unit {
    SET = "paczka",
    PIECE = "sztuka"
};

export type Product = {
    id: ProductId,
    name: string,
    unit: Unit
};