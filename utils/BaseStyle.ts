import { StyleSheet } from "react-native";
import { Theme } from "./Theme.types";

export const DefaultTheme: Theme = {
    primary: "#25343F",
    secondary: "#555",
    border: "#222",
    body: "#FFF",
    light: "#CCC",
    dark: "#000",
    text: "#FFF"
};

export const FontFamilies = {
    HeaderFamily: "Zalando",
    TitleFamily: "Bangers",
    ParagraphFamily: "Macondo"
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
        borderColor: DefaultTheme.border
    },
    ShadowProp: {
        shadowColor: "#171717",
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5
    }
});

export const TextStyle = StyleSheet.create({
    CardTitle: {
        fontSize: 12,
        textAlign: "center",
        fontFamily: FontFamilies.TitleFamily
    },
    SectionTitle: {
        textAlign: "left",
        fontSize: 20,
        fontFamily: FontFamilies.ParagraphFamily
    },
    HeaderText: {
        textAlign: "center",
        fontSize: 25,
        fontFamily: FontFamilies.HeaderFamily
    },
    ParagraphText: {
        fontSize: 18,
        fontFamily: FontFamilies.ParagraphFamily
    }
});

export const ImageStyle = StyleSheet.create({
    CardImage: {...CommonStyle.Bordered}
});

export const ContainerStyle = StyleSheet.create({
    OuterContainerStyle: {
        flex: 1,
        backgroundColor: DefaultTheme.primary
    },
    InnerContainerStyle: {
        backgroundColor: DefaultTheme.body,
        flex: 1
    },
    PressedContainer: {
        backgroundColor: DefaultTheme.light,
        opacity: 0.5
    }
});