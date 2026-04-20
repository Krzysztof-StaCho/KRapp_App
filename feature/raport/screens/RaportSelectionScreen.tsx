import { NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RaportParamList } from "../../../navigation/RootParamList";
import { RaportSelectionTemplate, RaportSelectionTemplateType } from "../../../components/template/RaportSelectionTemplate";
import { useTheme } from "../../../utils/ThemeContext";
import { useContext, useEffect } from "react";
import { GetRaports } from "../../../data/FakeData";
import { SimpleButton } from "../../../components/atoms/SimpleButton";
import { RaportContext } from "../../../store/RaportContext";

type Props = NativeStackScreenProps<RaportParamList, 'RaportSelection'>;

export const RaportSelectionScreen = ({ navigation }: Props) => {
    const theme = useTheme();
    const raportCtx = useContext(RaportContext);

    const navigateHandler = (id: number) => {
        navigation.navigate("RaportOverview", { raportId: id });
    };
    const editHandler = (id?: number) => {
        navigation.navigate("RaportRUpsert", { raportId: id });
    };

    useEffect(() => {
        const navHeaderOptions: NativeStackNavigationOptions = {
            headerStyle: { backgroundColor: theme.primary.toString() },
            title: "Wybierz raport",
            headerTintColor: theme.primaryText.toString(),
            headerRight: () => (
                <SimpleButton title="Utwórz" color={theme.primaryText}
                onPressFn={() => editHandler()} />
            )
        };
        navigation.setOptions(navHeaderOptions);
    }, [navigation]);

    const data = GetRaports(raportCtx.raports).map((item) => {
        return { id: item.id, title: item.title };
    });

    const dummyData: RaportSelectionTemplateType = {
        data: data,
        navigateFn: navigateHandler,
        moreActionFn: editHandler
    };

    return (
        <RaportSelectionTemplate data={dummyData.data} navigateFn={dummyData.navigateFn}
        moreActionFn={dummyData.moreActionFn} />
    );
};