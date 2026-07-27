import { StoreId } from "@/entities/base/storeModel";
import {
    Action,
    InventoryState,
} from "@/entities/inventory/model/inventory.reducer";
import { Product } from "@/entities/product/model/product.types";
import { StoreType } from "@/services/storage/storageStore";
import React from "react";
import { updateProductSM } from "../product/product.factory";

export class EditProductUseCase {
  constructor(
    private readonly repositories: StoreType,
    private readonly dispatch: React.Dispatch<Action>,
    private readonly getState: () => InventoryState,
  ) {}

  async execute(id: StoreId, product: Product) {
    // Get old product object
    const oldProduct = this.getState().products[id];
    if (oldProduct === undefined)
      throw new Error("Cannot find product with given id");

    // Create productSM
    if (oldProduct.schemaId === undefined)
      throw new Error("Internal error. schemaId field is empty.");
    const productSM = updateProductSM(product, id, oldProduct.schemaId);

    // Set syncStatus
    const schemaSM = this.getState().schemas[oldProduct.schemaId];
    if (schemaSM === undefined) throw new Error("Assigned schema is empty.");
    productSM.syncStatus =
      schemaSM.storageType === "cloud" ? "updated" : "synced";

    // Save to memory
    await this.repositories.local.products.update(productSM);

    // Update local state
    this.dispatch({ type: "UPDATE_PRODUCT", payload: productSM });

    return productSM;
  }
}
