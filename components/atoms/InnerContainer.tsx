import { View, ViewStyle } from "react-native";
import { useTheme } from "../../utils/ThemeContext";
import { ReactNode } from "react";

type InnerContainerType = {
    children?: ReactNode
};

const InnerContainer = ({children}: InnerContainerType) => {
    const bodyColor = useTheme().body;
    const modelStyle: ViewStyle = {
        flex: 1,
        backgroundColor: bodyColor,
        padding: 10
    };

    return (
        <View style={modelStyle}>
            {children}
        </View>
    );
};

export default InnerContainer;