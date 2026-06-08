import { SchemaId } from "@/entities/schema/model/schema.types";
import { v4 as uuid } from "uuid";

export type ProductId = string;
export const createProductId = () => `prod_${uuid()}`;

export enum Unit {
    SET = "paczka",
    PIECE = "sztuka"
};

export type Product = {
    id: ProductId,
    schemaId?: SchemaId,
    name: string,
    unit: Unit,
    updatedAt: Date
};