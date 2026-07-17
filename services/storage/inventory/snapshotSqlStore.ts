import { StoreId } from "@/entities/base/storeModel";
import { DatabaseError } from "@/entities/errors/database.error";
import {
  getSnapshotsFromRows,
  rowToSnapshotSM,
  snapshotSMToRow,
} from "@/entities/snapshot/model/snapshot.mapper";
import {
  SnapshotHeaderRow,
  SnapshotItemRow,
  SnapshotSM,
} from "@/entities/snapshot/model/snapshot.types";
import { DatabaseContext } from "../databaseContext";
import { ItemRepository } from "../interfaces/itemRepository";

export class SnapshotSqlStore implements ItemRepository<SnapshotSM> {
  constructor(private readonly database: DatabaseContext) {}

  async getAll(): Promise<SnapshotSM[]> {
    try {
      const rowsHeader = await this.database.query<SnapshotHeaderRow>(
        `SELECT id, schemaId, date, updatedAt FROM snapshot_headers`,
      );

      const rowsItems = await this.database.query<SnapshotItemRow>(
        `SELECT id, productId, quantity, updatedAt FROM snapshot_items`,
      );

      return getSnapshotsFromRows(rowsHeader, rowsItems);
    } catch (error) {
      throw new DatabaseError("Failed to get all snapshots", error);
    }
  }

  async get(id: StoreId): Promise<SnapshotSM> {
    try {
      const rowHeader = await this.database.first<SnapshotHeaderRow>(
        `SELECT id, schemaId, date, updatedAt FROM snapshot_headers WHERE id = ?`,
        [id],
      );
      const rowsItem = await this.database.query<SnapshotItemRow>(
        `SELECT id, productId, quantity, updatedAt FROM snapshot_items WHERE id = ?`,
        [id],
      );
      if (!rowHeader) throw new Error(`Snapshot with id ${id} not found`);

      return rowToSnapshotSM(rowHeader, rowsItem);
    } catch (error) {
      throw new DatabaseError(`Failed to get snapshot ${id}`, error);
    }
  }

  async create(item: SnapshotSM): Promise<void> {
    const [rowHeader, rowItems] = snapshotSMToRow(item);

    try {
      await this.database.transaction(async (ctx) => {
        ctx.execute(
          `INSERT INTO snapshot_headers (id, schemaId, date, updatedAt) VALUES (?, ?, ?, ?)`,
          [
            rowHeader.id,
            rowHeader.schemaId,
            rowHeader.date,
            rowHeader.updatedAt,
          ],
        );

        rowItems.forEach((rowItem) => {
          ctx.execute(
            `INSERT INTO snapshot_items (id, productId, quantity, updatedAt) VALUES (?, ?, ?, ?)`,
            [
              rowItem.id,
              rowItem.productId,
              rowItem.quantity,
              rowItem.updatedAt,
            ],
          );
        });
      });
    } catch (error) {
      throw new DatabaseError(`Failed to create snapshot ${item.id}`, error);
    }
  }

  async update(item: SnapshotSM): Promise<void> {
    const [rowHeader, rowItems] = snapshotSMToRow(item);

    try {
      await this.database.transaction(async (ctx) => {
        ctx.execute(
          `UPDATE snapshot_headers SET schemaId = ?, date = ?, updatedAt = ? WHERE id = ?`,
          [
            rowHeader.schemaId,
            rowHeader.date,
            rowHeader.updatedAt,
            rowHeader.id,
          ],
        );

        ctx.execute(`DELETE FROM snapshot_items WHERE id = ?`, [rowHeader.id]);

        rowItems.forEach((rowItem) => {
          ctx.execute(
            `INSERT INTO snapshot_items (id, productId, quantity, updatedAt) VALUES (?, ?, ?, ?)`,
            [
              rowItem.id,
              rowItem.productId,
              rowItem.quantity,
              rowItem.updatedAt,
            ],
          );
        });
      });
    } catch (error) {
      throw new DatabaseError(`Failed to update snapshot ${item.id}`, error);
    }
  }

  async delete(id: StoreId): Promise<void> {
    try {
      await this.database.transaction(async (ctx) => {
        ctx.execute(`DELETE FROM snapshot_headers WHERE id = ?`, [id]);

        ctx.execute(`DELETE FROM snapshot_items WHERE id = ?`, [id]);
      });
    } catch (error) {
      throw new DatabaseError(`Failed to delete snapshot ${id}`, error);
    }
  }
}
