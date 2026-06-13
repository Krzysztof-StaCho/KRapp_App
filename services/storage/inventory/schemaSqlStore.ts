import { StoreId } from "@/entities/base/storeModel";
import { DatabaseError } from "@/entities/errors/database.error";
import {
  rowToSchemaSM,
  schemaSMToRow,
} from "@/entities/schema/model/schema.mapper";
import { SchemaRow, SchemaSM } from "@/entities/schema/model/schema.types";
import { DatabaseContext } from "../databaseContext";
import { ItemRepository } from "../interfaces/itemRepository";

export class SchemaSqlStore implements ItemRepository<SchemaSM> {
  constructor(private readonly database: DatabaseContext) {}

  async getAll(): Promise<SchemaSM[]> {
    try {
      const rows = await this.database.query<SchemaRow>(
        `SELECT id, title, storageType, updatedAt FROM schemas`,
      );
      return rows.map(rowToSchemaSM);
    } catch (error) {
      throw new DatabaseError(`Failed to get all schemas`, error);
    }
  }

  async get(id: StoreId): Promise<SchemaSM> {
    try {
      const row = await this.database.first<SchemaRow>(
        `SELECT id, title, storageType, updatedAt FROM schemas WHERE id = ?`,
        [id],
      );
      if (!row) throw new Error(`Schema with id ${id} not found`);

      return rowToSchemaSM(row);
    } catch (error) {
      throw new DatabaseError(`Failed to get schema ${id}`, error);
    }
  }

  async create(item: SchemaSM): Promise<void> {
    const row = schemaSMToRow(item);

    try {
      await this.database.execute(
        `INSERT INTO schemas (id, title, storageType, updatedAt) VALUES (?, ?, ?, ?)`,
        [row.id, row.title, row.storageType, row.updatedAt],
      );
    } catch (error) {
      throw new DatabaseError(`Failed to create schema ${item.id}`, error);
    }
  }

  async update(item: SchemaSM): Promise<void> {
    const row = schemaSMToRow(item);

    try {
      const result = await this.database.execute(
        `UPDATE schemas SET title = ?, storageType = ?, updatedAt = ? WHERE id = ?`,
        [row.title, row.storageType, row.updatedAt, row.id],
      );

      if (result.changes === 0) {
        throw new Error(`Schema with id ${item.id} not found`);
      }
    } catch (error) {
      throw new DatabaseError(`Failed to update schema ${item.id}`, error);
    }
  }

  async delete(id: StoreId): Promise<void> {
    try {
      const result = await this.database.execute(
        `DELETE FROM schemas WHERE id = ?`,
        [id],
      );

      if (result.changes === 0) {
        throw new Error(`Schema with id ${id} not found`);
      }
    } catch (error) {
      throw new DatabaseError(`Failed to delete schema ${id}`, error);
    }
  }
}
