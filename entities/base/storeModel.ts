/**
 * Base model for all entities in the store. Contains common properties like `id` and `updatedAt`.
 */
export type StoreId = string;

export type StoreModel = {
  id: StoreId;
  updatedAt: Date;
};

export type StoreRow = {
  id: string;
  updatedAt: string; // ISO string
};
