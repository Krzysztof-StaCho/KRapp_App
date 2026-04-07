import { NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../../navigation/RootStackParamList";
import { RaportOverviewTemplate, RaportOverviewTemplateType } from "../../../components/template/RaportOverviewTemplate";

import { ThemeProvider } from "../../../utils/ThemeContext";
import { RaportTheme } from "../Theme"
import { useEffect } from "react";

type Props = NativeStackScreenProps<RootStackParamList, 'RaportOverview'>;

export const RaportOverviewScreen = ({ navigation, route }: Props) => {
    const raportId = route.params.raportId;

    useEffect(() => {
        const navHeaderOptions: NativeStackNavigationOptions = {
            headerStyle: { backgroundColor: RaportTheme.primary.toString() },
            title: "Kierowcy Zamówienie",
            headerTintColor: RaportTheme.text.toString()
        };
        navigation.setOptions(navHeaderOptions);
    }, [navigation]);

    const dummyData: RaportOverviewTemplateType = {
        buttonFn: {
            seeMoreRaportFn: () => navigation.navigate("RaportRTable", { raportId: raportId }),
            addRaportItemFn: () => {},
            seeMoreWarningFn: () => {},
            seeMoreOrderFn: () => {},
            generateOrderFn: () => {}
        }
    };

    return (
        <ThemeProvider theme={RaportTheme}>
            <RaportOverviewTemplate buttonFn={dummyData.buttonFn} />
        </ThemeProvider>
    );
};