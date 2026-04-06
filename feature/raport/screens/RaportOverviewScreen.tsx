import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../../navigation/RootStackParamList";
import { RaportOverviewTemplate, RaportOverviewTemplateType } from "../../../components/template/RaportOverviewTemplate";

import { ThemeProvider } from "../../../utils/ThemeContext";
import { RaportTheme } from "../Theme"

type Props = NativeStackScreenProps<RootStackParamList, 'RaportOverview'>;

export const RaportOverviewScreen = ({ navigation, route }: Props) => {
    const raportId = route.params.raportId;

    const dummyData: RaportOverviewTemplateType = {
        header: "Kierowcy Zamówienie",
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
            <RaportOverviewTemplate header={dummyData.header} buttonFn={dummyData.buttonFn} />
        </ThemeProvider>
    );
};