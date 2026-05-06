import { InventoryInitial } from "@/entities/inventory/model/initialState";
import { InventoryReducer, InventoryState } from "@/entities/inventory/model/inventory.reducer";
import { Product, ProductId } from "@/entities/product/model/product.types";
import { Schema, SchemaId } from "@/entities/schema/model/schema.types";
import { Snapshot } from "@/entities/snapshot/model/snapshot.types";
import { createContext, ReactNode, useReducer } from "react";

type InventoryContextType = {
    state: InventoryState,

    setProducts: (products: Product[]) => void,
    addProduct: (product: Product) => void,
    removeProduct: (id: ProductId) => void,
    updateProduct: (id: ProductId, product: Product) => void,

    setSchemas: (schemas: Schema[]) => void,
    addSchema: (schema: Schema) => void,
    removeSchema: (id: SchemaId) => void,

    updateSchemaTitle: (id: SchemaId, title: string) => void,
    addProductToSchema: (schemaId: SchemaId, productId: ProductId) => void,
    removeProductFromSchema: (schemaId: SchemaId, productId: ProductId) => void,

    addSnapshot: (snapshot: Snapshot) => void
};

export const InventoryContext = createContext<InventoryContextType | null>(null);

export const InventoryProvider = ({children}: {children: ReactNode }) => {
    const [state, dispatch] = useReducer(InventoryReducer, InventoryInitial);

    //Action wrappers
    const setProducts = (products: Product[]) => {
        dispatch({ type: "SET_PRODUCTS", payload: products });
    };
    const addProduct = (product: Product) => {
        dispatch({ type: "ADD_PRODUCT", payload: product });
    };
    const removeProduct = (id: ProductId) => {
        dispatch({ type: "REMOVE_PRODUCT", payload: id });
    };
    const updateProduct = (id: ProductId, product: Product) => {
        dispatch({ type: "UPDATE_PRODUCT", payload: { id, product } });
    };
    const setSchemas = (schemas: Schema[]) => {
        dispatch({ type: "SET_SCHEMAS", payload: schemas });
    };
    const addSchema = (schema: Schema) => {
        dispatch({ type: "ADD_SCHEMA", payload: schema });
    };
    const removeSchema = (id: SchemaId) => {
        dispatch({ type: "REMOVE_SCHEMA", payload: id });
    };
    const updateSchemaTitle = (id: SchemaId, title: string) => {
        dispatch({ type: "UPDATE_SCHEMA_TITLE", payload: { id, title } });
    };
    const addProductToSchema = (schemaId: SchemaId, productId: ProductId) => {
        dispatch({ type: "ADD_PRODUCT_TO_SCHEMA", payload: { schemaId, productId } });
    };
    const removeProductFromSchema = (schemaId: SchemaId, productId: ProductId) => {
        dispatch({ type: "REMOVE_PRODUCT_FROM_SCHEMA", payload: { schemaId, productId } });
    };
    const addSnapshot = (snapshot: Snapshot) => {
        dispatch({ type: "ADD_SNAPSHOT", payload: snapshot });
    };

    return (
        <InventoryContext.Provider value={{
            state,
            setProducts,
            addProduct,
            removeProduct,
            updateProduct,
            setSchemas,
            removeSchema,
            updateSchemaTitle,
            addProductToSchema,
            removeProductFromSchema,
            addSchema,
            addSnapshot
        }}>
            {children}
        </InventoryContext.Provider>
    );
};