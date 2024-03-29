import React, { useState, useEffect, useReducer, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input";

const emailReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.includes("@") };
    }

    if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.includes("@") };
    }

    return { value: "", isValid: false };
};

const passReducer = (state, action) => {
    if (action.type === "USER_PASS") {
        return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    if (action.type === "PASS_BLUR") {
        return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return { value: "", isValid: false };
};

const Login = (props) => {
    // const [enteredEmail, setEnteredEmail] = useState("");
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState("");
    // const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
    });

    const [passState, dispatchPass] = useReducer(passReducer, {
        value: "",
        isValid: null,
    });

    const authCtx = useContext(AuthContext);

    useEffect(() => {
        console.log("EFFECT RUNNING");

        return () => {
            console.log("EFFECT CLEANUP");
        };
    }, []);

    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("Checking form validity!");
            setFormIsValid(emailState.isValid && passState.isValid);
        }, 500);

        return () => {
            console.log("CLEANUP");
            clearTimeout(identifier);
        };
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: "USER_INPUT", val: event.target.value });

        // setFormIsValid(event.target.value.includes("@") && passState.isValid);
    };

    const passwordChangeHandler = (event) => {
        dispatchPass({ type: "USER_PASS", val: event.target.value });

        // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: "INPUT_BLUR" });
    };

    const validatePasswordHandler = () => {
        dispatchPass({ type: "PASS_BLUR" });
    };

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid) {
            authCtx.onLogin(emailState.value, passState.value);
        } else if (!emailIsValid) {
            emailInputRef.current.focus();
        } else {
            passwordIsValid.current.focus();
        }
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    ref={emailInputRef}
                    id="email"
                    label="E-Mail"
                    type="email"
                    isValid={emailIsValid}
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                />

                <Input
                    ref={passwordInputRef}
                    id="Password"
                    label="Password"
                    type="Password"
                    isValid={passwordIsValid}
                    value={passState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />

                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
