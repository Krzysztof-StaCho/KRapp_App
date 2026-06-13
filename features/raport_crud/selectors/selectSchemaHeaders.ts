import { SchemaSM } from "@/entities/schema/model/schema.types";
import { SchemaHeader } from "../types";

export function SelectSchemaHeaders(
  schemas: Record<string, SchemaSM>,
): SchemaHeader[] {
  return Object.values(schemas).map((schema) => ({
    id: schema.id,
    title: schema.title,
  }));
}
