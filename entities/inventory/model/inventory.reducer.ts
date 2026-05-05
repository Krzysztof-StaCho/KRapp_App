import { Product, ProductId } from "@/entities/product/model/product.types";
import { Schema, SchemaId } from "@/entities/schema/model/schema.types";
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
    |   { type: "REMOVE_PRODUCT", payload: ProductId }
    |   { type: "SET_SCHEMAS", payload: Schema[] }
    |   { type: "ADD_SCHEMA", payload: Schema }
    |   { type: "REMOVE_SCHEMA", payload: SchemaId }
    |   { type: "UPDATE_SCHEMA_TITLE", payload: { id: SchemaId, title: string } }
    |   { type: "ADD_PRODUCT_TO_SCHEMA", payload: { schemaId: SchemaId, productId: ProductId } }
    |   { type: "REMOVE_PRODUCT_FROM_SCHEMA", payload: { schemaId: SchemaId, productId: ProductId } }
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

        case "REMOVE_PRODUCT": {
            const id = action.payload;

            //Remove from products
            const { [id]: _, ...restProducts } = state.products;

            //Remove from schemas
            const updatedSchemas = Object.fromEntries(
                Object.entries(state.schemas).map(([schemaId, schema]) => [
                    schemaId,
                    {
                        ...schema,
                        productIds: schema.productIds.filter(pid => pid !== id)
                    }
                ])
            );

            //Remove from snapshots
            const updatedSnapshots = Object.fromEntries(
                Object.entries(state.snapshot).map(([snapId, snapshot]) => {
                    const { [id]: _, ...restValues } = snapshot.values;

                    return [
                        snapId,
                        {
                            ...snapshot,
                            values: restValues
                        }
                    ];
                })
            );

            return {
                ...state,
                products: restProducts,
                schemas: updatedSchemas,
                snapshot: updatedSnapshots
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

        case "REMOVE_SCHEMA": {
            const id = action.payload;

            //Remove schema
            const { [id]: _, ...restSchemas } = state.schemas;

            //Remove related snapshots
            const filteredSnapshots = Object.fromEntries(
                Object.entries(state.snapshot).filter(
                    ([_, snapshot]) => snapshot.schemaId !== id
                )
            );

            return {
                ...state,
                schemas: restSchemas,
                snapshot: filteredSnapshots
            };
        }

        case "UPDATE_SCHEMA_TITLE": {
            const { id, title } = action.payload;

            const schema = state.schemas[id];
            if (!schema)
                return state;

            return {
                ...state,
                schemas: {
                    ...state.schemas,
                    [id]: {
                        ...schema,
                        title
                    }
                }
            };
        }

        case "ADD_PRODUCT_TO_SCHEMA": {
            const { schemaId, productId } = action.payload;
            
            const schema = state.schemas[schemaId];
            if (!schema)
                return state;

            //Avoid duplicates
            if (schema.productIds.includes(productId))
                return state;

            return {
                ...state,
                schemas: {
                    ...state.schemas,
                    [schemaId]: {
                        ...schema,
                        productIds: [...schema.productIds, productId]
                    }
                }
            };
        }

        case "REMOVE_PRODUCT_FROM_SCHEMA": {
            const { schemaId, productId } = action.payload;
            
            const schema = state.schemas[schemaId];
            if (!schema)
                return state;

            return {
                ...state,
                schemas: {
                    ...state.schemas,
                    [schemaId]: {
                        ...schema,
                        productIds: schema.productIds.filter(id => id !== productId)
                    }
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