import { Pressable, ViewStyle } from "react-native"
import { CommonStyle } from "../../constants/BaseStyle";
import { CardImage } from "../atoms/CardImage";
import { CardTitle } from "../atoms/CardTitle";

export type PressableCardProps = {
    color: string,
    title: string
}

export const PressableCard = ({ color, title }: PressableCardProps) => {
    const modelStyle: ViewStyle = {
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: "column",
        gap: 10,
        flexGrow: 1
    };

    return (
        <Pressable style={[CommonStyle.FlexContainer, CommonStyle.Bordered, modelStyle]}>
            <CardImage color={color} />
            <CardTitle text={title} />
        </Pressable>
    );
}