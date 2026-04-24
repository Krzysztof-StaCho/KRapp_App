import { StyleSheet, View, ScrollView } from "react-native";
import InnerContainer from "../atoms/InnerContainer";
import { SelectItem } from "../atoms/SelectItem";

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
        <InnerContainer>
            <ScrollView style={{flex: 1}} contentContainerStyle={modelStyle.scrollContent}>
                {data.map((item) => (
                    <SelectItem key={item.id} navigateFn={() => navigateFn(item.id)}
                    moreActionFn={() => moreActionFn(item.id)}>
                        {item.title}
                    </SelectItem>
                ))}
            </ScrollView>
        </InnerContainer>
    );
};