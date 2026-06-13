import { InventoryState } from "@/entities/inventory/model/inventory.reducer";

export interface InventoryRepository {
  load(): Promise<InventoryState>;
  save(data: InventoryState): Promise<void>;
}
