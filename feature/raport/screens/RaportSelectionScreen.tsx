import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/RootStackParamList";
import { RaportSelectionTemplate, RaportSelectionTemplateType } from "../../../components/template/RaportSelectionTemplate";
import { ThemeProvider } from "../../../utils/ThemeContext";
import { RaportTheme } from "../Theme";

type Props = NativeStackScreenProps<RootStackParamList, 'RaportSelection'>;

export const RaportSelectionScreen = ({ navigation }: Props) => {
    const navigateHandler = (id: number) => {
        navigation.navigate("RaportOverview", { raportId: id });
    };

    const dummyData: RaportSelectionTemplateType = {
        header: "Wybierz raport",
        data: [
            { id: 1, title: "Kierowcy Zamówienie" },
            { id: 2, title: "Szafka" },
            { id: 3, title: "Napoje" }
        ],
        navigateFn: navigateHandler,
        moreActionFn: (id: number) => {}
    };

    return (
        <ThemeProvider theme={RaportTheme}>
            <RaportSelectionTemplate header={dummyData.header} data={dummyData.data}
            navigateFn={dummyData.navigateFn} moreActionFn={dummyData.moreActionFn} />
        </ThemeProvider>
    );
};