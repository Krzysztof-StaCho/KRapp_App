import { View, ViewStyle } from "react-native";
import { ImageStyle } from "../../constants/BaseStyle";

type CardImageProps = {
    color: string
};

export const CardImage = ({ color }: CardImageProps) => {
    const modelStyle: ViewStyle = {
        backgroundColor: color,
        flex: 2
    };

    return (
        <View style={[ ImageStyle.CardImage, modelStyle ]}></View>
    );
};