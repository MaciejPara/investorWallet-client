import FavouriteComponent from "../favourite";
import { Link } from "react-router-dom";
import React from "react";

const CategoryItem = ({
    handleFavouriteChange,
    name,
    favourites,
    rate,
    url,
}) => {
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
            <span className={"cell"}>
                <Link to={`${url}`}>
                    <i className="fas fa-ellipsis-h" />
                </Link>
            </span>
        </div>
    );
};

export default CategoryItem;
