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
                <PressableCard.Title>Test Pressable Card</PressableCard.Title>
                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aut aliquid enim eaque dolore? Autem necessitatibus sequi quia, reiciendis odit adipisci rerum esse voluptatem facilis, alias incidunt aut molestiae asperiores harum officia, molestias nemo similique reprehenderit delectus itaque. Eos rem optio consectetur corrupti, est quisquam velit facilis! Qui, placeat maiores!</Text>
                <PressableCard.Footer>Test footer</PressableCard.Footer>
            </PressableCard>
        </InnerContainer>
    );
};