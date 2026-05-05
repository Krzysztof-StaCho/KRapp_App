import { ButtonGroup } from "@/components/atoms/button/buttonGroup";
import { SimpleButton } from "@/components/atoms/button/simpleButton";
import { InnerContainer } from "@/components/atoms/container/innerContainer";
import { Card } from "@/components/molecules/card";
import { ScrollView, StyleSheet } from "react-native";

export type PageProps = {
    handlers: {
        seeMoreRaportFn: () => void,
        addRaportItemFn: () => void,
        runRaportFn: () => void,
        correctRaportFn: () => void,
        seeMoreWarningFn: () => void,
        editWarningFn: () => void,
        seeMoreOrderFn: () => void,
        generateOrderFn: () => void
    }
};

export const RaportOverviewTemplate = ({ handlers }: PageProps) => {
    return (
        <InnerContainer>
            <ScrollView style={style.scrollOuter} contentContainerStyle={style.scrollInner}>
                <Card title="Akcje"></Card>
                <Card title="Przegląd">
                    <ButtonGroup>
                        <SimpleButton text="Zobacz więcej..." onPressFn={handlers.seeMoreRaportFn} />
                        <SimpleButton text="Dodaj" onPressFn={handlers.addRaportItemFn} />
                    </ButtonGroup>
                </Card>
                <Card title="Raport">
                    <ButtonGroup>
                        <SimpleButton text="Wykonaj" onPressFn={handlers.runRaportFn} />
                        <SimpleButton text="Popraw" onPressFn={handlers.correctRaportFn} />
                    </ButtonGroup>
                </Card>
                <Card title="Uwagi">
                    <ButtonGroup>
                        <SimpleButton text="Zobacz więcej..." onPressFn={handlers.seeMoreWarningFn} />
                        <SimpleButton text="Edytuj" onPressFn={handlers.editWarningFn} />
                    </ButtonGroup>
                </Card>
                <Card title="Zamówienie">
                    <ButtonGroup>
                        <SimpleButton text="Zobacz więcej..." onPressFn={handlers.seeMoreOrderFn} />
                        <SimpleButton text="Wygeneruj" onPressFn={handlers.generateOrderFn} />
                    </ButtonGroup>
                </Card>
            </ScrollView>
        </InnerContainer>
    );
};

const style = StyleSheet.create({
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