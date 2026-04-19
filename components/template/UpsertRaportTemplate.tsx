import { StyleSheet, Text } from "react-native";
import InnerContainer from "../atoms/InnerContainer";
import { FormWrapper } from "../atoms/FormWrapper";

export type UpsertRaportTemplateType = {
    pageInfo: {
        pageTitle: string,
        type: "create" | "update"
    },
    handlers: {
        closeFn: () => void,
        deleteFn?: () => void,
        confirmFn: () => void
    }
};

export const UpsertRaportTemplate = ({ pageInfo, handlers }: UpsertRaportTemplateType) => {
    const modelStyle = StyleSheet.create({
    });
    
    return (
        <InnerContainer>
            <FormWrapper title={pageInfo.pageTitle} type={pageInfo.type}
            closeFn={handlers.closeFn}
            deleteFn={handlers.deleteFn}
            confirmFn={handlers.confirmFn}>
                <Text>Upsert Raport Screen</Text>
            </FormWrapper>
        </InnerContainer>
    );
};