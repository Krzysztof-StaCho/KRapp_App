import { ViewStyle, View } from "react-native";

type ButtonGroupProps = {
    style?: ViewStyle,
    children: React.ReactNode
};

const ButtonGroup = ({style, children}: ButtonGroupProps) => {
    const modelStyle: ViewStyle = {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    };

    return (
        <View style={[modelStyle, style]}>
            {children}
        </View>
    );
};

export default ButtonGroup;