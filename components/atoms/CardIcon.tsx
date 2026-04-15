import { ColorValue, LayoutChangeEvent, View, ViewStyle } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "../../utils/ThemeContext";
import { useState } from "react";

export type CardIconProps = {
    color?: ColorValue,
    iconName?: keyof typeof AntDesign.glyphMap
};

export const CardIcon = ({ color, iconName }: CardIconProps) => {
    const theme = useTheme();
    const [size, setSize] = useState(24);

    const layoutHandler = (e: LayoutChangeEvent) => {
        const { width, height } = e.nativeEvent.layout;

        //pick the smaller dimension to keep icon inside
        const iconSize = Math.min(width, height) * 0.6;
        setSize(iconSize);
    };

    const modelStyle: ViewStyle = {
        backgroundColor: color ?? theme.primary,
        aspectRatio: 2,
        justifyContent: "center",
        alignItems: "center",

        borderWidth: 1,
        borderRadius: 15,
        borderColor: theme.border,
    };

    return (
        <View style={modelStyle} onLayout={layoutHandler}>
            { iconName ?
            <AntDesign style={{margin: "auto"}} name={iconName} size={size} color="white" /> : <></> }
        </View>
    );
};