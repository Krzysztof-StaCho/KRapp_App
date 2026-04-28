import { AntDesign } from "@expo/vector-icons";

export const IconMap = {
    area_chart: { lib: AntDesign, name: "area-chart" },
    close: { lib: AntDesign, name: "close" },
    delete: { lib: AntDesign, name: "delete" },
    check: { lib: AntDesign, name: "check" }
};

export type IconName = keyof typeof IconMap;