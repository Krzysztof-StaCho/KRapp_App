import { Text } from "react-native";
import { TextStyle } from "../../constants/BaseStyle";

type CardTitleProps = {
    text: string
};

export const CardTitle = ({ text }: CardTitleProps) => {
    return (
        <Text style={TextStyle.CardTitle} numberOfLines={2}>{text}</Text>
    );
};