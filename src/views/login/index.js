import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { useDispatch, useStore } from "react-redux";
import { LOGIN_USER, MENU_CHANGE, SET_SETTINGS } from "../../redux/actions";
import { store } from "react-notifications-component";
import FetchClient from "../../utils/FetchClient";
import { NavLink } from "react-router-dom";

const Views = ({ match: { url }, history }) => {
    const [credentials] = useState({ email: "", password: "" });
    const dispatch = useDispatch();

    const {
        authUser: { user },
    } = useStore().getState();

    useEffect(() => {
        if (user && user.email) {
            history.push(`/app`);
        }
    });

    const handleSubmit = async (values) => {
        try {
            const result = await FetchClient.post({
                url: "/signin",
                body: values,
            });

            if (result) {
                localStorage.setItem(
                    "investorWalletUser",
                    JSON.stringify(result)
                );

                dispatch({
                    type: LOGIN_USER,
                    payload: { user: result },
                });

                dispatch({
                    type: MENU_CHANGE,
                    payload: "home",
                });

                if (result.settings) {
                    localStorage.setItem(
                        "investorWalletUserSettings",
                        JSON.stringify(result.settings)
                    );

                    dispatch({
                        type: SET_SETTINGS,
                        payload: { ...result.settings },
                    });
                }

                history.push(`/app`);
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
            console.error(e);
        }
    };

    const handleValidation = (values) => {
        const errors = {};

        if (!values.password) {
            errors.password = "Required";
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
                <h1>Login</h1>
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
                                {errors.email && touched.email && errors.email}
                            </span>
                            <input
                                type="password"
                                name="password"
                                placeholder={"password"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            <span className={"formValidationError"}>
                                {touched.password && errors.password}
                            </span>
                            <button
                                className={"formSubmitButton"}
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Sign in
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default Views;
