import { StoreId } from "@/entities/base/storeModel";
import {
    createProductId,
    Product,
    ProductSM,
} from "@/entities/product/model/product.types";

export function createProductSM(input: Product, schemaId: StoreId): ProductSM {
  return {
    id: createProductId(),
    schemaId: schemaId,
    name: input.name,
    unit: input.unit,
    updatedAt: new Date(),
  };
}

export function updateProductSM(
  input: Product,
  id: StoreId,
  schemaId: StoreId,
): ProductSM {
  return {
    id: id,
    schemaId: schemaId,
    name: input.name,
    unit: input.unit,
    updatedAt: new Date(),
  };
}
