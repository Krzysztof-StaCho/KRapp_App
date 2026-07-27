import { StoreId } from "@/entities/base/storeModel";
import {
    Action,
    InventoryState,
} from "@/entities/inventory/model/inventory.reducer";
import { StoreType } from "@/services/storage/storageStore";
import React from "react";
import { deleteProductSM } from "../product/product.factory";

export class RemoveProductUseCase {
  constructor(
    private readonly repositories: StoreType,
    private readonly dispatch: React.Dispatch<Action>,
    private readonly getState: () => InventoryState,
  ) {}

  async execute(id: StoreId) {
    // Get object from state
    let productSM = this.getState().products[id];
    if (productSM === undefined)
      throw new Error("Cannot find product with given id");

    // Flag object with deleted status
    productSM = deleteProductSM(productSM);

    // Check storageType
    if (productSM.schemaId === undefined)
      throw new Error("Inernal error. Empty schemaId field");
    const storageType =
      this.getState().schemas[productSM.schemaId]?.storageType;

    if (storageType === undefined || storageType === "local") {
      await this.repositories.local.products.delete(id);
    } else {
      await this.repositories.local.products.update(productSM);
    }

    // Update local state
    this.dispatch({ type: "REMOVE_PRODUCT", payload: id });

    return id;
  }
}
