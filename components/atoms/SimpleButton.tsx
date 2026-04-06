import { ColorValue, Pressable, StyleSheet, Text } from "react-native";
import { ContainerStyle, FontFamilies } from "../../utils/BaseStyle";
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
            color: color,
            fontSize: 18,
            fontFamily: FontFamilies.HeaderFamily
        }
    });

    return (
        <Pressable style={({pressed}) => pressed ? [modelStyle.pressable, ContainerStyle.PressedContainer] : modelStyle.pressable} onPress={onPressFn}>
            <Text style={modelStyle.text}>{title}</Text>
        </Pressable>
    );
};