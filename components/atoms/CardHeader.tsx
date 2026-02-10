import { Text, ViewStyle } from "react-native";
import { ColorsTheme, TextStyle } from "../../utils/BaseStyle";

type CardHeaderProps = {
    children: string
};

export const CardHeader = ({ children }: CardHeaderProps) => {
    const modelStyle: ViewStyle = {
        borderColor: ColorsTheme.SecondaryColor,
        borderBottomWidth: 1,
        marginBottom: 10
    };

    return (
        <Text style={[TextStyle.ParagraphText, modelStyle]} numberOfLines={2}>
            {children}
        </Text>
    );
};