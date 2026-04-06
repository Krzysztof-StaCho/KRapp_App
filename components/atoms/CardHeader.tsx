import { Text, ViewStyle } from "react-native";
import { TextStyle } from "../../utils/BaseStyle";
import { useTheme } from "../../utils/ThemeContext";

type CardHeaderProps = {
    children: string
};

const CardHeader = ({ children }: CardHeaderProps) => {
    const theme = useTheme();

    const modelStyle: ViewStyle = {
        borderColor: theme.border,
        borderBottomWidth: 1,
        marginBottom: 10
    };

    return (
        <Text style={[TextStyle.SectionTitle, modelStyle]} numberOfLines={1}>
            {children}
        </Text>
    );
};

export default CardHeader;