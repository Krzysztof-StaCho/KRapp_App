import { ColorValue, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ContainerStyle, Typography } from "../../utils/BaseStyle";
import { useTheme } from "../../utils/ThemeContext";

export type SelectItemProps = {
    children: string,
    color?: {
        background: ColorValue,
        text: ColorValue
    },
    navigateFn?: () => void,
    moreActionFn?: () => void
};

export const SelectItem = ({children, color, navigateFn, moreActionFn}: SelectItemProps) => {
    const theme = useTheme();

    color = color ?? {
        background: theme.primary,
        text: theme.text
    };

    const modelStyle = StyleSheet.create({
        view: {
            backgroundColor: color.background,
            paddingVertical: 10,
            flexDirection: "row",
            borderRadius: 10
        },
        icon: {
            paddingHorizontal: 15,
            textAlign: "center",
            color: color.text,
            fontSize: 25
        },
        text: {
            textAlign: "center",
            paddingHorizontal: 5,
            color: color.text,
        },
        pressableTitle: {
            flex: 1,
            borderLeftWidth: 2,
            borderRightWidth: 2,
            borderColor: color.text
        }
    });

    return (
        <View style={modelStyle.view}>
            {/* Arrow Icon */}
            <AntDesign style={modelStyle.icon} name="arrow-right" />

            {/* Pressable Text */}
            <Pressable android_ripple={{color: color.text, foreground: true}}
            style={modelStyle.pressableTitle} onPress={navigateFn}>
                <Text style={[Typography.H2, modelStyle.text]} numberOfLines={2}>{children}</Text>
            </Pressable>

            {/* More Action Icon */}
            <Pressable android_ripple={{color: color.text, foreground: true}}
                onPress={moreActionFn}>
                <AntDesign style={modelStyle.icon} name="more" />
            </Pressable>
        </View>
    );
};