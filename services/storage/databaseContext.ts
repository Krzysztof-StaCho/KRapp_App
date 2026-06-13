import { SQLiteBindParams, SQLiteDatabase } from "expo-sqlite";

export class DatabaseContext {
  constructor(private readonly db: SQLiteDatabase) {}

  execute(sql: string, params: SQLiteBindParams = []) {
    return this.db.runAsync(sql, params);
  }

  query<T>(sql: string, params: SQLiteBindParams = []) {
    return this.db.getAllAsync<T>(sql, params);
  }

  first<T>(sql: string, params: SQLiteBindParams = []) {
    return this.db.getFirstAsync<T>(sql, params);
  }

  transaction(fn: (ctx: DatabaseContext) => Promise<void>): Promise<void> {
    return this.db.withTransactionAsync(() => fn(this));
  }
}
