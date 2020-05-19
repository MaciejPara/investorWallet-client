import React from "react";

const CryptoView = ({ match: { url } }) => {
    return (
        <div>
            <h1>{url}</h1>
        </div>
    );
};

export default CryptoView;
