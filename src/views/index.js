import React from "react";
import { NavLink } from "react-router-dom";

const Views = () => {
    return (
        <div className={"d-flex m-auto"}>
            <NavLink className="d-inline-flex mr-1 ml-1" to={`/login`}>
                login
            </NavLink>
            <NavLink className="d-inline-flex mr-1 ml-1" to={`/register`}>
                register
            </NavLink>
        </div>
    );
};

export default Views;
