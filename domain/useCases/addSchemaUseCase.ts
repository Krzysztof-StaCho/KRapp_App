import {
  Action,
  InventoryState,
} from "@/entities/inventory/model/inventory.reducer";
import { Schema } from "@/entities/schema/model/schema.types";
import { StoreType } from "@/services/storage/storageStore";
import React from "react";
import { createSchemaSM } from "../schema/schema.factory";

export class AddSchemaUseCase {
  constructor(
    private readonly repositories: StoreType,
    private readonly dispatch: React.Dispatch<Action>,
    private readonly getState: () => InventoryState,
  ) {}

  async execute(schema: Schema) {
    // Create SchemaSM
    const schemaSM = createSchemaSM(schema);

    // Save to memory
    await this.repositories.local.schemas.create(schemaSM);

    // Update local state
    this.dispatch({ type: "ADD_SCHEMA", payload: schemaSM });

    return schemaSM;
  }
}
