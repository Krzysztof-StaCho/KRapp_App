import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../utils/navigation/RootStackParamList";
import { RaportOverviewTemplate, RaportOverviewTemplateType } from "../../../components/template/RaportOverviewTemplate";

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

    return <RaportOverviewTemplate header={dummyData.header} buttonFn={dummyData.buttonFn} />
};