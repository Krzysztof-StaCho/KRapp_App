import { Pressable, StyleSheet, Text } from "react-native";
import { ContainerStyle, FontFamilies } from "../../utils/BaseStyle";

export type SimpleButtonProps = {
    title: string,
    color: string
};

export const SimpleButton = ({title, color}: SimpleButtonProps) => {
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
        <Pressable style={({pressed}) => pressed ? [modelStyle.pressable, ContainerStyle.PressedContainer] : modelStyle.pressable}>
            <Text style={modelStyle.text}>{title}</Text>
        </Pressable>
    );
};