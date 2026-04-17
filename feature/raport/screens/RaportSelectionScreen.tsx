import { NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootParamList } from "../../../navigation/RootParamList";
import { RaportSelectionTemplate, RaportSelectionTemplateType } from "../../../components/template/RaportSelectionTemplate";
import { ThemeProvider } from "../../../utils/ThemeContext";
import { RaportTheme } from "../Theme";
import { useEffect } from "react";
import { GetRaports } from "../../../data/FakeData";
import { SimpleButton } from "../../../components/atoms/SimpleButton";

type Props = NativeStackScreenProps<RootParamList, 'RaportSelection'>;

export const RaportSelectionScreen = ({ navigation }: Props) => {
    useEffect(() => {
        const navHeaderOptions: NativeStackNavigationOptions = {
            headerStyle: { backgroundColor: RaportTheme.primary.toString() },
            title: "Wybierz raport",
            headerTintColor: RaportTheme.primaryText.toString(),
            headerRight: () => (
                <SimpleButton title="Utwórz" color={RaportTheme.primaryText} />
            )
        };
        navigation.setOptions(navHeaderOptions);
    }, [navigation]);

    const navigateHandler = (id: number) => {
        navigation.navigate("RaportOverview", { raportId: id });
    };

    const data = GetRaports().map((item) => {
        return { id: item.id, title: item.title };
    });

    const dummyData: RaportSelectionTemplateType = {
        data: data,
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