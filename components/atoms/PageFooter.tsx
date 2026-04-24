import { StyleSheet, View, Text } from "react-native";
import { Typography } from "../../utils/BaseStyle";
import { useTheme } from "../../utils/ThemeContext";

export const PageFooter = () => {
    const theme = useTheme();

    const modelStyle = StyleSheet.create({
        viewStyle: {
            padding: 10,
            backgroundColor: theme.primary
        },
        textStyle: {
            textAlign: "center",
            color: theme.primaryText
        }
    });

    return (
        <View style={modelStyle.viewStyle}>
            <Text style={[Typography.BodyBold, modelStyle.textStyle]}>KRApp's Application</Text>
        </View>
    );
};