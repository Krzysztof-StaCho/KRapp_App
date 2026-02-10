import { StyleSheet, View } from "react-native";

export type ButtonGroupProps = {
    children: React.ReactNode
};

export const ButtonGroup = ({children}: ButtonGroupProps) => {
    const modelStyle = StyleSheet.create({
        outerView: {
            flexDirection: "row",
            gap: 5,
            flexWrap: "wrap",
            justifyContent: "space-between"
        }
    });

    return (
        <View style={modelStyle.outerView}>
            {children}
        </View>
    );
};