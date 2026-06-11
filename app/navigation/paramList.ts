import { StoreId } from "@/entities/base/storeModel";

export type RootParamList = {
  /**
   * Home (Startup page)
   */
  Home: undefined;

  /**
   * Raport Section
   */
  RaportStack: undefined;
};

export type RaportParamList = {
  /**
   * Raport -> Item selection
   */
  RaportSelection: undefined;

  /**
   * Raport -> Overview
   */
  RaportOverview: { raportId: StoreId };

  /**
   * Raport -> Raport table
   */
  RaportRTable: { raportId: StoreId };

  /**
   * Raport -> Create Raport
   */
  RaportRUpsert: { raportId?: StoreId };

  /**
   * Raport -> Create Raport Item
   */
  RaportRItemUpsert: { raportId: StoreId; productId?: StoreId };
};
