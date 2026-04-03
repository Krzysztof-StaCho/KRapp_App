import { StyleSheet, View, ScrollView } from "react-native";
import { ColorsTheme, ContainerStyle } from "../../utils/BaseStyle";
import { PageHeader } from "../atoms/PageHeader";
import { SelectItem } from "../atoms/SelectItem";

export type RaportSelectionTemplateType = {
    header: string,
    data: {
        id: number,
        title: string
    }[],
    navigateFn: (id: number) => void,
    moreActionFn: (id: number) => void
};

export const RaportSelectionTemplate = ({ header, data, navigateFn, moreActionFn }: RaportSelectionTemplateType) => {
    const modelStyle = StyleSheet.create({
        scrollView: {
            backgroundColor: ColorsTheme.LightColor,
            paddingHorizontal: 5
        },
        scrollContent: {
            paddingVertical: 10,
            gap: 10
        }
    });

    return (
        <View style={ContainerStyle.InnerContainerStyle}>
            <PageHeader>{header}</PageHeader>
            <ScrollView style={modelStyle.scrollView} contentContainerStyle={modelStyle.scrollContent}>
                {data.map((item) => (
                    <SelectItem key={item.id} color={ColorsTheme.PrimaryColor}
                    navigateFn={() => navigateFn(item.id)} moreActionFn={() => moreActionFn(item.id)}>
                        {item.title}
                    </SelectItem>
                ))}
            </ScrollView>
        </View>
    );
};