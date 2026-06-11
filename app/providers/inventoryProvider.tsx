import { StoreId } from "@/entities/base/storeModel";
import { InventoryInitial } from "@/entities/inventory/model/initialState";
import {
  InventoryReducer,
  InventoryState,
} from "@/entities/inventory/model/inventory.reducer";
import { Product, ProductSM } from "@/entities/product/model/product.types";
import { Schema, SchemaSM } from "@/entities/schema/model/schema.types";
import { Snapshot, SnapshotSM } from "@/entities/snapshot/model/snapshot.types";
import { StorageStore } from "@/services/storage/storageStore";
import { createContext, ReactNode, useReducer } from "react";

type InventoryContextType = {
  state: InventoryState;

  addSchema: (schema: Schema) => void;
  updateSchema: (id: StoreId, schema: Schema) => void;
  removeSchema: (id: StoreId) => void;

  addProduct: (schemaId: StoreId, product: Product) => void;
  removeProduct: (id: StoreId) => void;
  updateProduct: (id: StoreId, product: Product) => void;

  addSnapshot: (snapshot: Snapshot) => void;

  setSchemas: (schemas: SchemaSM[]) => void;
  setProducts: (products: ProductSM[]) => void;
  setSnapshots: (snapshots: SnapshotSM[]) => void;
};

export const InventoryContext = createContext<InventoryContextType | null>(
  null,
);

export const InventoryProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(InventoryReducer, InventoryInitial);

  //Action wrappers
  const updateSchema = (id: StoreId, schema: Schema) => {
    dispatch({ type: "UPDATE_SCHEMA", payload: { id, schema } });

    StorageStore.local.save(state);
  };
  const addSchema = (schema: Schema) => {
    dispatch({ type: "ADD_SCHEMA", payload: schema });

    StorageStore.local.save(state);
  };
  const removeSchema = (id: StoreId) => {
    dispatch({ type: "REMOVE_SCHEMA", payload: id });

    StorageStore.local.save(state);
  };

  const addProduct = (schemaId: StoreId, product: Product) => {
    dispatch({ type: "ADD_PRODUCT", payload: { schemaId, product } });

    StorageStore.local.save(state);
  };
  const removeProduct = (id: StoreId) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: id });

    StorageStore.local.save(state);
  };
  const updateProduct = (id: StoreId, product: Product) => {
    dispatch({ type: "UPDATE_PRODUCT", payload: { id, product } });

    StorageStore.local.save(state);
  };

  const addSnapshot = (snapshot: Snapshot) => {
    dispatch({ type: "ADD_SNAPSHOT", payload: snapshot });

    StorageStore.local.save(state);
  };

  const setSchemas = (schemas: SchemaSM[]) => {
    dispatch({ type: "SET_SCHEMAS", payload: schemas });

    StorageStore.local.save(state);
  };
  const setProducts = (products: ProductSM[]) => {
    dispatch({ type: "SET_PRODUCTS", payload: products });

    StorageStore.local.save(state);
  };
  const setSnapshots = (snapshots: SnapshotSM[]) => {
    dispatch({ type: "SET_SNAPSHOTS", payload: snapshots });

    StorageStore.local.save(state);
  };

  return (
    <InventoryContext.Provider
      value={{
        state,
        updateSchema,
        addSchema,
        removeSchema,
        addProduct,
        removeProduct,
        updateProduct,
        addSnapshot,
        setSchemas,
        setProducts,
        setSnapshots,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
