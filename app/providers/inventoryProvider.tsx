import {
  createProductSM,
  updateProductSM,
} from "@/domain/product/product.factory";
import { createSchemaSM, updateSchemaSM } from "@/domain/schema/schema.factory";
import { StoreId } from "@/entities/base/storeModel";
import { DatabaseError } from "@/entities/errors/database.error";
import { InventoryInitial } from "@/entities/inventory/model/initialState";
import {
  InventoryReducer,
  InventoryState,
} from "@/entities/inventory/model/inventory.reducer";
import { Product } from "@/entities/product/model/product.types";
import { Schema } from "@/entities/schema/model/schema.types";
import { Snapshot } from "@/entities/snapshot/model/snapshot.types";
import { StoreType } from "@/services/storage/storageStore";
import { createContext, ReactNode, useEffect, useReducer } from "react";
import { Alert } from "react-native";

type InventoryContextType = {
  state: InventoryState;

  addSchema: (schema: Schema) => Promise<void>;
  updateSchema: (id: StoreId, schema: Schema) => Promise<void>;
  removeSchema: (id: StoreId) => Promise<void>;

  addProduct: (schemaId: StoreId, product: Product) => void;
  removeProduct: (id: StoreId) => void;
  updateProduct: (id: StoreId, product: Product) => void;

  addSnapshot: (snapshot: Snapshot) => void;
};

export const InventoryContext = createContext<InventoryContextType | null>(
  null,
);

export const InventoryProvider = ({
  children,
  repositories,
}: {
  children: ReactNode;
  repositories: StoreType;
}) => {
  const [state, dispatch] = useReducer(InventoryReducer, InventoryInitial);

  useEffect(() => {
    const loadInventory = async () => {
      try {
        const schemas = await repositories.local.schemas.getAll();
        const products = await repositories.local.products.getAll();

        dispatch({
          type: "SET_SCHEMAS",
          payload: schemas,
        });
        dispatch({
          type: "SET_PRODUCTS",
          payload: products,
        });
      } catch (error) {
        console.error(error);
      }
    };

    loadInventory();
  }, [repositories]);

  //Action wrappers
  const updateSchema = async (id: StoreId, schema: Schema) => {
    const schemaSM = updateSchemaSM(schema, id);

    try {
      await repositories.local.schemas.update(schemaSM);

      dispatch({ type: "UPDATE_SCHEMA", payload: schemaSM });
    } catch (error) {
      if (error instanceof DatabaseError) {
        Alert.alert("Database error", error.message);
      } else throw error;
    }
  };
  const addSchema = async (schema: Schema) => {
    const schemaSM = createSchemaSM(schema);

    try {
      await repositories.local.schemas.create(schemaSM);

      dispatch({ type: "ADD_SCHEMA", payload: schemaSM });
    } catch (error) {
      if (error instanceof DatabaseError) {
        Alert.alert("Database error", error.message);
      } else throw error;
    }
  };
  const removeSchema = async (id: StoreId) => {
    try {
      await repositories.local.schemas.delete(id);

      dispatch({ type: "REMOVE_SCHEMA", payload: id });
    } catch (error) {
      if (error instanceof DatabaseError) {
        Alert.alert("Database error", error.message);
      } else throw error;
    }
  };

  const addProduct = async (schemaId: StoreId, product: Product) => {
    const productSM = createProductSM(product, schemaId);

    try {
      await repositories.local.products.create(productSM);

      dispatch({ type: "ADD_PRODUCT", payload: productSM });
    } catch (error) {
      if (error instanceof DatabaseError) {
        Alert.alert("Database error", error.message);
      } else throw error;
    }
  };

  const removeProduct = async (id: StoreId) => {
    try {
      await repositories.local.products.delete(id);

      dispatch({ type: "REMOVE_PRODUCT", payload: id });
    } catch (error) {
      if (error instanceof DatabaseError) {
        Alert.alert("Database error", error.message);
      } else throw error;
    }
  };

  const updateProduct = async (id: StoreId, product: Product) => {
    if (product.schemaId === undefined)
      throw new Error("Updating undefined product");
    const productSM = updateProductSM(product, id, product.schemaId);

    try {
      await repositories.local.products.update(productSM);

      dispatch({ type: "UPDATE_PRODUCT", payload: productSM });
    } catch (error) {
      if (error instanceof DatabaseError) {
        Alert.alert("Database error", error.message);
      } else throw error;
    }
  };

  const addSnapshot = (snapshot: Snapshot) => {
    dispatch({ type: "ADD_SNAPSHOT", payload: snapshot });
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
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
