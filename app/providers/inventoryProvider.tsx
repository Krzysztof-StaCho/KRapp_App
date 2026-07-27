import { AddProductUseCase } from "@/domain/useCases/addProductUseCase";
import { AddSchemaUseCase } from "@/domain/useCases/addSchemaUseCase";
import { AddSnapshotUseCase } from "@/domain/useCases/addSnapshotUseCase";
import { EditProductUseCase } from "@/domain/useCases/editProductUseCase";
import { EditSchemaUseCase } from "@/domain/useCases/editSchemaUseCase";
import { RemoveProductUseCase } from "@/domain/useCases/removeProductUseCase";
import { RemoveSchemaUseCase } from "@/domain/useCases/removeSchemaUseCase";
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

  const addSchemaUseCase = new AddSchemaUseCase(
    repositories,
    dispatch,
    () => state,
  );
  const editSchemaUseCase = new EditSchemaUseCase(
    repositories,
    dispatch,
    () => state,
  );
  const removeSchemaUseCase = new RemoveSchemaUseCase(
    repositories,
    dispatch,
    () => state,
  );

  const addProductUseCase = new AddProductUseCase(
    repositories,
    dispatch,
    () => state,
  );
  const removeProductUseCase = new RemoveProductUseCase(
    repositories,
    dispatch,
    () => state,
  );
  const editProductUseCase = new EditProductUseCase(
    repositories,
    dispatch,
    () => state,
  );

  const addSnapshotUseCase = new AddSnapshotUseCase(
    repositories,
    dispatch,
    () => state,
  );

  useEffect(() => {
    const loadInventory = async () => {
      try {
        const schemas = await repositories.local.schemas.getAll();
        const products = await repositories.local.products.getAll();
        const snapshots = await repositories.local.snapshots.getAll();

        dispatch({
          type: "SET_SCHEMAS",
          payload: schemas,
        });
        dispatch({
          type: "SET_PRODUCTS",
          payload: products,
        });
        dispatch({
          type: "SET_SNAPSHOTS",
          payload: snapshots,
        });
      } catch (error) {
        console.error(error);
      }
    };

    loadInventory();
  }, [repositories]);

  //Action wrappers
  const updateSchema = async (id: StoreId, schema: Schema) => {
    try {
      await editSchemaUseCase.execute(id, schema);
    } catch (error) {
      if (error instanceof DatabaseError) {
        Alert.alert("Database error", error.message);
      } else throw error;
    }
  };
  const addSchema = async (schema: Schema) => {
    try {
      await addSchemaUseCase.execute(schema);
    } catch (error) {
      if (error instanceof DatabaseError) {
        Alert.alert("Database error", error.message);
      } else throw error;
    }
  };
  const removeSchema = async (id: StoreId) => {
    try {
      await removeSchemaUseCase.execute(id);
    } catch (error) {
      if (error instanceof DatabaseError) {
        Alert.alert("Database error", error.message);
      } else throw error;
    }
  };

  const addProduct = async (schemaId: StoreId, product: Product) => {
    try {
      await addProductUseCase.execute(product, schemaId);
    } catch (error) {
      if (error instanceof DatabaseError) {
        Alert.alert("Database error", error.message);
      } else throw error;
    }
  };

  const removeProduct = async (id: StoreId) => {
    try {
      await removeProductUseCase.execute(id);
    } catch (error) {
      if (error instanceof DatabaseError) {
        Alert.alert("Database error", error.message);
      } else throw error;
    }
  };

  const updateProduct = async (id: StoreId, product: Product) => {
    try {
      await editProductUseCase.execute(id, product);
    } catch (error) {
      if (error instanceof DatabaseError) {
        Alert.alert("Database error", error.message);
      } else throw error;
    }
  };

  const addSnapshot = async (snapshot: Snapshot) => {
    try {
      await addSnapshotUseCase.execute(snapshot);
    } catch (error) {
      if (error instanceof DatabaseError) {
        Alert.alert("Database error", error.message);
      } else throw error;
    }
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
