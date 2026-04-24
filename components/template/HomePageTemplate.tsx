import { ColorValue, ScrollView, View } from "react-native";
import InnerContainer from "../atoms/InnerContainer";
import CardShelf from "../molecules/CardShelf";
import { AntDesign } from "@expo/vector-icons";
import { CardBaseProps, PressableCard } from "../molecules/PressableCard";

type RowDataType = {
    title: string,
    color: ColorValue,
    iconName: keyof typeof AntDesign.glyphMap,
    onPressFn: () => void
}

export type HomePageTemplateType = {
    rows: {
        data: RowDataType[]
    }[]
};

function changeType(item: RowDataType): CardBaseProps {
    return {
        children: <PressableCard.Title>{item.title}</PressableCard.Title>,
        iconProp: {
            color: item.color,
            iconName: item.iconName
        },
        onPressFn: item.onPressFn
    };
}

export const HomePageTemplate = ({ rows }: HomePageTemplateType) => {
    return (
        <InnerContainer>
            <ScrollView>
                {rows.map((item, index) => (
                    <CardShelf key={index} cardObj={item.data.map((item) => changeType(item))} />
                ))}
            </ScrollView>
        </InnerContainer>
    );
};