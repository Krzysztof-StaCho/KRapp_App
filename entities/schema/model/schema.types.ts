import { StoreModel } from "@/entities/base/storeModel";
import { v4 as uuid } from "uuid";

export const createSchemaId = () => `schema_${uuid()}`;

export type Schema = {
  title: string;
  storageType: "local" | "cloud";
};

export type SchemaSM = Schema & StoreModel;
