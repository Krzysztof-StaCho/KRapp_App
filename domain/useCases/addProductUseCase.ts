import { StoreId } from "@/entities/base/storeModel";
import {
    Action,
    InventoryState,
} from "@/entities/inventory/model/inventory.reducer";
import { Product } from "@/entities/product/model/product.types";
import { StoreType } from "@/services/storage/storageStore";
import React from "react";
import { createProductSM } from "../product/product.factory";

export class AddProductUseCase {
  constructor(
    private readonly repositories: StoreType,
    private readonly dispatch: React.Dispatch<Action>,
    private readonly getState: () => InventoryState,
  ) {}

  async execute(product: Product, schemaId: StoreId) {
    // Get schema
    const schemaSM = this.getState().schemas[schemaId];
    if (schemaSM === undefined)
      throw new Error("There is no schema with given id");

    // Create ProductSM
    const productSM = createProductSM(product, schemaId);
    productSM.syncStatus =
      schemaSM.storageType === "cloud" ? "created" : "synced";

    // Save to memory
    await this.repositories.local.products.create(productSM);

    // Update local state
    this.dispatch({ type: "ADD_PRODUCT", payload: productSM });

    return productSM;
  }
}
