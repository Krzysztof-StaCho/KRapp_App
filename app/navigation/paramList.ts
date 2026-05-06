import { ProductId } from "@/entities/product/model/product.types";
import { SchemaId } from "@/entities/schema/model/schema.types";

export type RootParamList = {
    /**
     * Home (Startup page)
     */
    Home: undefined

    /**
     * Raport Section
     */
    RaportStack: undefined
}

export type RaportParamList = {
    /**
     * Raport -> Item selection
     */
    RaportSelection: undefined;

    /**
     * Raport -> Overview
     */
    RaportOverview: { raportId: SchemaId };

    /**
     * Raport -> Raport table
     */
    RaportRTable: { raportId: SchemaId };

    /**
     * Raport -> Create Raport
     */
    RaportRUpsert: { raportId?: SchemaId };

    /**
     * Raport -> Create Raport Item
     */
    RaportRItemUpsert: { raportId: SchemaId, productId?: ProductId };
}