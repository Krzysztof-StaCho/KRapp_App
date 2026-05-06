import { useInput, Validator } from "@/hooks/useInput";
import { SchemaHeader } from "../../types";
import { InnerContainer } from "@/components/atoms/container/innerContainer";
import { FormWrapper } from "@/components/molecules/formWrapper";
import { Input } from "@/components/molecules/form/input";

export type PageProps = {
    pageInfo: {
        pageTitle: string,
        type: "create" | "edit"
    },
    handlers: {
        closeFn: () => void,
        deleteFn?: () => void,
        confirmFn: (title: string) => void
    },
    initData?: SchemaHeader,
    validations: {
        title?: Validator[]
    }
};

export const UpsertRaportTemplate = ({pageInfo, handlers, initData, validations}: PageProps) => {
    const titleInput = useInput({
        initialValue: initData?.title,
        validators: validations.title
    });

    const confirmHandler = () => {
        const isFormValid = [
            titleInput.validate()
        ].every(Boolean);

        if (!isFormValid)
            return;

        handlers.confirmFn(titleInput.value);
    };

    return (
        <InnerContainer>
            <FormWrapper title={pageInfo.pageTitle} type={pageInfo.type}
            closeFn={handlers.closeFn} deleteFn={handlers.deleteFn} confirmFn={confirmHandler}>
                <Input label="Nazwa" placeholder="Wpisz nazwę" iconName="account_book"
                onChangeHandler={titleInput.onChange} value={titleInput.value}
                validate={titleInput.validate} errorMessage={titleInput.error} />
            </FormWrapper>
        </InnerContainer>
    );
};