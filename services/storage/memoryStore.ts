import { InventoryState } from "@/entities/inventory/model/inventory.reducer";
import { InventoryRepository } from "./storeRepository";

export class MemoryStore implements InventoryRepository {
  private data: InventoryState;

  constructor(initialData: InventoryState) {
    this.data = initialData;
  }

  async load(): Promise<InventoryState> {
    return this.data;
  }

  async save(data: InventoryState): Promise<void> {
    this.data = data;
  }
}
