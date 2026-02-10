import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ColorsTheme, ContainerStyle } from "../../utils/BaseStyle";
import { PageHeader } from "../../components/atoms/PageHeader";
import { CardGroup } from "../../components/atoms/CardGroup";
import { ButtonGroup } from "../../components/atoms/ButtonGroup";
import { SimpleButton } from "../../components/atoms/SimpleButton";

export const RaportOverviewLayout = () => {
    const modelStyle = StyleSheet.create({
        scrollOuter: {
            flex: 1,
            overflow: "hidden",
            marginVertical: 10,
            marginHorizontal: 10
        },
        scrollInner: {
            flexDirection: "column",
            gap: 10
        }
    });

    return (
        <View style={ContainerStyle.InnerContainerStyle}>
            <PageHeader>Kierowcy Zamowienie</PageHeader>
            <ScrollView style={modelStyle.scrollOuter} contentContainerStyle={modelStyle.scrollInner}>
                <CardGroup title="Akcje"></CardGroup>
                <CardGroup title="Przegląd">
                    <ButtonGroup>
                        <SimpleButton color={ColorsTheme.PrimaryColor} title="Zobacz więcej..." />
                        <SimpleButton color={ColorsTheme.PrimaryColor} title="Dodaj" />
                    </ButtonGroup>
                </CardGroup>
                <CardGroup title="Uwagi">
                    <ButtonGroup>
                        <SimpleButton color={ColorsTheme.PrimaryColor} title="Zobacz więcej..." />
                    </ButtonGroup>
                </CardGroup>
                <CardGroup title="Zamówienie">
                    <ButtonGroup>
                        <SimpleButton color={ColorsTheme.PrimaryColor} title="Zobacz więcej..." />
                        <SimpleButton color={ColorsTheme.PrimaryColor} title="Wygeneruj" />
                    </ButtonGroup>
                </CardGroup>
            </ScrollView>
        </View>
    );
};