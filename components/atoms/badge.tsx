import { Variants, VariantType } from "@/theme/components/variants";
import { Typography } from "@/theme/typography";
import { ColorValue, StyleSheet, Text, View } from "react-native";

type BadgeProps = {
    children: string,
    variant?: VariantType,
    color?: {
        background: ColorValue,
        text: ColorValue
    }
};

export const Badge = ({ children, variant = "neutral", color }: BadgeProps) => {
    const selectedColor = color ?? Variants[variant];

    return (
        <View style={[styles.container, { backgroundColor: selectedColor.background }]}>
            <Text style={[Typography['Caption'], { color: selectedColor.text }]}>
                { children }
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 999,
        paddingHorizontal: 10,
        paddingVertical: 4,
        alignSelf: "center",
    }
});