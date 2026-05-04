import { useAppTheme } from "@/theme/themeProvider";
import { ReactNode } from "react";
import { View, ViewStyle } from "react-native";

type ContainerProps = {
    children?: ReactNode
};

export const InnerContainer = ({children}: ContainerProps) => {
    const bodyColor = useAppTheme().body;

    return (
        <View style={[style, { backgroundColor: bodyColor }]}>
            {children}
        </View>
    );
};

const style: ViewStyle = {
    flex: 1,
    padding: 10
};