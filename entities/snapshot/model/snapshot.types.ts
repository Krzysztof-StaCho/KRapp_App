import { StoreId, StoreModel } from "@/entities/base/storeModel";
import { randomUUID } from "expo-crypto";

export const createSnapshotId = () => `snap_${randomUUID()}`;

export type Snapshot = {
  schemaId: StoreId;
  date: Date;
  values: Record<StoreId, number>;
};

export type SnapshotSM = Snapshot & StoreModel;
