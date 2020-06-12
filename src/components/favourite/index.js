import React from "react";

const Favourite = ({ handleChange, name, state = false }) => {
    return (
        <span className={"cell"} data-value={name} onClick={handleChange}>
            {state ? (
                <i className="fas fa-star favourite active" />
            ) : (
                <i className="far fa-star favourite" />
            )}
        </span>
    );
};

export default Favourite;
