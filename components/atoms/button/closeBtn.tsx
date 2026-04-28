import { Icon } from "@/theme/icons/icon";
import { ColorValue, Pressable } from "react-native";

type ButtonProps = {
    onPressFn?: () => void,
    color: ColorValue,
    size: number
};

export const CloseBtn = ({onPressFn, color, size}: ButtonProps) => {
    return (
        <Pressable onPress={onPressFn} android_ripple={{color: color, foreground: true}}>
            <Icon name="close" size={size} color={color} />
        </Pressable>
    );
};