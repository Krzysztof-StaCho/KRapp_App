import { Text, TextStyle as Style } from "react-native";
import { Typography } from "../../utils/BaseStyle";
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
        <Text style={[Typography.Caption, modelStyle]} numberOfLines={2}>{children}</Text>
    );
};