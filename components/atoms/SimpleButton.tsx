import { ColorValue, Pressable, StyleSheet, Text } from "react-native";
import { Typography } from "../../utils/BaseStyle";
import { useTheme } from "../../utils/ThemeContext";

export type SimpleButtonProps = {
    title: string,
    color?: ColorValue,
    onPressFn?: () => void
};

export const SimpleButton = ({title, color, onPressFn}: SimpleButtonProps) => {
    const theme = useTheme();

    color = color ?? theme.primary;

    const modelStyle = StyleSheet.create({
        pressable: {
            paddingHorizontal: 10,
            paddingVertical: 5
        },
        text: {
            color: color
        }
    });

    return (
        <Pressable android_ripple={{color: color, foreground: true}}
        style={modelStyle.pressable} onPress={onPressFn}>
            <Text style={[Typography.Button, modelStyle.text]}>{title}</Text>
        </Pressable>
    );
};