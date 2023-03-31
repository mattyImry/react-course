import useInput from "../hook/use-input";

const SimpleInput = (props) => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: enteredEmailHasError,
        valueChangeHandler: emailChangehandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput((value) => {
        value.includes("@");
    });

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (!enteredNameIsValid && !enteredEmailIsValid) {
            return;
        }
        resetNameInput();
        resetEmailInput();
    };

    const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control ";

    const emailInputClasses = enteredEmailHasError
        ? "form-control invalid"
        : "form-control ";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onBlur={nameBlurHandler}
                    onChange={nameChangeHandler}
                    value={enteredName}
                />
                {nameInputHasError && (
                    <p className="error-text">Name must not be empty</p>
                )}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">Your Email</label>
                <input
                    type="text"
                    id="email"
                    onBlur={emailBlurHandler}
                    onChange={emailChangehandler}
                    value={enteredEmail}
                />
                {enteredEmailHasError && (
                    <p className="error-text">Email must not be empty</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
