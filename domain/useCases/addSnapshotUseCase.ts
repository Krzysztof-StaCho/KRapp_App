import {
    Action,
    InventoryState,
} from "@/entities/inventory/model/inventory.reducer";
import { createSnapshotSM } from "@/entities/snapshot/model/snapshot.mapper";
import { Snapshot } from "@/entities/snapshot/model/snapshot.types";
import { StoreType } from "@/services/storage/storageStore";
import React from "react";

export class AddSnapshotUseCase {
  constructor(
    private readonly repositories: StoreType,
    private readonly dispatch: React.Dispatch<Action>,
    private readonly getState: () => InventoryState,
  ) {}

  async execute(snapshot: Snapshot) {
    // Get schema
    const schemaSM = this.getState().schemas[snapshot.schemaId];
    if (schemaSM === undefined)
      throw new Error("There is no schema with given id");

    // Create snapshotSM
    const snapshotSM = createSnapshotSM(snapshot);
    snapshotSM.syncStatus =
      schemaSM.storageType === "cloud" ? "created" : "synced";

    // Save to memory
    await this.repositories.local.snapshots.create(snapshotSM);

    // Update local state
    this.dispatch({ type: "ADD_SNAPSHOT", payload: snapshotSM });

    return snapshotSM;
  }
}
