import { StoreId } from "@/entities/base/storeModel";
import {
  createSnapshotId,
  Snapshot,
  SnapshotHeaderRow,
  SnapshotItemRow,
  SnapshotSM,
} from "./snapshot.types";

export function getSnapshotsFromRows(
  headers: SnapshotHeaderRow[],
  items: SnapshotItemRow[],
): SnapshotSM[] {
  return headers.map<SnapshotSM>((header) => {
    const headerItem = items.filter((item) => item.id === header.id);
    return rowToSnapshotSM(header, headerItem);
  });
}

export function rowToSnapshotSM(
  header: SnapshotHeaderRow,
  items: SnapshotItemRow[],
): SnapshotSM {
  const values: Record<StoreId, number> = Object.fromEntries<number>(
    items.map((value) => [value.productId, value.quantity]),
  );

  return {
    id: header.id,
    schemaId: header.schemaId,
    date: new Date(header.date),
    values: values,
    updatedAt: new Date(header.updatedAt),
  };
}

export function snapshotSMToRow(
  snapshot: SnapshotSM,
): [SnapshotHeaderRow, SnapshotItemRow[]] {
  const items = Object.entries(snapshot.values).map<SnapshotItemRow>((item) => {
    return {
      id: snapshot.id,
      productId: item[0],
      quantity: item[1],
      updatedAt: new Date().toISOString(),
    };
  });

  return [
    {
      id: snapshot.id,
      schemaId: snapshot.schemaId,
      date: snapshot.date.toISOString(),
      updatedAt: snapshot.updatedAt.toISOString(),
    },
    items,
  ];
}

export function createSnapshotSM(snapshot: Snapshot): SnapshotSM {
  return {
    schemaId: snapshot.schemaId,
    date: snapshot.date,
    values: snapshot.values,
    id: createSnapshotId(),
    updatedAt: new Date(),
  };
}
