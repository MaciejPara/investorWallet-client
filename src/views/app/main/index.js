import React, { useState } from "react";
import { useDispatch, useStore, useSelector } from "react-redux";
import CategoryItem from "../../../components/categoryItem";
import {
    GET_CATEGORY_DATA,
    SET_INIT_FLAG,
    SET_USER_FAVOURITES,
    LOADER,
} from "../../../redux/actions";

const MainAppView = ({ match: { url } }) => {
    const {
        authUser: {
            user: { favourites: userFavourites },
        },
        settings: { userSettingsAdapter },
    } = useStore().getState();

    const dispatch = useDispatch();

    const [favourites, setFavourites] = useState(userFavourites);
    const [favouritesRates, setFavouritesRates] = useState([]);
    const [nameFilter, setNameFilter] = useState("");

    useSelector(({ collections, settings: { base } }) => {
        const foundRates = [];

        collections.categories.forEach((item) => {
            favourites.forEach((el) => {
                const found = collections[item]?.data?.find(
                    ({ name }) => name === el
                );

                if (found) {
                    foundRates.push(found);
                }
            });
        });

        if (
            favourites.length > 0 &&
            favourites.length !== foundRates.length &&
            !collections.initFlag
        ) {
            dispatch({
                type: SET_INIT_FLAG,
            });

            collections.categories.forEach((item) => {
                const model = collections[item]?.model;

                dispatch({
                    type: GET_CATEGORY_DATA,
                    payload: {
                        url: model.getAllUrl(base),
                        category: model.getCategoryName(),
                    },
                });
            });
        }

        if (JSON.stringify(foundRates) !== JSON.stringify(favouritesRates)) {
            setFavouritesRates(foundRates);
        }
    });

    const handleFavouriteChange = async ({
        currentTarget: {
            dataset: { value },
        },
    }) => {
        let newFavourites = favourites || [];

        dispatch({ type: LOADER });

        if (newFavourites && newFavourites.indexOf(value) > -1) {
            newFavourites = newFavourites.filter((item) => item !== value);
        } else newFavourites.push(value);

        const result = await userSettingsAdapter.changeFavourites(
            newFavourites
        );

        dispatch({ type: LOADER });
        if (result?.ok) {
            dispatch({ type: SET_USER_FAVOURITES, payload: newFavourites });
            setFavourites(newFavourites);
        }
    };

    return (
        <div>
            <div className={"contentContainer"}>
                <h4>Favourites:</h4>
                {favourites.length > 0 ? (
                    <div className={"tableContainer"}>
                        <div
                            className={
                                "tableHeaderContainer row w-100 m-auto d-flex"
                            }
                        >
                            <span className={"tableHeader fixWidth"} />
                            <span className={"tableHeader"}>
                                {" "}
                                <input
                                    type="text"
                                    placeholder={"Name 🔍"}
                                    value={nameFilter}
                                    onChange={({ currentTarget: { value } }) =>
                                        setNameFilter(value.toLowerCase())
                                    }
                                />
                            </span>
                            <span className={"tableHeader m-auto"}>
                                Last Price
                            </span>
                            <span className={"tableHeader m-auto"}>24h</span>
                            <span className={"tableHeader fixWidth"} />
                        </div>
                        <div className={"d-flex w-100 m-auto flex-column"}>
                            {favouritesRates
                                .filter(({ name }) =>
                                    name.toLowerCase().includes(nameFilter)
                                )
                                .map(({ name: item, rate, category }, key) => (
                                    <CategoryItem
                                        key={key}
                                        name={item}
                                        category={category}
                                        rate={rate}
                                        url={url}
                                        favourites={favourites}
                                        handleFavouriteChange={
                                            handleFavouriteChange
                                        }
                                    />
                                ))}
                        </div>
                    </div>
                ) : (
                    <p>No results...</p>
                )}
            </div>
        </div>
    );
};

export default MainAppView;
