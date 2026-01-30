import { Text, ViewStyle } from "react-native";
import { TextStyle } from "../../constants/BaseStyle";

type CardTitleProps = {
    text: string
};

export const CardTitle = ({ text }: CardTitleProps) => {
    const modelStyle: ViewStyle = {
        flex: 1,
        flexWrap: "wrap"
    };

    return (
        <Text style={[ TextStyle.CardTitle, modelStyle, {textAlign: 'center'} ]}>{text}</Text>
    );
};