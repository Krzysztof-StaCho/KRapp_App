import { SQLiteDatabase } from "expo-sqlite";
import createSchemaDatabase from "./001_createSchemaDatabase";
import createProductTable from "./002_createProductTable";
import createSnapshotTable from "./003_createSnapshotTable";

export async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 3;

  try {
    console.log("Migration started");

    const result = await db.getFirstAsync<{ user_version: number }>(
      "PRAGMA user_version",
    );
    console.log("PRAGMA result: ", result);
    const currentVersion = result?.user_version ?? 0;

    if (currentVersion >= DATABASE_VERSION) return;

    console.log("Creating tables");
    if (currentVersion <= 0) {
      await db.execAsync(createSchemaDatabase);
    }
    if (currentVersion <= 1) {
      await db.execAsync(createProductTable);
    }
    if (currentVersion <= 2) {
      await db.execAsync(createSnapshotTable);
    }
    console.log("Tables created");

    await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);

    console.log("Migration finished");
  } catch (e) {
    console.error("Migration error: ", e);
  }
}
