import { StoreId } from "@/entities/base/storeModel";
import {
  Action,
  InventoryState,
} from "@/entities/inventory/model/inventory.reducer";
import { Schema } from "@/entities/schema/model/schema.types";
import { StoreType } from "@/services/storage/storageStore";
import React from "react";
import { updateSchemaSM } from "../schema/schema.factory";

export class EditSchemaUseCase {
  constructor(
    private readonly repositories: StoreType,
    private readonly dispatch: React.Dispatch<Action>,
    private readonly getState: () => InventoryState,
  ) {}

  async execute(id: StoreId, schema: Schema) {
    // Get old schema object
    const oldSchema = this.getState().schemas[id];
    if (oldSchema === undefined) {
      throw new Error("Cannot find schema in state");
    }

    // Create schemaSM
    const schemaSM = updateSchemaSM(schema, oldSchema);

    // Save to memory
    await this.repositories.local.schemas.update(schemaSM);

    // Update local state
    this.dispatch({ type: "UPDATE_SCHEMA", payload: schemaSM });

    return schemaSM;
  }
}
