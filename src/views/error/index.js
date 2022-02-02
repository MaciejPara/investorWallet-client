import React from "react";
import { NavLink } from "react-router-dom";

const Views = () => {
    return (
        <div>
            <h1>Sorry, something went wrong..</h1>
            <NavLink className="d-inline-flex mr-1 ml-1" to={`/`}>
                Back to home
            </NavLink>
        </div>
    );
};

export default Views;
