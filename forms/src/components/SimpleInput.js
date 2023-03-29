import { useState, useRef } from "react";

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnterName] = useState();

    const nameInputHandler = (event) => {
        setEnterName(event.target.value);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        console.log(enteredName);

        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);
        setEnterName("");
    };

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="form-control">
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputHandler}
                    ref={nameInputRef}
                    value={enteredName}
                />
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
