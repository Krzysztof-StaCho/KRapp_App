import { Text, TextStyle as Style } from "react-native";
import { TextStyle } from "../../utils/BaseStyle";
import { useTheme } from "../../utils/ThemeContext";

type CardTitleProps = {
    children: string
};

export const CardTitle = ({ children }: CardTitleProps) => {
    const theme = useTheme();

    const modelStyle: Style = {
        color: theme.primary
    }

    return (
        <Text style={[TextStyle.CardTitle, modelStyle]} numberOfLines={2}>{children}</Text>
    );
};