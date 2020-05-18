import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useStore } from "react-redux";

const Views = ({ match: { url }, history }) => {
    const {
        authUser: { user },
    } = useStore().getState();

    useEffect(() => {
        if (user.email) history.push(`/${url.replace(/\//g, "")}/app`);
    });

    return (
        <div className={"d-flex m-auto"}>
            <NavLink className="d-inline-flex mr-1 ml-1" to={`${url}/login`}>
                login
            </NavLink>
            <NavLink className="d-inline-flex mr-1 ml-1" to={`${url}/register`}>
                register
            </NavLink>
        </div>
    );
};

export default Views;
