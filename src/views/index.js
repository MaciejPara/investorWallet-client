import React from "react";
import { NavLink } from "react-router-dom";

const Views = () => {
    return (
        <div className={"d-flex m-auto"}>
            <NavLink
                className="d-inline-flex mr-1 ml-1"
                to={`${process.env.PUBLIC_URL}/login`}
            >
                login
            </NavLink>
            <NavLink
                className="d-inline-flex mr-1 ml-1"
                to={`${process.env.PUBLIC_URL}/register`}
            >
                register
            </NavLink>
        </div>
    );
};

export default Views;
