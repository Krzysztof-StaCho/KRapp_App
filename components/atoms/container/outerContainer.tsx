import { useAppTheme } from "@/theme/themeProvider";
import { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ContainerProps = {
    children?: ReactNode
};

export const OuterContainer = ({children}: ContainerProps) => {
    const { primary } = useAppTheme();

    const style: ViewStyle = {
        flex: 1,
        backgroundColor: primary
    };

    return (
        <SafeAreaView style={style}>
            {children}
        </SafeAreaView>
    );
};