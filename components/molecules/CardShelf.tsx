import { View, ViewStyle } from "react-native";
import { PressableCard, PressableCardProps } from "./PressableCard";
import { ColorsTheme, CommonStyle } from "../../utils/BaseStyle";

type CardShelfProps = {
    cardObj: PressableCardProps[]
};

export const CardShelf = ({ cardObj }: CardShelfProps) => {
    const modelStyle: ViewStyle = {
        gap: 10,
        marginHorizontal: 30,
        flexWrap: "wrap",
        paddingVertical: 10,
        borderTopWidth: 2,
        borderColor: ColorsTheme.SecondaryColor
    };

    return (
        <View style={[CommonStyle.FlexRow, modelStyle]}>
            {cardObj.map((item, index) => (
                <PressableCard key={index} iconProp={item.iconProp} onPressFn={item.onPressFn}>
                    {item.children}
                </PressableCard>
            ))}
        </View>
    );
}