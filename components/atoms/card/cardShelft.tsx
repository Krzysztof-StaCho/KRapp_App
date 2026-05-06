import { useAppTheme } from "@/theme/themeProvider";
import { ReactNode } from "react";
import { View, ViewStyle } from "react-native";

type ShelfProps = {
    children?: ReactNode
};

export const CardShelf = ({children}: ShelfProps) => {
    const theme = useAppTheme();

    return (
        <View style={[style, { borderColor: theme.border }]}>
            {children}
        </View>
    );
};

const style: ViewStyle = {
    gap: 10,
    marginHorizontal: 30,
    flexWrap: "wrap",
    paddingVertical: 10,
    borderTopWidth: 2,
    flex: 1,
    flexDirection: "row"
};