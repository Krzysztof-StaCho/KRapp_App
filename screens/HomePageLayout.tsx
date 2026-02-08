import { View, ScrollView } from "react-native";
import { ColorsTheme, ContainerStyle } from "../utils/BaseStyle";
import { PageHeader } from "../components/atoms/PageHeader";
import { CardShelf } from "../components/molecules/CardShelf";
import { PageFooter } from "../components/atoms/PageFooter";

export const HomePageLayout = () => {
    return (
        <View style={ContainerStyle.InnerContainerStyle}>
            <PageHeader>Strona główna</PageHeader>
            <ScrollView style={{ backgroundColor: ColorsTheme.LightColor }}>
                <CardShelf cardObj={[
                    { children: "Raporty", iconProp: { color: ColorsTheme.PrimaryColor, iconName: "area-chart" } },
                    { children: "Czas Pracy", iconProp: { color: ColorsTheme.SecondaryColor, iconName: "bar-chart" } },
                    { children: "Konfiguracja", iconProp: { color: ColorsTheme.BodyColor, iconName: "setting" } }]} />
            </ScrollView>
            <PageFooter />
        </View>
    );
};