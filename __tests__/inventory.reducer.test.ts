import { InventoryInitial } from "@/entities/inventory/model/initialState";
import { InventoryReducer } from "@/entities/inventory/model/inventory.reducer";
import { Product, Unit } from "@/entities/product/model/product.types";
import { Schema } from "@/entities/schema/model/schema.types";
import { Snapshot } from "@/entities/snapshot/model/snapshot.types";

jest.mock("uuid");

function createState() {
  return structuredClone(InventoryInitial);
}

describe("InventoryReducer tests", () => {
  test("Adding schema to inventory", () => {
    const state = createState();

    const newSchema: Schema = {
      title: "Test Schema",
      storageType: "local",
    };

    const newState = InventoryReducer(state, {
      type: "ADD_SCHEMA",
      payload: newSchema,
    });

    const findedSchema = Object.values(newState.schemas).find(
      (schema) => schema.title === newSchema.title,
    ) as Schema | undefined;

    expect(findedSchema).toBeDefined();
    expect(findedSchema).toMatchObject(newSchema);
  });

  test("Update schema from inventory", () => {
    const state = createState();

    let schemaToEdit = state.schemas["s1"] as Schema;
    schemaToEdit = {
      ...schemaToEdit,
      title: "Test Title",
      storageType: "cloud",
    };

    const newState = InventoryReducer(state, {
      type: "UPDATE_SCHEMA",
      payload: { id: "s1", schema: schemaToEdit },
    });
    const findedSchema = newState.schemas["s1"] as Schema;

    expect(findedSchema).toBeDefined();
    expect(findedSchema).toMatchObject({
      title: schemaToEdit.title,
      storageType: schemaToEdit.storageType,
    });
  });

  test("Removing schema with linked snapshot and products", () => {
    const state = createState();

    const newState = InventoryReducer(state, {
      type: "REMOVE_SCHEMA",
      payload: "s3",
    });

    expect(newState.schemas["s3"]).toBeUndefined();

    const relatedProducts = Object.values(newState.products).filter(
      (prod) => prod.schemaId === "s3",
    );
    const relatedSnapshots = Object.values(newState.snapshot).filter(
      (snap) => snap.schemaId === "s3",
    );

    expect(relatedProducts).toHaveLength(0);
    expect(relatedSnapshots).toHaveLength(0);
  });

  test("Adding product to schema", () => {
    const state = createState();

    const productToAdd: Product = {
      schemaId: undefined,
      name: "Test product",
      unit: Unit.PIECE,
    };

    const newState = InventoryReducer(state, {
      type: "ADD_PRODUCT",
      payload: { schemaId: "s3", product: productToAdd },
    });

    const productFromInventory = Object.values(newState.products).find(
      (prod) => prod.name === productToAdd.name,
    );

    expect(productFromInventory).toBeDefined();
    expect(productFromInventory).toMatchObject({
      name: productToAdd.name,
      unit: productToAdd.unit,
    });
    expect(productFromInventory?.schemaId).toEqual("s3");
  });

  test("Update product in inventory", () => {
    const state = createState();

    const productToEdit: Product = {
      ...state.products["p1"],
      name: "Test product",
    };

    const newState = InventoryReducer(state, {
      type: "UPDATE_PRODUCT",
      payload: { id: "p1", product: productToEdit },
    });

    expect(newState.products["p1"] as Product).toMatchObject({
      name: productToEdit.name,
    });
  });

  test("Remove linked product from inventory", () => {
    const state = createState();

    const newState = InventoryReducer(state, {
      type: "REMOVE_PRODUCT",
      payload: "p1",
    });

    expect(newState.products["p1"]).toBeUndefined();
  });

  test("Remove linked in snapshot product from inventory", () => {
    const state = createState();

    const newState = InventoryReducer(state, {
      type: "REMOVE_PRODUCT",
      payload: "p7",
    });

    const removedProduct = newState.products["p7"];

    expect(removedProduct).toBeDefined();
    expect(removedProduct.schemaId).toBeUndefined();
  });

  test("Adding snapshot to inventory", () => {
    const state = createState();

    const newSnapshot: Snapshot = {
      schemaId: "s1",
      date: new Date(),
      values: {
        p1: 3,
        p2: 10,
        p3: 1,
      },
    };

    const newState = InventoryReducer(state, {
      type: "ADD_SNAPSHOT",
      payload: newSnapshot,
    });

    const findedSnapshot = Object.values(newState.snapshot).find(
      (snap) => snap.date.getTime() === newSnapshot.date.getTime(),
    );

    expect(findedSnapshot).toBeDefined();

    if (!findedSnapshot) {
      throw Error();
    }

    expect(Object.values(findedSnapshot.values).length).toEqual(3);
  });
});
