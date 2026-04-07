import { NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/RootStackParamList";
import { HomePageTemplate, HomePageTemplateType } from "../../../components/template/HomePageTemplate";
import { ColorsTheme } from "../../../utils/BaseStyle";
import { useEffect } from "react";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

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
                    color: ColorsTheme.PrimaryColor,
                    iconName: "area-chart",
                    onPressFn: () => navigation.navigate("RaportSelection")
                },
                {
                    title: "Czas Pracy",
                    color: ColorsTheme.SecondaryColor,
                    iconName: "bar-chart",
                    onPressFn: () => {}
                },
                {
                    title: "Konfiguracja",
                    color: ColorsTheme.BodyColor,
                    iconName: "setting",
                    onPressFn: () => {}
                }
            ]
        }]
    };

    return <HomePageTemplate rows={navigationItems.rows} />
};