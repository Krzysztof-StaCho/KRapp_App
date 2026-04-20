type RaportHeaderType = {
    id: number,
    title: string
};

type RaportDataType = {
    id: number,
    name: string,
    amount: number,
    quantity: "paczka" | "sztuk"
};

type RaportType = {
    id: number,
    title: string,
    data: RaportDataType[]
};

export const InitData: RaportType[] = [
    {
        id: 1,
        title: "Kierowcy Zamówienie",
        data: [
            {
                id: 1,
                name: "Kartony pizza 32 cm",
                amount: 1,
                quantity: "paczka"
            },
            {
                id: 2,
                name: "Kartony pizza 45 cm",
                amount: 5,
                quantity: "paczka"
            },
            {
                id: 3,
                name: "Pudełka - Burger wołowy",
                amount: 0.9,
                quantity: "paczka"
            }
        ]
    },
    {
        id: 2,
        title: "Szafka",
        data: [
            {
                id: 1,
                name: "Mikrofibra",
                amount: 5,
                quantity: "sztuk"
            },
            {
                id: 2,
                name: "Rękawiczki M",
                amount: 1,
                quantity: "paczka"
            },
            {
                id: 3,
                name: "Reklamówki 1 zestaw",
                amount: 3,
                quantity: "paczka"
            }
        ]
    },
    {
        id: 3,
        title: "Napoje",
        data: [
            {
                id: 1,
                name: "Pepsi 0.85L",
                amount: 4,
                quantity: "paczka"
            }
        ]
    }
];

export function GetRaports(): RaportHeaderType[] {
    const getRaportHeaders = (item: RaportType): RaportHeaderType => {
        return {
            id: item.id,
            title: item.title
        };
    };

    return InitData.map(getRaportHeaders);
};

export function GetRaportOverview(id: number) {
    return {};
}

export function GetRaportDetails(id: number): RaportDataType[] {
    const target = InitData.find((item) => item.id === id);
    if (!target) throw Error();
    return target.data;
};