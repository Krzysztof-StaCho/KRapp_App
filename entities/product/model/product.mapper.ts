import { DatabaseError } from "@/entities/errors/database.error";
import { ProductRow, ProductSM, Unit } from "./product.types";

export function rowToProductSM(row: ProductRow): ProductSM {
  let unit;
  switch (row.unit) {
    case "SET":
      unit = Unit.SET;
      break;
    case "PIECE":
      unit = Unit.PIECE;
      break;
    default:
      unit = Unit.SET;
      break;
  }

  return {
    id: row.id,
    schemaId: row.schemaId,
    name: row.name,
    unit: unit,
    updatedAt: new Date(row.updatedAt),
  };
}

export function productSMToRow(product: ProductSM): ProductRow {
  if (product.schemaId === undefined)
    throw new DatabaseError("Cannot to translate. schemaId is empty.");

  let unit: "SET" | "PIECE";
  switch (product.unit) {
    case Unit.SET:
      unit = "SET";
      break;
    case Unit.PIECE:
      unit = "PIECE";
      break;
    default:
      unit = "SET";
      break;
  }

  return {
    id: product.id,
    schemaId: product.schemaId,
    name: product.name,
    unit: unit,
    updatedAt: product.updatedAt.toISOString(),
  };
}
