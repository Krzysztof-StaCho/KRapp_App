import React, { useState } from "react";
import { TextInputEndEditingEvent } from "react-native";

//#region Validate functions

const valError_Empty = " jest pusta.";
const valError_NotNumber = " nie jest liczbą.";

function valBasicStringFn(name: string, setError: React.Dispatch<React.SetStateAction<string>>, currentVal: string) {
    if (currentVal.trim().length <= 0) {
        setError(name + valError_Empty);
        return false;
    }

    setError("");
    return true;
};

function valBasicNumberFn(name: string, setError: React.Dispatch<React.SetStateAction<string>>, currentVal: string) {
    if (currentVal.trim().length <= 0) {
        setError(name + valError_Empty);
        return false;
    }
    if (Number.isNaN(Number.parseFloat(currentVal))) {
        setError(name + valError_NotNumber);
        return false;
    }

    setError("");
    return true;
};

export const validateHandlers = {
    /**
     * Checks if value is empty
     */
    basicStringHandler: valBasicStringFn,
    /**
     * Checks if value is empty,
     * Checks if value is number
     */
    basicNumberHandler: valBasicNumberFn
};

//#endregion

export type ValidateFunctionType = 
    (name: string, setError: React.Dispatch<React.SetStateAction<string>>, currentVal: string) => boolean;

type useInputProps = {
    name: string,
    validateFn?: ValidateFunctionType,
    onChange?: (val: string) => void,
    initValue?: string
};

export function useInput({name, validateFn, onChange, initValue}: useInputProps) {
    const [value, setValue] = useState(initValue ?? "");
    const [error, setError] = useState("");

    const onChangeHandler = (val: string) => {
        setValue(val);

        if(onChange) { onChange(val); }
    };

    let validateHandler = () => { return false; };
    if (validateFn) {
        validateHandler = () => {
            return validateFn(name, setError, value);
        };
    }

    return {
        value, setValue,
        error, setError,
        onChangeHandler,
        validateHandler: validateFn ? validateHandler : undefined
    };
};