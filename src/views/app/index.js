import React, { Suspense } from "react";
import { useStore } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Loader from "../../components/loader";
import Navbar from "../../components/navbar";

const MainAppView = React.lazy(() => import("./main"));
const CategoryComponent = React.lazy(() => import("./category"));

const Views = (props) => {
    const {
        match: { url },
    } = props;

    const {
        authUser: { user },
        collections,
    } = useStore().getState();

    return (
        <div className={"views"}>
            <Navbar {...props} />
            <div className={"userSettingsFooter"}>
                <span>base: PLN</span>
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
