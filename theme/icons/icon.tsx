import { ColorValue } from "react-native";
import { IconMap, IconName } from "./iconMap";

type Props = {
    name: IconName,
    size?: number,
    color?: ColorValue
};

export const Icon = ({ name, size = 16, color = "#000" }: Props) => {
    const { lib: IconLib, name: iconName } = IconMap[name];

    return (
        <IconLib name={iconName as any} size={size} color={color} />
    );
};