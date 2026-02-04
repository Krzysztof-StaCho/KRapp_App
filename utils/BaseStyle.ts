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
    FlexRow: {
        flex: 1,
        flexDirection: "row"
    },
    Bordered: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: ColorsTheme.SecondaryColor
    }
});

export const TextStyle = StyleSheet.create({
    CardTitle: {
        fontSize: 12,
        textAlign: "center",
        color: ColorsTheme.SecondaryColor,
        fontFamily: "Bangers"
    },
    HeaderText: {
        textAlign: "center",
        fontSize: 25,
        color: ColorsTheme.SecondaryColor,
        fontFamily: "Zalando"
    },
    ParagraphText: {
        fontSize: 18,
        color: ColorsTheme.SecondaryColor,
        fontFamily: "Macondo"
    }
});

export const ImageStyle = StyleSheet.create({
    CardImage: {...CommonStyle.Bordered}
});

export const ContainerStyle = StyleSheet.create({
    OuterContainerStyle: {
        flex: 1,
        backgroundColor: ColorsTheme.PrimaryColor
    },
    InnerContainerStyle: {
        backgroundColor: ColorsTheme.LightColor,
        flex: 1
    }
});