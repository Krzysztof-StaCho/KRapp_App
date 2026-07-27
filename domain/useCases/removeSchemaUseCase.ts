import { StoreId } from "@/entities/base/storeModel";
import {
  Action,
  InventoryState,
} from "@/entities/inventory/model/inventory.reducer";
import { StoreType } from "@/services/storage/storageStore";
import React from "react";
import { deleteSchemaSM } from "../schema/schema.factory";

export class RemoveSchemaUseCase {
  constructor(
    private readonly repositories: StoreType,
    private readonly dispatch: React.Dispatch<Action>,
    private readonly getState: () => InventoryState,
  ) {}

  async execute(id: StoreId) {
    // Get object from state
    let schemaSM = this.getState().schemas[id];
    if (schemaSM === undefined) {
      throw new Error("Cannot find schema object in state");
    }

    // Flag object with "deleted" status
    schemaSM = deleteSchemaSM(schemaSM);

    // Save to memory
    if (schemaSM.storageType === "local") {
      await this.repositories.local.schemas.delete(id);
    } else {
      await this.repositories.local.schemas.update(schemaSM);
    }

    // Update local state
    this.dispatch({ type: "REMOVE_SCHEMA", payload: id });

    return id;
  }
}
