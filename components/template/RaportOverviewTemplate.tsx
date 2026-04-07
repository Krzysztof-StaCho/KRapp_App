import { ScrollView, StyleSheet, View } from "react-native";
import { ContainerStyle } from "../../utils/BaseStyle";

import Card from "../atoms/Card"
import ButtonGroup from "../atoms/ButtonGroup";
import { SimpleButton } from "../atoms/SimpleButton";

export type RaportOverviewTemplateType = {
    buttonFn: {
        seeMoreRaportFn: () => void,
        addRaportItemFn: () => void,
        seeMoreWarningFn: () => void,
        seeMoreOrderFn: () => void,
        generateOrderFn: () => void
    }
};

export const RaportOverviewTemplate = ({ buttonFn }: RaportOverviewTemplateType) => {
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
            <ScrollView style={modelStyle.scrollOuter} contentContainerStyle={modelStyle.scrollInner}>
                <Card title="Akcje"></Card>
                <Card title="Przegląd">
                    <ButtonGroup>
                        <SimpleButton title="Zobacz więcej..." onPressFn={buttonFn.seeMoreRaportFn} />
                        <SimpleButton title="Dodaj" onPressFn={buttonFn.addRaportItemFn} />
                    </ButtonGroup>
                </Card>
                <Card title="Uwagi">
                    <ButtonGroup>
                        <SimpleButton title="Zobacz więcej..." onPressFn={buttonFn.seeMoreWarningFn} />
                    </ButtonGroup>
                </Card>
                <Card title="Zamówienie">
                    <ButtonGroup>
                        <SimpleButton title="Zobacz więcej..." onPressFn={buttonFn.seeMoreOrderFn} />
                        <SimpleButton title="Wygeneruj" onPressFn={buttonFn.generateOrderFn} />
                    </ButtonGroup>
                </Card>
            </ScrollView>
        </View>
    );
};