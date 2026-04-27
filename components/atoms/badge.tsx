import { Typography } from "@/theme/typography";
import { ColorValue, StyleSheet, Text, View } from "react-native";

type BadgeProps = {
    children: string,
    color: {
        background: ColorValue,
        text: ColorValue
    }
};

export const Badge = ({ children, color }: BadgeProps) => {
    return (
        <View style={[styles.container, { backgroundColor: color.background }]}>
            <Text style={[Typography['Caption'], { color: color.text }]}>
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