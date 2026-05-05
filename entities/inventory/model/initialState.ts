import { Unit } from "@/entities/product/model/product.types";
import { InventoryState } from "./inventory.reducer";

export const InventoryInitial: InventoryState = {
    products: {
        p1: {
            id: "p1",
            name: "Kartony pizza 32 cm",
            unit: Unit.SET
        },
        p2: {
            id: "p2",
            name: "Kartony pizza 45 cm",
            unit: Unit.SET
        },
        p3: {
            id: "p3",
            name: "Pudełka - Burger",
            unit: Unit.SET
        },
        p4: {
            id: "p4",
            name: "Mikrofibra",
            unit: Unit.PIECE
        },
        p5: {
            id: "p5",
            name: "Rękawiczki M",
            unit: Unit.SET
        },
        p6: {
            id: "p6",
            name: "Reklamówki S",
            unit: Unit.SET
        },
        p7: {
            id: "p7",
            name: "Pepsi 0.85L",
            unit: Unit.PIECE
        }
    },
    schemas: {
        s1: {
            id: "s1",
            title: "Kierowcy Zamówienie",
            productIds: [
                "p1", "p2", "p3"
            ]
        },
        s2: {
            id: "s2",
            title: "Szafka",
            productIds: [
                "p4", "p5", "p6"
            ]
        },
        s3: {
            id: "s3",
            title: "Napoje",
            productIds: [
                "p7"
            ]
        }
    },
    snapshot: {}
};