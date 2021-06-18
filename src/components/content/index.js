import React, { useState } from "react";
import { useStore, useDispatch } from "react-redux";
import { SET_USER_FAVOURITES, LOADER } from "../../redux/actions";
import CategoryItem from "../../components/categoryItem";
import moment from "moment";

const Content = ({ updateDate, data = [], match: { url } }) => {
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

        dispatch({ type: LOADER });

        const result = await userSettingsAdapter.changeFavourites(
            newFavourites
        );

        dispatch({ type: LOADER });

        if (result?.ok) {
            dispatch({ type: SET_USER_FAVOURITES, payload: newFavourites });
            setFavourites(newFavourites);
        }
    };

    const date = moment(updateDate).format("DD.MM.YYYY - HH:mm:ss");

    return (
        <div className={"contentContainer"}>
            <h4>Updated: {date}</h4>
            <div className={"row w-100 m-auto d-flex"}>
                <span className={"tableHeader"} />
                <span className={"tableHeader"}>Name</span>
                <span className={"tableHeader m-auto"}>Price</span>
                <span className={"tableHeader m-auto"}>24h</span>
                <span className={"tableHeader"} />
            </div>
            <div className={"d-flex w-100 m-auto flex-column"}>
                {data.map(({ name, rate }, key) => (
                    <CategoryItem
                        key={key}
                        name={name}
                        rate={rate}
                        dayChange={{
                            difference: -0.05,
                            differenceInPercent: "-0.5%",
                        }}
                        url={url}
                        favourites={favourites}
                        handleFavouriteChange={handleFavouriteChange}
                    />
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
