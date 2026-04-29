import { Variants, VariantType } from "@/theme/components/variants";
import { Icon } from "@/theme/icons/icon";
import { useAppTheme } from "@/theme/themeProvider";
import { Typography } from "@/theme/typography";
import { ColorValue, Pressable, StyleSheet, Text, View } from "react-native";

type SelectProps = {
    children?: string,
    variant?: VariantType | 'theme',
    color?: {
        background: ColorValue,
        text: ColorValue
    },
    navigateFn?: () => void,
    moreActionFn?: () => void
};

export const SelectItem = ({children, variant = 'theme', color, navigateFn, moreActionFn}: SelectProps) => {
    const theme = useAppTheme();

    if (variant === 'theme')
        color = color ?? { background: theme.primary, text: theme.primaryText };
    else
        color = color ?? Variants[variant];

    return (
        <View style={[style.view, { backgroundColor: color.background }]}>
            {/* Arrow Icon */}
            <View style={style.icon}>
                <Icon name="arrow_right" size={25} color={color.text} />
            </View>

            {/* Pressable Text */}
            <Pressable android_ripple={{color: color.text, foreground: true}} onPress={navigateFn}
            style={[style.pressableTitle, { borderColor: color.text }]}>
                <Text style={[Typography['H2'], style.text, { color: color.text }]} numberOfLines={2}>
                    {children}
                </Text>
            </Pressable>

            {/* More action icon */}
            <Pressable android_ripple={{color: color.text, foreground: true}} onPress={moreActionFn}
            style={style.icon}>
                <Icon name="more" size={25} color={color.text} />
            </Pressable>
        </View>
    );
};

const style = StyleSheet.create({
    view: {
        paddingVertical: 10,
        flexDirection: "row",
        borderRadius: 10
    },
    icon: {
        paddingHorizontal: 15,
        textAlign: "center",
        marginVertical: "auto"
    },
    text: {
        textAlign: "center",
        paddingHorizontal: 5
    },
    pressableTitle: {
        flex: 1,
        borderLeftWidth: 2,
        borderRightWidth: 2,
    }
});