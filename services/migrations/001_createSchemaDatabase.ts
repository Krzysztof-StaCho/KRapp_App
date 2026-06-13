const queries = `
        CREATE TABLE IF NOT EXISTS schemas (
            id TEXT PRIMARY KEY,
            title TEXT NOT NULL,
            storageType TEXT NOT NULL CHECK(storageType IN ('local', 'cloud')),
            updatedAt TEXT NOT NULL
        )`;

export default queries;
