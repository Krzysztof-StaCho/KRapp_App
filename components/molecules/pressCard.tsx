import { IconName } from "@/theme/icons/iconMap";
import { useAppTheme } from "@/theme/themeProvider";
import React, { ReactElement, ReactNode } from "react";
import { ColorValue, Pressable, PressableAndroidRippleConfig, StyleSheet, View } from "react-native";
import { CardIcon } from "../atoms/card/cardIcon";
import { CardTitle } from "../atoms/card/cardTitle";
import { CardFooter } from "../atoms/card/cardFooter";

type BaseProps = {
    children: ReactNode,
    onPressFn?: () => void,
    iconName: IconName,
    color?: {
        bg: ColorValue,
        icon: ColorValue
    }
};

type FooterProps = {
    children: string
};

type TitleProps = {
    children: string
};

const CardBase = ({children, onPressFn, iconName, color}: BaseProps) => {
    const items = React.Children.toArray(children);

    let title: ReactElement<TitleProps> | null = null;
    let footer: ReactElement<FooterProps> | null = null;
    const body: ReactNode[] = [];

    items.forEach((child) => {
        if (!React.isValidElement(child)) return;

        if ((child.type as any).isCardTitle)
            title = child as ReactElement<TitleProps>;
        else if ((child.type as any).isCardFooter)
            footer = child as ReactElement<FooterProps>;
        else
            body.push(child);
    });

    const theme = useAppTheme();
    color = color ?? { bg: theme.primary, icon: theme.primaryText };

    const pressedStyle: PressableAndroidRippleConfig = {
        color: color.bg,
        foreground: true
    };

    return (
        <Pressable android_ripple={onPressFn ? pressedStyle : null}
        style={[style.pressable, { borderColor: theme.border }]} onPress={onPressFn}>
            <CardIcon iconName={iconName} color={color.bg} borderColor={theme.border}
            iconColor={color.icon} />

            <View style={style.contentWrapper}>
                {/* Title */}
                {title}

                {/* Body */}
                {body.length === 0 ? null : (
                    <View style={style.body}>
                        {body}
                    </View>
                )}

                {/* Footer */}
                {footer}
            </View>
        </Pressable>
    );
};

const CardTitleM: React.FC<TitleProps> & { isCardTitle?: boolean } = ({ children }) => {
    return <CardTitle color={useAppTheme().primary}>{children}</CardTitle>
};
CardTitleM.isCardTitle = true;

const CardFooterM: React.FC<FooterProps> & { isCardFooter?: boolean } = ({ children }) => {
    return <CardFooter color={useAppTheme().primary}>{children}</CardFooter>
};
CardFooterM.isCardFooter = true;

export const PressCard = Object.assign(CardBase, {
    Title: CardTitleM,
    Footer: CardFooterM
});

const style = StyleSheet.create({
    pressable: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: "column",
        gap: 10,
        flexGrow: 1,

        borderWidth: 1,
        borderRadius: 15
    },
    contentWrapper: {
        flex: 1,
        justifyContent: "space-between"
    },
    body: {
        flexShrink: 1
    }
});