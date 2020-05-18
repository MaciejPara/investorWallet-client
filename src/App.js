import React, { Suspense, useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import Loader from "./components/loader";
import { useStore, useSelector } from "react-redux";

const ViewWelcome = React.lazy(() => import("./views"));
const ViewApp = React.lazy(() => import("./views/app"));
const ViewError = React.lazy(() => import("./views/error"));
const ViewLogin = React.lazy(() => import("./views/login"));
const ViewLogout = React.lazy(() => import("./views/logout"));
const ViewRegister = React.lazy(() => import("./views/register"));

const AuthRoute = ({ component: Component, authUser, basePath, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                authUser ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: `${basePath}/login`,
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};

const App = () => {
    const store = useStore().getState();
    const { basePath } = store.authUser;
    const [state, setState] = useState();

    useSelector(({ authUser: { user } }) => {
        if (user && !state?.user) setState({ user });
    });

    return (
        <div className="App">
            <Suspense fallback={<Loader />}>
                <Router>
                    <Switch>
                        <AuthRoute
                            path={`${basePath}/app`}
                            authUser={state?.user}
                            component={ViewApp}
                            basePath={basePath}
                        />

                        <Route
                            path={`${basePath}/`}
                            exact
                            render={(props) => <ViewWelcome {...props} />}
                        />
                        <Route
                            path={`${basePath}/login`}
                            exact
                            render={(props) => <ViewLogin {...props} />}
                        />
                        <Route
                            path={`${basePath}/logout`}
                            exact
                            render={(props) => <ViewLogout {...props} />}
                        />
                        <Route
                            path={`${basePath}/register`}
                            exact
                            render={(props) => <ViewRegister {...props} />}
                        />
                        <Route
                            path={`${basePath}/error`}
                            exact
                            render={(props) => <ViewError {...props} />}
                        />
                        <Redirect to={`${basePath}/error`} />
                    </Switch>
                </Router>
            </Suspense>
        </div>
    );
};

export default App;
