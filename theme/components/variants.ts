import { ColorValue } from "react-native";

export type VariantType = "primary" | "success" | "danger" | "warning" | "neutral";

export const Variants: Record<VariantType, { background: ColorValue, text: ColorValue }> = {
    primary: {
        background: "#0275d8",
        text: "#FFF"
    },
    success: {
        background: "#5cb85c",
        text: "#FFF"
    },
    danger: {
        background: "#d9534f",
        text: "#FFF"
    },
    warning: {
        background: "#f0ad4e",
        text: "#000"
    },
    neutral: {
        background: "#292b2c",
        text: "#FFF"
    }
}