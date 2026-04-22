import { StyleSheet, Text } from "react-native";
import InnerContainer from "../atoms/InnerContainer";
import { FormWrapper } from "../atoms/FormWrapper";
import Input from "../molecules/Input";
import { useState } from "react";
import { RaportHeaderType } from "../../data/FakeData";

export type UpsertRaportTemplateType = {
    pageInfo: {
        pageTitle: string,
        type: "create" | "update"
    },
    handlers: {
        closeFn: () => void,
        deleteFn?: () => void,
        confirmFn: (title: string) => void
    },
    initData?: RaportHeaderType
};

export const UpsertRaportTemplate = ({ pageInfo, handlers, initData }: UpsertRaportTemplateType) => {
    const modelStyle = StyleSheet.create({
    });

    const [values, setValues] = useState({
        title: initData?.title ?? ""
    });

    const onChange = (key: keyof typeof values, value: string) => {
        setValues((prev) => ({...prev, [key]: value}));
    };
    const confirmHandler = () => {
        handlers.confirmFn(values.title);
    };
    
    return (
        <InnerContainer>
            <FormWrapper title={pageInfo.pageTitle} type={pageInfo.type}
            closeFn={handlers.closeFn}
            deleteFn={handlers.deleteFn}
            confirmFn={confirmHandler}>
                <Input label="nazwa" placeholder="Wpisz nazwę" iconName="account-book"
                onChangeHandler={(val) => onChange('title', val)} value={values.title} />
            </FormWrapper>
        </InnerContainer>
    );
};