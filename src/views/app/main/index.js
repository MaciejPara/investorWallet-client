import React from "react";
import { useStore } from "react-redux";

const MainAppView = ({ match: { url } }) => {
    const {
        authUser: {
            user: { favourites },
        },
    } = useStore().getState();

    return (
        <div>
            <h4>Favourites:</h4>
            {favourites.map((item, key) => (
                <p key={key}>{item}</p>
            ))}
        </div>
    );
};

export default MainAppView;
