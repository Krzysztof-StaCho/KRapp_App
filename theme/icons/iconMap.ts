import { AntDesign } from "@expo/vector-icons";

export const IconMap = {
    area_chart: { lib: AntDesign, name: "area-chart" },
    close: { lib: AntDesign, name: "close" }
};

export type IconName = keyof typeof IconMap;