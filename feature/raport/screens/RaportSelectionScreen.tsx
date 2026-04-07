import { NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootParamList } from "../../../navigation/RootParamList";
import { RaportSelectionTemplate, RaportSelectionTemplateType } from "../../../components/template/RaportSelectionTemplate";
import { ThemeProvider } from "../../../utils/ThemeContext";
import { RaportTheme } from "../Theme";
import { useEffect } from "react";

type Props = NativeStackScreenProps<RootParamList, 'RaportSelection'>;

export const RaportSelectionScreen = ({ navigation }: Props) => {
    useEffect(() => {
        const navHeaderOptions: NativeStackNavigationOptions = {
            headerStyle: { backgroundColor: RaportTheme.primary.toString() },
            title: "Wybierz raport",
            headerTintColor: RaportTheme.text.toString()
        };
        navigation.setOptions(navHeaderOptions);
    }, [navigation]);

    const navigateHandler = (id: number) => {
        navigation.navigate("RaportOverview", { raportId: id });
    };

    const dummyData: RaportSelectionTemplateType = {
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
            <RaportSelectionTemplate data={dummyData.data} navigateFn={dummyData.navigateFn}
            moreActionFn={dummyData.moreActionFn} />
        </ThemeProvider>
    );
};