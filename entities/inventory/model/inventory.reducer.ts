import { createProductId, Product, ProductId } from "@/entities/product/model/product.types";
import { createSchemaId, Schema, SchemaId } from "@/entities/schema/model/schema.types";
import { Snapshot } from "@/entities/snapshot/model/snapshot.types";

export type InventoryState = {
    products: Record<string, Product>,
    schemas: Record<string, Schema>,
    snapshot: Record<string, Snapshot>
};

//Action TYPES
type Action = 
        { type: 'UPDATE_SCHEMA_TITLE', payload: { id: SchemaId, title: string } }
    |   { type: 'ADD_SCHEMA', payload: Schema }
    |   { type: 'REMOVE_SCHEMA', payload: SchemaId }

    |   { type: 'ADD_PRODUCT', payload: { schemaId: SchemaId, product: Product } }
    |   { type: 'UPDATE_PRODUCT', payload: { id: ProductId, product: Product } }
    |   { type: 'REMOVE_PRODUCT', payload: ProductId }
    
    |   { type: 'ADD_SNAPSHOT', payload: Snapshot }

    |   { type: 'SET_PRODUCTS', payload: Product[] }
    |   { type: 'SET_SCHEMAS', payload: Schema[] }
    |   { type: 'SET_SNAPSHOTS', payload: Snapshot[] };

//Reducer
export function InventoryReducer(
    state: InventoryState,
    action: Action
): InventoryState {
    switch(action.type) {
        case "ADD_PRODUCT": {
            const newProductId = createProductId();

            return {
                ...state,
                products: {
                    ...state.products,
                    [newProductId]: {
                        ...action.payload.product,
                        id: newProductId,
                        schemaId: action.payload.schemaId
                    }
                }
            };
        }

        case "REMOVE_PRODUCT": {
            const id = action.payload;

            //Find if product is used in any snapshot
            let isUsed = false;
            Object.entries(state.snapshot).find(([_, snapshot]) => 
                snapshot.values[id] !== undefined && (isUsed = true));

            if (isUsed) {
                return {
                    ...state,
                    products: {
                        ...state.products,
                        [id]: {
                            ...state.products[id],
                            schemaId: undefined
                        }
                    }
                };
            }

            //Remove from products
            const { [id]: _, ...restProducts } = state.products;

            return {
                ...state,
                products: restProducts
            };
        }

        case "UPDATE_PRODUCT": {
            const { id, product } = action.payload;
            product.id = id;

            const currentProduct = state.products[id];
            if (!currentProduct)
                return state;

            return {
                ...state,
                products: {
                    ...state.products,
                    [id]: product
                }
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
                        id: newSchemaId
                    }
                }
            };
        }

        case "REMOVE_SCHEMA": {
            const id = action.payload;

            //Remove schema
            const { [id]: _, ...restSchemas } = state.schemas;

            //Remove related snapshots
            let snapshotsToRemove: Record<string, Snapshot> = {};
            const filteredSnapshots = Object.fromEntries(
                Object.entries(state.snapshot).filter(
                    ([_, snapshot]) => {
                        if (snapshot.schemaId === id) {
                            snapshotsToRemove[snapshot.id] = snapshot;
                            return false;
                        }
                        return true;
                    }
                )
            );

            //Remove related products in the schema
            const filteredProducts = Object.fromEntries(
                Object.entries(state.products).filter(
                    ([_, products]) => {
                        if (products.schemaId === id)
                            return false;

                        //Find if any product that doesnt belong to the schemas
                        //is used in any snapshot that belongs to the schema
                        //if so, remove product from products
                        if (products.schemaId === undefined) {
                            let isUsed = false;
                            Object.entries(snapshotsToRemove).find(([_, snapshot]) => 
                                snapshot.values[products.id] !== undefined && (isUsed = true));
                            if (isUsed)
                                return false;
                        }
                        return true;
                    }
                )
            );

            return {
                products: filteredProducts,
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

        case "ADD_SNAPSHOT": {
            return {
                ...state,
                snapshot: {
                    ...state.snapshot,
                    [action.payload.id]: action.payload
                }
            };
        }

        case "SET_PRODUCTS": {
            return {
                ...state,
                products: Object.fromEntries(action.payload.map(product => [product.id, product]))
            };
        }

        case "SET_SCHEMAS": {
            return {
                ...state,
                schemas: Object.fromEntries(action.payload.map(schema => [schema.id, schema]))
            };
        }

        case "SET_SNAPSHOTS": {
            return {
                ...state,
                snapshot: Object.fromEntries(action.payload.map(snapshot => [snapshot.id, snapshot]))
            };
        }

        default:
            return state;
    }
};