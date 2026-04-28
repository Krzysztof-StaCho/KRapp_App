import { useAppTheme } from "@/theme/themeProvider";
import { Typography } from "@/theme/typography";
import { ReactNode } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Badge } from "../atoms/badge";
import { CloseBtn } from "../atoms/button/closeBtn";
import { Variants } from "@/theme/components/variants";
import { ButtonGroup } from "../atoms/button/buttonGroup";
import { BorderedButton } from "../atoms/button/borderedButton";

export type WrapperProps = {
    children?: ReactNode,

    title: string,
    type: string,

    closeFn: () => void,
    deleteFn?: () => void,
    confirmFn: () => void
};

export const FormWrapper = ({
    children,
    title,
    type,
    closeFn,
    deleteFn,
    confirmFn
}: WrapperProps) => {
    const theme = useAppTheme();

    return (
        <View style={style.formWrapper}>
            <View style={style.headerContainer}>
                <View style={style.titleContainer}>
                    <Text style={[Typography['H1'], { color: theme.primary }]}>
                        {title}
                    </Text>
                    <Badge color={{background: theme.primary, text: theme.primaryText}}>{type}</Badge>
                </View>
                <CloseBtn onPressFn={closeFn} size={24} />
            </View>
            <ScrollView style={style.outerContentWrapper} contentContainerStyle={style.innerContentWrapper}>
                {children}
            </ScrollView>
            <View style={style.buttonContainer}>
                <ButtonGroup variant="flex-end">
                    {deleteFn && (
                        <BorderedButton text="Usuń" onPressFn={deleteFn} variant="danger" iconName="delete" />
                    )}
                    <BorderedButton text="Anuluj" onPressFn={closeFn} variant="neutral" iconName="close" />
                    <BorderedButton text="Zatwierdź" onPressFn={confirmFn} color={theme.primary} iconName="check" />
                </ButtonGroup>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    formWrapper: {
        flex: 1
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        marginBottom: 20
    },
    titleContainer: {
        flexDirection: "row",
        gap: 10
    },
    outerContentWrapper: {
        flex: 1
    },
    innerContentWrapper: {
        flexDirection: "column",
        gap: 15
    },
    buttonContainer: {
        marginTop: 20,
    }
});