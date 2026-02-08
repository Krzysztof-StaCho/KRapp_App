import { Pressable, ViewStyle } from "react-native"
import { CommonStyle } from "../../utils/BaseStyle";
import { CardImage, CardImageProps } from "../atoms/CardImage";
import { CardTitle } from "../atoms/CardTitle";

export type PressableCardProps = {
    iconProp: CardImageProps,
    children: string
}

export const PressableCard = ({ children, iconProp }: PressableCardProps) => {
    const modelStyle: ViewStyle = {
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: "column",
        gap: 10,
        flexGrow: 1
    };

    return (
        <Pressable style={[CommonStyle.FlexContainer, CommonStyle.Bordered, modelStyle]}>
            <CardImage color={iconProp.color} iconName={iconProp.iconName} />
            <CardTitle>{children}</CardTitle>
        </Pressable>
    );
}