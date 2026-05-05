export type ProductId = string;

export enum Unit {
    SET = "paczka",
    PIECE = "sztuka"
};

export type Product = {
    id: ProductId,
    name: string,
    unit: Unit
};