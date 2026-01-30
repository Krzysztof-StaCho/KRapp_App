import { StyleSheet } from "react-native";

export const ColorsTheme = {
    PrimaryColor: "#FF9B51",
    SecondaryColor: "#25343F",
    BodyColor: "#BFC9D1",
    LightColor: "#EAEFEF"
};

export const CommonStyle = StyleSheet.create({
    FlexContainer: {
        flex: 1
    },
    Bordered: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: ColorsTheme.SecondaryColor
    }
});

export const TextStyle = StyleSheet.create({
    CardTitle: {
        fontSize: 15,
        textAlign: "center",
        color: ColorsTheme.SecondaryColor
    }
});

export const ImageStyle = StyleSheet.create({
    CardImage: {...CommonStyle.Bordered}
});