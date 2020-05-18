import React, { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { LOGIN_USER } from "../../redux/actions";

const Views = ({ match: { url }, history }) => {
    const dispatch = useDispatch();

    const {
        authUser: { user, basePath },
    } = useStore().getState();

    useEffect(() => {
        if (user.email) {
            document.cookie = "connect.sid=''; path=/;"; // @todo check if it works
            // dispatch({ type: LOGOUT_USER });
        }
    });

    return (
        <>
            <h1>logged out</h1>
        </>
    );
};

export default Views;
