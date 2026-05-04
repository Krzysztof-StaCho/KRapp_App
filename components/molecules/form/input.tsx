import { Variants } from "@/theme/components/variants";
import { Icon } from "@/theme/icons/icon";
import { IconName } from "@/theme/icons/iconMap";
import { useAppTheme } from "@/theme/themeProvider";
import { Typography } from "@/theme/typography";
import { ReactNode } from "react";
import { ColorValue, StyleSheet, Text, TextInput, TextInputEndEditingEvent, View, ViewStyle } from "react-native";

type InputProps = {
    label: string,
    outlined?: boolean,
    placeholder?: string,
    iconName?: IconName,
    rightComponent?: ReactNode,
    numLines?: number,
    onChangeHandler?: (val: string) => void,
    secure?: boolean,
    validate?: (e: TextInputEndEditingEvent) => void,
    errorMessage?: string,
    style?: {
        bgColor: ColorValue,
        iconColor: ColorValue,
        iconSize: number
    },
    value?: string
};

export const Input = ({
    label,
    outlined = false,
    placeholder,
    iconName,
    rightComponent,
    numLines = 1,
    onChangeHandler,
    secure = false,
    validate,
    errorMessage,
    style,
    value = ""
}: InputProps) => {
    const theme = useAppTheme();

    style = style ?? {
        bgColor: theme.body,
        iconColor: theme.text,
        iconSize: 24
    };
    const containerStyle: ViewStyle = {
        borderColor: (errorMessage) ? Variants['danger'].background : theme.border,
        backgroundColor: style.bgColor
    };
    const containerBorder: ViewStyle = outlined ? modelStyle.outlined : modelStyle.standart;

    const placeholderText = (placeholder) ? placeholder : `Wpisz ${label}`;

    return (
        <View style={modelStyle.wrapper}>
            <Text style={[Typography['Button'], modelStyle.label]}>{label}</Text>
            <View style={[modelStyle.container, containerBorder, containerStyle]}>
                {iconName && (
                    <Icon name={iconName} size={style.iconSize} color={style.iconColor} />
                )}
                <TextInput secureTextEntry={secure} placeholder={placeholderText}
                onChangeText={onChangeHandler} onEndEditing={validate} value={value}
                style={[Typography['Body'], modelStyle.textInput]} multiline={(numLines > 1) ? true : false} />
                {rightComponent}
            </View>
            <Text style={[Typography['BodyBold'], { color: Variants['danger'].background }]}>
                {errorMessage}
            </Text>
        </View>
    );
};

const modelStyle = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    label: {
        marginBottom: 4,
        textTransform: 'capitalize'
    },
    container: {
        padding: 5,
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    outlined: {
        borderRadius: 4,
        borderWidth: 1
    },
    standart: {
        borderBottomWidth: 1
    },
    textInput: {
        flex: 4
    }
});