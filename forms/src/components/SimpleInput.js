import { useState, useRef } from "react";

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnterName] = useState("");
    const [enteredNameIsValid, setEnterNameIsValid] = useState(true);

    const nameInputHandler = (event) => {
        setEnterName(event.target.value);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (enteredName.trim() === "") {
            setEnterNameIsValid(false);
            return;
        }

        setEnterNameIsValid(true);

        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);
        setEnterName("");
    };

    const nameInputClasses = enteredNameIsValid ? "form-control" : "form-control invalid";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputHandler}
                    ref={nameInputRef}
                    value={enteredName}
                />
                {!enteredNameIsValid && (
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
