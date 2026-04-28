import { useAppTheme } from "@/theme/themeProvider";
import { View, ViewStyle } from "react-native";
import { CardHeader } from "../atoms/card/cardHeader";

type CardProps = {
    title: string,
    children?: React.ReactNode
};

export const Card = ({title, children}: CardProps) => {
    const theme = useAppTheme();

    return (
        <View style={[style, { borderColor: theme.border, backgroundColor: theme.light }]}>
            <CardHeader color={theme.text} borderColor={theme.border}>{title}</CardHeader>
            {children}
        </View>
    );
};

const style: ViewStyle = {
    borderRadius: 10,
    borderWidth: 1,
    padding: 15,

    shadowColor: "#171717",
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5
};