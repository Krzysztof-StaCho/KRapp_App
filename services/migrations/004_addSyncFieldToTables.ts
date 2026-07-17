const queries = `
    ALTER TABLE schemas ADD COLUMN
    syncStatus TEXT DEFAULT "synced" NOT NULL;
    ALTER TABLE products ADD COLUMN
    syncStatus TEXT DEFAULT "synced" NOT NULL;
    ALTER TABLE snapshot_headers ADD COLUMN
    syncStatus TEXT DEFAULT "synced" NOT NULL;
    ALTER TABLE snapshot_items ADD COLUMN
    syncStatus TEXT DEFAULT "synced" NOT NULL;`;

export default queries;
