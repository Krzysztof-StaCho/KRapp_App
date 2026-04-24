import { NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";

import { RaportParamList } from "../../../navigation/RootParamList";
import { RaportOverviewTemplate, RaportOverviewTemplateType } from "../../../components/template/RaportOverviewTemplate";

import { useTheme } from "../../../utils/ThemeContext";
import { useContext, useEffect } from "react";
import { RaportContext } from "../../../store/RaportContext";
import { GetRaportOverview } from "../../../data/FakeData";

type Props = NativeStackScreenProps<RaportParamList, 'RaportOverview'>;

export const RaportOverviewScreen = ({ navigation, route }: Props) => {
    const theme = useTheme();
    const raportCtx = useContext(RaportContext);

    const raportId = route.params.raportId;

    const raportHeader = GetRaportOverview(raportId, raportCtx.raports);

    useEffect(() => {
        const navHeaderOptions: NativeStackNavigationOptions = {
            headerStyle: { backgroundColor: theme.primary.toString() },
            title: raportHeader.title,
            headerTintColor: theme.primaryText.toString()
        };
        navigation.setOptions(navHeaderOptions);
    }, [navigation]);

    const dummyData: RaportOverviewTemplateType = {
        buttonFn: {
            seeMoreRaportFn: () => navigation.navigate("RaportRTable", { raportId: raportId }),
            addRaportItemFn: () => navigation.navigate("RaportRItemUpsert", { raportId: raportId }),
            runRaportFn: () => {},
            correctRaportFn: () => {},
            seeMoreWarningFn: () => {},
            editOrderFn: () => {},
            seeMoreOrderFn: () => {},
            generateOrderFn: () => {}
        }
    };

    return (
        <RaportOverviewTemplate buttonFn={dummyData.buttonFn} />
    );
};