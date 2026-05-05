import { ProductId } from "@/entities/product/model/product.types";

export type SchemaId = string;

export type Schema = {
    id: SchemaId,
    title: string,
    productIds: ProductId[]
};