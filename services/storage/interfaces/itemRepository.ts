import { StoreId } from "@/entities/base/storeModel";

export interface ItemRepository<T> {
  getAll(): Promise<T[]>;
  get(id: StoreId): Promise<T>;
  create(item: T): Promise<void>;
  update(item: T): Promise<void>;
  delete(id: StoreId): Promise<void>;
}
