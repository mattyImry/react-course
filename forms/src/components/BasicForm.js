import useFormInputs from "../hook/form-inputs";

const BasicForm = (props) => {
    const {
        value: nameInputValue,
        isValid: inputNameIsValid,
        hasError: nameInputError,
        valueChangeHandler: nameInputHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useFormInputs((value) => value.trim() !== "");

    const {
        value: lastNameInputValue,
        isValid: inputLastNameIsValid,
        hasError: lastNameInputError,
        valueChangeHandler: lastNameInputHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastNameInput,
    } = useFormInputs((value) => value.trim() !== "");

    const {
        value: emailInputValue,
        isValid: inputEmailIsValid,
        hasError: emailInputError,
        valueChangeHandler: emailInputHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useFormInputs((value) => {
        value.includes("@");
        console.log(value);
    });

    let formIsValid = false;

    if (inputNameIsValid && inputLastNameIsValid && inputEmailIsValid) {
        formIsValid = true;
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (!inputNameIsValid && !inputLastNameIsValid && !inputEmailIsValid) {
            return;
        }
        resetNameInput();
        resetLastNameInput();
        resetEmailInput();
    };

    const nameInputClasses = nameInputError ? "form-control invalid " : "form-control";
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
                    <label htmlFor="lastName">Last Name</label>
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
                <label htmlFor="email">E-Mail Address</label>
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
