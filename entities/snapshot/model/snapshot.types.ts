import { ProductId } from "@/entities/product/model/product.types";
import { SchemaId } from "@/entities/schema/model/schema.types";
import { v4 as uuid } from "uuid";

export type SnapshotId = string;
export const createSnapshotId = () => `snap_${uuid()}`;

export type Snapshot = {
    id: SnapshotId,
    schemaId: SchemaId,
    date: string, //ISO
    values: Record<ProductId, number>
};