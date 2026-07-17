import { ProductSM } from "@/entities/product/model/product.types";
import { SchemaSM } from "@/entities/schema/model/schema.types";
import { SnapshotSM } from "@/entities/snapshot/model/snapshot.types";
import { initializeInventoryDB } from "./database";
import { DatabaseContext } from "./databaseContext";
import { ItemRepository } from "./interfaces/itemRepository";
import { InventoryRepository } from "./interfaces/storeRepository";
import { ProductSqlStore } from "./inventory/productSqlStore";
import { SchemaSqlStore } from "./inventory/schemaSqlStore";
import { SnapshotSqlStore } from "./inventory/snapshotSqlStore";

export type StoreType = {
  local: {
    schemas: ItemRepository<SchemaSM>;
    products: ItemRepository<ProductSM>;
    snapshots: ItemRepository<SnapshotSM>;
  };
  cloud: InventoryRepository | undefined;
};

export async function initializeStorageStore(): Promise<StoreType> {
  const sqlDb = await initializeInventoryDB();
  const database = new DatabaseContext(sqlDb);

  return {
    local: {
      schemas: new SchemaSqlStore(database),
      products: new ProductSqlStore(database),
      snapshots: new SnapshotSqlStore(database),
    },
    cloud: undefined,
  };
}
