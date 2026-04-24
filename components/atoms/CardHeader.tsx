import { Text, TextStyle as Style } from "react-native";
import { Typography } from "../../utils/BaseStyle";
import { useTheme } from "../../utils/ThemeContext";

type CardHeaderProps = {
    children: string
};

const CardHeader = ({ children }: CardHeaderProps) => {
    const theme = useTheme();

    const modelStyle: Style = {
        borderColor: theme.border,
        borderBottomWidth: 1,
        marginBottom: 10
    };

    return (
        <Text style={[Typography.H2, modelStyle]} numberOfLines={1}>
            {children}
        </Text>
    );
};

export default CardHeader;