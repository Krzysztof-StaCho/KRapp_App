import { StoreId, StoreModel, StoreRow } from "@/entities/base/storeModel";
import { randomUUID } from "expo-crypto";

export const createProductId = () => `prod_${randomUUID()}`;

export enum Unit {
  SET = "paczka",
  PIECE = "sztuka",
}

export type Product = {
  schemaId?: StoreId;
  name: string;
  unit: Unit;
};

export type ProductRow = {
  schemaId: StoreId;
  name: string;
  unit: "SET" | "PIECE";
} & StoreRow;

export type ProductSM = Product & StoreModel;
