import { useAppTheme } from "@/theme/themeProvider";
import { Typography } from "@/theme/typography";
import { StyleSheet, Text, View } from "react-native";

export const PageFooter = () => {
    const theme = useAppTheme();

    return (
        <View style={[style.viewStyle, { backgroundColor: theme.primary }]}>
            <Text style={[Typography['BodyBold'], style.textStyle, { color: theme.primaryText }]}>
                KRApp&apos;s Application
            </Text>
        </View>
    );
};

const style = StyleSheet.create({
    viewStyle: {
        padding: 10,
    },
    textStyle: {
        textAlign: "center"
    }
});