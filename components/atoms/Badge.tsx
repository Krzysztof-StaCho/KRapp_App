import { ColorValue, StyleSheet, Text, View } from "react-native"
import { Typography } from "../../utils/BaseStyle";

type BadgeProps = {
    text: string,
    color: {
        background: ColorValue,
        text: ColorValue
    }
};

export const Badge = ({ text, color }: BadgeProps) => {
    const modelStyle = StyleSheet.create({
        badgeContainer: {
            backgroundColor: color.background,
            borderRadius: 5,
            padding: 5,
            alignSelf: "center",
            textAlignVertical: "center"
        },
        text: {
            color: color.text
        }
    });

    return (
        <View style={modelStyle.badgeContainer}>
            <Text style={[Typography.Caption, modelStyle.text]}>{text}</Text>
        </View>
    );
};