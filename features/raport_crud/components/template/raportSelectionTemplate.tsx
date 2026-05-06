import { InnerContainer } from "@/components/atoms/container/innerContainer";
import { SelectItem } from "@/components/molecules/selectItem";
import { SchemaId } from "@/entities/schema/model/schema.types";
import { ScrollView, ViewStyle } from "react-native";
import { SchemaHeader } from "../../types";

export type PageProps = {
    data: SchemaHeader[],
    navigateFn: (id: SchemaId) => void,
    moreActionFn: (id: SchemaId) => void
};

export const RaportSelectionTemplate = ({data, navigateFn, moreActionFn}: PageProps) => {
    return (
        <InnerContainer>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={style}>
                { data.map((item) => (
                    <SelectItem key={item.id} navigateFn={() => navigateFn(item.id)}
                    moreActionFn={() => moreActionFn(item.id)}>
                        {item.title}
                    </SelectItem>
                )) }
            </ScrollView>
        </InnerContainer>
    );
};

const style: ViewStyle = {
    paddingHorizontal: 5,
    paddingVertical: 10,
    gap: 10
};