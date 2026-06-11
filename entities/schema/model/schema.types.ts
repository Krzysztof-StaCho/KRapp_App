import { StoreModel } from "@/entities/base/storeModel";
import { randomUUID } from "expo-crypto";

export const createSchemaId = () => `schema_${randomUUID()}`;

export type Schema = {
  title: string;
  storageType: "local" | "cloud";
};

export type SchemaSM = Schema & StoreModel;
