import { useState } from "react";

const BasicForm = (props) => {
    const [nameInputValue, setNameInputValue] = useState("");
    const [nameInputIsTouched, setNameInputIsTouched] = useState(false);

    const enteredNameIsValid = nameInputValue.trim() !== "";
    const nameInputError = !enteredNameIsValid && nameInputIsTouched;

    const [lastNameInputValue, setLastNameInputValue] = useState("");
    const [lastNameInputIsTouched, setLastNameInputIsTouched] = useState(false);

    const enteredLastNameIsValid = lastNameInputValue.trim() !== "";
    const lastNameInputError = !enteredLastNameIsValid && lastNameInputIsTouched;

    const [emailInputValue, setEmailInputValue] = useState("");
    const [emailInputIsTouched, setEmailInputIsTouched] = useState(false);

    const enteredEmailIsValid = emailInputValue.includes("@");
    const emailInputError = !enteredEmailIsValid && emailInputIsTouched;

    let formIsValid = false;

    if (enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const nameInputHandler = (event) => {
        setNameInputValue(event.target.value);
    };

    const nameBlurHandler = () => {
        setNameInputIsTouched(true);
    };

    const lastNameInputHandler = (event) => {
        setLastNameInputValue(event.target.value);
    };

    const lastNameBlurHandler = () => {
        setLastNameInputIsTouched(true);
    };

    const emailInputHandler = (event) => {
        setEmailInputValue(event.target.value);
    };

    const emailBlurHandler = () => {
        setEmailInputIsTouched(true);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        setNameInputIsTouched(true);
        setEmailInputIsTouched(true);

        if (!enteredNameIsValid && !enteredEmailIsValid) {
            return;
        }
        setNameInputValue("");
        setNameInputIsTouched(false);

        setLastNameInputValue("");
        setLastNameInputIsTouched(false);

        setEmailInputValue("");
        setNameInputIsTouched(false);
    };

    const nameInputClasses = nameInputError ? "form-control invalid" : "form-control";
    const lastNameInputClasses = lastNameInputError
        ? "form-control invalid"
        : "form-control";

    const emailInputClasses = emailInputError ? "form-control invalid" : "form-control";

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="control-group">
                <div className={nameInputClasses}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        value={nameInputValue}
                        onChange={nameInputHandler}
                        onBlur={nameBlurHandler}
                    />
                    {nameInputError && <p className="error-text">Please enter name.</p>}
                </div>
                <div className={lastNameInputClasses}>
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        id="name"
                        value={lastNameInputValue}
                        onChange={lastNameInputHandler}
                        onBlur={lastNameBlurHandler}
                    />
                    {lastNameInputError && (
                        <p className="error-text">Please enter last name.</p>
                    )}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="name">E-Mail Address</label>
                <input
                    type="text"
                    id="name"
                    value={emailInputValue}
                    onChange={emailInputHandler}
                    onBlur={emailBlurHandler}
                />
                {emailInputError && (
                    <p className="error-text">Please enter a valid Email.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
