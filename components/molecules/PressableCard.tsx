import { Pressable, PressableAndroidRippleConfig, StyleSheet, View } from "react-native"
import { CardIcon, CardIconProps } from "../atoms/CardIcon";
import CardTitle from "../atoms/CardTitle";
import React, { ReactElement, ReactNode } from "react";
import { useTheme } from "../../utils/ThemeContext";
import CardFooter from "../atoms/CardFooter";

export type CardBaseProps = {
    iconProp: CardIconProps,
    children: ReactNode,
    onPressFn?: () => void
}

//--- Subcomponents types ---
type CardTitleProps = {
    children: string
};
type CardFooterProps = {
    children: string
};

const CardBase = ({ children, iconProp, onPressFn }: CardBaseProps) => {
    const items = React.Children.toArray(children);

    let title: ReactElement<CardTitleProps> | null = null;
    let footer: ReactElement<CardFooterProps> | null = null;
    const body: ReactNode[] = [];

    items.forEach((child) => {
        if (!React.isValidElement(child)) return;

        if ((child.type as any).isCardTitle)
            title = child as ReactElement<CardTitleProps>;
        else if ((child.type as any).isCardFooter)
            footer = child as ReactElement<CardFooterProps>;
        else
            body.push(child);
    });

    const showTitleSeparator = title && body.length > 0;
    const showFooterSeparator = footer && body.length > 0;

    const theme = useTheme();
    const modelStyle = StyleSheet.create({
        pressable: {
            flex: 1,
            paddingVertical: 10,
            paddingHorizontal: 15,
            flexDirection: "column",
            gap: 10,
            flexGrow: 1,

            borderWidth: 1,
            borderRadius: 15,
            borderColor: theme.border
        },
        contentWrapper: {
            flex: 1,
            justifyContent: "space-between"
        },
        separator: {
            height: 1,
            backgroundColor: theme.primary
        },
        body: {
            flexShrink: 1
        }
    });
    const pressedStyle: PressableAndroidRippleConfig = {
        color: theme.primary,
        foreground: true
    };

    return (
        <Pressable android_ripple={onPressFn ? pressedStyle : null} style={modelStyle.pressable}
        onPress={onPressFn}>
            <CardIcon {...iconProp} />
            
            <View style={modelStyle.contentWrapper}>
                {/* Title */}
                {title && (
                    <View>
                        {title}
                        {showTitleSeparator && <View style={modelStyle.separator}></View>}
                    </View>
                )}

                {/* Body */}
                {body.length == 0 ? null : (
                    <View style={modelStyle.body}>
                        {body}
                    </View>
                )}

                {/* Footer */}
                {footer && (
                    <View>
                        {showFooterSeparator && <View style={modelStyle.separator}></View>}
                        {footer}
                    </View>
                )}
            </View>
        </Pressable>
    );
}

const MCardTitle: React.FC<CardTitleProps> & { isCardTitle?: boolean } = ({ children }) => {
    return <CardTitle>{children}</CardTitle>;
};
MCardTitle.isCardTitle = true;

const MCardFooter: React.FC<CardFooterProps> & { isCardFooter?: boolean } = ({ children }) => {
    return <CardFooter>{children}</CardFooter>;
};
MCardFooter.isCardFooter = true;

export const PressableCard = Object.assign(CardBase, {
    Title: MCardTitle,
    Footer: MCardFooter
});