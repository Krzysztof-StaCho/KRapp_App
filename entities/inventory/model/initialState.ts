import { Unit } from "@/entities/product/model/product.types";
import { InventoryState } from "./inventory.reducer";

export const InventoryInitial: InventoryState = {
    products: {
        p1: {
            id: "p1",
            name: "Kartony pizza 32 cm",
            schemaId: "s1",
            unit: Unit.SET,
            updatedAt: new Date()
        },
        p2: {
            id: "p2",
            name: "Kartony pizza 45 cm",
            schemaId: "s1",
            unit: Unit.SET,
            updatedAt: new Date()
        },
        p3: {
            id: "p3",
            name: "Pudełka - Burger",
            schemaId: "s1",
            unit: Unit.SET,
            updatedAt: new Date()
        },
        p4: {
            id: "p4",
            name: "Mikrofibra",
            schemaId: "s2",
            unit: Unit.PIECE,
            updatedAt: new Date()
        },
        p5: {
            id: "p5",
            name: "Rękawiczki M",
            schemaId: "s2",
            unit: Unit.SET,
            updatedAt: new Date()
        },
        p6: {
            id: "p6",
            name: "Reklamówki S",
            schemaId: "s2",
            unit: Unit.SET,
            updatedAt: new Date()
        },
        p7: {
            id: "p7",
            name: "Pepsi 0.85L",
            schemaId: "s3",
            unit: Unit.PIECE,
            updatedAt: new Date()
        }
    },
    schemas: {
        s1: {
            id: "s1",
            title: "Kierowcy Zamówienie",
            storageType: 'local',
            updatedAt: new Date()
        },
        s2: {
            id: "s2",
            title: "Szafka",
            storageType: 'local',
            updatedAt: new Date()
        },
        s3: {
            id: "s3",
            title: "Napoje",
            storageType: 'local',
            updatedAt: new Date()
        }
    },
    snapshot: {
        snap1: {
            id: "snap1",
            schemaId: "s3",
            date: new Date(),
            values: {
                p7: 10
            }
        }
    }
};