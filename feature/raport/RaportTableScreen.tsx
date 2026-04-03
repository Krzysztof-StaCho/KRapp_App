import { RaportSheetTemplate, RaportSheetTemplateType } from "../../components/template/RaportSheetTemplate";

export const RaportTableScreen = () => {
    const dummyData: RaportSheetTemplateType = {
        header: "Kierowcy Zamówienie",
        tableData: {
            columns: [
                { key: "id", title: "Sr. No", width: "15%" },
                { key: "name", title: "Nazwa", width: "55%" },
                { key: "quantity", title: "Ilość", width: "30%" }
            ],
            rows: [
                { id: "1", name: "Kartony pizza 32 cm", quantity: "1 paczka" },
                { id: "2", name: "Kartony pizza 45 cm", quantity: "4 paczka" },
                { id: "3", name: "Pudełka - Burgery Woł.", quantity: "0.9 paczka" }
            ],
            onPressFn: (row) => console.log("double click", row)
        }
    }

    return <RaportSheetTemplate header={dummyData.header} tableData={dummyData.tableData} />
};