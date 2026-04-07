import { View, ViewStyle } from "react-native";
import { CommonStyle } from "../../utils/BaseStyle";
import { useTheme } from "../../utils/ThemeContext";

import CardHeader from "./CardHeader";

type CardGroupProps = {
    title: string,
    children?: React.ReactNode
};

const CardGroup = ({title, children}: CardGroupProps) => {
    const theme = useTheme();

    const modelStyle: ViewStyle = {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme.border,
        padding: 15,
        backgroundColor: theme.light
    };

    return (
        <View style={[modelStyle, CommonStyle.ShadowProp]}>
            <CardHeader>{title}</CardHeader>
            {children}
        </View>
    );
};

export default CardGroup;