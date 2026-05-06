import { Variants, VariantType } from "@/theme/components/variants";
import { Typography } from "@/theme/typography";
import { Text, TextStyle } from "react-native";

type ErrorProps = {
    children?: string,
    variant?: VariantType
};

export const ErrorMessage = ({children, variant = "danger"}: ErrorProps) => {
    const selectedColors = Variants[variant];

    return (
        <Text style={[Typography['H1'], styles, { color: selectedColors.background }]}>
            {children}
        </Text>
    );
};

const styles: TextStyle = {
    textAlign: "center",
    fontWeight: "bold"
};