import { SchemaRow, SchemaSM } from "./schema.types";

export function rowToSchemaSM(row: SchemaRow): SchemaSM {
  return {
    id: row.id,
    title: row.title,
    storageType: row.storageType,
    updatedAt: new Date(row.updatedAt),
    syncStatus: "synced",
  };
}

export function schemaSMToRow(schema: SchemaSM): SchemaRow {
  return {
    id: schema.id,
    title: schema.title,
    storageType: schema.storageType,
    updatedAt: schema.updatedAt.toISOString(),
    syncStatus: "synced",
  };
}
