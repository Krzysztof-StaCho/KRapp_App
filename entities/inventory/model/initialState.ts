import { InventoryState } from "./inventory.reducer";

export const InventoryInitial: InventoryState = {
  products: {},
  schemas: {},
  snapshot: {
    snap1: {
      id: "snap1",
      schemaId: "s3",
      date: new Date(),
      values: {
        p7: 10,
      },
      updatedAt: new Date(),
    },
  },
};
