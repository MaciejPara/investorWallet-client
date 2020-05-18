import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { useDispatch, useStore } from "react-redux";
import { LOGIN_USER } from "../../redux/actions";

const Views = ({ match: { url }, history }) => {
    const [credentials] = useState({ email: "", password: "" });
    const dispatch = useDispatch();

    const {
        authUser: { user, basePath },
    } = useStore().getState();

    useEffect(() => {
        console.log(basePath);
        if (user.email) history.push(`${basePath}/app`);
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await fetch(`${"http://localhost:8080/signin"}`, {
                method: "post",
                body: JSON.stringify(values),
                headers: {
                    "content-type": "application/json",
                    "Access-Control-Allow-Origin": true,
                    "Access-Control-Allow-Credentials": true,
                },
                credentials: "include",
            });
            const result = await response.json();

            localStorage.setItem("investorWalletUser", JSON.stringify(result));

            dispatch({
                type: LOGIN_USER,
                payload: { user: result },
            });

            setSubmitting(false);
            history.push("/investorWallet-client/app");
        } catch (e) {
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
        <div className={"formContainer m-auto"}>
            <h1>Login user</h1>
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
                            {errors.email && touched.email && errors.email}
                        </span>
                        <button
                            className={"formSubmitButton"}
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default Views;
