import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

type GroupProps = {
    variant?: ViewStyle['justifyContent']
    children: React.ReactNode
};

export const ButtonGroup = ({variant = 'space-between', children}: GroupProps) => {
    return (
        <View style={[style.container, { justifyContent: variant }]}>
            {children}
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 5
    }
});