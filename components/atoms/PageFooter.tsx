import { StyleSheet, View, Text } from "react-native";
import { TextStyle } from "../../utils/BaseStyle";
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
            color: theme.text
        }
    });

    return (
        <View style={modelStyle.viewStyle}>
            <Text style={[TextStyle.ParagraphText, modelStyle.textStyle]}>KRApp's Application</Text>
        </View>
    );
};