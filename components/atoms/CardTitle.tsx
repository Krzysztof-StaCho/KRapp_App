import { Text, TextStyle } from "react-native";
import { Typography } from "../../utils/BaseStyle";
import { useTheme } from "../../utils/ThemeContext";

type CardTitleProps = {
    children: string
};

const CardTitle = ({ children }: CardTitleProps) => {
    const theme = useTheme();

    const modelStyle: TextStyle = {
        color: theme.primary,
        textAlign: "center"
    };

    return (
        <Text style={[Typography.H3, modelStyle]} numberOfLines={2}>{children}</Text>
    );
};

export default CardTitle;