import { ColorValue, ScrollView, View } from "react-native";
import { ColorsTheme, ContainerStyle } from "../../utils/BaseStyle";
import { PageHeader } from "../atoms/PageHeader";
import { CardShelf } from "../molecules/CardShelf";
import { AntDesign } from "@expo/vector-icons";
import { PressableCardProps } from "../molecules/PressableCard";

type RowDataType = {
    title: string,
    color: ColorValue,
    iconName: keyof typeof AntDesign.glyphMap,
    onPressFn: () => void
}

export type HomePageTemplateType = {
    header: string,
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

export const HomePageTemplate = ({ header, rows }: HomePageTemplateType) => {
    return (
        <View style={ContainerStyle.InnerContainerStyle}>
            <PageHeader>{header}</PageHeader>
            <ScrollView style={{ backgroundColor: ColorsTheme.LightColor }}>
                {rows.map((item, index) => (
                    <CardShelf key={index} cardObj={item.data.map((item) => changeType(item))} />
                ))}
            </ScrollView>
        </View>
    );
};