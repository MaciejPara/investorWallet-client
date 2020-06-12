import React, { Suspense, useState } from "react";
import { useStore, useDispatch } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Loader from "../../components/loader";
import Navbar from "../../components/navbar";

import CustomSelect from "../../components/customSelect";
import { GET_CATEGORY_DATA } from "../../redux/collections/actions";
import { SET_SETTINGS } from "../../redux/settings/actions";
import { LOADER } from "../../redux/actions";

const MainAppView = React.lazy(() => import("./main"));
const CategoryComponent = React.lazy(() => import("./category"));

const Views = (props) => {
    const {
        match: { url },
    } = props;

    const dispatch = useDispatch();
    const { collections, settings } = useStore().getState();
    const [baseState, setBaseState] = useState(settings.base);

    const handleBaseChange = async ({ value }) => {
        if (value !== baseState) {
            dispatch({ type: LOADER });
            const result = await settings.userSettingsAdapter.changeBase(value);
            if (result?.ok) {
                collections.categories.forEach((item) => {
                    const model = collections[item]?.model;

                    dispatch({
                        type: GET_CATEGORY_DATA,
                        payload: {
                            url: model.getAllUrl(value),
                            category: model.getCategoryName(),
                        },
                    });
                });
                dispatch({
                    type: SET_SETTINGS,
                    payload: { base: value },
                });
                setBaseState(value);
                dispatch({ type: LOADER });
            }
        }
    };

    return (
        <div className={"views"}>
            <Navbar {...props} />
            <div className={"userSettingsFooter"}>
                <span>
                    base:
                    <CustomSelect
                        menuPlacement={"top"}
                        defaultValue={settings.baseOptions.find(
                            ({ value }) => value === baseState
                        )}
                        options={settings.baseOptions}
                        handleChange={handleBaseChange}
                    />
                </span>
            </div>

            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route
                        exact
                        path={`${url}/`}
                        render={(props) => <MainAppView {...props} />}
                    />
                    {collections?.categories.map((item, key) => (
                        <Route
                            key={key}
                            exact
                            path={`${url}/${item}`}
                            render={(props) => (
                                <CategoryComponent
                                    {...props}
                                    model={collections[item]?.model}
                                />
                            )}
                        />
                    ))}
                    <Redirect to="/error" />
                </Switch>
            </Suspense>
        </div>
    );
};

export default Views;
