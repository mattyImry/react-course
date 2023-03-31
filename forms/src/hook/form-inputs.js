import { useState } from "react";

const useFormInputs = (validateValue) => {
    const [inputValue, setInputValue] = useState("");
    const [inputIsTouched, setInputIsTouched] = useState(false);

    const inputValueIsValid = validateValue(inputValue);
    const inputValueHasError = !inputValue && inputIsTouched;

    const valueChangeHandler = (event) => {
        setInputValue(event.target.value);
    };

    const inputBlurHandler = () => {
        setInputIsTouched(true);
    };

    const reset = () => {
        setInputValue("");
        setInputIsTouched(false);
    };

    return {
        value: inputValue,
        hasError: inputValueHasError,
        isValid: inputValueIsValid,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };
};

export default useFormInputs;
