import FavouriteComponent from "../favourite";
import { Link } from "react-router-dom";
import React from "react";

const CategoryItem = ({
    handleFavouriteChange,
    name,
    favourites,
    rate,
    dayChange = { difference: 0 },
    url,
}) => {
    const differenceCSSClass = () => {
        const { difference } = dayChange || {};
        let result = "";

        if (difference === 0) {
            result = "equal";
        } else if (difference > 0) {
            result = "plus";
        } else {
            result = "minus";
        }

        return result;
    };

    return (
        <div className={"row w-100 m-auto d-flex"}>
            <FavouriteComponent
                handleChange={handleFavouriteChange}
                name={name}
                state={favourites.indexOf(name) > -1}
            />
            <span className={"cell"}>{name}</span>
            <span className={"cell m-auto"}>
                {parseFloat(1 / rate).toFixed(2)}
            </span>
            <span className={`cell m-auto ${differenceCSSClass()}`}>
                {dayChange.difference &&
                    `${dayChange.difference}(${dayChange.differenceInPercent})`}
            </span>
            <span className={"cell"}>
                <Link to={`${url}`}>
                    <i className="fas fa-ellipsis-h" />
                </Link>
            </span>
        </div>
    );
};

export default CategoryItem;
