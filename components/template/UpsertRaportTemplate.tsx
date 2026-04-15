import { StyleSheet, Text } from "react-native";
import InnerContainer from "../atoms/InnerContainer";
import { PressableCard } from "../molecules/PressableCard";

export type UpsertRaportTemplateType = {
};

export const UpsertRaportTemplate = ({}: UpsertRaportTemplateType) => {
    const modelStyle = StyleSheet.create({
    });
    
    return (
        <InnerContainer>
            <Text>UpsertRaportScreen</Text>
            <PressableCard iconProp={{iconName: "appstore-add"}}>
                Test Pressable Card
            </PressableCard>
        </InnerContainer>
    );
};