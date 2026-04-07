import { StyleSheet, View, ScrollView } from "react-native";
import { CommonStyle, ContainerStyle } from "../../utils/BaseStyle";
import { PageHeader } from "../atoms/PageHeader";
import { SelectItem } from "../atoms/SelectItem";
import { useTheme } from "../../utils/ThemeContext";

export type RaportSelectionTemplateType = {
    data: {
        id: number,
        title: string
    }[],
    navigateFn: (id: number) => void,
    moreActionFn: (id: number) => void
};

export const RaportSelectionTemplate = ({ data, navigateFn, moreActionFn }: RaportSelectionTemplateType) => {

    const modelStyle = StyleSheet.create({
        scrollContent: {
            paddingHorizontal: 5,
            paddingVertical: 10,
            gap: 10
        }
    });

    return (
        <View style={ContainerStyle.InnerContainerStyle}>
            <ScrollView style={CommonStyle.FlexContainer} contentContainerStyle={modelStyle.scrollContent}>
                {data.map((item) => (
                    <SelectItem key={item.id} navigateFn={() => navigateFn(item.id)}
                    moreActionFn={() => moreActionFn(item.id)}>
                        {item.title}
                    </SelectItem>
                ))}
            </ScrollView>
        </View>
    );
};