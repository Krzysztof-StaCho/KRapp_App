import { NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RaportSheetTemplate, RaportSheetTemplateType } from "../../../components/template/RaportSheetTemplate";
import { RaportParamList } from "../../../navigation/RootParamList";
import { useTheme } from "../../../utils/ThemeContext";
import { useContext, useEffect } from "react";
import { GetRaport } from "../../../data/FakeData";
import { RaportContext } from "../../../store/RaportContext";

type Props = NativeStackScreenProps<RaportParamList, 'RaportRTable'>;

export const RaportTableScreen = ({ navigation, route }: Props) => {
    const theme = useTheme();
    const raportCtx = useContext(RaportContext);

    const raportId = route.params.raportId;
    const raport = GetRaport(raportId, raportCtx.raports);

    useEffect(() => {
        const navHeaderOptions: NativeStackNavigationOptions = {
            headerStyle: { backgroundColor: theme.primary.toString() },
            title: raport.title,
            headerTintColor: theme.primaryText.toString()
        };
        navigation.setOptions(navHeaderOptions);
    }, [navigation]);

    const data = raport.data.map((item) => {
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
            onPressFn: (row) => navigation.navigate("RaportRItemUpsert",
                { raportId: raportId, itemId: row.id })
        },
        addItemFn: () => navigation.navigate("RaportRItemUpsert", { raportId: raportId })
    };

    return (
        <RaportSheetTemplate tableData={dummyData.tableData}
        addItemFn={dummyData.addItemFn} />
    );
};