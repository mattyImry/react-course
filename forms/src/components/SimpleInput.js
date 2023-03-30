import { useState } from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnterName] = useState("");
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== "";
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const enteredEmailIsValid = enteredEmail.includes("@");
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const nameInputHandler = (event) => {
        setEnterName(event.target.value);
    };

    const nameInputBlurHandler = () => {
        setEnteredNameTouched(true);
    };

    const emailInputHandler = (event) => {
        setEnteredEmail(event.target.value);
        // console.log(event.target.value);
    };

    const emailInputBlurHandler = () => {
        setEnteredEmailTouched(true);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setEnteredNameTouched(true);

        if (!enteredNameIsValid) {
            return;
        }

        setEnterName("");
        setEnteredNameTouched(false);
    };

    const nameInputClasses = nameInputIsInvalid
        ? "form-control invalid"
        : "form-control ";

    const emailInputClasses = emailInputIsInvalid
        ? "form-control invalid"
        : "form-control ";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onBlur={nameInputBlurHandler}
                    onChange={nameInputHandler}
                    value={enteredName}
                />
                {nameInputIsInvalid && (
                    <p className="error-text">Name must not be empty</p>
                )}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">Your Email</label>
                <input
                    type="text"
                    id="email"
                    onBlur={emailInputBlurHandler}
                    onChange={emailInputHandler}
                    value={enteredEmail}
                />
                {emailInputIsInvalid && (
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
