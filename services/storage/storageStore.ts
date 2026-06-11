import { InventoryInitial } from "@/entities/inventory/model/initialState";
import { MemoryStore } from "./memoryStore";
import { InventoryRepository } from "./storeRepository";

type StoreType = {
  local: InventoryRepository;
  cloud: InventoryRepository | undefined;
};

export const StorageStore: StoreType = {
  local: new MemoryStore(InventoryInitial),
  cloud: undefined,
};
