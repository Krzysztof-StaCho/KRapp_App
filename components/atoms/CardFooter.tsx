import { Text, TextStyle } from "react-native";
import { Typography } from "../../utils/BaseStyle";
import { useTheme } from "../../utils/ThemeContext";

type CardFooterProps = {
    children: string
};

const CardFooter = ({ children }: CardFooterProps) => {
    const theme = useTheme();

    const modelStyle: TextStyle = {
        color: theme.primary,
        textAlign: "center"
    };

    return (
        <Text style={[Typography.Caption, modelStyle]} numberOfLines={2}>{children}</Text>
    );
};

export default CardFooter;