import { NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RaportSheetTemplate, RaportSheetTemplateType } from "../../../components/template/RaportSheetTemplate";
import { RootStackParamList } from "../../../navigation/RootStackParamList";
import { ThemeProvider } from "../../../utils/ThemeContext";
import { RaportTheme } from "../Theme";
import { useEffect } from "react";

type Props = NativeStackScreenProps<RootStackParamList, 'RaportRTable'>;

export const RaportTableScreen = ({ navigation, route }: Props) => {
    const raportId = route.params.raportId;

    useEffect(() => {
        const navHeaderOptions: NativeStackNavigationOptions = {
            headerStyle: { backgroundColor: RaportTheme.primary.toString() },
            title: "Kierowcy Zamówienie",
            headerTintColor: RaportTheme.text.toString()
        };
        navigation.setOptions(navHeaderOptions);
    }, [navigation]);

    const dummyData: RaportSheetTemplateType = {
        tableData: {
            columns: [
                { key: "id", title: "Sr. No", width: "15%" },
                { key: "name", title: "Nazwa", width: "55%" },
                { key: "quantity", title: "Ilość", width: "30%" }
            ],
            rows: [
                { id: 1, name: "Kartony pizza 32 cm", quantity: "1 paczka" },
                { id: 2, name: "Kartony pizza 45 cm", quantity: "4 paczka" },
                { id: 3, name: "Pudełka - Burgery Woł.", quantity: "0.9 paczka" }
            ],
            onPressFn: (row) => console.log("double click", row)
        },
        addItemFn: () => console.log("Add more pressed")
    }

    return (
        <ThemeProvider theme={RaportTheme}>
            <RaportSheetTemplate tableData={dummyData.tableData}
            addItemFn={dummyData.addItemFn} />
        </ThemeProvider>
    );
};