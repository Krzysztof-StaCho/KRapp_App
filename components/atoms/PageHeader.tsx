import { ViewStyle, View, Text } from "react-native";
import { ColorsTheme, TextStyle } from "../../constants/BaseStyle";

type PageHeaderProps = {
    title: string
};

export const PageHeader = ({title}: PageHeaderProps) => {
    const modelStyle: ViewStyle = {
        padding: 10,
        backgroundColor: ColorsTheme.PrimaryColor
    };

    return (
        <View style={modelStyle}>
            <Text style={TextStyle.HeaderText}>{title}</Text>
        </View>
    );
};