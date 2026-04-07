import { ColorValue, ScrollView, View } from "react-native";
import { ContainerStyle } from "../../utils/BaseStyle";
import { PageHeader } from "../atoms/PageHeader";
import { CardShelf } from "../molecules/CardShelf";
import { AntDesign } from "@expo/vector-icons";
import { PressableCardProps } from "../molecules/PressableCard";
import { useTheme } from "../../utils/ThemeContext";

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

function changeType(item: RowDataType): PressableCardProps {
    return {
        children: item.title,
        iconProp: {
            color: item.color,
            iconName: item.iconName
        },
        onPressFn: item.onPressFn
    };
}

export const HomePageTemplate = ({ rows }: HomePageTemplateType) => {
    return (
        <View style={ContainerStyle.InnerContainerStyle}>
            <ScrollView>
                {rows.map((item, index) => (
                    <CardShelf key={index} cardObj={item.data.map((item) => changeType(item))} />
                ))}
            </ScrollView>
        </View>
    );
};