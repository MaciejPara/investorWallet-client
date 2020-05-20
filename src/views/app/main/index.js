import React from "react";
import { useStore } from "react-redux";

const MainAppView = ({ match: { url } }) => {
    return (
        <div>
            <h1>{url}</h1>
        </div>
    );
};

export default MainAppView;
