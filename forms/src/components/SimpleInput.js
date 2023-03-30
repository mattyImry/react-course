import { useState, useRef, useEffect } from "react";

// THIS CODE USES STATE AND REF TO TAKE USER INPUT . DO NOT USE BOTH IS JUST AN EXAMPLE

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnterName] = useState("");
    const [enteredNameIsValid, setEnterNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    useEffect(() => {
        if (enteredNameIsValid) {
            console.log("Name input is valid");
        }
    }, [enteredNameIsValid]);

    const nameInputHandler = (event) => {
        setEnterName(event.target.value);
    };

    const nameInputBlurHandler = (event) => {
        setEnteredNameTouched(true);

        if (enteredName.trim() === "") {
            setEnterNameIsValid(false);
            return;
        }
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setEnteredNameTouched(true);

        if (enteredName.trim() === "") {
            setEnterNameIsValid(false);
            return;
        }

        setEnterNameIsValid(true);

        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);
        setEnterName("");
    };

    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
    const nameInputClasses = nameInputIsInvalid
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
                    ref={nameInputRef}
                    value={enteredName}
                />
                {nameInputIsInvalid && (
                    <p className="error-text">Name must not be empty</p>
                )}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
