import { Typography } from "@/theme/typography";
import { ColorValue, Text, TextStyle } from "react-native";

type FooterProps = {
    children?: string
    color: ColorValue
};

export const CardFooter = ({children, color}: FooterProps) => {
    return (
        <Text style={[Typography['H3'], style, { color: color }]} numberOfLines={2}>
            {children}
        </Text>
    );
};

const style: TextStyle = {
    textAlign: 'center'
};