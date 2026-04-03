import { ScrollView, StyleSheet, View } from "react-native";
import { ColorsTheme, ContainerStyle } from "../../utils/BaseStyle";
import { PageHeader } from "../atoms/PageHeader";
import { CardGroup } from "../atoms/CardGroup";
import { ButtonGroup } from "../atoms/ButtonGroup";
import { SimpleButton } from "../atoms/SimpleButton";

export type RaportOverviewTemplateType = {
    header: string,
    buttonFn: {
        seeMoreRaportFn: () => void,
        addRaportItemFn: () => void,
        seeMoreWarningFn: () => void,
        seeMoreOrderFn: () => void,
        generateOrderFn: () => void
    }
};

export const RaportOverviewTemplate = ({ header, buttonFn }: RaportOverviewTemplateType) => {
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
            <PageHeader>{header}</PageHeader>
            <ScrollView style={modelStyle.scrollOuter} contentContainerStyle={modelStyle.scrollInner}>
                <CardGroup title="Akcje"></CardGroup>
                <CardGroup title="Przegląd">
                    <ButtonGroup>
                        <SimpleButton color={ColorsTheme.PrimaryColor} title="Zobacz więcej..."
                        onPressFn={buttonFn.seeMoreRaportFn} />
                        <SimpleButton color={ColorsTheme.PrimaryColor} title="Dodaj"
                        onPressFn={buttonFn.addRaportItemFn} />
                    </ButtonGroup>
                </CardGroup>
                <CardGroup title="Uwagi">
                    <ButtonGroup>
                        <SimpleButton color={ColorsTheme.PrimaryColor} title="Zobacz więcej..."
                        onPressFn={buttonFn.seeMoreWarningFn} />
                    </ButtonGroup>
                </CardGroup>
                <CardGroup title="Zamówienie">
                    <ButtonGroup>
                        <SimpleButton color={ColorsTheme.PrimaryColor} title="Zobacz więcej..."
                        onPressFn={buttonFn.seeMoreOrderFn} />
                        <SimpleButton color={ColorsTheme.PrimaryColor} title="Wygeneruj"
                        onPressFn={buttonFn.generateOrderFn} />
                    </ButtonGroup>
                </CardGroup>
            </ScrollView>
        </View>
    );
};