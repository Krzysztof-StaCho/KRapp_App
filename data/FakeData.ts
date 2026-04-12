const RaportList = [
    { id: 1, title: "Kierowcy Zamówienie" },
    { id: 2, title: "Szafka" },
    { id: 3, title: "Napoje" }
];

const RaportOverview_01 = {};

const RaportData_01 = [
    {
        id: 1,
        name: "Kartony pizza 32 cm",
        amount: 1,
        quantity: "paczka"
    },
    {
        id: 2,
        name: "Kartony pizza 45 cm",
        amount: 4,
        quantity: "paczka",
    },
    {
        id: 3,
        name: "Pudełka - Burger Wołowy",
        amount: 0.9,
        quantity: "paczka"
    }
];

export const GetRaports = () => RaportList;
export const GetRaportOverview = (id: number) => RaportOverview_01;
export const GetRaportDetails = (id: number) => RaportData_01;