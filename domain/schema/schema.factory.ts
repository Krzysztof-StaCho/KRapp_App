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
    syncStatus: input.storageType === "cloud" ? "created" : "synced",
  };
}

export function updateSchemaSM(input: Schema, oldState: SchemaSM): SchemaSM {
  return {
    id: oldState.id,
    title: input.title,
    storageType: input.storageType,
    updatedAt: new Date(),
    syncStatus: input.storageType === "cloud" ? "updated" : "synced",
  };
}

export function deleteSchemaSM(input: SchemaSM): SchemaSM {
  return {
    ...input,
    updatedAt: new Date(),
    syncStatus: input.storageType === "cloud" ? "deleted" : "synced",
  };
}
