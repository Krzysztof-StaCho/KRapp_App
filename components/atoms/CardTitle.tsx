import { Text } from "react-native";
import { TextStyle } from "../../utils/BaseStyle";

type CardTitleProps = {
    children: string
};

export const CardTitle = ({ children }: CardTitleProps) => {
    return (
        <Text style={TextStyle.CardTitle} numberOfLines={2}>{children}</Text>
    );
};