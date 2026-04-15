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

export const Typography = StyleSheet.create({
    H1: {
    fontFamily: 'System',
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  H2: {
    fontFamily: 'System',
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: -0.3,
  },
  H3: {
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: '600',
  },
  Body: {
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '400',
  },
  BodyBold: {
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '600',
  },
  Caption: {
    fontFamily: 'System',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  Button: {
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
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