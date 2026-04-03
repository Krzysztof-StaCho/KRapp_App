import { ColorValue, View, ViewStyle } from "react-native";
import { ImageStyle } from "../../utils/BaseStyle";
import { AntDesign } from "@expo/vector-icons";

export type CardImageProps = {
    color: ColorValue,
    iconName?: keyof typeof AntDesign.glyphMap
};

export const CardImage = ({ color, iconName }: CardImageProps) => {
    const modelStyle: ViewStyle = {
        backgroundColor: color,
        aspectRatio: 2
    };

    return (
        <View style={[ ImageStyle.CardImage, modelStyle ]}>
            { iconName ?
            <AntDesign style={{margin: "auto"}} name={iconName} size={24} color="white" /> : <></> }
        </View>
    );
};