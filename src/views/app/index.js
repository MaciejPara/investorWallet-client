import React, { Suspense } from "react";
import { useStore } from "react-redux";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import Loader from "../../components/loader";

const MainAppView = React.lazy(() => import("./main"));
const CurrenciesView = React.lazy(() => import("./currencies"));
const CryptoView = React.lazy(() => import("./crypto"));
const MetalsView = React.lazy(() => import("./metals"));

const Views = ({ match: { url } }) => {
    const {
        authUser: { user },
    } = useStore().getState();

    return (
        <div className={"views"}>
            <nav className={"navigation"}>
                <NavLink to={`${url}`} className={"ml-auto"}>
                    Home
                </NavLink>
                <NavLink to={`${url}/currencies`} className={"m-0"}>
                    Currencies
                </NavLink>
                <NavLink to={`${url}/crypto`} className={"m-0"}>
                    Crypto
                </NavLink>
                <NavLink to={`${url}/metals`} className={"mr-auto"}>
                    Metals
                </NavLink>
                <div className={"logoutContainer"}>
                    <NavLink to={`/logout`}>
                        <i className="fas fa-sign-out-alt" />
                    </NavLink>
                </div>
            </nav>

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
                    <Redirect to="/error" />
                </Switch>
            </Suspense>
        </div>
    );
};

export default Views;
