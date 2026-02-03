import { ViewStyle, View, Text } from "react-native";
import { ColorsTheme, TextStyle } from "../../utils/BaseStyle";

export const PageFooter = () => {
    const modelStyle: ViewStyle = {
        padding: 10,
        backgroundColor: ColorsTheme.PrimaryColor
    };

    return (
        <View style={modelStyle}>
            <Text style={TextStyle.CardTitle}>KRApp's Application</Text>
        </View>
    );
};