import { Variants } from "@/theme/components/variants";
import { Icon } from "@/theme/icons/icon";
import { ColorValue, Pressable, ViewStyle } from "react-native";

type ButtonProps = {
    onPressFn?: () => void,
    color?: ColorValue
    size: number
};

export const CloseBtn = ({onPressFn, color, size}: ButtonProps) => {
    color = color ?? Variants['neutral'].background;

    return (
        <Pressable style={style} onPress={onPressFn} android_ripple={{color: color, foreground: true}}>
            <Icon name="close" size={size} color={color} />
        </Pressable>
    );
};

const style: ViewStyle = {
    alignSelf: "baseline"
};