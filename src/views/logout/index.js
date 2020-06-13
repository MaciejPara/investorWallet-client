import React, { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { LOADER, LOGOUT_USER } from "../../redux/actions";
import FetchClient from "../../utils/FetchClient";
import { store } from "react-notifications-component";

const Views = ({ match: { url }, history }) => {
    const dispatch = useDispatch();

    const {
        authUser: { user },
    } = useStore().getState();

    const logout = async () => {
        try {
            dispatch({ type: LOADER });

            const result = await FetchClient.get({
                url: "/signout",
            });

            dispatch({ type: LOADER });
            if (result?.status === 200) {
                localStorage.setItem("investorWalletUser", "");

                dispatch({
                    type: LOGOUT_USER,
                    payload: { user: "" },
                });

                history.push("/");
            } else {
                console.error(">>> logout :: ", result);

                store.addNotification({
                    title: "Failure",
                    message: "Logout failed",
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
            }
        } catch (e) {
            dispatch({ type: LOADER });
            console.error(e);
        }
    };

    useEffect(() => {
        if (user?.email) {
            logout();
        }
    }, []);

    return <></>;
};

export default Views;
