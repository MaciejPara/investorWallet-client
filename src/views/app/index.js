import React from "react";
import { useStore } from "react-redux";
import { Link } from "react-router-dom";

const Views = () => {
    const {
        authUser: { user, basePath },
    } = useStore().getState();

    return (
        <div>
            <div>
                <Link to={`${basePath}/logout`}>
                    <i className="fas fa-sign-out-alt" /> logout
                </Link>
            </div>
            <h1>welcome home {user.email}</h1>
        </div>
    );
};

export default Views;
