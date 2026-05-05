import { Product } from "@/entities/product/model/product.types";
import { Schema } from "@/entities/schema/model/schema.types";
import { Snapshot } from "@/entities/snapshot/model/snapshot.types";

export type InventoryState = {
    products: Record<string, Product>,
    schemas: Record<string, Schema>,
    snapshot: Record<string, Snapshot>
};

//Action TYPES
type Action = 
    { type: "SET_PRODUCTS", payload: Product[] }
    |   { type: "ADD_PRODUCT", payload: Product }
    |   { type: "SET_SCHEMAS", payload: Schema[] }
    |   { type: "ADD_SCHEMA", payload: Schema }
    |   { type: "ADD_SNAPSHOT", payload: Snapshot };

//Reducer
export function InventoryReducer(
    state: InventoryState,
    action: Action
): InventoryState {
    switch(action.type) {
        case "SET_PRODUCTS": {
            const map = Object.fromEntries(
                action.payload.map(p => [p.id, p])
            );

            return { ...state, products: map };
        }

        case "ADD_PRODUCT": {
            return {
                ...state,
                products: {
                    ...state.products,
                    [action.payload.id]: action.payload
                }
            };
        }

        case "SET_SCHEMAS": {
            const map = Object.fromEntries(
                action.payload.map(s => [s.id, s])
            );

            return { ...state, schemas: map };
        }

        case "ADD_SCHEMA": {
            return {
                ...state,
                schemas: {
                    ...state.schemas,
                    [action.payload.id]: action.payload
                }
            };
        }

        case "ADD_SNAPSHOT": {
            return {
                ...state,
                snapshot: {
                    ...state.snapshot,
                    [action.payload.id]: action.payload
                }
            };
        }

        default:
            return state;
    }
};