import { StoreId } from "@/entities/base/storeModel";
import { ProductSM } from "@/entities/product/model/product.types";
import { SchemaSM } from "@/entities/schema/model/schema.types";
import { Snapshot, SnapshotSM } from "@/entities/snapshot/model/snapshot.types";

export type InventoryState = {
  products: Record<string, ProductSM>;
  schemas: Record<string, SchemaSM>;
  snapshot: Record<string, SnapshotSM>;
};

//Action TYPES
export type Action =
  | { type: "ADD_SCHEMA"; payload: SchemaSM }
  | { type: "UPDATE_SCHEMA"; payload: SchemaSM }
  | { type: "REMOVE_SCHEMA"; payload: StoreId }
  | { type: "ADD_PRODUCT"; payload: ProductSM }
  | { type: "UPDATE_PRODUCT"; payload: ProductSM }
  | { type: "REMOVE_PRODUCT"; payload: StoreId }
  | { type: "ADD_SNAPSHOT"; payload: SnapshotSM }
  | { type: "SET_PRODUCTS"; payload: ProductSM[] }
  | { type: "SET_SCHEMAS"; payload: SchemaSM[] }
  | { type: "SET_SNAPSHOTS"; payload: SnapshotSM[] };

//Reducer
export function InventoryReducer(
  state: InventoryState,
  action: Action,
): InventoryState {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const product = action.payload;

      return {
        ...state,
        products: {
          ...state.products,
          [product.id]: {
            ...product,
          },
        },
      };
    }

    case "REMOVE_PRODUCT": {
      const id = action.payload;

      //Find if product is used in any snapshot
      let isUsed = false;
      Object.entries(state.snapshot).find(
        ([_, snapshot]) => snapshot.values[id] !== undefined && (isUsed = true),
      );

      if (isUsed) {
        return {
          ...state,
          products: {
            ...state.products,
            [id]: {
              ...state.products[id],
              schemaId: undefined,
              updatedAt: new Date(),
            },
          },
        };
      }

      //Remove from products
      const { [id]: _, ...restProducts } = state.products;

      return {
        ...state,
        products: restProducts,
      };
    }

    case "UPDATE_PRODUCT": {
      const product = action.payload;

      const currentProduct = state.products[product.id];
      if (!currentProduct) return state;

      return {
        ...state,
        products: {
          ...state.products,
          [product.id]: {
            ...product,
          },
        },
      };
    }

    case "ADD_SCHEMA": {
      return {
        ...state,
        schemas: {
          ...state.schemas,
          [action.payload.id]: {
            ...action.payload,
          },
        },
      };
    }

    case "REMOVE_SCHEMA": {
      const id = action.payload;

      //Remove schema
      const { [id]: _, ...restSchemas } = state.schemas;

      //Remove related snapshots
      let snapshotsToRemove: Record<string, Snapshot> = {};
      const filteredSnapshots = Object.fromEntries(
        Object.entries(state.snapshot).filter(([_, snapshot]) => {
          if (snapshot.schemaId === id) {
            snapshotsToRemove[snapshot.id] = snapshot;
            return false;
          }
          return true;
        }),
      );

      //Remove related products in the schema
      const filteredProducts = Object.fromEntries(
        Object.entries(state.products).filter(([_, products]) => {
          if (products.schemaId === id) return false;

          //Find if any product that doesnt belong to the schemas
          //is used in any snapshot that belongs to the schema
          //if so, remove product from products
          if (products.schemaId === undefined) {
            let isUsed = false;
            Object.entries(snapshotsToRemove).find(
              ([_, snapshot]) =>
                snapshot.values[products.id] !== undefined && (isUsed = true),
            );
            if (isUsed) return false;
          }
          return true;
        }),
      );

      return {
        products: filteredProducts,
        schemas: restSchemas,
        snapshot: filteredSnapshots,
      };
    }

    case "UPDATE_SCHEMA": {
      const schema = action.payload;

      const existingSchema = state.schemas[schema.id];
      if (!existingSchema) return state;

      return {
        ...state,
        schemas: {
          ...state.schemas,
          [schema.id]: {
            ...schema,
          },
        },
      };
    }

    case "ADD_SNAPSHOT": {
      return {
        ...state,
        snapshot: {
          ...state.snapshot,
          [action.payload.id]: {
            ...action.payload,
          },
        },
      };
    }

    case "SET_PRODUCTS": {
      return {
        ...state,
        products: Object.fromEntries(
          action.payload.map((product) => [product.id, product]),
        ),
      };
    }

    case "SET_SCHEMAS": {
      return {
        ...state,
        schemas: Object.fromEntries(
          action.payload.map((schema) => [schema.id, schema]),
        ),
      };
    }

    case "SET_SNAPSHOTS": {
      return {
        ...state,
        snapshot: Object.fromEntries(
          action.payload.map((snapshot) => [snapshot.id, snapshot]),
        ),
      };
    }

    default:
      return state;
  }
}
