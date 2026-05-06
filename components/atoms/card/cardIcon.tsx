import { Icon } from "@/theme/icons/icon";
import { IconName } from "@/theme/icons/iconMap";
import { useState } from "react";
import { ColorValue, LayoutChangeEvent, View, ViewStyle } from "react-native";

type IconProps = {
    color: ColorValue,
    borderColor: ColorValue,
    iconColor?: ColorValue,
    iconName?: IconName
};

export const CardIcon = ({color, borderColor, iconColor = "white", iconName}: IconProps) => {
    const [size, setSize] = useState(24);

    const layoutHandler = (e: LayoutChangeEvent) => {
        const { width, height } = e.nativeEvent.layout;

        //pick the smaller dimension to keep icon inside
        const iconSize = Math.min(width, height) * 0.6;
        setSize(iconSize);
    };

    return (
        <View style={[style, { backgroundColor: color, borderColor: borderColor }]}
        onLayout={layoutHandler}>
            {iconName && (
                <Icon name={iconName} size={size} color={iconColor} />
            )}
        </View>
    );
};

const style: ViewStyle = {
    aspectRatio: 2,
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderRadius: 15,
};