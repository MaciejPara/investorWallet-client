import React, { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import FavouriteComponent from "../../components/favourite";
import { useStore, useDispatch } from "react-redux";
import { SET_USER_FAVOURITES } from "../../redux/actions";

const Content = ({ data = [], match: { url } }) => {
    const {
        authUser: {
            user: { favourites: userFavourites },
        },
        settings: { userSettingsAdapter },
    } = useStore().getState();

    const dispatch = useDispatch();

    const [favourites, setFavourites] = useState(userFavourites);

    const handleFavouriteChange = async ({
        currentTarget: {
            dataset: { value },
        },
    }) => {
        let newFavourites = favourites || [];

        if (newFavourites && newFavourites.indexOf(value) > -1) {
            newFavourites = newFavourites.filter((item) => item !== value);
        } else newFavourites.push(value);

        const result = await userSettingsAdapter.changeFavourites(
            newFavourites
        );

        if (result?.ok) {
            dispatch({ type: SET_USER_FAVOURITES, payload: newFavourites });
            setFavourites(newFavourites);
        }
    };

    return (
        <div className={"contentContainer"}>
            <div className={"row w-100 m-auto d-flex"}>
                <span className={"tableHeader"} />
                <span className={"tableHeader"}>Name</span>
                <span className={"tableHeader m-auto"}>Last Price</span>
                <span className={"tableHeader"} />
            </div>
            <div className={"d-flex w-100 m-auto flex-column"}>
                {data.map(({ name, rate }, key) => (
                    <div key={key} className={"row w-100 m-auto d-flex"}>
                        <FavouriteComponent
                            handleChange={handleFavouriteChange}
                            name={name}
                            state={favourites.indexOf(name) > -1}
                        />
                        <span className={"cell"}>{name}</span>
                        <span className={"cell m-auto"}>{rate}</span>
                        <span className={"cell"}>
                            <Link to={`${url}`}>
                                <i className="fas fa-ellipsis-h" />
                            </Link>
                        </span>
                    </div>
                ))}
            </div>
            {/*{data.map(({ name, rate }, key) => (*/}
            {/*<p key={key}>*/}
            {/*{base} {moment.utc(createdAt).format("YYYY-MM-DD HH:mm:ss")}{" "}*/}
            {/*{moment.utc(date).format("YYYY-MM-DD HH:mm:ss")}*/}
            {/*<Link to={`${url}/${_id}`}>details</Link>*/}
            {/*</p>*/}
            {/*))}*/}
        </div>
    );
};

export default Content;