import { Pressable, StyleSheet, Text } from "react-native";
import { ContainerStyle, FontFamilies } from "../../utils/BaseStyle";

export type SimpleButtonProps = {
    title: string,
    color: string,
    onPressFn?: () => void
};

export const SimpleButton = ({title, color, onPressFn}: SimpleButtonProps) => {
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