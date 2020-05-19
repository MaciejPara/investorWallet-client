import React, { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { LOGOUT_USER } from "../../redux/actions";

const DOMAIN =
    process.env.NODE_ENV === "production"
        ? "https://investor-wallet.herokuapp.com"
        : "http://localhost:8080";

const Views = ({ match: { url }, history }) => {
    const dispatch = useDispatch();

    const {
        authUser: { user },
    } = useStore().getState();

    const logout = async () => {
        try {
            await fetch(`${DOMAIN}/signout`, {
                method: "get",
                headers: {
                    "content-type": "application/json",
                    "Access-Control-Allow-Origin": true,
                    "Access-Control-Allow-Credentials": true,
                },
                credentials: "include",
            });

            localStorage.setItem("investorWalletUser", "");

            dispatch({
                type: LOGOUT_USER,
                payload: { user: "" },
            });

            history.push("/");
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        if (user?.email) {
            logout();
        }
    });

    return <></>;
};

export default Views;
