import { ColorValue, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ContainerStyle, TextStyle } from "../../utils/BaseStyle";
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

    const modelStyle = StyleSheet.create({
        view: {
            backgroundColor: color?.background ?? theme.primary,
            paddingVertical: 10,
            flexDirection: "row",
            borderRadius: 10
        },
        icon: {
            paddingHorizontal: 15,
            textAlign: "center",
            color: color?.text ?? theme.text,
            fontSize: 25
        },
        text: {
            textAlign: "center",
            paddingHorizontal: 5,
            color: color?.text ?? theme.text,
        },
        pressableTitle: {
            flex: 1,
            borderLeftWidth: 2,
            borderRightWidth: 2,
            borderColor: color?.text ?? theme.text
        }
    });

    return (
        <View style={modelStyle.view}>
            {/* Arrow Icon */}
            <AntDesign style={modelStyle.icon} name="arrow-right" />

            {/* Pressable Text */}
            <Pressable style={({pressed}) => pressed ? [modelStyle.pressableTitle, ContainerStyle.PressedContainer] : modelStyle.pressableTitle} onPress={navigateFn}>
                <Text style={[TextStyle.SectionTitle, modelStyle.text]} numberOfLines={2}>{children}</Text>
            </Pressable>

            {/* More Action Icon */}
            <Pressable style={({pressed}) => pressed ? ContainerStyle.PressedContainer : {}}
                onPress={moreActionFn}>
                <AntDesign style={modelStyle.icon} name="more" />
            </Pressable>
        </View>
    );
};