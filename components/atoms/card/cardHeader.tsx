import { Typography } from "@/theme/typography";
import { ColorValue, Text, TextStyle } from "react-native";

type HeaderProps = {
    children?: string,
    color: ColorValue,
    borderColor: ColorValue,
    centered?: boolean
};

export const CardHeader = ({children, color, borderColor, centered}: HeaderProps) => {
    const innerStyle: TextStyle = {
        color: color, 
        borderBottomColor: borderColor,
        textAlign: centered ? "center" : "auto"
    };

    return (
        <Text style={[Typography['H2'], style, innerStyle]}>
            {children}
        </Text>
    );
};

const style: TextStyle = {
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10
};