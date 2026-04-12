import { NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RaportSheetTemplate, RaportSheetTemplateType } from "../../../components/template/RaportSheetTemplate";
import { RootParamList } from "../../../navigation/RootParamList";
import { ThemeProvider } from "../../../utils/ThemeContext";
import { RaportTheme } from "../Theme";
import { useEffect } from "react";
import { GetRaportDetails } from "../../../data/FakeData";

type Props = NativeStackScreenProps<RootParamList, 'RaportRTable'>;

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

    const data = GetRaportDetails(raportId).map((item) => {
        return {
            id: item.id,
            name: item.name,
            quantity: item.amount + " " + item.quantity
        };
    });

    const dummyData: RaportSheetTemplateType = {
        tableData: {
            columns: [
                { key: "id", title: "Sr. No", width: "15%" },
                { key: "name", title: "Nazwa", width: "55%" },
                { key: "quantity", title: "Ilość", width: "30%" }
            ],
            rows: data,
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