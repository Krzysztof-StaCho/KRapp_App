import { Pressable, ViewStyle } from "react-native"
import { CommonStyle } from "../../utils/BaseStyle";
import { CardIcon, CardIconProps } from "../atoms/CardIcon";
import CardTitle from "../atoms/CardTitle";

export type PressableCardProps = {
    iconProp: CardIconProps,
    children: string,
    onPressFn?: () => void
}

export const PressableCard = ({ children, iconProp, onPressFn }: PressableCardProps) => {
    const modelStyle: ViewStyle = {
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: "column",
        gap: 10,
        flexGrow: 1
    };

    return (
        <Pressable style={[CommonStyle.FlexContainer, CommonStyle.Bordered, modelStyle]}
        onPress={onPressFn}>
            <CardIcon color={iconProp.color} iconName={iconProp.iconName} />
            <CardTitle>{children}</CardTitle>
        </Pressable>
    );
}