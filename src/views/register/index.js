import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { useDispatch, useStore } from "react-redux";
import { LOADER, LOGIN_USER } from "../../redux/actions";
import { store } from "react-notifications-component";
import FetchClient from "../../utils/FetchClient";
import { NavLink } from "react-router-dom";

const Views = ({ match: { url }, history }) => {
    const [credentials] = useState({
        email: "",
        password: "",
        passwordRepeat: "",
    });
    const dispatch = useDispatch();

    const {
        authUser: { user },
    } = useStore().getState();

    useEffect(() => {
        if (user && user.email) {
            history.push(`/app`);
        }
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            dispatch({ type: LOADER });

            const result = await FetchClient.post({
                url: "/signup",
                body: values,
            });

            setSubmitting(false);

            dispatch({ type: LOADER });

            if (result) {
                store.addNotification({
                    title: "Success",
                    message: result?.message,
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 4000,
                        onScreen: true,
                    },
                });

                history.push(`/login`);
            }
        } catch (e) {
            store.addNotification({
                title: "Failure",
                message: e.toString(),
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 3000,
                    onScreen: true,
                },
            });
            dispatch({ type: LOADER });
            setSubmitting(false);
            console.error(e);
        }
    };

    const handleValidation = (values) => {
        const errors = {};

        if (!values.password) {
            errors.password = "Required";
        }

        if (!values.passwordRepeat) {
            errors.passwordRepeat = "Required";
        }

        if (
            values.passwordRepeat &&
            values.password !== values.passwordRepeat
        ) {
            errors.passwordRepeat = "Passwords are not the same.";
        }

        if (values.password && values.password.length < 8) {
            errors.password = "Password must be at least 8 characters long.";
        }

        if (!values.email) {
            errors.email = "Required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = "Invalid email address";
        }
        return errors;
    };

    return (
        <>
            <div className={"logoutContainer withSpace"}>
                <NavLink to={`/`}>
                    <i className="fas fa-sign-out-alt" />
                </NavLink>
            </div>
            <div className={"formContainer m-auto"}>
                <h1>Register</h1>
                <Formik
                    initialValues={credentials}
                    validate={handleValidation}
                    onSubmit={handleSubmit}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form className={"form"} onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                placeholder={"email"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <span className={"formValidationError"}>
                                {touched.email && errors.email}
                            </span>
                            <input
                                type="password"
                                name="password"
                                placeholder={"password"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                autoComplete="new-password"
                            />
                            <span className={"formValidationError"}>
                                {touched.password && errors.password}
                            </span>
                            <input
                                type="password"
                                name="passwordRepeat"
                                placeholder={"repeat password"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.passwordRepeat}
                                autoComplete="new-password"
                            />
                            <span className={"formValidationError"}>
                                {touched.passwordRepeat &&
                                    errors.passwordRepeat}
                            </span>
                            <button
                                className={"formSubmitButton"}
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Sign up
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default Views;
