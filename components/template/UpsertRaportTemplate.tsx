import { StyleSheet } from "react-native";
import InnerContainer from "../atoms/InnerContainer";
import { FormWrapper } from "../atoms/FormWrapper";
import Input from "../molecules/Input";
import { RaportHeaderType } from "../../data/FakeData";
import { useInput, ValidateFunctionType } from "../../feature/shared/hooks/useInput";

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
    initData?: RaportHeaderType,
    validations: {
        title: ValidateFunctionType | undefined
    }
};

export const UpsertRaportTemplate = ({ pageInfo, handlers, initData, validations }: UpsertRaportTemplateType) => {
    const modelStyle = StyleSheet.create({
    });

    const titleInput = useInput({
        name: "Nazwa",
        initValue: initData?.title,
        onChange: undefined,
        validateFn: validations.title
    });

    const confirmHandler = () => {
        if (typeof titleInput.validateHandler === "undefined") {
            handlers.confirmFn(titleInput.value);
            return;
        }

        if (titleInput.validateHandler())
            handlers.confirmFn(titleInput.value)
    };
    
    return (
        <InnerContainer>
            <FormWrapper title={pageInfo.pageTitle} type={pageInfo.type}
            closeFn={handlers.closeFn}
            deleteFn={handlers.deleteFn}
            confirmFn={confirmHandler}>
                <Input label="nazwa" placeholder="Wpisz nazwę" iconName="account-book"
                onChangeHandler={titleInput.onChangeHandler} value={titleInput.value}
                validate={titleInput.validateHandler} errorMessage={titleInput.error} />
            </FormWrapper>
        </InnerContainer>
    );
};