import { StyleSheet, View, Text } from "react-native";
import { ColorsTheme, TextStyle } from "../../utils/BaseStyle";

export const PageFooter = () => {
    const modelStyle = StyleSheet.create({
        viewStyle: {
            padding: 10,
            backgroundColor: ColorsTheme.PrimaryColor
        },
        textStyle: {
            textAlign: "center"
        }
    });

    return (
        <View style={modelStyle.viewStyle}>
            <Text style={[TextStyle.ParagraphText, modelStyle.textStyle]}>KRApp's Application</Text>
        </View>
    );
};