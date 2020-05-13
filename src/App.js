import React, { Suspense } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import Loader from "./components/loader";
import { useStore } from "react-redux";

const ViewMain = React.lazy(() => import("./views"));
const ViewApp = React.lazy(() => import("./views/app"));
const ViewError = React.lazy(() => import("./views/error"));
const ViewLogin = React.lazy(() => import("./views/login"));
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

const App = (props) => {
    const { loginUser } = props;

    const store = useStore().getState();
    const { basePath } = store.authUser;

    console.log(">>> ", basePath);

    return (
        <div className="App">
            <Suspense fallback={<Loader />}>
                <Router>
                    <Switch>
                        <AuthRoute
                            path={`${basePath}/app`}
                            authUser={loginUser}
                            component={ViewApp}
                            basePath={basePath}
                        />

                        <Route
                            path={`${basePath}/`}
                            exact
                            render={(props) => <ViewMain {...props} />}
                        />
                        <Route
                            path={`${basePath}/login`}
                            exact
                            render={(props) => <ViewLogin {...props} />}
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
