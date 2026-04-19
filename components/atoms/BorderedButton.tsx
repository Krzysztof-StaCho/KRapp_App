import { ColorValue, Pressable, StyleSheet, Text, ViewStyle } from "react-native";
import { Typography } from "../../utils/BaseStyle";
import { AntDesign } from "@expo/vector-icons";

type BorderedButtonProps = {
    iconName?: keyof typeof AntDesign.glyphMap,
    text: string,
    onPressFn: () => void,
    color: ColorValue,
    style?: ViewStyle
};

export const BorderedButton = ({ iconName, text, onPressFn, color, style }: BorderedButtonProps) => {
    const modelStyle = StyleSheet.create({
        container: {
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 5,
            borderWidth: 2,
            borderColor: color,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 10
        },
        icon: {
            color: color,
            fontSize: Typography.Button.fontSize
        },
        text: {
            color: color
        }
    });

    return (
        <Pressable style={[modelStyle.container, style]} onPress={onPressFn}
        android_ripple={{color: color , foreground: true}}>
            {iconName && <AntDesign name={iconName} style={modelStyle.icon} /> }
            <Text style={modelStyle.text}>{text}</Text>
        </Pressable>
    );
};