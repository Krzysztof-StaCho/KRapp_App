import { NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootParamList } from "../../../navigation/RootParamList";
import { HomePageTemplate, HomePageTemplateType } from "../../../components/template/HomePageTemplate";
import { useEffect } from "react";
import { RaportTheme } from "../../raport/Theme";
import { DefaultTheme } from "../../../utils/BaseStyle";

type Props = NativeStackScreenProps<RootParamList, 'Home'>;

export const HomePageScreen = ({ navigation }: Props) => {
    useEffect(() => {
        const navHeaderOptions: NativeStackNavigationOptions = {
            title: "Strona Główna"
        };
        navigation.setOptions(navHeaderOptions);
    }, [navigation])

    const navigationItems: HomePageTemplateType = {
        rows: [{
            data: [
                {
                    title: "Raporty",
                    color: RaportTheme.primary,
                    iconName: "area-chart",
                    onPressFn: () => navigation.navigate("RaportSelection")
                },
                {
                    title: "Czas Pracy",
                    color: DefaultTheme.primary,
                    iconName: "bar-chart",
                    onPressFn: () => {}
                },
                {
                    title: "Konfiguracja",
                    color: DefaultTheme.border,
                    iconName: "setting",
                    onPressFn: () => {}
                }
            ]
        }]
    };

    return <HomePageTemplate rows={navigationItems.rows} />
};