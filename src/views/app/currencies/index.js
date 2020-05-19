import React from "react";

const CurrenciesView = ({ match: { url } }) => {
    return (
        <div>
            <h1>{url}</h1>
        </div>
    );
};

export default CurrenciesView;
