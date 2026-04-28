import { Typography } from "@/theme/typography";
import { ColorValue, Text, TextStyle } from "react-native";

type TitleProps = {
    children?: string,
    color: ColorValue
};

export const CardTitle = ({children, color}: TitleProps) => {
    return (
        <Text style={[Typography['H2'], style, { color: color }]} numberOfLines={2}>
            {children}
        </Text>
    );
};

const style: TextStyle = {
    textAlign: "center"
};