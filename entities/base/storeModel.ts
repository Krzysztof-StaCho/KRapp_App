/**
 * Base model for all entities in the store. Contains common properties like `id` and `updatedAt`.
 */
export type StoreId = string;
export type SyncStatusType = "synced" | "created" | "updated" | "deleted";

export type StoreModel = {
  id: StoreId;
  updatedAt: Date;
  syncStatus: SyncStatusType;
};

export type StoreRow = {
  id: string;
  updatedAt: string; // ISO string
  syncStatus: SyncStatusType;
};
