import { View, ViewStyle } from "react-native";
import { PressableCard, CardBaseProps } from "./PressableCard";
import { CommonStyle } from "../../utils/BaseStyle";
import { useTheme } from "../../utils/ThemeContext";

type CardShelfProps = {
    cardObj: CardBaseProps[]
};

const CardShelf = ({ cardObj }: CardShelfProps) => {
    const theme = useTheme();

    const modelStyle: ViewStyle = {
        gap: 10,
        marginHorizontal: 30,
        flexWrap: "wrap",
        paddingVertical: 10,
        borderTopWidth: 2,
        borderColor: theme.border
    };

    return (
        <View style={[CommonStyle.FlexRow, modelStyle]}>
            {cardObj.map((item, index) => (
                <PressableCard key={index} {...item} />
            ))}
        </View>
    );
};

export default CardShelf;