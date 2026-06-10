import { StoreId, StoreModel } from "@/entities/base/storeModel";
import { v4 as uuid } from "uuid";

export const createSnapshotId = () => `snap_${uuid()}`;

export type Snapshot = {
  id: StoreId;
  schemaId: StoreId;
  date: Date;
  values: Record<StoreId, number>;
};

export type SnapshotSM = Snapshot & StoreModel;
