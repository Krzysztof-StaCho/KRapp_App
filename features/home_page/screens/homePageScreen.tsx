import { RootParamList } from "@/app/navigation/paramList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeCard } from "../types/homeCard.types";
import { HomePageTemplate } from "../components/template/homePageTemplate";
import { Variants } from "@/theme/components/variants";

type ScreenProps = NativeStackScreenProps<RootParamList, 'Home'>;

export const HomePageScreen = ({navigation}: ScreenProps) => {
    const rows: HomeCard[][] = [
        [
            {
                title: "Raporty",
                color: {
                    background: "#AF7C4D",
                    text: "#FFF"
                },
                iconName: 'area_chart',
                onPressFn: () => navigation.navigate('RaportStack')
            },
            {
                title: "None v1",
                color: Variants.success,
                iconName: 'bar_chart',
                onPressFn: () => {}
            },
            {
                title: 'Ustawienia',
                color: Variants.neutral,
                iconName: 'setting',
                onPressFn: () => {}
            }
        ]
    ];

    return <HomePageTemplate rows={rows} />;
};