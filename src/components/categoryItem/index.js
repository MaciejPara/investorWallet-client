import FavouriteComponent from "../favourite";
import { Link } from "react-router-dom";
import React from "react";

const CategoryItem = ({
    handleFavouriteChange,
    name,
    favourites,
    rate,
    category,
    dayChange = { difference: 0 },
    url,
}) => {
    return (
        <div className={"categoryItem row w-100 m-auto d-flex"}>
            <FavouriteComponent
                handleChange={handleFavouriteChange}
                name={name}
                state={favourites.indexOf(name) > -1}
            />
            <span className={"cell"}>{name}</span>
            {category && <span className={"cell"}>{category}</span>}
            <span className={"cell m-auto"}>{parseFloat(rate).toFixed(2)}</span>
            <span className={"cell actions"}>
                <Link to={`/app/details/${name}`}>
                    <i className="fas fa-info-circle" />
                </Link>
            </span>
            <div id="box" className="box-shadow" />
        </div>
    );
};

export default CategoryItem;
