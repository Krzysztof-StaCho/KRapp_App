import { AntDesign } from "@expo/vector-icons";

export const IconMap = {
    area_chart: { lib: AntDesign, name: "area-chart" },
    close: { lib: AntDesign, name: "close" },
    delete: { lib: AntDesign, name: "delete" },
    check: { lib: AntDesign, name: "check" },
    arrow_right: { lib: AntDesign, name: "arrow-right" },
    more: { lib: AntDesign, name: "more" },
    bar_chart: { lib: AntDesign, name: "bar-chart" },
    setting: { lib: AntDesign, name: "setting" },
    account_book: { lib: AntDesign, name: "account-book" }
};

export type IconName = keyof typeof IconMap;