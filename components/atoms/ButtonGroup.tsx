import { ViewStyle, View } from "react-native";

type ButtonGroupProps = {
    children: React.ReactNode
};

const ButtonGroup = ({children}: ButtonGroupProps) => {
    const modelStyle: ViewStyle = {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    };

    return (
        <View style={modelStyle}>
            {children}
        </View>
    );
};

export default ButtonGroup;