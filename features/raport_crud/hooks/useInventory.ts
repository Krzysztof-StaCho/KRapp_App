import { InventoryContext } from "@/app/providers/inventoryProvider";
import { useContext } from "react";

export const useInventory = () => {
    const ctx = useContext(InventoryContext);

    if (!ctx) {
        throw new Error("useInventory must be used inside InventoryProvider");
    }

    return ctx;
};