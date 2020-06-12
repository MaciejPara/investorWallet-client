import React, { Suspense, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import "react-notifications-component/dist/theme.css";
import ReactNotification from "react-notifications-component";
import Loader from "./components/loader";
import { connect, useDispatch } from "react-redux";
import { SET_INIT, GET_USER_DATA } from "./redux/actions";

const ViewWelcome = React.lazy(() => import("./views"));
const ViewApp = React.lazy(() => import("./views/app"));
const ViewError = React.lazy(() => import("./views/error"));
const ViewLogin = React.lazy(() => import("./views/login"));
const ViewLogout = React.lazy(() => import("./views/logout"));
const ViewRegister = React.lazy(() => import("./views/register"));

const AuthRoute = ({ component: Component, authUser, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                authUser ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: `/login`,
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};

const App = (props) => {
    const { user, init } = props;

    const dispatch = useDispatch();

    useEffect(() => {
        if (init) {
            if (user.id) {
                dispatch({
                    type: GET_USER_DATA,
                    payload: {
                        url: `/users?filter=${JSON.stringify({
                            _id: user.id,
                        })}`,
                    },
                });
            }
            dispatch({
                type: SET_INIT,
                payload: false,
            });
        }
    }, [init, user]);

    return (
        <div className="App">
            <ReactNotification />
            <Suspense fallback={<Loader />}>
                <Router basename="/investorWallet-client">
                    <Switch>
                        <AuthRoute
                            path={`/app`}
                            authUser={user?.email}
                            component={ViewApp}
                        />
                        <Route
                            exact
                            path={`/login`}
                            render={(props) => <ViewLogin {...props} />}
                        />
                        <Route
                            path={`/logout`}
                            exact
                            render={(props) => <ViewLogout {...props} />}
                        />
                        <Route
                            path={`/register`}
                            exact
                            render={(props) => <ViewRegister {...props} />}
                        />
                        <Route
                            path={`/error`}
                            exact
                            render={(props) => <ViewError {...props} />}
                        />
                        <Route
                            path={`/`}
                            exact
                            render={(props) => <ViewWelcome {...props} />}
                        />
                        <Redirect to={`/error`} />
                    </Switch>
                </Router>
            </Suspense>
        </div>
    );
};

const mapStateToProps = ({ authUser }) => {
    const { user, init } = authUser;

    return { user, init };
};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(App);
