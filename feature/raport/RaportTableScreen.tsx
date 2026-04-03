import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RaportSheetTemplate, RaportSheetTemplateType } from "../../components/template/RaportSheetTemplate";
import { RootStackParamList } from "../../utils/navigation/RootStackParamList";

type Props = NativeStackScreenProps<RootStackParamList, 'RaportRTable'>;

export const RaportTableScreen = ({ route }: Props) => {
    const raportId = route.params.raportId;

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
        },
        addItemFn: () => console.log("Add more pressed")
    }

    return <RaportSheetTemplate header={dummyData.header} tableData={dummyData.tableData} addItemFn={dummyData.addItemFn} />
};