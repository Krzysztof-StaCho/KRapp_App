import DropdownSelect from "react-native-input-select";
import RaportItemType from "../../data/types/RaportItem.types";
import { useInput, ValidateFunctionType } from "../../feature/shared/hooks/useInput";
import { FormWrapper } from "../atoms/FormWrapper";
import InnerContainer from "../atoms/InnerContainer";
import Input from "../molecules/Input";
import { useTheme } from "../../utils/ThemeContext";
import { useEffect } from "react";

export type UpsertRaportItemTemplateProps = {
    pageInfo: {
        pageTitle: string,
        type: 'create' | 'update'
    },
    handlers: {
        closeFn: () => void,
        deleteFn?: () => void,
        confirmFn: (item: RaportItemType) => void
    },
    initData?: RaportItemType,
    validations: {
        name?: ValidateFunctionType,
        amount?: ValidateFunctionType,
        quantity?: ValidateFunctionType
    }
};

export const UpsertRaportItemTemplate = ({pageInfo, handlers, initData, validations}: UpsertRaportItemTemplateProps) => {
    const nameInput = useInput({
        name: "Nazwa",
        initValue: initData?.name,
        validateFn: validations.name
    });

    const amountInput = useInput({
        name: "Ilość",
        initValue: initData?.amount.toString(),
        validateFn: validations.amount
    });

    const quantityInput = useInput({
        name: "Jednostka",
        initValue: initData?.quantity,
        validateFn: validations.quantity
    });

    /**
     * Dropdown doesnt offer after onChange action, then i using useEffect to find this moment
     */
    useEffect(() => {
        quantityInput.validateHandler ?
            quantityInput.validateHandler() : undefined;
    }, [quantityInput.value]);

    const confirmHandler = () => {
        if (typeof nameInput.validateHandler !== "undefined" && !nameInput.validateHandler())
            return;

        if (typeof amountInput.validateHandler !== "undefined" && !amountInput.validateHandler())
            return;

        if (typeof quantityInput.validateHandler !== "undefined" && !quantityInput.validateHandler())
            return;

        handlers.confirmFn({
            id: 0,
            name: nameInput.value,
            amount: Number.parseFloat(amountInput.value),
            quantity: "paczka"
        });
    };

    return (
        <InnerContainer>
            <FormWrapper title={pageInfo.pageTitle} type={pageInfo.type}
            closeFn={handlers.closeFn} deleteFn={handlers.deleteFn}
            confirmFn={confirmHandler}>
                <Input label="Nazwa" placeholder="Wpisz nazwę" iconName="account-book"
                onChangeHandler={nameInput.onChangeHandler} value={nameInput.value}
                validate={nameInput.validateHandler} errorMessage={nameInput.error} />
                <Input label="Ilość" placeholder="Wpisz ilość" iconName="edit"
                onChangeHandler={amountInput.onChangeHandler} value={amountInput.value}
                validate={amountInput.validateHandler} errorMessage={amountInput.error} />
                <DropdownSelect label="Jednostka" placeholder="Wybierz jednostkę"
                optionLabel="label" optionValue="value"
                options={[
                    { label: 'Paczka', value: "paczka" },
                    { label: 'Sztuka', value: "sztuk" }
                ]} selectedValue={quantityInput.value} onValueChange={(selectedItem) => {
                    const newValue = selectedItem ? selectedItem.toString() : "";
                    quantityInput.onChangeHandler(newValue);
                }} isMultiple={false} error={quantityInput.error}
                primaryColor={useTheme().primary} />
            </FormWrapper>
        </InnerContainer>
    );
};