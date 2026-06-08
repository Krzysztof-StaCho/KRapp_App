import { v4 as uuid } from "uuid";

export type SchemaId = string;
export const createSchemaId = () => `schema_${uuid()}`;

export type Schema = {
    id: SchemaId,
    title: string,
    storageType: 'local' | 'cloud',
    updatedAt: Date
};