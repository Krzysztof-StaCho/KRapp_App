import { StoreModel } from "@/entities/base/storeModel";
import { SchemaId } from "@/entities/schema/model/schema.types";
import { v4 as uuid } from "uuid";

export const createProductId = () => `prod_${uuid()}`;

export enum Unit {
  SET = "paczka",
  PIECE = "sztuka",
}

export type Product = {
  schemaId?: SchemaId;
  name: string;
  unit: Unit;
};

export type ProductSM = Product & StoreModel;
