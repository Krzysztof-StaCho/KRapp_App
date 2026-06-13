import { openDatabaseAsync } from "expo-sqlite";
import { migrateDbIfNeeded } from "../migrations/migrationBase";

export async function initializeInventoryDB() {
  const sqliteDb = await openDatabaseAsync("inventory.db");
  await migrateDbIfNeeded(sqliteDb);

  return sqliteDb;
}
