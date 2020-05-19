import React from "react";

const MainAppView = ({ match: { url } }) => {
    return (
        <div>
            <h1>{url}</h1>
        </div>
    );
};

export default MainAppView;
