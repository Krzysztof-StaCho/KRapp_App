import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/RootStackParamList";
import { HomePageTemplate, HomePageTemplateType } from "../../../components/template/HomePageTemplate";
import { ColorsTheme } from "../../../utils/BaseStyle";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomePageScreen = ({ navigation }: Props) => {
    const navigationItems: HomePageTemplateType = {
        header: "Strona główna",
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

    return <HomePageTemplate header={navigationItems.header} rows={navigationItems.rows} />
};