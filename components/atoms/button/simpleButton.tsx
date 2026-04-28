import { Variants, VariantType } from "@/theme/components/variants";
import { useAppTheme } from "@/theme/themeProvider";
import { Typography } from "@/theme/typography";
import { ColorValue, Pressable, StyleSheet, Text, ViewStyle } from "react-native";

type ButtonProps = {
    text: string,
    onPressFn?: () => void,
    variant?: VariantType | 'theme',
    color?: ColorValue,
    style?: ViewStyle,
    disabled?: boolean
};

export const SimpleButton = ({
    text,
    onPressFn,
    variant = 'theme',
    color,
    style,
    disabled
}: ButtonProps) => {
    const theme = useAppTheme();

    if (variant === 'theme')
        color = color ?? theme.primary;
    else
        color = color ?? Variants[variant].background;

    return (
        <Pressable android_ripple={{color: color, foreground: true}}
        style={[modelStyle.pressable, style, {  }]} onPress={onPressFn} disabled={disabled}>
            <Text style={[Typography['Button'], modelStyle.text, {color: color}]}>{text}</Text>
        </Pressable>
    );
};

const modelStyle = StyleSheet.create({
    pressable: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    text: {
        textAlign: "center"
    }
});