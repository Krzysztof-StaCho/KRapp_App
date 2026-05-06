import DropdownSelect from "react-native-input-select";
import { InnerContainer } from "@/components/atoms/container/innerContainer";
import { Input } from "@/components/molecules/form/input";
import { FormWrapper } from "@/components/molecules/formWrapper";
import { Product, Unit } from "@/entities/product/model/product.types";
import { useInput, Validator } from "@/hooks/useInput";
import { useAppTheme } from "@/theme/themeProvider";
import { useEffect } from "react";

export type PageProps = {
    pageInfo: {
        pageTitle: string,
        type: "create" | "edit"
    },
    handlers: {
        closeFn: () => void,
        deleteFn?: () => void,
        confirmFn: (name: string, unit: string) => void
    },
    initData?: Product,
    validations: {
        name?: Validator[],
        unit?: Validator[]
    }
};

export const UpsertRaportItemTemplate = ({pageInfo, handlers, initData, validations}: PageProps) => {
    const nameInput = useInput({
        initialValue: initData?.name,
        validators: validations.name
    });
    const unitInput = useInput({
        initialValue: initData?.unit,
        validators: validations.unit
    });

    /**
     * Dropdown doesnt offer after onChange action, then i using useEffect to find this moment
     */
    useEffect(() => {
        unitInput.validate()
    }, [unitInput.value]);

    const confirmHandler = () => {
        const isFormValid = [
            nameInput.validate(),
            unitInput.validate()
        ].every(Boolean);

        if (!isFormValid)
            return;

        handlers.confirmFn(nameInput.value, unitInput.value);
    };

    const availableUnits: { label: string, value: string }[] = Object.entries(Unit).map((item) => {
        return {
            label: item[0],
            value: item[1]
        };
    });

    return (
        <InnerContainer>
            <FormWrapper title={pageInfo.pageTitle} type={pageInfo.type}
            closeFn={handlers.closeFn} deleteFn={handlers.deleteFn} confirmFn={confirmHandler}>
                <Input label="Nazwa" placeholder="Wpisz nazwę" iconName="account_book"
                onChangeHandler={nameInput.onChange} value={nameInput.value} validate={nameInput.validate}
                errorMessage={nameInput.error} />
                <DropdownSelect label="Jednostka miary" placeholder="Wybierz miarę"
                optionLabel="label" optionValue="value" options={availableUnits} selectedValue={unitInput.value} onValueChange={(selectedItem) => {
                    const newValue = selectedItem ? selectedItem.toString() : "";
                    unitInput.onChange(newValue);
                }} isMultiple={false} error={(unitInput.error === null) ? undefined : unitInput.error}
                primaryColor={useAppTheme().primary} />
            </FormWrapper>
        </InnerContainer>
    );
};