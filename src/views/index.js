import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useStore } from "react-redux";

const Views = ({ match: { url }, history }) => {
    const {
        authUser: { user },
    } = useStore().getState();

    useEffect(() => {
        if (user?.email) history.push(`/app`);
    });

    return (
        <div className={"d-flex m-auto flex-column"}>
            <div className={"m-auto"}>
                <i className="fas fa-dollar-sign dollarIcon" />
                <h1 className={"my-5"}>Investor Wallet</h1>
            </div>

            <div>
                <NavLink className="d-inline-flex mr-1 ml-1" to={`/login`}>
                    login
                </NavLink>
                <NavLink className="d-inline-flex mr-1 ml-1" to={`/register`}>
                    register
                </NavLink>
            </div>
        </div>
    );
};

export default Views;
