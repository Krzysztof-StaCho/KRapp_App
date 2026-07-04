import { StoreId } from "@/entities/base/storeModel";
import { DatabaseError } from "@/entities/errors/database.error";
import {
  productSMToRow,
  rowToProductSM,
} from "@/entities/product/model/product.mapper";
import { ProductRow, ProductSM } from "@/entities/product/model/product.types";
import { DatabaseContext } from "../databaseContext";
import { ItemRepository } from "../interfaces/itemRepository";

export class ProductSqlStore implements ItemRepository<ProductSM> {
  constructor(private readonly database: DatabaseContext) {}

  async getAll(): Promise<ProductSM[]> {
    try {
      const rows = await this.database.query<ProductRow>(
        `SELECT id, schemaId, name, unit, updatedAt FROM products`,
      );
      return rows.map(rowToProductSM);
    } catch (error) {
      throw new DatabaseError("Failed to get all schemas", error);
    }
  }

  async get(id: StoreId): Promise<ProductSM> {
    try {
      const row = await this.database.first<ProductRow>(
        `SELECT id, schemaId, name, unit, updatedAt FROM products WHERE id = ?`,
        [id],
      );
      if (!row) throw new Error(`Product with id ${id} not found.`);

      return rowToProductSM(row);
    } catch (error) {
      throw new DatabaseError(`Failed to get product ${id}`, error);
    }
  }

  async create(item: ProductSM): Promise<void> {
    const row = productSMToRow(item);

    try {
      await this.database.execute(
        `INSERT INTO products (id, schemaId, name, unit, updatedAt) VALUES (?, ?, ?, ?, ?)`,
        [row.id, row.schemaId, row.name, row.unit, row.updatedAt],
      );
    } catch (error) {
      throw new DatabaseError(`Failed to create product ${item.id}`, error);
    }
  }

  async update(item: ProductSM): Promise<void> {
    const row = productSMToRow(item);

    try {
      const result = await this.database.execute(
        `UPDATE products SET schemaId = ?, name = ?, unit = ?, updatedAt = ? WHERE id = ?`,
        [row.schemaId, row.name, row.unit, row.updatedAt, row.id],
      );

      if (result.changes === 0) {
        throw new Error(`Product with id ${item.id} not found`);
      }
    } catch (error) {
      throw new DatabaseError(`Failed to update schema ${item.id}`, error);
    }
  }

  async delete(id: StoreId): Promise<void> {
    try {
      const result = await this.database.execute(
        `DELETE FROM products WHERE id = ?`,
        [id],
      );

      if (result.changes === 0) {
        throw new Error(`Product with id ${id} not found`);
      }
    } catch (error) {
      throw new DatabaseError(`Failed to delete product ${id}`, error);
    }
  }
}
