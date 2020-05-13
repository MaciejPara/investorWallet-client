import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loader from "../../components/loader";

const Views = ({ match: { url } }) => {
    return (
        <Suspense fallback={<Loader />}>
            <Switch>
                <Redirect exact from={`${url}/`} to={`${url}`} />
                {/*<Route*/}
                {/*path={`${url}/collections`}*/}
                {/*render={(props) => <Collections {...props} />}*/}
                {/*/>*/}
                <Redirect to="/error" />
            </Switch>
        </Suspense>
    );
};

export default Views;
