import { ViewStyle, View, Text } from "react-native";
import { ColorsTheme, TextStyle } from "../../utils/BaseStyle";

type PageHeaderProps = {
    children: string
};

export const PageHeader = ({children}: PageHeaderProps) => {
    const modelStyle: ViewStyle = {
        padding: 10,
        backgroundColor: ColorsTheme.PrimaryColor
    };

    return (
        <View style={modelStyle}>
            <Text style={TextStyle.HeaderText}>{children}</Text>
        </View>
    );
};