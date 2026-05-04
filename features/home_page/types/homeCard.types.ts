import { IconName } from "@/theme/icons/iconMap";
import { ColorValue } from "react-native";

export type HomeCard = {
    title: string,
    color: {
        background: ColorValue,
        text: ColorValue
    },
    iconName: IconName,
    onPressFn: () => void
};