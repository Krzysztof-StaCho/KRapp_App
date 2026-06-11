import { StoreId } from "@/entities/base/storeModel";
import {
  createProductId,
  Product,
  ProductSM,
} from "@/entities/product/model/product.types";
import {
  createSchemaId,
  Schema,
  SchemaSM,
} from "@/entities/schema/model/schema.types";
import { Snapshot, SnapshotSM } from "@/entities/snapshot/model/snapshot.types";

export type InventoryState = {
  products: Record<string, ProductSM>;
  schemas: Record<string, SchemaSM>;
  snapshot: Record<string, SnapshotSM>;
};

//Action TYPES
type Action =
  | { type: "ADD_SCHEMA"; payload: Schema }
  | { type: "UPDATE_SCHEMA"; payload: { id: StoreId; schema: Schema } }
  | { type: "REMOVE_SCHEMA"; payload: StoreId }
  | { type: "ADD_PRODUCT"; payload: { schemaId: StoreId; product: Product } }
  | { type: "UPDATE_PRODUCT"; payload: { id: StoreId; product: Product } }
  | { type: "REMOVE_PRODUCT"; payload: StoreId }
  | { type: "ADD_SNAPSHOT"; payload: Snapshot }
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
      const { schemaId, product } = action.payload;
      const newProductId = createProductId();

      return {
        ...state,
        products: {
          ...state.products,
          [newProductId]: {
            ...product,
            schemaId: schemaId,
            id: newProductId,
            updatedAt: new Date(),
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
      const { id, product } = action.payload;

      const currentProduct = state.products[id];
      if (!currentProduct) return state;

      return {
        ...state,
        products: {
          ...state.products,
          [id]: {
            ...product,
            id,
            updatedAt: new Date(),
          },
        },
      };
    }

    case "ADD_SCHEMA": {
      const newSchemaId = createSchemaId();

      return {
        ...state,
        schemas: {
          ...state.schemas,
          [newSchemaId]: {
            ...action.payload,
            id: newSchemaId,
            updatedAt: new Date(),
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
      const { id, schema } = action.payload;

      const existingSchema = state.schemas[id];
      if (!existingSchema) return state;

      return {
        ...state,
        schemas: {
          ...state.schemas,
          [id]: {
            ...schema,
            id,
            updatedAt: new Date(),
          },
        },
      };
    }

    case "ADD_SNAPSHOT": {
      const newSnapshotId = createSchemaId();

      return {
        ...state,
        snapshot: {
          ...state.snapshot,
          [newSnapshotId]: {
            ...action.payload,
            id: newSnapshotId,
            updatedAt: new Date(),
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
