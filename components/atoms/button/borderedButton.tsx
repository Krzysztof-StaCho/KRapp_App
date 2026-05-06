import { Variants, VariantType } from "@/theme/components/variants";
import { Icon } from "@/theme/icons/icon";
import { IconName } from "@/theme/icons/iconMap";
import { Typography } from "@/theme/typography";
import React from "react";
import { ColorValue, Pressable, StyleSheet, Text, ViewStyle } from "react-native";

type ButtonProps = {
    iconName?: IconName,
    text: string,
    onPressFn?: () => void,
    variant?: VariantType,
    color?: ColorValue,
    style?: ViewStyle,
    disabled?: boolean
};

export const BorderedButton = ({
    iconName,
    text,
    onPressFn,
    variant = "neutral",
    color,
    style,
    disabled
}: ButtonProps) => {
    color = color ?? Variants[variant].background;

    return (
        <Pressable style={[modelStyle.container, {borderColor: color}, style]} onPress={onPressFn}
        android_ripple={{color: color, foreground: true}} disabled={disabled}>
            {iconName && (
                <Icon name={iconName} size={Typography['Caption'].fontSize} color={color} /> )}
            <Text style={{color: color}}>{text}</Text>
        </Pressable>
    );
};

const modelStyle = StyleSheet.create({
    container: {
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 10
    }
});