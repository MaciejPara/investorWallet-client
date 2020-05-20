import React, { Suspense } from "react";
import { useStore } from "react-redux";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import Loader from "../../components/loader";
import Navbar from "../../components/navbar";

const MainAppView = React.lazy(() => import("./main"));
const CurrenciesView = React.lazy(() => import("./currencies"));
const CryptoView = React.lazy(() => import("./crypto"));
const MetalsView = React.lazy(() => import("./metals"));

const TestComponent = (props) => {
    return <div>some data here</div>;
};

const Views = (props) => {
    const {
        match: { url },
    } = props;

    const {
        authUser: { user },
    } = useStore().getState();

    return (
        // @todo optimize routing and clean components
        <div className={"views"}>
            <Navbar {...props} />

            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route
                        exact
                        path={`${url}/`}
                        render={(props) => <MainAppView {...props} />}
                    />
                    <Route
                        exact
                        path={`${url}/currencies`}
                        render={(props) => <CurrenciesView {...props} />}
                    />
                    <Route
                        exact
                        path={`${url}/crypto`}
                        render={(props) => <CryptoView {...props} />}
                    />
                    <Route
                        exact
                        path={`${url}/metals`}
                        render={(props) => <MetalsView {...props} />}
                    />
                    <Route
                        exact
                        path={`${url}/currencies/:id`}
                        render={(props) => <TestComponent {...props} />}
                    />
                    <Redirect to="/error" />
                </Switch>
            </Suspense>
        </div>
    );
};

export default Views;
