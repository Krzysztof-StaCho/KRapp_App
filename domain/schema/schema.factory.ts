import { StoreId } from "@/entities/base/storeModel";
import {
  createSchemaId,
  Schema,
  SchemaSM,
} from "@/entities/schema/model/schema.types";

export function createSchemaSM(input: Schema): SchemaSM {
  return {
    id: createSchemaId(),
    title: input.title,
    storageType: input.storageType,
    updatedAt: new Date(),
  };
}

export function updateSchemaSM(input: Schema, id: StoreId): SchemaSM {
  return {
    id: id,
    title: input.title,
    storageType: input.storageType,
    updatedAt: new Date(),
  };
}
