const queries = `
    PRAGMA foreign_keys = ON;
    CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    schemaId TEXT REFERENCES schemas(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    unit TEXT NOT NULL CHECK(unit IN ('SET', 'PIECE')),
    updatedAt TEXT NOT NULL
    )`;

export default queries;
