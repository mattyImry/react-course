import { useState } from "react";

const BasicForm = (props) => {
    const [nameInputValue, setNameInputValue] = useState("");
    const [nameInputIsTouched, setNameInputIsTouched] = useState(false);

    const enteredNameIsValid = nameInputValue.trim() !== "";
    const nameInputError = !enteredNameIsValid && nameInputIsTouched;

    const nameInputHandler = (event) => {
        setNameInputValue(event.target.value);
    };

    const nameBlurHandler = () => {
        setNameInputIsTouched(true);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        setNameInputIsTouched(true);

        if (!enteredNameIsValid) {
            return;
        }
        setNameInputValue("");
    };

    const nameInputClasses = !nameInputError ? "form-control" : "form-control invalid";

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
                    {nameInputError && <p>Please enter name.</p>}
                </div>
                <div className="form-control">
                    <label htmlFor="name">Last Name</label>
                    <input type="text" id="name" />
                </div>
            </div>
            <div className="form-control">
                <label htmlFor="name">E-Mail Address</label>
                <input type="text" id="name" />
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
