import { ColorValue, StyleSheet, Text, TextInput, TextInputEndEditingEvent, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { CommonColors, Typography } from "../../utils/BaseStyle";
import { useTheme } from "../../utils/ThemeContext";
import { ReactNode } from "react";

type InputProps = {
    label: string,
    outlined?: boolean,
    placeholder?: string,
    iconName?: keyof typeof AntDesign.glyphMap,
    rightComponent?: ReactNode,
    numLines?: number,
    onChangeHandler: (val: string) => void,
    secure?: boolean,
    validate?: (e: TextInputEndEditingEvent) => void,
    errorMessage?: string,
    style?: {
        bgColor: ColorValue,
        iconColor: ColorValue,
        iconSize: number
    }
};

const Input = ({
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
    style
}: InputProps) => {
    const theme = useTheme();

    style = style ?? {
        bgColor: theme.body,
        iconColor: theme.text,
        iconSize: 24
    };

    const styles = StyleSheet.create({
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
            backgroundColor: style.bgColor,
            gap: 5
        },
        outlined: {
            borderColor: (errorMessage) ? CommonColors.error : theme.border,
            borderRadius: 4,
            borderWidth: 1
        },
        standart: {
            borderBottomColor: (errorMessage) ? CommonColors.error : theme.border,
            borderBottomWidth: 1
        },
        icon: {},
        error: {
            color: CommonColors.error
        },
        textInput: {
            flex: 4
        }
    });

    const containerBorder = outlined ? styles.outlined : styles.standart;

    const placeholderText = (placeholder) ? placeholder : `Wpisz ${label}`;

    return (
        <View style={styles.wrapper}>
            <Text style={[Typography.Button, styles.label]}>{label}</Text>
            <View style={[styles.container, containerBorder]}>
                {iconName ? (
                    <AntDesign style={styles.icon} name={iconName}
                    size={style.iconSize} color={style.iconColor} />
                ) : undefined}
                <TextInput secureTextEntry={secure} placeholder={placeholderText}
                onChangeText={onChangeHandler} onEndEditing={validate}
                style={[Typography.Body, styles.textInput]} multiline={numLines > 1 ? true : false} />
                {rightComponent}
            </View>
            <Text style={[Typography.BodyBold, styles.error]}>{errorMessage}</Text>
        </View>
    );
};

export default Input;