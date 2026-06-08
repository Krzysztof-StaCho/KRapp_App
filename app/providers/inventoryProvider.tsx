import { InventoryInitial } from "@/entities/inventory/model/initialState";
import { InventoryReducer, InventoryState } from "@/entities/inventory/model/inventory.reducer";
import { Product, ProductId } from "@/entities/product/model/product.types";
import { Schema, SchemaId } from "@/entities/schema/model/schema.types";
import { Snapshot } from "@/entities/snapshot/model/snapshot.types";
import { createContext, ReactNode, useReducer } from "react";

type InventoryContextType = {
    state: InventoryState,

    updateSchemaTitle: (id: SchemaId, title: string) => void,
    addSchema: (schema: Schema) => void,
    removeSchema: (id: SchemaId) => void,

    addProduct: (schemaId: SchemaId, product: Product) => void,
    removeProduct: (id: ProductId) => void,
    updateProduct: (id: ProductId, product: Product) => void,

    addSnapshot: (snapshot: Snapshot) => void,

    setSchemas: (schemas: Schema[]) => void,
    setProducts: (products: Product[]) => void,
    setSnapshots: (snapshots: Snapshot[]) => void
};

export const InventoryContext = createContext<InventoryContextType | null>(null);

export const InventoryProvider = ({children}: {children: ReactNode }) => {
    const [state, dispatch] = useReducer(InventoryReducer, InventoryInitial);

    //Action wrappers
    const updateSchemaTitle = (id: SchemaId, title: string) => {
        dispatch({ type: "UPDATE_SCHEMA_TITLE", payload: { id, title } });
    };
    const addSchema = (schema: Schema) => {
        dispatch({ type: "ADD_SCHEMA", payload: schema });
    };
    const removeSchema = (id: SchemaId) => {
        dispatch({ type: "REMOVE_SCHEMA", payload: id });
    };

    const addProduct = (schemaId: SchemaId, product: Product) => {
        dispatch({ type: "ADD_PRODUCT", payload: { schemaId, product } });
    };
    const removeProduct = (id: ProductId) => {
        dispatch({ type: "REMOVE_PRODUCT", payload: id });
    };
    const updateProduct = (id: ProductId, product: Product) => {
        dispatch({ type: "UPDATE_PRODUCT", payload: { id, product } });
    };

    const addSnapshot = (snapshot: Snapshot) => {
        dispatch({ type: "ADD_SNAPSHOT", payload: snapshot });
    };

    const setSchemas = (schemas: Schema[]) => {
        dispatch({ type: "SET_SCHEMAS", payload: schemas });
    };
    const setProducts = (products: Product[]) => {
        dispatch({ type: "SET_PRODUCTS", payload: products });
    };
    const setSnapshots = (snapshots: Snapshot[]) => {
        dispatch({ type: "SET_SNAPSHOTS", payload: snapshots });
    };

    return (
        <InventoryContext.Provider value={{
            state,
            updateSchemaTitle,
            addSchema,
            removeSchema,
            addProduct,
            removeProduct,
            updateProduct,
            addSnapshot,
            setSchemas,
            setProducts,
            setSnapshots
        }}>
            {children}
        </InventoryContext.Provider>
    );
};