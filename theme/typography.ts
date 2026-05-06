import { TextStyle } from "react-native";

export type TypographyVariant = 'H1' | 'H2' | 'H3' | 'Body' | 'BodyBold' | 'Caption' | 'Button';

export const Typography: Record<TypographyVariant, TextStyle> = {
    H1: {
        fontFamily: 'System',
        fontSize: 28,
        fontWeight: "700",
        letterSpacing: -0.5
    },
    H2: {
        fontFamily: 'System',
        fontSize: 22,
        fontWeight: "600",
        letterSpacing: -0.3
    },
    H3: {
        fontFamily: 'System',
        fontSize: 16,
        fontWeight: "600"
    },
    Body: {
        fontFamily: 'System',
        fontSize: 14,
        fontWeight: "400"
    },
    BodyBold: {
        fontFamily: 'System',
        fontSize: 14,
        fontWeight: "600"
    },
    Caption: {
        fontFamily: 'System',
        fontSize: 12,
        fontWeight: "400",
        letterSpacing: 0.2
    },
    Button: {
        fontFamily: 'System',
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 0.5
    }
};