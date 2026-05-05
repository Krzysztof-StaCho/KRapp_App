import { useState } from "react";

//#region Validate functions

const valError_Empty = " jest pusta.";
const valError_NotNumber = " nie jest liczbą.";

function valBasicStringFn(label: string): Validator {
    return (value) => {
        if (value.trim().length <= 0) {
            return label + valError_Empty;
        }
        return null;
    };
};

function valBasicNumberFn(label: string): Validator {
    return (value) => {
        if (Number.isNaN(Number.parseFloat(value))) {
            return label + valError_NotNumber;
        }
        return null;
    };
};

export type Validator = (value: string) => string | null;

export const validateHandlers = {
    /**
     * Checks if value is empty
     */
    required: valBasicStringFn, 
    /**
     * Checks if value is number
     */
    number: valBasicNumberFn
};

//#endregion

type HookProps = {
    initialValue?: string,
    validators?: Validator[],
    onChange?: (val: string) => void,
};

export function useInput({initialValue = "", validators = [], onChange}: HookProps) {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState<string | null>(null);
    const [touched, setTouched] = useState(false);

    const onChangeHandler = (val: string) => {
        setValue(val);

        if(onChange) { onChange(val); }
    };

    const validate = () => {
        for (const validator of validators) {
            const err = validator(value);
            if (err) {
                setError(err);
                return false;
            }
        }

        setError(null);
        return true;
    };

    const handleBlur = () => {
        setTouched(true);
        validate();
    };

    return {
        value, setValue,
        error, touched,
        onChange: onChangeHandler,
        onBlur: handleBlur,
        validate, isValid: !error
    };
};