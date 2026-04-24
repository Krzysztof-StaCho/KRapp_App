import { ScrollView, StyleSheet, Text, View } from "react-native";
import CloseBtn from "./CloseBtn";
import { useTheme } from "../../utils/ThemeContext";
import { CommonColors, Typography } from "../../utils/BaseStyle";
import { Badge } from "./Badge";
import ButtonGroup from "./ButtonGroup";
import { BorderedButton } from "./BorderedButton";

export type FormWrapperProps = {
    children?: React.ReactNode,

    title: string,
    type: string,

    closeFn: () => void,
    deleteFn?: () => void,
    confirmFn: () => void
};

export const FormWrapper = (props: FormWrapperProps) => {
  const theme = useTheme();

  const modelStyle = StyleSheet.create({
    formWrapper: {
      flex: 1
    },
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 10,
      marginBottom: 20
    },
    titleContainer: {
      flexDirection: "row",
      gap: 10
    },
    title: {
      color: theme.primary
    },
    outerContentWrapper: {
      flex: 1
    },
    innerContentWrapper: {
      flexDirection: "column",
      gap: 15
    },
    buttonContainer: {
      justifyContent: "flex-end",
      marginTop: 20,
      gap: 5
    }
  });

  return (
    <View style={modelStyle.formWrapper}>
      <View style={modelStyle.headerContainer}>
        <View style={modelStyle.titleContainer}>
          <Text style={[Typography.H1, modelStyle.title]}>{props.title}</Text>
          <Badge text={props.type} color={{background: theme.primary, text: theme.primaryText}} />
        </View>
        <CloseBtn onPressFn={props.closeFn} color={CommonColors.cancel} size={24} />
      </View>
      <ScrollView style={modelStyle.outerContentWrapper}
      contentContainerStyle={modelStyle.innerContentWrapper}>
        {props.children}
      </ScrollView>
      <ButtonGroup style={modelStyle.buttonContainer}>
        {props.deleteFn &&
        <BorderedButton text="Usuń" onPressFn={props.deleteFn}
          color={CommonColors.error} iconName="delete" /> }
        <BorderedButton text="Anuluj" onPressFn={props.closeFn}
        color={CommonColors.cancel} iconName="close" />
        <BorderedButton text="Zatwierdź" onPressFn={props.confirmFn}
        color={theme.primary} iconName="check" />
      </ButtonGroup>
    </View>
  );
};