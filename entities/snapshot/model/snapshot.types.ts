import { ProductId } from "@/entities/product/model/product.types";
import { SchemaId } from "@/entities/schema/model/schema.types";

export type SnapshotId = string;

export type Snapshot = {
    id: SnapshotId,
    schemaId: SchemaId,
    date: string, //ISO
    values: Record<ProductId, number>
};