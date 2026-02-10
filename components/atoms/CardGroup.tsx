import { View, ViewStyle } from "react-native";
import { ColorsTheme, CommonStyle } from "../../utils/BaseStyle";
import { CardHeader } from "./CardHeader";

export type CardGroupProps = {
    title: string,
    children?: React.ReactNode
};

export const CardGroup = ({title, children}: CardGroupProps) => {
    const modelStyle: ViewStyle = {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: ColorsTheme.SecondaryColor,
        padding: 15,
        backgroundColor: ColorsTheme.LightColor
    };

    return (
        <View style={[modelStyle, CommonStyle.ShadowProp]}>
            <CardHeader>{title}</CardHeader>
            {children}
        </View>
    );
};