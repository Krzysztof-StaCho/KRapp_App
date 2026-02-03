import { Text } from "react-native";
import { TextStyle } from "../../utils/BaseStyle";

type CardTitleProps = {
    text: string
};

export const CardTitle = ({ text }: CardTitleProps) => {
    return (
        <Text style={TextStyle.CardTitle} numberOfLines={2}>{text}</Text>
    );
};