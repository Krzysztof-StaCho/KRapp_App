const queries = `
    PRAGMA foreign_keys = ON;
    CREATE TABLE IF NOT EXISTS snapshot_headers (
    id TEXT PRIMARY KEY,
    schemaId TEXT REFERENCES schemas(id) ON DELETE CASCADE,
    date TEXT NOT NULL,
    updatedAt TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS snapshot_items (
    id TEXT NOT NULL,
    productId TEXT REFERENCES products(id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL,
    updatedAt TEXT NOT NULL,
    PRIMARY KEY (id, productId));`;

export default queries;
