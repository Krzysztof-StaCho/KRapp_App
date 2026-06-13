import { SchemaRow, SchemaSM } from "./schema.types";

export function rowToSchemaSM(row: SchemaRow): SchemaSM {
  return {
    id: row.id,
    title: row.title,
    storageType: row.storageType,
    updatedAt: new Date(row.updatedAt),
  };
}

export function schemaSMToRow(schema: SchemaSM): SchemaRow {
  return {
    id: schema.id,
    title: schema.title,
    storageType: schema.storageType,
    updatedAt: schema.updatedAt.toISOString(),
  };
}
