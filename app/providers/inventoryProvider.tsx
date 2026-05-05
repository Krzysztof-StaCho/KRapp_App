import { InventoryInitial } from "@/entities/inventory/model/initialState";
import { InventoryReducer, InventoryState } from "@/entities/inventory/model/inventory.reducer";
import { Product } from "@/entities/product/model/product.types";
import { Schema } from "@/entities/schema/model/schema.types";
import { Snapshot } from "@/entities/snapshot/model/snapshot.types";
import { createContext, ReactNode, useReducer } from "react";

type InventoryContextType = {
    state: InventoryState,

    setProducts: (products: Product[]) => void,
    addProduct: (product: Product) => void,

    setSchemas: (schemas: Schema[]) => void,
    addSchema: (schema: Schema) => void,

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
    const setSchemas = (schemas: Schema[]) => {
        dispatch({ type: "SET_SCHEMAS", payload: schemas });
    };
    const addSchema = (schema: Schema) => {
        dispatch({ type: "ADD_SCHEMA", payload: schema });
    };
    const addSnapshot = (snapshot: Snapshot) => {
        dispatch({ type: "ADD_SNAPSHOT", payload: snapshot });
    };

    return (
        <InventoryContext.Provider value={{
            state,
            setProducts,
            addProduct,
            setSchemas,
            addSchema,
            addSnapshot
        }}>
            {children}
        </InventoryContext.Provider>
    );
};