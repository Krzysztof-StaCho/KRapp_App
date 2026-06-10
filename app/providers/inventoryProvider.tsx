import { StoreId } from "@/entities/base/storeModel";
import { InventoryInitial } from "@/entities/inventory/model/initialState";
import {
  InventoryReducer,
  InventoryState,
} from "@/entities/inventory/model/inventory.reducer";
import { Product, ProductSM } from "@/entities/product/model/product.types";
import { Schema, SchemaSM } from "@/entities/schema/model/schema.types";
import { Snapshot, SnapshotSM } from "@/entities/snapshot/model/snapshot.types";
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
  };
  const addSchema = (schema: Schema) => {
    dispatch({ type: "ADD_SCHEMA", payload: schema });
  };
  const removeSchema = (id: StoreId) => {
    dispatch({ type: "REMOVE_SCHEMA", payload: id });
  };

  const addProduct = (schemaId: StoreId, product: Product) => {
    dispatch({ type: "ADD_PRODUCT", payload: { schemaId, product } });
  };
  const removeProduct = (id: StoreId) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: id });
  };
  const updateProduct = (id: StoreId, product: Product) => {
    dispatch({ type: "UPDATE_PRODUCT", payload: { id, product } });
  };

  const addSnapshot = (snapshot: Snapshot) => {
    dispatch({ type: "ADD_SNAPSHOT", payload: snapshot });
  };

  const setSchemas = (schemas: SchemaSM[]) => {
    dispatch({ type: "SET_SCHEMAS", payload: schemas });
  };
  const setProducts = (products: ProductSM[]) => {
    dispatch({ type: "SET_PRODUCTS", payload: products });
  };
  const setSnapshots = (snapshots: SnapshotSM[]) => {
    dispatch({ type: "SET_SNAPSHOTS", payload: snapshots });
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
