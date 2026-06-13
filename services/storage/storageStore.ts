import { SchemaSM } from "@/entities/schema/model/schema.types";
import { initializeInventoryDB } from "./database";
import { DatabaseContext } from "./databaseContext";
import { ItemRepository } from "./interfaces/itemRepository";
import { InventoryRepository } from "./interfaces/storeRepository";
import { SchemaSqlStore } from "./inventory/schemaSqlStore";

export type StoreType = {
  local: {
    schemas: ItemRepository<SchemaSM>;
    products: undefined;
    snapshots: undefined;
  };
  cloud: InventoryRepository | undefined;
};

export async function initializeStorageStore(): Promise<StoreType> {
  const sqlDb = await initializeInventoryDB();
  const database = new DatabaseContext(sqlDb);

  return {
    local: {
      schemas: new SchemaSqlStore(database),
      products: undefined,
      snapshots: undefined,
    },
    cloud: undefined,
  };
}
